/* DistinctionMotif v2 — DROP-IN REPLACEMENT for v1/components/DistinctionMotif.tsx.
   Authored 2026-07-07 (Fable) for the distinction-card parity pass
   (scholastica-claude-code-distinction-cards-wiring.md).

   Inline SVG motifs in the visual-distinctions grammar (visual-distinctions.md):
   static frames, not full animations — a slow 3-4s stroke-draw plus staged
   fade-ins, palette-locked (gold/gold-light for act and divine light,
   vine-green for natural-order moves, vermillion sparingly, ink for line
   work). Reused across lessons; "on" triggers the draw via CSS (.motif rules
   in globals.css — v2 uses ONLY the existing classes: grow, grow-slow, leaf,
   sun, sun-core, fill-in, grow-ring; no CSS changes required).

   v2 adds 20 kinds: the five M16 proposal keys (live content already points
   at them; they have been falling back to seed-tree) and fifteen kinds for
   the M3-M8 + Theologia batches. The nine v1 kinds are unchanged. */

export type MotifKind =
  | 'sun-silhouette'
  | 'seed-tree'
  | 'seed-tree-prior'
  | 'seed-tree-change'
  | 'seed-tree-chain'
  | 'diverging-lines'
  | 'nest-causes'
  | 'clay-form'
  | 'concentric'
  /* v2 — M16 (Analogy) */
  | 'three-lanes'
  | 'sun-and-mirrors'
  | 'ladder-of-ratios'
  | 'carved-light'
  | 'borrowed-crown'
  /* v2 — M3-M8 vocabulary */
  | 'cup-water'
  | 'lamps-one-sun'
  | 'sun-alone'
  | 'wax-seal'
  | 'stack-bottom'
  | 'mask-face'
  | 'bearer-column'
  | 'porphyry-tree'
  | 'linked-rings'
  | 'beads-thread'
  | 'chisel-hand'
  | 'arrow-mark'
  | 'crossing-paths'
  /* v2 — Theologia */
  | 'ladder-light'
  | 'five-roads'
  /* v2.1 — batch 2 (M9-M15) */
  | 'candle-flame'
  | 'grades-of-life'
  | 'inner-gallery'
  | 'nested-figures'
  | 'three-altitudes'
  | 'window-view'
  | 'smoke-fire'
  | 'three-errands'
  | 'two-inclines'
  | 'law-cascade'
  | 'habitus-vine'
  | 'minds-line';

/* ————— v1 kinds, unchanged ————— */

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

/* ————— v2 — M16 · Analogy of Being ————— */

/* Three lanes of predication: the same-same of univocity, the unrelated pair
   of equivocity, the related-but-differing pair of analogy (gold with gold-light). */
function ThreeLanes() {
  return (
    <>
      <line x1="24" y1="34" x2="176" y2="34" stroke="var(--border)" strokeWidth="1" />
      <line x1="24" y1="62" x2="176" y2="62" stroke="var(--border)" strokeWidth="1" />
      <line x1="24" y1="90" x2="176" y2="90" stroke="var(--border)" strokeWidth="1" />
      <circle className="leaf" cx="70" cy="34" r="5" fill="var(--gold)" />
      <circle className="leaf" cx="130" cy="34" r="5" fill="var(--gold)" />
      <circle className="leaf" cx="70" cy="62" r="5" fill="var(--gold)" />
      <rect className="leaf" x="125" y="57" width="10" height="10" fill="var(--vermillion)" />
      <circle className="leaf" cx="70" cy="90" r="5" fill="var(--gold)" />
      <circle className="leaf" cx="130" cy="90" r="6.5" fill="none" stroke="var(--gold-light)" strokeWidth="2.4" />
      <path className="grow-slow" d="M76 90 L122 90" stroke="var(--gold-light)" strokeWidth="1.2" strokeDasharray="3 4" fill="none" />
    </>
  );
}

/* One sun, two mirrors catching its light: health in the animal, healthy in
   the diet and the urine — attribution to one prime analogate. */
function SunAndMirrors() {
  return (
    <>
      <circle className="sun" cx="100" cy="26" r="12" fill="none" stroke="var(--gold)" strokeWidth="2" />
      <circle className="sun-core" cx="100" cy="26" r="6" fill="var(--gold)" />
      <path className="grow" d="M92 36 L58 78" fill="none" stroke="var(--gold-light)" strokeWidth="1.3" strokeDasharray="3 4" />
      <path className="grow" d="M108 36 L142 78" fill="none" stroke="var(--gold-light)" strokeWidth="1.3" strokeDasharray="3 4" />
      <rect className="leaf" x="42" y="78" width="26" height="16" rx="2" transform="rotate(-14 55 86)"
        fill="none" stroke="var(--ink)" strokeWidth="1.8" />
      <rect className="leaf" x="132" y="78" width="26" height="16" rx="2" transform="rotate(14 145 86)"
        fill="none" stroke="var(--ink)" strokeWidth="1.8" />
      <circle className="leaf" cx="55" cy="86" r="3" fill="var(--gold-light)" />
      <circle className="leaf" cx="145" cy="86" r="3" fill="var(--gold-light)" />
    </>
  );
}

