'use client';

import { useId, useState } from 'react';
import GlossCard from './GlossCard';
import { useProgress } from '../lib/progress';
import { findTerm, isTermEarned } from '../content/terms';

/* Inline term tooltip foundation (G3). Wraps a word in running text and shows
   the gloss card on hover / focus / tap — but ONLY if the term is earned.
   Unearned (or unknown) terms render as plain text, leaking nothing.

   Ships for the next content-wiring pass; deliberately NOT retrofitted into
   existing lesson content here.

   Usage: <Term latin="esse">esse</Term>  (children default to the latin) */
export default function Term({
  latin,
  children,
}: {
  latin: string;
  children?: React.ReactNode;
}) {
  const { data } = useProgress();
  const [open, setOpen] = useState(false);
  const id = useId();

  const term = findTerm(latin);
  const label = children ?? latin;

  // Unearned or unknown: plain text, no affordance, no gloss in the DOM.
  if (!term || !isTermEarned(term, data)) {
    return <span className="term-plain">{label}</span>;
  }

  return (
    <span
      className="term"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        type="button"
        className="term-trigger"
        aria-describedby={open ? id : undefined}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        {label}
      </button>
      {open && (
        <span className="term-popover" role="tooltip" id={id}>
          <GlossCard term={term} />
        </span>
      )}
    </span>
  );
}
