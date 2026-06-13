// lib/gamification.ts
// Pure derivation helpers over the unified StorageSchema. Every metric here
// measures the thing itself (modules finished, theses earned, exactness,
// stable disposition) per the Formal Object Rule — never a proxy. No XP, no
// points, no streaks-to-shatter live here or anywhere.

import type { StorageSchema } from './progress';
import { MODULES } from '../content/modules';
import { COURSE_MAP } from '../content/courseMap';

export type Rank = 'incipiens' | 'proficiens' | 'perfectus';

export interface ThesisGate {
  n: number;
  modules_teach: number[];
}

// Act I is module ids 0..4 (handbook §20.2).
const ACT_I_IDS = [0, 1, 2, 3, 4];
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
    - proficiens: Act I (ids 0–4) complete AND >= half of the theses whose
      ENTIRE modules_teach set lies within ids 0–4 are earned.
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

/* ── Habitus strength (§20.6 / G4) ──────────────────────────────────────
   A habit, not a chain (ST I-II q.53): it grows with practice and weakens
   GRADUALLY through disuse. It never resets to zero from a miss. There is no
   mechanism anywhere that zeroes it.

   Model (pure, deterministic, unit-tested in G4):
   - Walk the calendar from the first practice day to `today`.
   - On a practice day: strength grows toward 1 by a diminishing step.
   - Idle days are forgiven for a grace window; only after 3 CONSECUTIVE idle
     days does gentle decay begin, at a fixed step per further idle day.
   - Floor: once strength has ever reached 0.5, it never falls below 0.15.
   Returns 0..1. */

const GROWTH = 0.12;        // approach-to-1 step on a practice day
const DECAY = 0.04;         // per idle day, once decay has begun
const GRACE_DAYS = 3;       // consecutive idle days forgiven before decay
const FLOOR_TRIGGER = 0.5;  // once reached, strength never drops below FLOOR
const FLOOR = 0.15;

function daysBetween(aISO: string, bISO: string): number {
  // Whole calendar days from aISO to bISO (UTC math on the date parts only,
  // so DST never shifts the count).
  const a = Date.parse(aISO + 'T00:00:00Z');
  const b = Date.parse(bISO + 'T00:00:00Z');
  return Math.round((b - a) / 86_400_000);
}

export function habitusStrengthFromDays(days: string[], todayISO: string): number {
  if (!days || days.length === 0) return 0;
  const practice = Array.from(new Set(days)).sort();

  let strength = 0;
  let everHalf = false;
  let cursor: string | null = null;

  const clampFloor = (s: number) => (everHalf ? Math.max(s, FLOOR) : Math.max(s, 0));

  for (const day of practice) {
    if (day > todayISO) break; // ignore future-dated entries defensively
    if (cursor !== null) {
      const gap = daysBetween(cursor, day); // >= 1
      const idle = gap - 1;                  // idle days strictly between
      if (idle > GRACE_DAYS) {
        strength -= DECAY * (idle - GRACE_DAYS);
        strength = clampFloor(strength);
      }
    }
    // Practice-day growth (diminishing as it nears full).
    strength += (1 - strength) * GROWTH;
    if (strength >= FLOOR_TRIGGER) everHalf = true;
    strength = clampFloor(strength);
    cursor = day;
  }

  // Trailing idle stretch up to today.
  if (cursor !== null) {
    const idle = daysBetween(cursor, todayISO); // idle days since last practice
    if (idle > GRACE_DAYS) {
      strength -= DECAY * (idle - GRACE_DAYS);
      strength = clampFloor(strength);
    }
  }

  return Math.max(0, Math.min(1, strength));
}

/** Convenience over the schema, using the local-time today. */
export function getHabitusStrength(data: StorageSchema, todayISO: string): number {
  return habitusStrengthFromDays(data.habitus?.days || [], todayISO);
}
