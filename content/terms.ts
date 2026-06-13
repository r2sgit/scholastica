// content/terms.ts
// Typed loader for the Vocabularium data (terms-export.json, produced by
// scripts/export-terms.mjs from scholastica-glossary.md — re-runnable, never
// hand-edited). The accumulation rule lives here: a term is "earned" only once
// its introducing module has at least one completed lesson. Unearned terms do
// not render at all (the shelf grows, it does not taunt).

import data from './terms-export.json';
import type { StorageSchema } from '../lib/progress';

export type TermModule = number | 'structural';

export interface Term {
  latin: string;
  english: string;
  gloss: string;
  module: TermModule;
  status: 'built' | 'planned';
  registers?: string[];
}

const raw = data as unknown as { meta: Record<string, unknown>; terms: Term[] };

export const TERMS: Term[] = raw.terms;

/** Has this module had at least one lesson completed? Structural terms (the
    game grammar) are met immediately, so they ride on M0's first lesson. */
function moduleStarted(mod: TermModule, progress: StorageSchema['progress']): boolean {
  const id = mod === 'structural' ? 0 : mod;
  const mp = progress?.[id];
  return !!mp && Array.isArray(mp.lessonsComplete) && mp.lessonsComplete.some(Boolean);
}

export function isTermEarned(term: Term, data: StorageSchema): boolean {
  return moduleStarted(term.module, data.progress);
}

/** All earned terms (coarse v1 rule: per introducing module). */
export function getEarnedTerms(data: StorageSchema): Term[] {
  return TERMS.filter(t => isTermEarned(t, data));
}

/** Find a term by its Latin headword (used by the inline <Term> component). */
export function findTerm(latin: string): Term | undefined {
  const key = latin.trim().toLowerCase();
  return TERMS.find(t => t.latin.toLowerCase() === key);
}

// Display order for module sections: structural first (the apparatus the
// learner meets on day one), then by module id.
export function termGroupsInOrder(): TermModule[] {
  const present = new Set<TermModule>(TERMS.map(t => t.module));
  const out: TermModule[] = [];
  if (present.has('structural')) out.push('structural');
  for (let i = 0; i <= 17; i++) if (present.has(i)) out.push(i);
  return out;
}
