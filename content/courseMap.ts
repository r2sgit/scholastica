// content/courseMap.ts
// Single source for the course map: the 18-module skeleton with act
// structure, hover aims, and built flags. Built modules carry their
// lesson data in content/modules/*; this file routes by the same ids.
// Copy (titles, Latin, act labels/subtitles, aims) is verbatim from
// scholastica-module-map-v2-mockup.html.

export interface ActMeta {
  act: 1 | 2 | 3 | 4;
  latin: string;
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
    latin: 'Actus Primus',
    title: 'Formation',
    sub: 'The whole system, felt before it is argued. Seven distinctions and the grid that carries them.',
  },
  {
    act: 2,
    latin: 'Actus Secundus',
    title: 'Tools',
    sub: 'The instruments of inference and the breadth of being.',
  },
  {
    act: 3,
    latin: 'Actus Tertius',
    title: 'The Human Person',
    sub: 'The system turned on the one applying it: soul, mind, signs, will, law.',
  },
  {
    act: 4,
    latin: 'Actus Quartus',
    title: 'Depth & Destination',
    sub: 'Virtue, precision, analogy, method — and the debate the whole course was built to let you follow.',
  },
];

export const COURSE_MAP: CourseMapEntry[] = [
  { id: 0,  numeral: 'I',     title: 'Foundations',                      latin: 'Fundamenta',             act: 1, built: true,
    aim: 'Seven distinctions you need in hand before any argument will sit still.' },
  { id: 1,  numeral: 'II',    title: 'Act and Potency',                  latin: 'Actus et Potentia',      act: 1, built: true,
    aim: 'The master key: the marble, the acorn, and the First Way.' },
  { id: 2,  numeral: 'III',   title: 'Being and Essence',                latin: 'Esse et Essentia',       act: 1, built: true,
    aim: 'The real distinction: what a thing is never tells you that it is.' },
  { id: 3,  numeral: 'IV',    title: 'Hylomorphism',                     latin: 'Hylemorphismus',         act: 1, built: false,
    aim: 'Matter and form: the grid goes physical, down to the bottom of the stack.' },
  { id: 4,  numeral: 'V',     title: 'Substance, Suppositum, Person',    latin: 'Suppositum et Persona',  act: 1, built: false,
    aim: "From the apple's properties to the one who bears a nature: you." },
  { id: 5,  numeral: 'VI',    title: 'Logic',                            latin: 'Logica',                 act: 2, built: true,
    aim: 'Predicables, predicaments, demonstration — what makes arguments walk.' },
  { id: 6,  numeral: 'VII',   title: 'The Transcendentals',              latin: 'Transcendentalia',       act: 2, built: false,
    aim: 'The words that follow being everywhere — and the beautiful dispute.' },
  { id: 7,  numeral: 'VIII',  title: 'The Four Causes',                  latin: 'Quattuor Causae',        act: 2, built: false,
    aim: 'Four whys, including the one modern science banned.' },
  { id: 8,  numeral: 'IX',    title: 'The Soul and Its Faculties',       latin: 'De Anima',               act: 3, built: false,
    aim: 'Not a ghost in a machine. What the corpse is missing.' },
  { id: 9,  numeral: 'X',     title: 'Intellect and Knowledge',          latin: 'Intellectus et Cognitio', act: 3, built: false,
    aim: 'Knowing is not eating: how the mind becomes the other, as other.' },
  { id: 10, numeral: 'XI',    title: 'Semiotics',                        latin: 'De Signis',              act: 3, built: false,
    aim: 'Signs you look at, and the sign you look through.' },
  { id: 11, numeral: 'XII',   title: 'Will, Appetite, and the Passions', latin: 'Voluntas et Passiones',  act: 3, built: false,
    aim: 'Two kinds of wanting, eleven passions, and why none of them are sins.' },
  { id: 12, numeral: 'XIII',  title: 'Natural Law and the Human Act',    latin: 'Lex Naturalis',          act: 3, built: true,
    aim: 'The coffee cup, the conscience, and the law you already know.' },
  { id: 13, numeral: 'XIV',   title: 'Virtues and Habits',               latin: 'De Virtutibus',          act: 4, built: false,
    aim: 'What practice builds. Your vine has been teaching this all along.' },
  { id: 14, numeral: 'XV',    title: 'The Grammar of Distinctions',      latin: 'Distinctiones',          act: 4, built: false,
    aim: "The referee's toolkit: every kind of distinction, named and drilled." },
  { id: 15, numeral: 'XVI',   title: 'Analogy of Being',                 latin: 'Analogia Entis',         act: 4, built: false,
    aim: 'How one word can be true of God and of breakfast without lying.' },
  { id: 16, numeral: 'XVII',  title: 'Method of the Summa',              latin: 'Modus Summae',           act: 4, built: false,
    aim: 'Read Aquinas unassisted. The objections are friends.' },
  { id: 17, numeral: 'XVIII', title: 'Existential Thomism — The Debate', latin: 'De Esse',                act: 4, built: true, destination: true,
    aim: 'The destination: a live disputation, a fair fight, and a verdict you can defend.' },
];

export function getCourseEntry(id: number): CourseMapEntry | undefined {
  return COURSE_MAP.find(e => e.id === id);
}
