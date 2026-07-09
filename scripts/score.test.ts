// scripts/score.test.ts
// Unit tests for the W3-Score write-time algorithm (lib/score.ts) and the
// derived course totals (lib/gamification.ts getScore/getScoreCeiling).
// Run: npx tsx scripts/score.test.ts -- unlike habitus.test.ts (which is
// dependency-free), this file's getScore/getScoreCeiling tests transitively
// import content/modules, a directory import raw `node --test` type-strip
// resolution can't follow; tsx resolves it the same way the app's own
// bundler does.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computeScoreUpdate } from '../lib/score.ts';
import { getScore, getScoreCeiling } from '../lib/gamification.ts';
import { COURSE_MAP } from '../content/courseMap.ts';
import { MODULES } from '../content/modules/index.ts';
import type { StorageSchema } from '../lib/progress.ts';

const DAY1 = '2026-01-01';
const DAY2 = '2026-01-02';

test('first pass, sine errore -> 10, event first-perfect', () => {
  const r = computeScoreUpdate({ wasComplete: false, wasPerfect: false, prevPoints: 0, isPerfectNow: true, today: DAY1 });
  assert.equal(r.points, 10);
  assert.equal(r.event, 'first-perfect');
  assert.equal(r.delta, 10);
});

test('first pass, with a miss -> 6, event first-miss', () => {
  const r = computeScoreUpdate({ wasComplete: false, wasPerfect: false, prevPoints: 0, isPerfectNow: false, today: DAY1 });
  assert.equal(r.points, 6);
  assert.equal(r.event, 'first-miss');
  assert.equal(r.delta, 6);
});

test('miss then later perfect closes the gap to 9, never 10', () => {
  const r = computeScoreUpdate({ wasComplete: true, wasPerfect: false, prevPoints: 6, isPerfectNow: true, today: DAY1 });
  assert.equal(r.points, 9);
  assert.equal(r.event, 'gap-close');
  assert.equal(r.delta, 3);
});

test('gap-close already sitting at 9 (via prior revisits) awards nothing new', () => {
  // wasPerfect can be false while prevPoints is already 9 if revisits alone
  // carried it there without ever hitting isPerfectNow before. The score
  // event is correctly 'none' (nothing left to add) even though this pass
  // is the first time isPerfectNow is true -- markLessonComplete still sets
  // the sine-errore mark off isPerfectNow directly, decoupled from this
  // event; the mark and the score number are allowed to diverge here.
  const r = computeScoreUpdate({ wasComplete: true, wasPerfect: false, prevPoints: 9, isPerfectNow: true, today: DAY1 });
  assert.equal(r.points, 9);
  assert.equal(r.delta, 0);
  assert.equal(r.event, 'none');
});

test('revisit pays +1 even on an imperfect retake, once prevPoints < 9', () => {
  const r = computeScoreUpdate({ wasComplete: true, wasPerfect: false, prevPoints: 6, isPerfectNow: false, today: DAY1 });
  assert.equal(r.points, 7);
  assert.equal(r.event, 'revisit');
  assert.equal(r.lastRevisitDay, DAY1);
});

test('revisit never pays twice the same day', () => {
  const r = computeScoreUpdate({ wasComplete: true, wasPerfect: false, prevPoints: 7, prevRevisitDay: DAY1, isPerfectNow: false, today: DAY1 });
  assert.equal(r.points, 7);
  assert.equal(r.delta, 0);
  assert.equal(r.event, 'none');
});

test('revisit pays again on a new day, capped at 9', () => {
  const r = computeScoreUpdate({ wasComplete: true, wasPerfect: false, prevPoints: 8, prevRevisitDay: DAY1, isPerfectNow: false, today: DAY2 });
  assert.equal(r.points, 9);
  assert.equal(r.event, 'revisit');
});

test('revisit asymptote holds: once at 9, a new-day revisit awards nothing further', () => {
  const r = computeScoreUpdate({ wasComplete: true, wasPerfect: false, prevPoints: 9, prevRevisitDay: DAY1, isPerfectNow: false, today: DAY2 });
  assert.equal(r.points, 9);
  assert.equal(r.event, 'none');
});

test('a genuine first-pass 10 is never reduced or re-awarded by a later pass', () => {
  const r = computeScoreUpdate({ wasComplete: true, wasPerfect: true, prevPoints: 10, isPerfectNow: true, today: DAY2 });
  assert.equal(r.points, 10);
  assert.equal(r.delta, 0);
  assert.equal(r.event, 'none');
});

test('points never decrease: an imperfect retake of an already-10 lesson leaves it at 10', () => {
  const r = computeScoreUpdate({ wasComplete: true, wasPerfect: true, prevPoints: 10, isPerfectNow: false, today: DAY2 });
  assert.equal(r.points, 10);
  assert.equal(r.delta, 0);
});

test('migration: a legacy score entry with no points field starts at 0 and accrues normally, never retroactively 10', () => {
  // A returning learner may already carry a sine-errore mark from before
  // `points` existed (wasPerfect true) but their stored scores[idx] entry
  // predates the field, so prevPoints reads 0 (progress.ts: `?? 0`). This
  // pass can't retroactively know whether the original pass was first-
  // meeting precision or a later gap-close, so the honest migration
  // outcome is: start from 0, accrue forward as an ordinary revisit --
  // never a fabricated 10. lessonsComplete/wasComplete are untouched by
  // any of this (a separate array), so no crash and no progress reset.
  const r = computeScoreUpdate({ wasComplete: true, wasPerfect: true, prevPoints: 0, isPerfectNow: true, today: DAY1 });
  assert.equal(r.points, 1);
  assert.equal(r.event, 'revisit');
});

test('getScore is 0 on a fresh profile', () => {
  const data = { progress: {} } as unknown as StorageSchema;
  assert.equal(getScore(data), 0);
});

test('getScore never exceeds getScoreCeiling at a maxed-out fixture', () => {
  const progress: StorageSchema['progress'] = {};
  for (const entry of COURSE_MAP) {
    if (!entry.built) continue;
    const mod = MODULES.find(m => m.id === entry.id);
    if (!mod) continue;
    progress[entry.id] = {
      lessonsComplete: mod.lessons.map(() => true),
      scores: mod.lessons.map(() => ({ correct: 1, total: 1, missedIds: [], points: 10 })),
    };
  }
  const data = { progress } as unknown as StorageSchema;
  assert.equal(getScore(data), getScoreCeiling());
  assert.ok(getScoreCeiling() > 0);
});
