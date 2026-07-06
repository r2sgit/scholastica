// content/courseMap.ts
// Single source for the course map: the 18-module skeleton with act
// structure, blurbs, and built flags. Built modules carry their lesson
// data in content/modules/*; this file routes by the same ids.
// Titles + Latin subs are canonical, kept exactly. Act kicker/sub and
// per-module `aim` blurbs are the home-page-register copy inherited
// VERBATIM from R2's 2026-06-14 tone pass (scholastica-modules-v2-prototype,
// gamification v2 B5) — the warmth lives here, not in the titles.

export interface ActMeta {
  act: 1 | 2 | 3 | 4;
  /** Spelled, no glyph numeral (the blackletter I reads as J): "act one · five modules" */
  kicker: string;
  title: string;
  sub: string;
}

export interface CourseMapEntry {
  id: number;          // content module id (row index; matches MODULES ids)
  numeral: string;
  title: string;
  latin: string;
  act: 1 | 2 | 3 | 4;
  aim: string;
  built: boolean;
  destination?: boolean;
}

export const ACTS: ActMeta[] = [
  {
    act: 1,
    kicker: 'act one · five modules',
    title: 'Formation',
    sub: 'The felt sense of the whole system, one distinction at a time. No vocabulary you have not earned.',
  },
  {
    act: 2,
    kicker: 'act two · three modules',
    title: 'Tools',
    sub: 'Logic, the transcendentals, the four causes: the instruments the rest of the course argues with.',
  },
  {
    act: 3,
    kicker: 'act three · five modules',
    title: 'The Human Person',
    sub: 'The system turns and looks at you: soul, intellect, signs, will, law.',
  },
  {
    act: 4,
    kicker: 'act four · five modules',
    title: 'Depth and Destination',
    sub: "Virtues, analogy, the Summa's own method, and the debate that is still running.",
  },
];

export const COURSE_MAP: CourseMapEntry[] = [
  { id: 1,  numeral: 'I',     title: 'Foundations',                      latin: 'Fundamenta',             act: 1, built: true,
    aim: 'Seven distinctions. Get these in hand and the rest of Aquinas stops being a fog and starts being a map.' },
  { id: 2,  numeral: 'II',    title: 'Act and Potency',                  latin: 'Actus et Potentia',      act: 1, built: true,
    aim: 'Why a log can burn before it does. The single idea Aquinas leans on more than any other.' },
  { id: 3,  numeral: 'III',   title: 'Being and Essence',                latin: 'Esse et Essentia',       act: 1, built: true,
    aim: 'What a thing is, and the sheer fact that it is. The gap between those two is where everything happens.' },
  { id: 4,  numeral: 'IV',    title: 'Hylomorphism',                     latin: 'Hylemorphismus',         act: 1, built: true,
    aim: 'Why a statue is neither the bronze nor the shape, but both at once. What everything physical is made of.' },
  { id: 5,  numeral: 'V',     title: 'Substance, Suppositum, Person',    latin: 'Suppositum et Persona',  act: 1, built: true,
    aim: 'What makes a someone a someone, and not merely a something. The difference matters more than it sounds.' },
  { id: 6,  numeral: 'VI',    title: 'Logic',                            latin: 'Logica',                 act: 2, built: true,
    aim: 'The rules of a fair fight for ideas, and how to tell an argument that proves from one that merely persuades.' },
  { id: 7,  numeral: 'VII',   title: 'The Transcendentals',              latin: 'Transcendentalia',       act: 2, built: true,
    aim: 'True, good, one, and beautiful are not bonus features bolted onto things. They come with existing at all.' },
  { id: 8,  numeral: 'VIII',  title: 'The Four Causes',                  latin: 'Quattuor Causae',        act: 2, built: true,
    aim: 'Four different questions you can ask about anything, and why "what caused it" was never just one question.' },
  { id: 9,  numeral: 'IX',    title: 'The Soul and Its Faculties',       latin: 'De Anima',               act: 3, built: true,
    aim: 'Not a ghost in the machine. What it actually means to be alive, to sense, and to think.' },
  { id: 10, numeral: 'X',     title: 'Intellect and Knowledge',          latin: 'Intellectus et Cognitio', act: 3, built: true,
    aim: 'How a mind made of matter comes to hold things that are not matter at all. The strange trick of knowing.' },
  { id: 11, numeral: 'XI',    title: 'Semiotics',                        latin: 'De Signis',              act: 3, built: true,
    aim: 'How a sound, a mark, or a gesture comes to mean something. Older and stranger than you would guess.' },
  { id: 12, numeral: 'XII',   title: 'Will, Appetite, and the Passions', latin: 'Voluntas et Passiones',  act: 3, built: true,
    aim: 'Why you want what you want, and whether you are as free as you feel in the moment you choose.' },
  { id: 13, numeral: 'XIII',  title: 'Natural Law and the Human Act',    latin: 'Lex Naturalis',          act: 3, built: true,
    aim: 'How a good act and a bad one actually differ, and where the rule comes from in the first place.' },
  { id: 14, numeral: 'XIV',   title: 'Virtues and Habits',               latin: 'De Virtutibus',          act: 4, built: true,
    aim: 'You become what you repeatedly do. The craft of growing into someone who does the right thing easily.' },
  { id: 15, numeral: 'XV',    title: 'The Grammar of Distinctions',      latin: 'Distinctiones',          act: 4, built: true,
    aim: "The master tool itself: how to split a problem cleanly so both halves stay true. Aquinas' signature move." },
  { id: 16, numeral: 'XVI',   title: 'Analogy of Being',                 latin: 'Analogia Entis',         act: 4, built: true,
    aim: 'How one little word, "is", stretches from a rock to an angel to God without snapping or going vague.' },
  { id: 17, numeral: 'XVII',  title: 'Method of the Summa',              latin: 'Modus Summae',           act: 4, built: true,
    aim: 'Why the greatest work of theology is built as ten thousand questions, each one argued against itself first.' },
  { id: 18, numeral: 'XVIII', title: 'Existential Thomism — The Debate', latin: 'De Esse',                act: 4, built: true, destination: true,
    aim: 'The family argument: when modern Thomists reread the master, did they find his depths, or lose them?' },
];

export function getCourseEntry(id: number): CourseMapEntry | undefined {
  return COURSE_MAP.find(e => e.id === id);
}
