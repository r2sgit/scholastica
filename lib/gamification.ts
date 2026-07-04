// lib/gamification.ts
// Pure derivation helpers over the unified StorageSchema. Every metric here
// measures the thing itself (modules finished, theses earned, exactness,
// stable disposition) per the Formal Object Rule — never a proxy. No XP, no
// points, no streaks-to-shatter live here or anywhere.

import type { StorageSchema } from './progress';
import { MODULES } from '../content/modules';
import { COURSE_MAP } from '../content/courseMap';
import { habitusStrengthFromDays } from './habitus';

export type Rank = 'incipiens' | 'proficiens' | 'perfectus';

export interface ThesisGate {
  n: number;
  modules_teach: number[];
}

// Act I is module ids 1..5 (handbook §20.2).
const ACT_I_IDS = [1, 2, 3, 4, 5];
const TOTAL_MODULES = COURSE_MAP.length; // 18
const TOTAL_THESES = 24;

/** Module ids where every lesson is complete. Lesson count comes from the
    built module content; an unbuilt module can only count complete if a
    fixture supplies a non-empty all-true lessonsComplete array (used by the
    rank fixtures, never reached in normal play). */
export function getModulesComplete(data: StorageSchema): number[] {
  const out: number[] = [];
  for (const entry of COURSE_MAP) {
    const mp = data.progress?.[entry.id];
    if (!mp || !mp.lessonsComplete || mp.lessonsComplete.length === 0) continue;
    const mod = MODULES.find(m => m.id === entry.id);
    const count = mod ? mod.lessons.length : mp.lessonsComplete.length;
    if (count === 0) continue;
    let allDone = true;
    for (let i = 0; i < count; i++) {
      if (!mp.lessonsComplete[i]) { allDone = false; break; }
    }
    if (allDone) out.push(entry.id);
  }
  return out;
}

/** Thesis n's currently earned: a thesis is earned when ALL ids in its
    modules_teach are complete (§20.1). modules_touch never gates. This is
    the live "earned" set; the stored thesesEarned tracks only which
    ceremonies have already played. */
export function getThesesEarned(data: StorageSchema, theses: ThesisGate[]): number[] {
  const complete = new Set(getModulesComplete(data));
  return theses
    .filter(t => t.modules_teach.length > 0 && t.modules_teach.every(m => complete.has(m)))
    .map(t => t.n);
}

/** §20.2 ranks, from real state only — never points.
    - incipiens: default.
    - proficiens: Act I (ids 1–5) complete AND >= half of the theses whose
      ENTIRE modules_teach set lies within ids 1–5 are earned.
    - perfectus: all 18 modules complete AND all 24 theses earned. */
export function getRank(data: StorageSchema, theses: ThesisGate[]): Rank {
  const complete = new Set(getModulesComplete(data));
  const earned = new Set(getThesesEarned(data, theses));

  if (complete.size === TOTAL_MODULES && earned.size === TOTAL_THESES) {
    return 'perfectus';
  }

  const actIComplete = ACT_I_IDS.every(id => complete.has(id));
  if (actIComplete) {
    const actITheses = theses.filter(
      t => t.modules_teach.length > 0 && t.modules_teach.every(m => ACT_I_IDS.includes(m))
    );
    const actIEarned = actITheses.filter(t => earned.has(t.n));
    if (actITheses.length > 0 && actIEarned.length * 2 >= actITheses.length) {
      return 'proficiens';
    }
  }

  return 'incipiens';
}

/** Lessons remaining until a not-yet-earned thesis unlocks, but only when
    exactly one of its gating modules is incomplete AND that module has
    already been started — the "next domino" case worth tempting with a
    countdown. Two-plus incomplete gating modules, or an unstarted one,
    return null (B2 anticipation layer only tempts what's actually close). */
export function lessonsAwayForThesis(data: StorageSchema, thesis: ThesisGate): number | null {
  const complete = new Set(getModulesComplete(data));
  const incomplete = thesis.modules_teach.filter(id => !complete.has(id));
  if (incomplete.length !== 1) return null;
  const modId = incomplete[0];
  const mod = MODULES.find(m => m.id === modId);
  if (!mod) return null;
  const doneCount = data.progress?.[modId]?.lessonsComplete?.filter(Boolean).length || 0;
  if (doneCount === 0) return null;
  return mod.lessons.length - doneCount;
}

/** The single nearest unlock across all not-yet-earned theses, for the
    "Thesis N is one lesson away" line on fin screens and the module map
    (B2). null when nothing is currently in reach this way. */
export function getNearestUnlock(
  data: StorageSchema,
  theses: ThesisGate[],
): { n: number; lessonsAway: number } | null {
  const earned = new Set(getThesesEarned(data, theses));
  let best: { n: number; lessonsAway: number } | null = null;
  for (const t of theses) {
    if (earned.has(t.n)) continue;
    const away = lessonsAwayForThesis(data, t);
    if (away === null) continue;
    if (!best || away < best.lessonsAway) best = { n: t.n, lessonsAway: away };
  }
  return best;
}

/* ── Habitus strength (§20.6 / G4) ──────────────────────────────────────
   The pure model lives in ./habitus (dependency-free, unit-tested). This is
   the schema-aware convenience wrapper. */
export { habitusStrengthFromDays } from './habitus';

/** Habitus strength (0..1) over the recorded practice days, as of todayISO. */
export function getHabitusStrength(data: StorageSchema, todayISO: string): number {
  return habitusStrengthFromDays(data.habitus?.days || [], todayISO);
}