/* Two rungs, two ratios: as sight is to the eye, so understanding is to the
   mind — proportionality's four terms in their places. */
function LadderOfRatios() {
  return (
    <>
      <line x1="58" y1="14" x2="58" y2="106" stroke="var(--ink)" strokeWidth="2" opacity="0.75" />
      <line x1="142" y1="14" x2="142" y2="106" stroke="var(--ink)" strokeWidth="2" opacity="0.75" />
      <path className="grow" d="M58 42 L142 42" stroke="var(--gold)" strokeWidth="2" fill="none" />
      <path className="grow" d="M58 82 L142 82" stroke="var(--gold)" strokeWidth="2" fill="none" />
      <circle className="leaf" cx="80" cy="36" r="4" fill="var(--gold)" />
      <circle className="leaf" cx="120" cy="36" r="4" fill="none" stroke="var(--gold)" strokeWidth="1.8" />
      <circle className="leaf" cx="80" cy="76" r="4" fill="var(--gold-light)" />
      <circle className="leaf" cx="120" cy="76" r="4" fill="none" stroke="var(--gold-light)" strokeWidth="1.8" />
      <path className="grow-slow" d="M100 46 L100 78" stroke="var(--vermillion)" strokeWidth="1.2" strokeDasharray="2 4" fill="none" />
    </>
  );
}

/* Light through the carved gap: what remotion removes, eminence releases —
   naming God by denying the creaturely mode. */
function CarvedLight() {
  return (
    <>
      <path d="M40 24 L92 24 L92 54 L40 54 Z" fill="var(--ink)" opacity="0.85" />
      <path d="M40 66 L92 66 L92 96 L40 96 Z" fill="var(--ink)" opacity="0.85" />
      <path className="grow" d="M96 60 L168 60" stroke="var(--gold)" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path className="grow" d="M96 60 L160 38" stroke="var(--gold-light)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path className="grow" d="M96 60 L160 82" stroke="var(--gold-light)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <circle className="sun-core" cx="94" cy="60" r="5" fill="var(--gold)" />
    </>
  );
}

/* The large crown and the small one, dotted line between: dignity said first
   of the prince, of the rest by derivation — per prius et posterius. */
function BorrowedCrown() {
  return (
    <>
      <path className="grow" d="M48 52 L48 34 L60 44 L72 28 L84 44 L96 34 L96 52 Z"
        fill="none" stroke="var(--gold)" strokeWidth="2.2" strokeLinejoin="round" />
      <line x1="48" y1="52" x2="96" y2="52" stroke="var(--gold)" strokeWidth="2.2" />
      <path className="grow" d="M128 88 L128 78 L134 83 L140 74 L146 83 L152 78 L152 88 Z"
        fill="none" stroke="var(--gold-light)" strokeWidth="1.7" strokeLinejoin="round" />
      <line x1="128" y1="88" x2="152" y2="88" stroke="var(--gold-light)" strokeWidth="1.7" />
      <path className="grow-slow" d="M100 56 C 112 64, 118 70, 126 78"
        fill="none" stroke="var(--vermillion)" strokeWidth="1.2" strokeDasharray="3 4" />
    </>
  );
}

/* ————— v2 — M3-M8 vocabulary ————— */

/* Water held to the cup's line: act limited by the potency receiving it.
   The pour marks arrive, the level holds where the vessel says. */
function CupWater() {
  return (
    <>
      <path className="grow" d="M64 40 L68 96 C68 102 132 102 132 96 L136 40"
        fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <path className="fill-in" d="M70 68 C82 64 118 64 130 68 L128 95 C128 99 72 99 72 95 Z"
        fill="var(--gold-light)" opacity="0.85" />
      <path className="grow" d="M70 68 C82 64 118 64 130 68"
        fill="none" stroke="var(--gold)" strokeWidth="2" />
      <path className="grow-slow" d="M100 18 L100 56" stroke="var(--gold)" strokeWidth="1.4" strokeDasharray="3 4" fill="none" />
    </>
  );
}

/* Three lamps lit from one sun: participated being, had partially by many,
   pointing to the fullness that lends. */
