/* Inline SVG motifs in the visual-distinctions grammar (visual-distinctions.md):
   static frames, not full animations — a slow 3-4s stroke-draw plus staged
   fade-ins, palette-locked (gold/gold-light for act and divine light,
   vine-green for natural-order moves, vermillion sparingly, ink for line
   work). Reused across lessons; "on" triggers the draw via CSS (see
   .motif rules in globals.css keyed by data-kind). */

export type MotifKind =
  | 'sun-silhouette'
  | 'seed-tree'
  | 'seed-tree-prior'
  | 'seed-tree-change'
  | 'seed-tree-chain'
  | 'diverging-lines'
  | 'nest-causes'
  | 'clay-form'
  | 'concentric';

/* The seed-at-rest / tree-as-completion primitive (act-potency), with the
   sun present offstage as the source of unfolding. */
function SeedTree() {
  return (
    <>
      <line x1="20" y1="104" x2="180" y2="104" stroke="var(--border)" strokeWidth="1.5" />
      <ellipse cx="66" cy="98" rx="9" ry="6" fill="var(--ink)" />
      <path className="grow" d="M126 104 C126 78 122 60 128 44 C132 34 140 28 148 24"
        fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" />
      <path className="grow" d="M126 74 C118 66 112 62 104 60"
        fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
      <circle className="leaf" cx="104" cy="60" r="4.5" fill="var(--gold-light)" />
      <circle className="leaf" cx="148" cy="24" r="5" fill="var(--gold)" />
      <circle className="leaf" cx="136" cy="40" r="3.5" fill="var(--gold-light)" />
      <circle className="leaf" cx="120" cy="88" r="3" fill="var(--vine-green)" />
    </>
  );
}

/* Same primitive, tree-first: the mature form draws before the seed appears,
   its branches already bold — act is prior to potency, not the reverse. */
function SeedTreePrior() {
  return (
    <>
      <line x1="20" y1="104" x2="180" y2="104" stroke="var(--border)" strokeWidth="1.5" />
      <path className="grow" d="M126 104 C126 78 122 60 128 44 C132 34 140 28 148 24"
        fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
      <path className="grow" d="M126 74 C118 66 112 62 104 60"
        fill="none" stroke="var(--gold)" strokeWidth="2.4" strokeLinecap="round" />
      <circle className="leaf" cx="104" cy="60" r="5" fill="var(--gold-light)" />
      <circle className="leaf" cx="148" cy="24" r="6" fill="var(--gold)" />
      <circle className="leaf" cx="136" cy="40" r="4" fill="var(--gold-light)" />
      <ellipse className="leaf" cx="66" cy="98" rx="8" ry="5.5" fill="var(--ink)" opacity="0.7" />
    </>
  );
}

/* The passage itself, not the endpoints: a dashed arc traces the seed's path
   into the tree — mutatio, potency moving to act, in time. */
function SeedTreeChange() {
  return (
    <>
      <line x1="20" y1="104" x2="180" y2="104" stroke="var(--border)" strokeWidth="1.5" />
      <ellipse cx="60" cy="98" rx="8" ry="5.5" fill="var(--ink)" />
      <path className="grow" d="M126 104 C126 78 122 60 128 44 C132 34 140 28 148 24"
        fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" />
      <circle className="leaf" cx="148" cy="24" r="5" fill="var(--gold)" />
      <path className="grow-slow" d="M60 96 C 85 60, 115 40, 145 26"
        fill="none" stroke="var(--vermillion)" strokeWidth="1.4" strokeDasharray="4 5" strokeLinecap="round" />
    </>
  );
}

/* Seed to sapling to tree, left to right, terminating in a sun — the chain
   of borrowed act followed back to its necessary, unborrowed source. */
function SeedTreeChain() {
  return (
    <>
      <line x1="14" y1="100" x2="186" y2="100" stroke="var(--border)" strokeWidth="1.5" />
      <ellipse cx="30" cy="94" rx="6" ry="4.5" fill="var(--ink)" />
      <path className="grow" d="M75 100 C75 84 78 74 84 68" fill="none" stroke="var(--gold-light)" strokeWidth="2" strokeLinecap="round" />
      <circle className="leaf" cx="84" cy="66" r="3.5" fill="var(--gold-light)" />
      <path className="grow" d="M124 100 C124 76 130 58 138 46 C142 40 148 36 154 33"
        fill="none" stroke="var(--gold)" strokeWidth="2.4" strokeLinecap="round" />
      <circle className="leaf" cx="138" cy="60" r="4" fill="var(--gold)" />
      <circle className="leaf" cx="122" cy="80" r="3" fill="var(--vine-green)" />
      <circle className="sun" cx="172" cy="24" r="11" fill="none" stroke="var(--gold)" strokeWidth="2" />
      <circle className="sun-core" cx="172" cy="24" r="5.5" fill="var(--gold)" />
    </>
  );
}

