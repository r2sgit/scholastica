// scripts/habitus.test.ts
// Unit tests for the Habitus Meter strength model (§20.6 / G4).
// Run: node --test scripts/habitus.test.ts   (Node 23+; strips TS types)

import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  habitusStrengthFromDays,
  GROWTH, DECAY, GRACE_DAYS, FLOOR, FLOOR_TRIGGER,
} from '../lib/habitus.ts';

// Build a YYYY-MM-DD `n` days after 2026-01-01 (a fixed anchor).
function day(n: number): string {
  const d = new Date(Date.UTC(2026, 0, 1));
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
const close = (a: number, b: number, eps = 1e-9) => Math.abs(a - b) <= eps;

test('empty history is zero', () => {
  assert.equal(habitusStrengthFromDays([], day(0)), 0);
});

test('growth: one practice day gives GROWTH; it diminishes as it climbs', () => {
  const one = habitusStrengthFromDays([day(0)], day(0));
  assert.ok(close(one, GROWTH), `expected ${GROWTH}, got ${one}`);

  const two = habitusStrengthFromDays([day(0), day(1)], day(1));
  // 0.12 then 0.12 + (1-0.12)*0.12
  assert.ok(close(two, GROWTH + (1 - GROWTH) * GROWTH), `got ${two}`);
  assert.ok(two > one);

  // Monotonic and bounded under daily practice.
  const ten = habitusStrengthFromDays(Array.from({ length: 10 }, (_, i) => day(i)), day(9));
  assert.ok(ten > two && ten < 1);
});

test('3-day grace: up to GRACE_DAYS idle days cause no decay', () => {
  // Practice day 0, then check on day 1..4 (0..3 idle days): unchanged.
  const base = habitusStrengthFromDays([day(0)], day(0));
  for (let idle = 0; idle <= GRACE_DAYS; idle++) {
    const s = habitusStrengthFromDays([day(0)], day(idle));
    assert.ok(close(s, base), `idle=${idle} should not decay (got ${s})`);
  }
});

test('gentle decay begins only after the grace window, at DECAY per further idle day', () => {
  // 4 idle days = 1 day past grace → one DECAY step.
  const oneStep = habitusStrengthFromDays([day(0)], day(GRACE_DAYS + 1));
  const base = habitusStrengthFromDays([day(0)], day(0));
  assert.ok(close(oneStep, Math.max(0, base - DECAY)), `got ${oneStep}`);

  // 5 idle days = 2 past grace → two DECAY steps (still gradual, never a cliff).
  const twoStep = habitusStrengthFromDays([day(0)], day(GRACE_DAYS + 2));
  assert.ok(twoStep < oneStep);
});

test('floor: once strength reaches 0.5 it never decays below FLOOR', () => {
  // ~8 daily practice days clears 0.5.
  const days = Array.from({ length: 8 }, (_, i) => day(i));
  const peak = habitusStrengthFromDays(days, day(7));
  assert.ok(peak >= FLOOR_TRIGGER, `peak ${peak} should exceed ${FLOOR_TRIGGER}`);

  // Then a long absence: a year idle. Floored, not zeroed.
  const afterLongIdle = habitusStrengthFromDays(days, day(7 + 365));
  assert.ok(close(afterLongIdle, FLOOR) || afterLongIdle >= FLOOR, `got ${afterLongIdle}`);
  assert.equal(afterLongIdle, FLOOR);
});

test('no-zeroing invariant: a single miss never drops strength, and decay is never a reset', () => {
  // A single missed day (1 idle) after building some strength: unchanged.
  const built = Array.from({ length: 5 }, (_, i) => day(i));
  const before = habitusStrengthFromDays(built, day(4));
  const afterOneMiss = habitusStrengthFromDays(built, day(5)); // 1 idle day
  assert.ok(close(before, afterOneMiss), `one miss must not change strength`);

  // Even an enormous gap from an established (>=0.5) habit holds the floor.
  const established = Array.from({ length: 10 }, (_, i) => day(i));
  const huge = habitusStrengthFromDays(established, day(10 + 10000));
  assert.equal(huge, FLOOR);
  assert.ok(huge > 0, 'never zero once established');
});

test('30-day patterns look right', () => {
  // Daily for 30 days → strong, near full, under 1.
  const daily = Array.from({ length: 30 }, (_, i) => day(i));
  const sDaily = habitusStrengthFromDays(daily, day(29));
  assert.ok(sDaily > 0.95 && sDaily < 1, `daily-30 got ${sDaily}`);

  // Every third day for 30 days → gaps of 2 idle (within grace), steady climb.
  const everyThird: string[] = [];
  for (let i = 0; i < 30; i += 3) everyThird.push(day(i));
  const sThird = habitusStrengthFromDays(everyThird, day(27));
  assert.ok(sThird > FLOOR_TRIGGER, `every-third got ${sThird}`);

  // Strong start then total lapse for the back half → decays to the floor.
  const frontLoaded = Array.from({ length: 10 }, (_, i) => day(i));
  const sLapse = habitusStrengthFromDays(frontLoaded, day(29));
  assert.equal(sLapse, FLOOR);

  // Order independence: shuffled input equals sorted input.
  const shuffled = [...daily].reverse();
  assert.equal(habitusStrengthFromDays(shuffled, day(29)), sDaily);
});
