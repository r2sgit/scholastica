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
  scholastica_m0_progress: 1,
  scholastica_m5_progress: 6,
  scholastica_m12_progress: 13,
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
  /* ── Gamification fields (G-session). All optional-with-default for
     migration safety: readStorage() merges over getDefault(), so a
     returning learner who has none of these never loses progress. ── */
  sineErrore: Record<number, boolean[]>;   // moduleId -> per-lesson gold marks, sticky once earned
  thesesEarned: number[];                  // thesis n's whose unlock ceremony has PLAYED (ceremony-once guard)
  habitus: { days: string[] };             // ISO dates (YYYY-MM-DD, local) on which >=1 lesson completed; append-only, dedup'd, capped
  /* ── Schema version (Great Renumber, P1). Absent or < 2 means module ids
     are still 0-indexed on disk and need the +1 shift below. ── */
  schemaVersion?: number;
}

const CURRENT_SCHEMA_VERSION = 2;
const HABITUS_CAP = 400;

function getDefault(): StorageSchema {
  return {
    introSeen: false,
    progress: {},
    prefs: { muted: false, latinDensity: 'balanced' },
    sineErrore: {},
    thesesEarned: [],
    habitus: { days: [] },
    schemaVersion: CURRENT_SCHEMA_VERSION,
  };
}

/** Shift the numeric keys of a Record<number, T> by +1. Used only for the
    one-time module-renumbering migration (0-indexed -> 1-indexed). Non-numeric
    or malformed keys are dropped defensively (there should be none). */
function shiftKeys<T>(rec: Record<number, T>): Record<number, T> {
  const out: Record<number, T> = {};
  for (const key of Object.keys(rec)) {
    const n = Number(key);
    if (!Number.isFinite(n)) continue;
    out[n + 1] = rec[n as unknown as keyof typeof rec];
  }
  return out;
}

/** One-time migration: modules were renumbered from 0-indexed (M0..M17) to
    1-indexed (Module 1..18). Any stored data below schemaVersion 2 has its
    progress/sineErrore keys shifted by +1 to match. thesesEarned, habitus,
    prefs, and introSeen are untouched — theses are numbered independently
    of modules and never shifted. */
function migrateSchemaV2(data: StorageSchema): StorageSchema {
  if ((data.schemaVersion ?? 1) >= CURRENT_SCHEMA_VERSION) return data;
  return {
    ...data,
    progress: shiftKeys(data.progress || {}),
    sineErrore: shiftKeys(data.sineErrore || {}),
    schemaVersion: CURRENT_SCHEMA_VERSION,
  };
}

/** Local-time ISO date (YYYY-MM-DD), not UTC: the habit follows the
    learner's own calendar day. */
export function localISODate(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function readStorage(): StorageSchema {
  if (typeof window === 'undefined') return getDefault();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Determine the on-disk schema version BEFORE merging over getDefault():
      // getDefault() stamps the current version, and merging first would mask
      // legacy (versionless) data as already migrated.
      const storedVersion = parsed.schemaVersion ?? 1;
      const merged: StorageSchema = { ...getDefault(), ...parsed };
      if (storedVersion < CURRENT_SCHEMA_VERSION) {
        const migrated = migrateSchemaV2({ ...merged, schemaVersion: storedVersion });
        writeStorage(migrated);
        return migrated;
      }
      return merged;
    }
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

    // Sine Errore mark: a perfect first pass earns the gold mark. Sticky —
    // a later imperfect retake never unsets it (precision was demonstrated,
    // the trace persists). §20.4 / G1.
    if (score.missedIds.length === 0 && score.correct === score.total) {
      const marks = { ...(next.sineErrore || {}) };
      const lessonMarks = [...(marks[moduleId] || [])];
      lessonMarks[lessonIdx] = true;
      marks[moduleId] = lessonMarks;
      next.sineErrore = marks;
    }

    // Habitus: record today (local date) as a day of practice. Append-only,
    // dedup'd, capped. Feeds the Habitus Meter (§20.6 / G4); renders nothing
    // until that vine ships.
    const today = localISODate();
    const days = next.habitus?.days || [];
    if (!days.includes(today)) {
      const appended = [...days, today];
      next.habitus = { days: appended.length > HABITUS_CAP ? appended.slice(-HABITUS_CAP) : appended };
    } else {
      next.habitus = { days };
    }

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

  /** Mark a thesis's unlock ceremony as having played (ceremony-once guard).
      Accepts multiple n's at once; dedup'd. G2. */
  const markThesesCeremonyPlayed = useCallback((ns: number[]) => {
    const have = new Set(data.thesesEarned || []);
    const merged = [...have];
    let changed = false;
    for (const n of ns) if (!have.has(n)) { merged.push(n); changed = true; }
    if (changed) save({ ...data, thesesEarned: merged.sort((a, b) => a - b) });
  }, [data, save]);

  return {
    data,
    save,
    getModuleProgress,
    markLessonComplete,
    markThesesCeremonyPlayed,
    isIntroSeen,
    setIntroSeen,
    prefs,
    setPrefs,
  };
}

/* ── Standalone helpers (no hook needed) ─────────────────── */

/** Read the full unified schema, migrations applied, defaults merged.
    For pages that derive rank / earned theses outside the hook. */
export function readProgress(): StorageSchema {
  return readStorage();
}

/** Record thesis ceremonies as played (ceremony-once guard), reading and
    writing localStorage directly. Idempotent. Standalone (not via the hook)
    so the Theses Board can record reliably from a mount effect without
    stale-closure or effect-cleanup hazards. */
export function recordThesesCeremonyPlayed(ns: number[]): void {
  if (typeof window === 'undefined') return;
  const data = readStorage();
  const have = new Set(data.thesesEarned || []);
  let changed = false;
  for (const n of ns) if (!have.has(n)) { have.add(n); changed = true; }
  if (changed) writeStorage({ ...data, thesesEarned: [...have].sort((a, b) => a - b) });
}

export function getMuted(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    return JSON.parse(raw).prefs?.muted === true;
  } catch { return false; }
}