/* Sun and silhouette: the dark shape is a possibility awaiting existence;
   light received from the source is what makes it actually be. */
function SunSilhouette() {
  return (
    <>
      <circle className="sun" cx="152" cy="34" r="14" fill="none" stroke="var(--gold)" strokeWidth="2" />
      <circle className="sun-core" cx="152" cy="34" r="7" fill="var(--gold)" />
      <path className="grow" d="M138 40 L70 76" fill="none" stroke="var(--gold-light)" strokeWidth="1.3" strokeDasharray="3 4" />
      <path d="M56 62 C48 62 42 72 46 82 C49 92 62 96 68 88 C74 80 70 62 56 62 Z"
        fill="var(--ink)" opacity="0.85" />
      <path className="fill-in" d="M56 62 C48 62 42 72 46 82 C49 92 62 96 68 88 C74 80 70 62 56 62 Z"
        fill="var(--gold)" />
    </>
  );
}

/* Two lines coincident, then diverging to two distinct ends — the cut
   between principles that look identical until they are actually separable. */
function DivergingLines() {
  return (
    <>
      <circle cx="26" cy="60" r="3" fill="var(--ink)" />
      <path className="grow" d="M26 60 C 70 60, 90 34, 150 24"
        fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
      <path className="grow" d="M26 60 C 70 60, 90 86, 150 96"
        fill="none" stroke="var(--vermillion)" strokeWidth="2" strokeLinecap="round" />
      <circle className="leaf" cx="150" cy="24" r="4" fill="var(--gold)" />
      <circle className="leaf" cx="150" cy="96" r="4" fill="var(--vermillion)" />
    </>
  );
}

/* The nest, woven from the material cause, resting toward the final cause —
   the bird arrives last, the "for the sake of which" the nest was made. */
function NestCauses() {
  return (
    <>
      <path className="grow" d="M46 84 C46 68 64 58 100 58 C136 58 154 68 154 84"
        fill="none" stroke="var(--gold-deep)" strokeWidth="2" strokeLinecap="round" />
      <path className="grow" d="M54 90 C54 76 72 68 100 68 C128 68 146 76 146 90"
        fill="none" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round" />
      <path className="grow" d="M62 94 C62 84 78 78 100 78 C122 78 138 84 138 94"
        fill="none" stroke="var(--gold-light)" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse className="leaf" cx="112" cy="48" rx="10" ry="7" fill="var(--ink)" opacity="0.85" />
      <path className="leaf" d="M122 48 L131 45 L122 52 Z" fill="var(--ink)" opacity="0.85" />
    </>
  );
}

/* One substrate, two successive forms imposed on it — the same clay, shaped
   two ways; matter is what receives, form is what makes it this. */
function ClayForm() {
  return (
    <>
      <path d="M50 92 C42 78 48 60 66 56 C84 52 96 66 90 82 C86 94 62 100 50 92 Z"
        fill="var(--ink)" opacity="0.18" />
      <path className="grow" d="M108 96 L108 60 C108 48 148 48 148 60 L148 96 Z"
        fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path className="grow" d="M114 60 C114 68 142 68 142 60"
        fill="none" stroke="var(--gold-light)" strokeWidth="1.4" />
      <line x1="30" y1="102" x2="170" y2="102" stroke="var(--border)" strokeWidth="1.5" />
    </>
  );
}

/* Concentric structure: the substance held still at the center, accidents
   arriving and shifting around it — what stays, versus what merely varies. */
function Concentric() {
  return (
    <>
      <circle cx="100" cy="60" r="16" fill="var(--ink)" opacity="0.85" />
      <circle className="leaf" cx="100" cy="26" r="4.5" fill="var(--gold)" />
      <circle className="leaf" cx="140" cy="52" r="4" fill="var(--vermillion)" />
      <circle className="leaf" cx="128" cy="90" r="3.5" fill="var(--gold-light)" />
      <circle className="leaf" cx="66" cy="84" r="3.5" fill="var(--vine-green)" />
      <circle className="grow-ring" cx="100" cy="60" r="36" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 5" />
    </>
  );
}

const RENDERERS: Record<MotifKind, () => React.JSX.Element> = {
  'sun-silhouette': SunSilhouette,
  'seed-tree': SeedTree,
  'seed-tree-prior': SeedTreePrior,
  'seed-tree-change': SeedTreeChange,
  'seed-tree-chain': SeedTreeChain,
  'diverging-lines': DivergingLines,
  'nest-causes': NestCauses,
  'clay-form': ClayForm,
  'concentric': Concentric,
};

export default function DistinctionMotif({ kind, on }: { kind: string; on: boolean }) {
  const Renderer = RENDERERS[kind as MotifKind] || SeedTree;
  return (
    <svg
      className={`motif${on ? ' on' : ''}`}
      width="200" height="120" viewBox="0 0 200 120"
      aria-hidden="true"
    >
      <Renderer />
    </svg>
  );
}
