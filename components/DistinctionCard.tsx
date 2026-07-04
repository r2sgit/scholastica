'use client';

import { useEffect, useState } from 'react';
import DistinctionMotif from './DistinctionMotif';
import type { FinDistinction } from '../content/types';

/* The per-lesson reward (gamification v2 §4.2 / B3): flips up on the fin
   screen, the pair in both registers, the motif, one plain-English line. */
export default function DistinctionCard({ distinction }: { distinction: FinDistinction }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const reduced = typeof window !== 'undefined'
      && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setOn(true); return; }
    const t = setTimeout(() => setOn(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="dcard-wrap">
      <div className={`dcard${on ? ' on' : ''}`}>
        <div className="dcard-eyebrow">you own a new distinction</div>
        <div className="dcard-pair">
          {distinction.latin.split('·').map((term, i, arr) => (
            <span key={i}>
              <em>{term.trim()}</em>
              {i < arr.length - 1 && <span className="sep">&middot;</span>}
            </span>
          ))}
        </div>
        <div className="dcard-pair-en">{distinction.english}</div>
        <p className="dcard-gloss">{distinction.gloss}</p>
        <DistinctionMotif kind={distinction.motif} on={on} />
      </div>
    </div>
  );
}
