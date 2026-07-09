// lib/score.ts
// Pure write-time scoring decision (scholastica-prelogin-scoring.md §2-3).
// Dependency-free so it can be unit-tested directly, same pattern as
// lib/habitus.ts. Score measures demonstrated exactness on first meeting,
// not activity volume — the sine-errore mechanic given a number.
//
// The invariants (do not break these):
// 1. 10 is reserved for first-meeting sine-errore precision.
// 2. Closing the gap later reaches 9, never 10.
// 3. Revisits pay +1/lesson/day, asymptote at 9, never farmable past it.
// 4. Points never decrease.

export type ScoreEvent = 'first-perfect' | 'first-miss' | 'gap-close' | 'revisit' | 'none';

export interface ScoreUpdateInput {
  wasComplete: boolean;
  wasPerfect: boolean;
  prevPoints: number;
  prevRevisitDay?: string;
  isPerfectNow: boolean;
  today: string;
}

export interface ScoreUpdateResult {
  points: number;
  lastRevisitDay?: string;
  event: ScoreEvent;
  delta: number;
}

export function computeScoreUpdate(input: ScoreUpdateInput): ScoreUpdateResult {
  const { wasComplete, wasPerfect, prevPoints, prevRevisitDay, isPerfectNow, today } = input;

  if (!wasComplete) {
    const points = isPerfectNow ? 10 : 6;
    return { points, lastRevisitDay: prevRevisitDay, event: isPerfectNow ? 'first-perfect' : 'first-miss', delta: points };
  }

  if (!wasPerfect && isPerfectNow) {
    const points = Math.max(prevPoints, 9); // close the gap; never reduce, never 10
    const delta = points - prevPoints;
    return { points, lastRevisitDay: prevRevisitDay, event: delta > 0 ? 'gap-close' : 'none', delta };
  }

  if (prevPoints < 9 && today !== prevRevisitDay) {
    return { points: prevPoints + 1, lastRevisitDay: today, event: 'revisit', delta: 1 };
  }

  return { points: prevPoints, lastRevisitDay: prevRevisitDay, event: 'none', delta: 0 };
}