function LampsOneSun() {
  return (
    <>
      <circle className="sun" cx="100" cy="24" r="12" fill="none" stroke="var(--gold)" strokeWidth="2" />
      <circle className="sun-core" cx="100" cy="24" r="6" fill="var(--gold)" />
      <path className="grow" d="M92 34 L52 78" fill="none" stroke="var(--gold-light)" strokeWidth="1.2" strokeDasharray="3 4" />
      <path className="grow" d="M100 38 L100 74" fill="none" stroke="var(--gold-light)" strokeWidth="1.2" strokeDasharray="3 4" />
      <path className="grow" d="M108 34 L148 78" fill="none" stroke="var(--gold-light)" strokeWidth="1.2" strokeDasharray="3 4" />
      <path className="leaf" d="M44 92 C44 82 60 82 60 92 Z" fill="none" stroke="var(--ink)" strokeWidth="1.8" />
      <path className="leaf" d="M92 88 C92 78 108 78 108 88 Z" fill="none" stroke="var(--ink)" strokeWidth="1.8" />
      <path className="leaf" d="M140 92 C140 82 156 82 156 92 Z" fill="none" stroke="var(--ink)" strokeWidth="1.8" />
      <circle className="leaf" cx="52" cy="86" r="2.5" fill="var(--gold-light)" />
      <circle className="leaf" cx="100" cy="82" r="2.5" fill="var(--gold)" />
      <circle className="leaf" cx="148" cy="86" r="2.5" fill="var(--gold-light)" />
    </>
  );
}

/* The sun with nothing receiving: esse subsistens, the unreceived act.
   Rays draw outward; no silhouette, no cup, no lamp. */
function SunAlone() {
  return (
    <>
      <circle className="sun" cx="100" cy="58" r="17" fill="none" stroke="var(--gold)" strokeWidth="2.2" />
      <circle className="sun-core" cx="100" cy="58" r="8.5" fill="var(--gold)" />
      <path className="grow" d="M100 30 L100 16" stroke="var(--gold-light)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path className="grow" d="M100 86 L100 100" stroke="var(--gold-light)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path className="grow" d="M128 58 L142 58" stroke="var(--gold-light)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path className="grow" d="M72 58 L58 58" stroke="var(--gold-light)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path className="grow" d="M120 38 L130 28" stroke="var(--gold-light)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path className="grow" d="M80 78 L70 88" stroke="var(--gold-light)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path className="grow" d="M120 78 L130 88" stroke="var(--gold-light)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path className="grow" d="M80 38 L70 28" stroke="var(--gold-light)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </>
  );
}

/* The seal above, the wax below carrying its impress: form determining
   matter — and, in the theology, the letter sealed and closed. */
function WaxSeal() {
  return (
    <>
      <rect className="leaf" x="82" y="14" width="36" height="14" rx="3" fill="var(--ink)" opacity="0.85" />
      <line x1="100" y1="28" x2="100" y2="44" stroke="var(--ink)" strokeWidth="2.4" opacity="0.85" />
      <path className="grow-slow" d="M100 46 L100 60" stroke="var(--vermillion)" strokeWidth="1.4" strokeDasharray="2 3" fill="none" />
      <ellipse cx="100" cy="82" rx="30" ry="14" fill="var(--vermillion)" opacity="0.22" />
      <ellipse className="grow" cx="100" cy="82" rx="30" ry="14" fill="none" stroke="var(--vermillion)" strokeWidth="1.8" />
      <path className="grow" d="M100 72 L103 79 L110 79 L104 84 L107 91 L100 87 L93 91 L96 84 L90 79 L97 79 Z"
        fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinejoin="round" />
    </>
  );
}

/* Three strata; the bottom one has no face of its own — materia prima,
   pure receivability under every actual layer. */
function StackBottom() {
  return (
    <>
      <rect className="leaf" x="52" y="28" width="96" height="18" rx="4" fill="none" stroke="var(--gold)" strokeWidth="2" />
      <circle className="leaf" cx="70" cy="37" r="3" fill="var(--gold)" />
      <rect className="leaf" x="52" y="52" width="96" height="18" rx="4" fill="none" stroke="var(--gold-light)" strokeWidth="1.8" />
      <circle className="leaf" cx="70" cy="61" r="3" fill="var(--gold-light)" />
      <rect className="fill-in" x="52" y="76" width="96" height="18" rx="4" fill="var(--ink)" opacity="0.16" />
      <rect className="grow" x="52" y="76" width="96" height="18" rx="4" fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeDasharray="4 4" />
    </>
  );
}

/* The mask held a little away from the face beneath: persona and natura,
   the role and the one whose role it is. */
function MaskFace() {
  return (
    <>
      <circle cx="78" cy="60" r="22" fill="var(--ink)" opacity="0.18" />
      <circle className="grow" cx="78" cy="60" r="22" fill="none" stroke="var(--ink)" strokeWidth="1.8" />
      <path className="grow" d="M118 34 C140 38 146 54 146 62 C146 74 138 86 122 88 C116 78 114 44 118 34 Z"
        fill="none" stroke="var(--gold)" strokeWidth="2.2" strokeLinejoin="round" />
      <circle className="leaf" cx="132" cy="54" r="3" fill="var(--gold)" />
      <path className="grow" d="M128 72 C132 75 138 75 141 72" fill="none" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round" />
      <path className="grow-slow" d="M102 60 L114 60" stroke="var(--vermillion)" strokeWidth="1.2" strokeDasharray="2 3" fill="none" />
    </>
  );
}

