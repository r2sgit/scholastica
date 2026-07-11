// lib/habitus.ts
// The Habitus Meter strength model (§20.6 / G4), kept dependency-free and
// pure so it can be unit-tested directly (see scripts/habitus.test.ts).
//
// A habit, not a chain (ST I-II q.53): strength grows with each day of
// practice and weakens GRADUALLY through disuse. It never resets to zero from
// a miss. There is no mechanism anywhere that zeroes it.

export const GROWTH = 0.12;        // approach-to-1 step on a practice day
export const DECAY = 0.04;         // per idle day, once decay has begun
export const GRACE_DAYS = 3;       // consecutive idle days forgiven before decay
export const FLOOR_TRIGGER = 0.5;  // once reached, strength never drops below FLOOR
export const FLOOR = 0.15;

/** Whole calendar days from aISO to bISO (date parts only, UTC math, so DST
    never shifts the count). Both args are YYYY-MM-DD. */
export function daysBetween(aISO: string, bISO: string): number {
  const a = Date.parse(aISO + 'T00:00:00Z');
  const b = Date.parse(bISO + 'T00:00:00Z');
  return Math.round((b - a) / 86_400_000);
}

/** Shift a YYYY-MM-DD date by n whole days (UTC math, DST-safe). */
export function addDays(iso: string, n: number): string {
  const d = new Date(Date.parse(iso + 'T00:00:00Z') + n * 86_400_000);
  return d.toISOString().slice(0, 10);
}

/** Strict consecutive-day streak (R2's call, redesign-v4). The HUD flame:
    the run of back-to-back calendar days of practice ending today, or ending
    yesterday if today isn't practiced yet (the day is still open, so a miss
    hasn't happened). Any full missed day breaks it — the streak reads 0 once
    the most recent practice day is older than yesterday. This is deliberately
    the loud Duolingo streak, distinct from the forgiving habitus STRENGTH
    model above (which never zeroes); R2 chose the chain for the HUD. */
export function currentStreak(days: string[], todayISO: string): number {
  if (!days || days.length === 0) return 0;
  const set = new Set(days);
  let anchor: string;
  if (set.has(todayISO)) anchor = todayISO;
  else if (set.has(addDays(todayISO, -1))) anchor = addDays(todayISO, -1);
  else return 0;
  let count = 0;
  let cursor = anchor;
  while (set.has(cursor)) {
    count++;
    cursor = addDays(cursor, -1);
  }
  return count;
}

/** Strength in 0..1 from a set of practice days (YYYY-MM-DD) as of todayISO. */
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
