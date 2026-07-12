'use client';

import { useState, useEffect, useCallback } from 'react';
import { computeScoreUpdate, type ScoreEvent } from './score';
import { localISODate, recordPracticeDay } from './progress';
import type { CodexEntry, Rank } from './gamification';
import { THEOLOGIA_MODULES } from '../content/theologia';
import { ORATORIUM } from '../content/theologia/oratorium';

// Deliberately separate storage key from lib/progress.ts's `scholastica_v1`.
// The Theology wing is its own course with its own progress and its own score
// total (never summed with Philosophy — prelogin-scoring §2 / postlogin §A4);
// a returning Philosophy learner's saved state must never be touched by
// anything here, and vice versa. Gamification fields added by the wing-parity
// run (WP1): points/lastRevisitDay on ScoreEntryT and a sineErrore map, both
// optional-with-default for migration safety. Habitus is deliberately NOT
// here: the streak is shared (one flame both wings), so theology completion
// writes the philosophy store's habitus.days (WP2), not a second copy.
const STORAGE_KEY = 'scholastica_theologia_v1';

export interface ScoreEntryT {
  correct: number;
  total: number;
  missedIds: string[];
  points?: number;          // accumulated best-ever score for this lesson; monotonic (WP1)
  lastRevisitDay?: string;  // local ISO date of last credited +1 revisit
}

export interface ModuleProgressT {
  lessonsComplete: boolean[];
  scores: Array<ScoreEntryT | null>;
}

export interface TheologiaStorageSchema {
  progress: Record<number, ModuleProgressT>;
  // moduleId -> per-lesson gold marks, sticky once earned (WP1, mirrors
  // philosophy). Optional-with-default so pre-existing theology progress
  // (which predates this field) loads unchanged.
  sineErrore: Record<number, boolean[]>;
}

function getDefault(): TheologiaStorageSchema {
  return { progress: {}, sineErrore: {} };
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
    // Write-time scoring (prelogin-scoring §3), identical to the philosophy
    // path (lib/progress.ts) and reusing the same pure algorithm — read prior
    // state BEFORE the overwrite so "first pass vs. revisit" and "gap closed
    // for the first time" survive.
    const prevMp = data.progress[moduleId];
    const wasComplete = prevMp?.lessonsComplete[lessonIdx] === true;
    const wasPerfect = data.sineErrore?.[moduleId]?.[lessonIdx] === true;
    const prevEntry = prevMp?.scores[lessonIdx] ?? null;
    const prevPoints = prevEntry?.points ?? 0;
    const isPerfectNow = score.missedIds.length === 0 && score.correct === score.total;
    const today = localISODate();
    const { points, lastRevisitDay, event, delta } = computeScoreUpdate({
      wasComplete,
      wasPerfect,
      prevPoints,
      prevRevisitDay: prevEntry?.lastRevisitDay,
      isPerfectNow,
      today,
    });

    const next = { ...data, progress: { ...data.progress } };
    if (!next.progress[moduleId]) {
      next.progress[moduleId] = { lessonsComplete: [], scores: [] };
    }
    const mp = { ...next.progress[moduleId] };
    mp.lessonsComplete = [...mp.lessonsComplete];
    mp.scores = [...mp.scores];
    mp.lessonsComplete[lessonIdx] = true;
    mp.scores[lessonIdx] = { ...score, points, lastRevisitDay };
    next.progress[moduleId] = mp;

    // Sine Errore mark: a perfect first pass earns the sticky gold mark; a
    // later imperfect retake never unsets it (§20.4 / G1). Mirrors philosophy.
    if (isPerfectNow) {
      const marks = { ...(next.sineErrore || {}) };
      const lessonMarks = [...(marks[moduleId] || [])];
      lessonMarks[lessonIdx] = true;
      marks[moduleId] = lessonMarks;
      next.sineErrore = marks;
    }

    save(next);

    // One habitus, both wings (WP2): a theology lesson marks the SHARED
    // practice day in scholastica_v1, so the streak flame counts theology and
    // philosophy days together. Written to the philosophy store on purpose —
    // there is no separate theology habitus.
    recordPracticeDay(today);

    return { event, delta, lessonPoints: points, courseTotal: getScoreTheologia(next) };
  }, [data, save]);

  return { data, getModuleProgress, markLessonComplete };
}