/* The column bearing the beam: suppositum, what stands under and carries —
   deeds rest on the bearer, not on the blueprint. */
function BearerColumn() {
  return (
    <>
      <line x1="30" y1="100" x2="170" y2="100" stroke="var(--border)" strokeWidth="1.5" />
      <rect className="grow" x="92" y="44" width="16" height="56" fill="none" stroke="var(--ink)" strokeWidth="2" />
      <line className="grow" x1="96" y1="50" x2="96" y2="94" stroke="var(--ink)" strokeWidth="0.8" opacity="0.5" />
      <line className="grow" x1="104" y1="50" x2="104" y2="94" stroke="var(--ink)" strokeWidth="0.8" opacity="0.5" />
      <rect className="leaf" x="86" y="36" width="28" height="8" rx="2" fill="var(--ink)" opacity="0.85" />
      <path className="grow" d="M46 30 L154 30" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle className="leaf" cx="60" cy="24" r="3" fill="var(--gold-light)" />
      <circle className="leaf" cx="100" cy="22" r="3.5" fill="var(--gold)" />
      <circle className="leaf" cx="140" cy="24" r="3" fill="var(--gold-light)" />
    </>
  );
}

/* One node dividing downward by differences: the Porphyrian descent,
   genus to species, the predicables at work. */
function PorphyryTree() {
  return (
    <>
      <circle className="leaf" cx="100" cy="20" r="6" fill="var(--gold)" />
      <path className="grow" d="M100 26 L64 52" fill="none" stroke="var(--ink)" strokeWidth="1.6" />
      <path className="grow" d="M100 26 L136 52" fill="none" stroke="var(--ink)" strokeWidth="1.6" />
      <circle className="leaf" cx="64" cy="58" r="5" fill="var(--gold-light)" />
      <circle className="leaf" cx="136" cy="58" r="5" fill="var(--gold-light)" />
      <path className="grow" d="M64 64 L46 88" fill="none" stroke="var(--ink)" strokeWidth="1.4" />
      <path className="grow" d="M64 64 L82 88" fill="none" stroke="var(--ink)" strokeWidth="1.4" />
      <path className="grow" d="M136 64 L118 88" fill="none" stroke="var(--ink)" strokeWidth="1.4" />
      <path className="grow" d="M136 64 L154 88" fill="none" stroke="var(--ink)" strokeWidth="1.4" />
      <circle className="leaf" cx="46" cy="93" r="4" fill="var(--vine-green)" />
      <circle className="leaf" cx="82" cy="93" r="4" fill="var(--vine-green)" />
      <circle className="leaf" cx="118" cy="93" r="4" fill="var(--vine-green)" />
      <circle className="leaf" cx="154" cy="93" r="4" fill="var(--vine-green)" />
    </>
  );
}

/* Two extremes joined through the middle ring: the syllogism's engine,
   the middle term linking what the conclusion then holds together. */
function LinkedRings() {
  return (
    <>
      <circle className="grow-ring" cx="64" cy="60" r="24" fill="none" stroke="var(--gold)" strokeWidth="2" />
      <circle className="grow-ring" cx="136" cy="60" r="24" fill="none" stroke="var(--gold)" strokeWidth="2" />
      <circle className="grow-ring" cx="100" cy="60" r="24" fill="none" stroke="var(--vermillion)" strokeWidth="1.6" strokeDasharray="4 4" />
      <circle className="leaf" cx="64" cy="60" r="4" fill="var(--gold)" />
      <circle className="leaf" cx="136" cy="60" r="4" fill="var(--gold)" />
    </>
  );
}

/* Beads on one thread: the transcendentals, distinct names strung on the
   single line of being, convertible wherever it runs. */
function BeadsThread() {
  return (
    <>
      <path className="grow" d="M22 72 C 60 44, 140 44, 178 72"
        fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
      <circle className="leaf" cx="52" cy="56" r="5.5" fill="var(--gold)" />
      <circle className="leaf" cx="84" cy="49" r="5.5" fill="var(--gold-light)" />
      <circle className="leaf" cx="116" cy="49" r="5.5" fill="var(--vine-green)" />
      <circle className="leaf" cx="148" cy="56" r="5.5" fill="var(--vermillion)" />
    </>
  );
}

/* The chisel at the block, power arriving through it from above: principal
   and instrumental cause, one cut belonging wholly to both. */
