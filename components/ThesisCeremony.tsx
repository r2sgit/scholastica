'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { Thesis } from '../content/theses';
import { playSound } from '../lib/sound';
import { recordThesesCeremonyPlayed } from '../lib/progress';

interface ThesisCeremonyProps {
  /** Newly earned theses for this module completion, already in numeral order. */
  theses: Thesis[];
  moduleId: number;
  onDone: () => void;
}

function toRoman(n: number): string {
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let r = '';
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) { r += syms[i]; n -= vals[i]; }
  }
  return r;
}

/* Full-screen thesis unlock ceremony (gamification v2 B1). Fires from the fin
   path in place of the old inline thesis announcement; ends with a door to
   /theses. Multiple unlocks play in numeral order, one beat each. */
export default function ThesisCeremony({ theses, moduleId, onDone }: ThesisCeremonyProps) {
  const [index, setIndex] = useState(0);
  const [beatOn, setBeatOn] = useState(false);
  const thesis = theses[index];
  const isLast = index === theses.length - 1;

  // Ceremony-once guard: record all queued theses as played the moment the
  // ceremony is shown (idempotent), the same immediate-record pattern the
  // Theses Board's own catch-up path uses — a reload mid-ceremony must never
  // replay it.
  useEffect(() => {
    recordThesesCeremonyPlayed(theses.map(t => t.n));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setBeatOn(false);
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setBeatOn(true); return; }
    const t = setTimeout(() => setBeatOn(true), 60);
    const s = setTimeout(() => playSound('ceremony'), 200);
    return () => { clearTimeout(t); clearTimeout(s); };
  }, [index]);

  function advance() {
    if (isLast) { onDone(); return; }
    setIndex(i => i + 1);
  }

  return (
    <div
      className={`ceremony-overlay${beatOn ? ' beat-on' : ''}`}
      onClick={advance}
      role="dialog"
      aria-label={`Thesis ${thesis.numeral} unlocked`}
    >
      <div className="ceremony-inner">
        <div className="cer-eyebrow">
          {`Module ${toRoman(moduleId)} complete · a thesis is earned`}
        </div>

        <div className="cer-numeral-wrap">
          <svg className="cer-ring" viewBox="0 0 220 220" aria-hidden="true">
            <path d="M110 8 A102 102 0 1 1 109.9 8" fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity="0.7" />
            <path d="M110 22 A88 88 0 1 1 109.9 22" fill="none" stroke="var(--vermillion)" strokeWidth="1" opacity="0.5" />
          </svg>
          <div className="cer-numeral blackletter" aria-hidden="true">
            {thesis.numeral}
            <span className="fill blackletter">{thesis.numeral}</span>
          </div>
        </div>

        <p className="cer-line">{thesis.unlock_line}</p>

        <p className="cer-latin">{thesis.latin}</p>
        <p className="cer-english">{thesis.english}</p>

        {isLast ? (
          <Link href="/theses" className="cer-cta">
            Enter the Theses Board &rarr;
          </Link>
        ) : (
          <button type="button" className="cer-cta">
            Next thesis &rarr;
          </button>
        )}

        {theses.length > 1 && (
          <div className="cer-progress" aria-hidden="true">
            {theses.map((t, i) => (
              <span key={t.n} className={i === index ? 'here' : i < index ? 'done' : ''} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
