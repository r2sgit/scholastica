// content/theologia/toolRecall.ts
// Tool-recall map (WP6, spec §8 / theology-blueprint §1): every Part II module
// opens by recalling the Part I tool it runs on, shown as the actual Part I
// Distinction Card (motif playing, no narration) before the first question.
//
// Kept OUT of the generated tN.ts files (scripts/extract-theologia.py would
// overwrite anything added there) and centralized here, keyed by theology
// moduleId -> a pointer into the real philosophy content. The cold-open then
// renders the genuine Part I card, so "the codex earned in Part I visibly
// becomes Part II's toolkit" is literally true, not a paraphrase.
//
// SKIP-RATHER-THAN-STRETCH (spec): a mapping is included ONLY where the
// blueprint's tool-recall row points at a Part I lesson that actually carries
// a fin.distinction card. Today only M1, M2, and M16 carry cards, so most of
// the blueprint's rows (M3 cup, M5 tool, M10 verbum, M11 machinery, M14 door,
// M18 ceiling) have no card to recall yet and are deliberately omitted. When
// Part I gains distinction cards on those lessons, add the rows here.

import { getModule } from '../modules';
import type { FinDistinction } from '../types';

interface ToolRecallPointer {
  /** Part I module id whose lesson card is recalled. */
  module: number;
  /** Part I lesson id carrying the fin.distinction to show. */
  lesson: string;
}

export const TOOL_RECALL: Record<number, ToolRecallPointer> = {
  // T2 · Existence of God — the First Way replayed with full equipment;
  // the tool is actus purus (blueprint T2 row, "M2's First Way").
  2: { module: 2, lesson: 'm2-l4' },
  // T3 · Divine Attributes — divine simplicity: "essence IS esse"; the tool
  // is the essentia/esse distinction (blueprint T3 row, "M3's cup inverted").
  // Its only card lives at M1-L1, where essence/esse was first built.
  3: { module: 1, lesson: 'm1-l1' },
  // T14 · Eucharist — substance under accidents, "the course's first tool at
  // its final use" (blueprint T14 row; the pre-renumber "M2-L6" slip is
  // corrected to M1-L6, verified against live m1.ts).
  14: { module: 1, lesson: 'm1-l6' },
};

/** Resolve a theology module's tool-recall pointer to the real Part I
    Distinction Card, or undefined if the module has no clean mapping. */
export function getToolRecall(theologiaModuleId: number): FinDistinction | undefined {
  const ptr = TOOL_RECALL[theologiaModuleId];
  if (!ptr) return undefined;
  const mod = getModule(ptr.module);
  const lesson = mod?.lessons.find(l => l.id === ptr.lesson);
  return lesson?.fin.distinction;
}