function ChiselHand() {
  return (
    <>
      <rect x="52" y="66" width="52" height="34" rx="2" fill="var(--ink)" opacity="0.18" />
      <rect className="grow" x="52" y="66" width="52" height="34" rx="2" fill="none" stroke="var(--ink)" strokeWidth="1.8" />
      <path className="grow" d="M148 22 L112 62" fill="none" stroke="var(--gold)" strokeWidth="2.6" strokeLinecap="round" />
      <path className="leaf" d="M112 62 L104 66 L108 72 Z" fill="var(--gold)" />
      <path className="grow-slow" d="M156 14 L150 20" stroke="var(--vermillion)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path className="grow-slow" d="M162 22 L154 26" stroke="var(--vermillion)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path className="grow" d="M98 74 C94 78 90 79 86 79" fill="none" stroke="var(--gold-light)" strokeWidth="1.3" strokeDasharray="2 3" />
    </>
  );
}

/* The arrow mid-flight on its arc toward the ring: tendency toward an end
   it does not know — the archer implied by the aim. */
function ArrowMark() {
  return (
    <>
      <path className="grow-slow" d="M28 88 C 64 58, 104 42, 142 38"
        fill="none" stroke="var(--gold-light)" strokeWidth="1.4" strokeDasharray="4 5" strokeLinecap="round" />
      <path className="grow" d="M96 52 L120 44" fill="none" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" />
      <path className="leaf" d="M120 44 L112 42 L115 50 Z" fill="var(--ink)" />
      <path className="leaf" d="M96 52 L90 48 L92 56 Z" fill="var(--ink)" opacity="0.7" />
      <circle className="grow-ring" cx="156" cy="36" r="13" fill="none" stroke="var(--vermillion)" strokeWidth="1.8" />
      <circle className="sun-core" cx="156" cy="36" r="4" fill="var(--vermillion)" />
    </>
  );
}

/* Two errands crossing at the marked point: chance as the intersection of
   aimed lines — real, and parasitic on the purposes it interrupts. */
function CrossingPaths() {
  return (
    <>
      <path className="grow" d="M24 96 C 60 76, 120 44, 168 26"
        fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
      <path className="grow" d="M24 30 C 66 42, 126 74, 168 94"
        fill="none" stroke="var(--vine-green)" strokeWidth="2" strokeLinecap="round" />
      <circle className="leaf" cx="168" cy="26" r="4" fill="var(--gold)" />
      <circle className="leaf" cx="168" cy="94" r="4" fill="var(--vine-green)" />
      <circle className="grow-ring" cx="97" cy="61" r="9" fill="none" stroke="var(--vermillion)" strokeWidth="1.5" strokeDasharray="2 3" />
    </>
  );
}

/* ————— v2 — Theologia ————— */

/* The ladder reaching the roof-line, light standing above it: reason's climb
   real to its ceiling, and what no ladder reaches descending as gift. */
function LadderLight() {
  return (
    <>
      <line x1="24" y1="40" x2="176" y2="40" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="5 4" />
      <line className="grow" x1="76" y1="104" x2="90" y2="42" stroke="var(--ink)" strokeWidth="2" />
      <line className="grow" x1="112" y1="104" x2="98" y2="42" stroke="var(--ink)" strokeWidth="2" />
      <line className="grow" x1="82" y1="88" x2="107" y2="88" stroke="var(--ink)" strokeWidth="1.6" />
      <line className="grow" x1="85" y1="72" x2="104" y2="72" stroke="var(--ink)" strokeWidth="1.6" />
      <line className="grow" x1="87" y1="56" x2="101" y2="56" stroke="var(--ink)" strokeWidth="1.6" />
      <circle className="sun" cx="94" cy="20" r="9" fill="none" stroke="var(--gold)" strokeWidth="1.8" />
      <circle className="sun-core" cx="94" cy="20" r="4.5" fill="var(--gold)" />
      <path className="grow-slow" d="M94 30 L94 40" stroke="var(--gold-light)" strokeWidth="1.4" strokeDasharray="2 3" fill="none" />
    </>
  );
}

/* Five roads from the valley floor converging on one sun: the quinque viae,
   five departures, one terminus. */
function FiveRoads() {
  return (
    <>
      <line x1="14" y1="104" x2="186" y2="104" stroke="var(--border)" strokeWidth="1.5" />
      <circle className="sun" cx="100" cy="26" r="12" fill="none" stroke="var(--gold)" strokeWidth="2" />
      <circle className="sun-core" cx="100" cy="26" r="6" fill="var(--gold)" />
      <path className="grow" d="M24 104 C 48 76, 74 50, 92 36" fill="none" stroke="var(--gold-light)" strokeWidth="1.6" strokeLinecap="round" />
      <path className="grow" d="M62 104 C 76 80, 88 56, 96 40" fill="none" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round" />
      <path className="grow" d="M100 104 L100 40" fill="none" stroke="var(--gold-deep)" strokeWidth="1.6" strokeLinecap="round" />
      <path className="grow" d="M138 104 C 124 80, 112 56, 104 40" fill="none" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round" />
      <path className="grow" d="M176 104 C 152 76, 126 50, 108 36" fill="none" stroke="var(--gold-light)" strokeWidth="1.6" strokeLinecap="round" />
    </>
  );
}