/* ── Theology score (WP1, mirrors lib/gamification.ts getScore/getScoreCeiling
   but over the theology schema and THEOLOGIA_MODULES). Never summed with the
   philosophy total — the two knowledges are not fungible (prelogin-scoring
   §2). Pure sums over already-decided points; never re-derive an award here. */

/** Theology course score: sum of points across every wired module's lessons. */
export function getScoreTheologia(data: TheologiaStorageSchema): number {
  let total = 0;
  for (const mod of THEOLOGIA_MODULES) {
    const mp = data.progress?.[mod.id];
    if (!mp?.scores) continue;
    for (const s of mp.scores) {
      if (s?.points) total += s.points;
    }
  }
  return total;
}

/** Finite theology ceiling: 10 × lessons across wired modules only, computed
    from THEOLOGIA_MODULES so it grows honestly as T6/T7/T15 ship. */
export function getScoreCeilingTheologia(): number {
  let lessons = 0;
  for (const mod of THEOLOGIA_MODULES) lessons += mod.lessons.length;
  return lessons * 10;
}

/** Theology codex (WP7): every completed theology lesson's distinction card,
    deduped by Latin pair, earliest keeps the card — mirrors gamification's
    getCodexEntries over the theology schema. Course-scoped: the theology
    Vocabularium shows these; philosophy's shows its own. */
export function getCodexEntriesTheologia(data: TheologiaStorageSchema): CodexEntry[] {
  const out: CodexEntry[] = [];
  const seen = new Set<string>();
  for (const mod of THEOLOGIA_MODULES) {
    const mp = data.progress?.[mod.id];
    mod.lessons.forEach((lesson, i) => {
      const d = lesson.fin.distinction;
      if (mp?.lessonsComplete?.[i] && d && !seen.has(d.latin)) {
        seen.add(d.latin);
        out.push({ key: lesson.id, distinction: d });
      }
    });
  }
  return out;
}

/** Theology module ids where every lesson is complete (WP8). Only wired
    modules have lessons to complete. */
export function getModulesCompleteTheologia(data: TheologiaStorageSchema): number[] {
  const out: number[] = [];
  for (const mod of THEOLOGIA_MODULES) {
    const mp = data.progress?.[mod.id];
    if (!mp?.lessonsComplete || mod.lessons.length === 0) continue;
    let all = true;
    for (let i = 0; i < mod.lessons.length; i++) {
      if (!mp.lessonsComplete[i]) { all = false; break; }
    }
    if (all) out.push(mod.id);
  }
  return out;
}

// The De Deo arc (spec §5): T1-T4 is theology's Act-I-equivalent threshold.
const DE_DEO_IDS = [1, 2, 3, 4];
const TOTAL_THEOLOGIA_MODULES = 15;

/** Theology rank arc (spec §5), from real state only — never points.
    - proficiens: T1-T4 (the De Deo arc) complete AND at least half the
      Oratorium pieces gated within T1-T4 earned.
    - perfectus: all 15 modules complete AND the full Oratorium earned
      (unreachable until T5-T7/T15 ship — correct and forward-compatible).
    - incipiens: default. */
export function getRankTheologia(data: TheologiaStorageSchema): Rank {
  const complete = new Set(getModulesCompleteTheologia(data));

  const allModules = complete.size === TOTAL_THEOLOGIA_MODULES;
  const fullOratorium = ORATORIUM.every(p => complete.has(p.gate));
  if (allModules && fullOratorium) return 'perfectus';

  const deDeoComplete = DE_DEO_IDS.every(id => complete.has(id));
  if (deDeoComplete) {
    const deDeoPieces = ORATORIUM.filter(p => DE_DEO_IDS.includes(p.gate));
    const earned = deDeoPieces.filter(p => complete.has(p.gate));
    if (deDeoPieces.length > 0 && earned.length * 2 >= deDeoPieces.length) {
      return 'proficiens';
    }
  }
  return 'incipiens';
}

export type { ScoreEvent };

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
