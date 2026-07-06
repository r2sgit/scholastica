'use client';

import { useState, useEffect, useCallback } from 'react';

// Deliberately separate storage key from lib/progress.ts's `scholastica_v1`.
// The Theology wing is its own course with its own progress; a returning
// Philosophy learner's saved state must never be touched by anything here,
// and vice versa. Simplified schema on purpose: no gamification fields
// (theses/sine-errore/habitus) yet, since those are Philosophy-specific
// mechanics with nothing theological to attach to until more Theologia
// modules exist. Add fields here only when a real theology-side mechanic
// (e.g. a Credo board) is actually built, not preemptively.
const STORAGE_KEY = 'scholastica_theologia_v1';

export interface ScoreEntryT {
  correct: number;
  total: number;
  missedIds: string[];
}

export interface ModuleProgressT {
  lessonsComplete: boolean[];
  scores: Array<ScoreEntryT | null>;
}

export interface TheologiaStorageSchema {
  progress: Record<number, ModuleProgressT>;
}

function getDefault(): TheologiaStorageSchema {
  return { progress: {} };
}

function readStorage(): TheologiaStorageSchema {
  if (typeof window === 'undefined') return getDefault();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...getDefault(), ...JSON.parse(raw) };
  } catch { /* fall through */ }
  return getDefault();
}

function writeStorage(data: TheologiaStorageSchema): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useTheologiaProgress() {
  const [data, setData] = useState<TheologiaStorageSchema>(getDefault);

  useEffect(() => {
    setData(readStorage());
  }, []);

  const save = useCallback((next: TheologiaStorageSchema) => {
    setData(next);
    writeStorage(next);
  }, []);

  const getModuleProgress = useCallback((moduleId: number): ModuleProgressT | undefined => {
    return data.progress[moduleId];
  }, [data]);

  const markLessonComplete = useCallback((
    moduleId: number,
    lessonIdx: number,
    score: ScoreEntryT
  ) => {
    const next = { ...data, progress: { ...data.progress } };
    if (!next.progress[moduleId]) {
      next.progress[moduleId] = { lessonsComplete: [], scores: [] };
    }
    const mp = { ...next.progress[moduleId] };
    mp.lessonsComplete = [...mp.lessonsComplete];
    mp.scores = [...mp.scores];
    mp.lessonsComplete[lessonIdx] = true;
    mp.scores[lessonIdx] = score;
    next.progress[moduleId] = mp;
    save(next);
  }, [data, save]);

  return { data, getModuleProgress, markLessonComplete };
}

export function readTheologiaProgress(): TheologiaStorageSchema {
  return readStorage();
}

/** Which wing the learner was last in ('philosophia' | 'theologia'),
    shared, tiny, single string key so bare /modules or a bare wordmark
    click can resolve to the right wing. Separate from both course
    schemas above on purpose (it's UI navigation state, not progress). */
const WING_KEY = 'scholastica_active_wing';

export function getActiveWing(): 'philosophia' | 'theologia' {
  if (typeof window === 'undefined') return 'philosophia';
  try {
    const v = localStorage.getItem(WING_KEY);
    return v === 'theologia' ? 'theologia' : 'philosophia';
  } catch { return 'philosophia'; }
}

export function setActiveWing(wing: 'philosophia' | 'theologia'): void {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(WING_KEY, wing); } catch { /* noop */ }
}