/* ---- Batch 2 additions (M9-M15). Same grammar, same seven .motif classes;
   no globals.css changes. Each keys a card in scholastica-distinction-cards-batch2.json. ---- */

/* The candle: an ink body, the flame in gold above the wick — heat is not a
   body but the act of a body; the soul the first act of the living whole. */
function CandleFlame() {
  return (
    <>
      <line x1="30" y1="104" x2="170" y2="104" stroke="var(--border)" strokeWidth="1.5" />
      <rect x="86" y="52" width="28" height="52" rx="2" fill="var(--ink)" opacity="0.85" />
      <line x1="100" y1="52" x2="100" y2="44" stroke="var(--ink)" strokeWidth="2" />
      <path className="fill-in" d="M100 44 C112 34 108 22 100 14 C92 22 88 34 100 44 Z" fill="var(--gold)" />
      <path className="grow" d="M100 44 C112 34 108 22 100 14 C92 22 88 34 100 44 Z"
        fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinejoin="round" />
      <circle className="leaf" cx="100" cy="34" r="3" fill="var(--gold-light)" />
    </>
  );
}

/* Three terraces ascending, each with a sparer sign of life — a vine-green
   leaf, a darting ink arc, a small gold ring: life divided in kind, not degree. */
function GradesOfLife() {
  return (
    <>
      <line x1="24" y1="98" x2="80" y2="98" stroke="var(--border)" strokeWidth="1.5" />
      <line x1="72" y1="72" x2="128" y2="72" stroke="var(--border)" strokeWidth="1.5" />
      <line x1="120" y1="46" x2="176" y2="46" stroke="var(--border)" strokeWidth="1.5" />
      <path className="leaf" d="M46 96 C40 86 54 82 54 92 C54 96 50 97 46 96 Z" fill="var(--vine-green)" />
      <path className="grow" d="M86 70 C96 56 108 60 116 68" fill="none" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" />
      <circle className="sun" cx="148" cy="30" r="9" fill="none" stroke="var(--gold)" strokeWidth="2" />
      <circle className="sun-core" cx="148" cy="30" r="3.5" fill="var(--gold)" />
    </>
  );
}

/* Five short paths converging through a doorway to one small framed image
   within: the senses' traffic inward, the phantasm shelved and kept. */
function InnerGallery() {
  return (
    <>
      <path className="grow" d="M22 40 L86 58" fill="none" stroke="var(--ink)" strokeWidth="1.4" strokeDasharray="3 4" />
      <path className="grow" d="M22 68 L86 62" fill="none" stroke="var(--ink)" strokeWidth="1.4" strokeDasharray="3 4" />
      <path className="grow" d="M22 96 L86 66" fill="none" stroke="var(--ink)" strokeWidth="1.4" strokeDasharray="3 4" />
      <path className="grow" d="M40 24 L88 56" fill="none" stroke="var(--ink)" strokeWidth="1.4" strokeDasharray="3 4" />
      <path className="grow" d="M40 108 L88 68" fill="none" stroke="var(--ink)" strokeWidth="1.4" strokeDasharray="3 4" />
      <path className="grow" d="M96 30 L96 94 C120 94 140 78 140 62 C140 46 120 30 96 30 Z"
        fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinejoin="round" />
      <rect className="fill-in" x="112" y="50" width="18" height="24" rx="1.5" fill="var(--gold)" opacity="0.22" />
      <rect className="leaf" x="112" y="50" width="18" height="24" rx="1.5" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
    </>
  );
}

/* A gold pentagon holding a lighter tetragon within: the higher form
   containing the lower virtually, one figure doing the work of both. */
function NestedFigures() {
  return (
    <>
      <path className="grow" d="M100 20 L156 60 L134 104 L66 104 L44 60 Z"
        fill="none" stroke="var(--gold)" strokeWidth="2.2" strokeLinejoin="round" />
      <rect className="grow" x="76" y="56" width="48" height="40" fill="none" stroke="var(--gold-light)" strokeWidth="1.6" strokeLinejoin="round" />
      <circle className="leaf" cx="100" cy="76" r="3" fill="var(--gold-light)" />
    </>
  );
}

/* One small object at the ground, three horizon lines rising, each with a
   sparer mark — a leaf, a bare circle, a point of gold: flesh, figure, being. */
