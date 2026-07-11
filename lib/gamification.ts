// lib/gamification.ts
// Pure derivation helpers over the unified StorageSchema. Every metric here
// measures the thing itself (modules finished, theses earned, exactness,
// stable disposition) per the Formal Object Rule — never a proxy. No XP, no
// points, no streaks-to-shatter live here or anywhere.

import type { StorageSchema } from './progress';
import { MODULES } from '../content/modules';
import { COURSE_MAP, ACTS } from '../content/courseMap';
import { habitusStrengthFromDays, currentStreak } from './habitus';
import type { FinDistinction } from '../content/types';

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

/* ── Score (W3-Score, scholastica-prelogin-scoring.md) ──────────────────
   Precision, not volume: points live on scores[lessonIdx].points (written
   at markLessonComplete time, see lib/score.ts for the award logic). These
   are pure sums over that already-decided state — never re-derive an
   award here. Philosophy only; Theology keeps its own separate total
   (fast-follow, §8) once progressTheologia tracks sineErrore. */

/** Course score: sum of points across every COURSE_MAP module's lessons.
    Restricting to COURSE_MAP (not a raw Object.values scan) matches
    getModulesComplete's own defensive convention above. */
export function getScore(data: StorageSchema): number {
  let total = 0;
  for (const entry of COURSE_MAP) {
    const mp = data.progress?.[entry.id];
    if (!mp?.scores) continue;
    for (const s of mp.scores) {
      if (s?.points) total += s.points;
    }
  }
  return total;
}

/** Finite ceiling: 10 * lessons across built modules only, so the ratio
    stays honest as unbuilt modules gain content. */
export function getScoreCeiling(): number {
  let total = 0;
  for (const entry of COURSE_MAP) {
    if (!entry.built) continue;
    const mod = MODULES.find(m => m.id === entry.id);
    if (mod) total += mod.lessons.length;
  }
  return total * 10;
}

/** Per-act score/ceiling breakdown for /record (handbook §20.2 act
    structure, read from COURSE_MAP/ACTS rather than a hardcoded id list). */
export function getActBreakdown(data: StorageSchema): { act: string; score: number; ceiling: number }[] {
  return ACTS.map(actMeta => {
    const entries = COURSE_MAP.filter(e => e.act === actMeta.act);
    let score = 0;
    let ceiling = 0;
    for (const entry of entries) {
      const mp = data.progress?.[entry.id];
      if (mp?.scores) {
        for (const s of mp.scores) if (s?.points) score += s.points;
      }
      if (entry.built) {
        const mod = MODULES.find(m => m.id === entry.id);
        if (mod) ceiling += mod.lessons.length * 10;
      }
    }
    return { act: actMeta.title, score, ceiling };
  });
}

/** Count of true marks across sineErrore — how many lessons carry the gold
    mark, course-wide. For /record; the module map counts per-module. */
export function getSineErroreTally(data: StorageSchema): number {
  let total = 0;
  for (const marks of Object.values(data.sineErrore || {})) {
    total += marks.filter(Boolean).length;
  }
  return total;
}

export interface CodexEntry {
  key: string;
  distinction: FinDistinction;
}

/** Every completed lesson's distinction card, deduped by Latin pair — a
    capstone recap deliberately re-presents its module's strongest
    distinction rather than teaching a new one (B3's own authoring rule),
    so the same pair can legitimately sit on two lessons; the earliest
    lesson in course order that earned it keeps the card. Shared by
    /vocabularium (renders the cards) and /record (just counts them) so
    the dedup rule lives in exactly one place. */
export function getCodexEntries(data: StorageSchema): CodexEntry[] {
  const out: CodexEntry[] = [];
  const seen = new Set<string>();
  for (const mod of MODULES) {
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

/* ── Habitus strength (§20.6 / G4) ──────────────────────────────────────
   The pure model lives in ./habitus (dependency-free, unit-tested). This is
   the schema-aware convenience wrapper. */
export { habitusStrengthFromDays } from './habitus';

/** Habitus strength (0..1) over the recorded practice days, as of todayISO. */
export function getHabitusStrength(data: StorageSchema, todayISO: string): number {
  return habitusStrengthFromDays(data.habitus?.days || [], todayISO);
}

/** Strict day streak for the HUD flame (redesign-v4, R2's call). Schema-aware
    wrapper over the pure currentStreak; reads the same habitus.days that
    markLessonComplete already appends to on every lesson complete. */
export function getStreak(data: StorageSchema, todayISO: string): number {
  return currentStreak(data.habitus?.days || [], todayISO);
}
