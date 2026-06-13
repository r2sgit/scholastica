'use client';

import { useEffect, useState } from 'react';
import { readProgress, localISODate } from '../lib/progress';
import { getHabitusStrength } from '../lib/gamification';

/* The Habitus Meter (§20.6 / G4). A vine that grows fuller with practice and
   thins gently with disuse. Strength maps to FULLNESS ONLY — the number of
   leaves and whether the berry shows. No numbers anywhere, no day counts, no
   tooltip, no notification. The only word is "habitus" beneath it. The
   mechanic is named and taught by M13's content, not here.

   Reduced motion: renders at its current state with no growth animation. */

const MAX_LEAVES = 6;

// Leaf anchor points along the stem path, alternating above / below.
const LEAVES: { x: number; y: number; up: boolean }[] = [
  { x: 24, y: 27, up: true },
  { x: 44, y: 31, up: false },
  { x: 64, y: 25, up: true },
  { x: 84, y: 30, up: false },
  { x: 102, y: 26, up: true },
  { x: 120, y: 29, up: false },
];

function leaf(x: number, y: number, up: boolean) {
  // A small almond leaf, tip pointing away from the stem.
  const dy = up ? -11 : 11;
  return `M ${x} ${y} C ${x - 5} ${y + dy * 0.45}, ${x - 1} ${y + dy}, ${x + 4} ${y + dy * 0.7} C ${x + 6} ${y + dy * 0.4}, ${x + 3} ${y + dy * 0.15}, ${x} ${y} Z`;
}

export default function HabitusVine() {
  const [strength, setStrength] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setStrength(getHabitusStrength(readProgress(), localISODate()));
    setReduce(!!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
  }, []);

  // Appears only once practice has begun; nothing to taunt an empty start.
  if (strength <= 0) return null;

  const leaves = Math.max(1, Math.min(MAX_LEAVES, Math.round(strength * MAX_LEAVES)));
  const showBerry = strength >= 0.82;

  return (
    <div className="habitus" aria-hidden="true">
      <svg
        className={`habitus-vine${reduce ? ' no-anim' : ''}`}
        viewBox="0 0 140 44"
        width="120"
        height="38"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Stem */}
        <path
          d="M4 30 C 26 22, 40 34, 64 26 C 88 18, 104 32, 136 22"
          fill="none"
          stroke="var(--vine-green)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Leaves (fullness = strength) */}
        {LEAVES.slice(0, leaves).map((l, i) => (
          <path
            key={i}
            className="habitus-leaf"
            style={{ animationDelay: `${120 + i * 90}ms` }}
            d={leaf(l.x, l.y, l.up)}
            fill="var(--gold)"
            opacity="0.85"
          />
        ))}
        {/* A single vermillion berry at high strength */}
        {showBerry && (
          <circle className="habitus-berry" cx="134" cy="22" r="3.2" fill="var(--vermillion)" />
        )}
      </svg>
      <div className="habitus-label">habitus</div>
    </div>
  );
}