function ThreeAltitudes() {
  return (
    <>
      <line x1="30" y1="104" x2="170" y2="104" stroke="var(--border)" strokeWidth="1.5" />
      <ellipse cx="100" cy="98" rx="8" ry="5.5" fill="var(--ink)" opacity="0.85" />
      <line x1="40" y1="80" x2="160" y2="80" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 5" />
      <path className="leaf" d="M96 78 C90 68 104 64 104 74 C104 78 100 79 96 78 Z" fill="var(--vine-green)" />
      <line x1="46" y1="54" x2="154" y2="54" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 5" />
      <circle className="leaf" cx="100" cy="48" r="5" fill="none" stroke="var(--ink)" strokeWidth="1.6" />
      <line x1="52" y1="28" x2="148" y2="28" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 5" />
      <circle className="leaf" cx="100" cy="22" r="3.5" fill="var(--gold)" />
    </>
  );
}

/* A window frame in ink, a small gold tree beyond it, the pane itself barely
   a stroke: that by which a thing is seen, never that which is seen. */
function WindowView() {
  return (
    <>
      <rect className="grow" x="60" y="24" width="80" height="80" fill="none" stroke="var(--ink)" strokeWidth="2.4" />
      <line className="grow" x1="100" y1="26" x2="100" y2="102" stroke="var(--ink)" strokeWidth="1.6" />
      <line className="grow" x1="62" y1="64" x2="138" y2="64" stroke="var(--ink)" strokeWidth="1.6" />
      <rect className="leaf" x="62" y="26" width="76" height="76" fill="var(--gold-light)" opacity="0.08" />
      <path className="grow-slow" d="M100 96 C100 80 97 70 102 60 C105 54 110 50 114 47"
        fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" />
      <circle className="leaf" cx="114" cy="47" r="4" fill="var(--gold)" />
      <circle className="leaf" cx="92" cy="72" r="3" fill="var(--gold-light)" />
    </>
  );
}

/* A small flame low in gold, its smoke rising in one drawn ink curl toward a
   waiting dot: the sign that hands a mind the thing it stands for. */
function SmokeFire() {
  return (
    <>
      <line x1="30" y1="104" x2="170" y2="104" stroke="var(--border)" strokeWidth="1.5" />
      <path className="fill-in" d="M60 104 C72 94 68 84 60 78 C52 84 48 94 60 104 Z" fill="var(--gold)" />
      <path className="grow" d="M60 104 C72 94 68 84 60 78 C52 84 48 94 60 104 Z"
        fill="none" stroke="var(--gold)" strokeWidth="1.6" strokeLinejoin="round" />
      <path className="grow-slow" d="M60 76 C60 62 84 58 80 42 C76 30 92 24 104 22"
        fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeDasharray="4 5" strokeLinecap="round" />
      <circle className="leaf" cx="108" cy="22" r="3.5" fill="var(--ink)" opacity="0.85" />
    </>
  );
}

/* One gold word-node above, three dotted descents to three unlike marks
   below: the same term standing now for the man, the nature, itself. */
function ThreeErrands() {
  return (
    <>
      <circle className="leaf" cx="100" cy="22" r="6" fill="var(--gold)" />
      <path className="grow" d="M96 28 L52 82" fill="none" stroke="var(--ink)" strokeWidth="1.3" strokeDasharray="3 4" />
      <path className="grow" d="M100 30 L100 82" fill="none" stroke="var(--ink)" strokeWidth="1.3" strokeDasharray="3 4" />
      <path className="grow" d="M104 28 L148 82" fill="none" stroke="var(--ink)" strokeWidth="1.3" strokeDasharray="3 4" />
      <circle className="leaf" cx="52" cy="90" r="4.5" fill="var(--vine-green)" />
      <rect className="leaf" x="94" y="86" width="12" height="12" fill="var(--gold-light)" />
      <path className="leaf" d="M148 84 L154 96 L142 96 Z" fill="var(--vermillion)" />
    </>
  );
}

/* From one dot, an easy gold curve to the near good and a steep line rising
   over an ink block to the far one: the pleasant good and the arduous. */
function TwoInclines() {
  return (
    <>
      <line x1="24" y1="100" x2="176" y2="100" stroke="var(--border)" strokeWidth="1.5" />
      <circle cx="34" cy="94" r="4" fill="var(--ink)" />
      <path className="grow" d="M34 94 C 56 90, 68 82, 80 74" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
      <circle className="leaf" cx="84" cy="72" r="5" fill="var(--gold-light)" />
      <rect x="108" y="76" width="26" height="22" fill="var(--ink)" opacity="0.2" />
      <path className="grow" d="M34 94 L120 30" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
      <circle className="leaf" cx="124" cy="26" r="5.5" fill="var(--gold)" />
    </>
  );
}

/* One sun above, its ray received on the creature's line, small channels cut
   downward, a second brighter ray descending apart: eternal, natural, human,
   divine law. */
