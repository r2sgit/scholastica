'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'scholastica_v1';

/* Legacy keys from single-module prototypes */
const LEGACY_KEYS = [
  'scholastica_m0_progress',
  'scholastica_m5_progress',
  'scholastica_m12_progress',
];
const LEGACY_MODULE_IDS: Record<string, number> = {
  scholastica_m0_progress: 0,
  scholastica_m5_progress: 5,
  scholastica_m12_progress: 12,
};

export interface ScoreEntry {
  correct: number;
  total: number;
  missedIds: string[];
}

export interface ModuleProgress {
  lessonsComplete: boolean[];
  scores: Array<ScoreEntry | null>;
}

export interface StorageSchema {
  introSeen: boolean;
  progress: Record<number, ModuleProgress>;
  prefs: {
    muted: boolean;
    latinDensity: 'ample' | 'balanced' | 'spare';
  };
}

function getDefault(): StorageSchema {
  return {
    introSeen: false,
    progress: {},
    prefs: { muted: false, latinDensity: 'balanced' },
  };
}

function readStorage(): StorageSchema {
  if (typeof window === 'undefined') return getDefault();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...getDefault(), ...JSON.parse(raw) };
  } catch { /* fall through */ }
  return getDefault();
}

function writeStorage(data: StorageSchema): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/** Migrate legacy per-module keys into unified schema. Runs once. */
function migrateLegacy(): void {
  if (typeof window === 'undefined') return;
  let migrated = false;
  const data = readStorage();

  for (const key of LEGACY_KEYS) {
    const raw = localStorage.getItem(key);
    if (!raw) continue;
    try {
      const legacy = JSON.parse(raw);
      const moduleId = LEGACY_MODULE_IDS[key];
      if (!data.progress[moduleId] && Array.isArray(legacy.lessonsComplete)) {
        data.progress[moduleId] = {
          lessonsComplete: legacy.lessonsComplete,
          scores: legacy.scores || legacy.lessonsComplete.map(() => null),
        };
        migrated = true;
      }
      localStorage.removeItem(key);
    } catch { /* skip corrupt keys */ }
  }

  if (migrated) writeStorage(data);
}

export function useProgress() {
  const [data, setData] = useState<StorageSchema>(getDefault);

  useEffect(() => {
    migrateLegacy();
    setData(readStorage());
  }, []);

  const save = useCallback((next: StorageSchema) => {
    setData(next);
    writeStorage(next);
  }, []);

  const getModuleProgress = useCallback((moduleId: number): ModuleProgress | undefined => {
    return data.progress[moduleId];
  }, [data]);

  const markLessonComplete = useCallback((
    moduleId: number,
    lessonIdx: number,
    score: ScoreEntry
  ) => {
    const next = { ...data, progress: { ...data.progress } };
    if (!next.progress[moduleId]) {
      next.progress[moduleId] = {
        lessonsComplete: [],
        scores: [],
      };
    }
    const mp = { ...next.progress[moduleId] };
    mp.lessonsComplete = [...mp.lessonsComplete];
    mp.scores = [...mp.scores];
    mp.lessonsComplete[lessonIdx] = true;
    mp.scores[lessonIdx] = score;
    next.progress[moduleId] = mp;
    save(next);
  }, [data, save]);

  const isIntroSeen = useCallback((): boolean => {
    return data.introSeen;
  }, [data]);

  const setIntroSeen = useCallback(() => {
    save({ ...data, introSeen: true });
  }, [data, save]);

  const prefs = data.prefs;

  const setPrefs = useCallback((update: Partial<StorageSchema['prefs']>) => {
    save({ ...data, prefs: { ...data.prefs, ...update } });
  }, [data, save]);

  return {
    getModuleProgress,
    markLessonComplete,
    isIntroSeen,
    setIntroSeen,
    prefs,
    setPrefs,
  };
}

/* ── Standalone helpers (no hook needed) ─────────────────── */

export function getMuted(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    return JSON.parse(raw).prefs?.muted === true;
  } catch { return false; }
}