function LawCascade() {
  return (
    <>
      <circle className="sun" cx="70" cy="24" r="12" fill="none" stroke="var(--gold)" strokeWidth="2" />
      <circle className="sun-core" cx="70" cy="24" r="5.5" fill="var(--gold)" />
      <path className="grow" d="M70 36 L70 62" fill="none" stroke="var(--gold-light)" strokeWidth="1.6" strokeDasharray="3 4" />
      <line x1="34" y1="64" x2="150" y2="64" stroke="var(--ink)" strokeWidth="2" />
      <path className="grow" d="M52 66 L52 92" fill="none" stroke="var(--vine-green)" strokeWidth="1.5" strokeLinecap="round" />
      <path className="grow" d="M72 66 L72 92" fill="none" stroke="var(--vine-green)" strokeWidth="1.5" strokeLinecap="round" />
      <path className="grow" d="M92 66 L92 92" fill="none" stroke="var(--vine-green)" strokeWidth="1.5" strokeLinecap="round" />
      <path className="grow" d="M150 18 L150 96" fill="none" stroke="var(--gold)" strokeWidth="2.2" strokeLinecap="round" />
      <circle className="sun-core" cx="150" cy="14" r="4" fill="var(--gold)" />
    </>
  );
}

/* A vine climbing its stake, the stem thickened in gold where tended, one
   thin pale side-shoot withering: repeated acts depositing a second nature. */
function HabitusVine() {
  return (
    <>
      <line x1="30" y1="104" x2="170" y2="104" stroke="var(--border)" strokeWidth="1.5" />
      <line x1="100" y1="104" x2="100" y2="20" stroke="var(--ink)" strokeWidth="2" opacity="0.7" />
      <path className="grow" d="M100 102 C88 92 112 82 100 72 C88 62 112 52 100 42 C92 34 104 28 100 22"
        fill="none" stroke="var(--gold)" strokeWidth="2.6" strokeLinecap="round" />
      <circle className="leaf" cx="100" cy="22" r="4.5" fill="var(--gold)" />
      <circle className="leaf" cx="108" cy="58" r="3.5" fill="var(--gold-light)" />
      <path className="grow-slow" d="M100 86 C82 84 72 78 64 74"
        fill="none" stroke="var(--vine-green)" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <circle className="leaf" cx="62" cy="74" r="2.5" fill="var(--vine-green)" opacity="0.45" />
    </>
  );
}

/* Two dots joined by a solid gold bar, two by a dotted stroke that lifts and
   fades: differences standing in the thing, and lines the mind draws. */
function MindsLine() {
  return (
    <>
      <circle cx="44" cy="44" r="5" fill="var(--gold)" />
      <circle cx="156" cy="44" r="5" fill="var(--gold)" />
      <path className="grow" d="M49 44 L151 44" fill="none" stroke="var(--gold)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="44" cy="86" r="5" fill="var(--ink)" opacity="0.85" />
      <circle cx="156" cy="86" r="5" fill="var(--ink)" opacity="0.85" />
      <path className="grow-slow" d="M49 86 C 80 86, 90 72, 151 78"
        fill="none" stroke="var(--vermillion)" strokeWidth="1.4" strokeDasharray="3 4" strokeLinecap="round" />
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
  'three-lanes': ThreeLanes,
  'sun-and-mirrors': SunAndMirrors,
  'ladder-of-ratios': LadderOfRatios,
  'carved-light': CarvedLight,
  'borrowed-crown': BorrowedCrown,
  'cup-water': CupWater,
  'lamps-one-sun': LampsOneSun,
  'sun-alone': SunAlone,
  'wax-seal': WaxSeal,
  'stack-bottom': StackBottom,
  'mask-face': MaskFace,
  'bearer-column': BearerColumn,
  'porphyry-tree': PorphyryTree,
  'linked-rings': LinkedRings,
  'beads-thread': BeadsThread,
  'chisel-hand': ChiselHand,
  'arrow-mark': ArrowMark,
  'crossing-paths': CrossingPaths,
  'ladder-light': LadderLight,
  'five-roads': FiveRoads,
  'candle-flame': CandleFlame,
  'grades-of-life': GradesOfLife,
  'inner-gallery': InnerGallery,
  'nested-figures': NestedFigures,
  'three-altitudes': ThreeAltitudes,
  'window-view': WindowView,
  'smoke-fire': SmokeFire,
  'three-errands': ThreeErrands,
  'two-inclines': TwoInclines,
  'law-cascade': LawCascade,
  'habitus-vine': HabitusVine,
  'minds-line': MindsLine,
};

export default function DistinctionMotif({ kind, on }: { kind?: string; on: boolean }) {
  // No motif assigned (some theology cards, e.g. T8/T14): render text-only, no
  // frame, rather than fall through to a mismatched default. (Preserved from
  // the live v1 component; v2 shipped without this guard.)
  if (!kind) return null;
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
