// content/courseMap.ts
// Single source for the course map: the 18-module skeleton with act
// structure, blurbs, and built flags. Built modules carry their lesson
// data in content/modules/*; this file routes by the same ids.
// Titles + Latin subs are canonical, kept exactly. Act kicker/sub and
// per-module `aim` blurbs carry the plainspoken register from
// scholastica-map-copy-v4.md (RD7, 2026-07-10) — descriptive, guiding, no
// cleverness, answering one question per module: what will I learn here.
// This replaced the 6/14 tone pass at R2's direction.

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
    sub: 'Start here. Five modules on the ideas everything else is built from: what it means to exist, to change, to be made of something, and to be someone.',
  },
  {
    act: 2,
    kicker: 'act two · three modules',
    title: 'Tools',
    sub: 'Three modules on how to reason carefully: what makes an argument good, what is true of everything that exists, and the four questions you can ask about anything.',
  },
  {
    act: 3,
    kicker: 'act three · five modules',
    title: 'The Human Person',
    sub: 'Five modules about you: what a soul is, how the mind comes to know, how words carry meaning, how choices are made, and where right and wrong come from.',
  },
  {
    act: 4,
    kicker: 'act four · five modules',
    title: 'Depth and Destination',
    sub: 'Five modules that take you the rest of the way: how virtues grow, how we can speak about God at all, how the Summa itself is built, and one famous argument that never ended.',
  },
];

export const COURSE_MAP: CourseMapEntry[] = [
  { id: 1,  numeral: 'I',     title: 'Foundations',                      latin: 'Fundamenta',             act: 1, built: true,
    aim: 'The seven basic distinctions the whole course uses. Learn these first and everything Aquinas says afterward gets easier to follow.' },
  { id: 2,  numeral: 'II',    title: 'Act and Potency',                  latin: 'Actus et Potentia',      act: 1, built: true,
    aim: 'How change works: everything real is stretched between what it already is and what it can still become. Aquinas uses this idea more than any other.' },
  { id: 3,  numeral: 'III',   title: 'Being and Essence',                latin: 'Esse et Essentia',       act: 1, built: true,
    aim: 'The difference between what a thing is and the fact that it exists at all. That gap runs through everything Aquinas wrote.' },
  { id: 4,  numeral: 'IV',    title: 'Hylomorphism',                     latin: 'Hylemorphismus',         act: 1, built: true,
    aim: "What physical things are made of: matter and form together. Why a statue is more than its bronze, and you are more than your body's parts." },
  { id: 5,  numeral: 'V',     title: 'Substance, Suppositum, Person',    latin: 'Suppositum et Persona',  act: 1, built: true,
    aim: 'What makes something an individual, and what makes an individual a person. The vocabulary for talking about who, not just what.' },
  { id: 6,  numeral: 'VI',    title: 'Logic',                            latin: 'Logica',                 act: 2, built: true,
    aim: 'How arguments work: what follows from what, and how to tell an argument that proves something from one that merely persuades.' },
  { id: 7,  numeral: 'VII',   title: 'The Transcendentals',              latin: 'Transcendentalia',       act: 2, built: true,
    aim: 'Some things are true of everything that exists: every being is one, true, and good. What that means, and what it changes.' },
  { id: 8,  numeral: 'VIII',  title: 'The Four Causes',                  latin: 'Quattuor Causae',        act: 2, built: true,
    aim: 'The four questions you can ask about anything: what is it made of, what shape does it take, what brought it about, and what is it for.' },
  { id: 9,  numeral: 'IX',    title: 'The Soul and Its Faculties',       latin: 'De Anima',               act: 3, built: true,
    aim: 'What a soul is: not a ghost inside you, but what makes a living thing alive. Plants, animals, and you, in one connected account.' },
  { id: 10, numeral: 'X',     title: 'Intellect and Knowledge',          latin: 'Intellectus et Cognitio', act: 3, built: true,
    aim: 'How knowing works: how the mind takes in the world and comes to hold what things are, not just how they look.' },
  { id: 11, numeral: 'XI',    title: 'Semiotics',                        latin: 'De Signis',              act: 3, built: true,
    aim: 'How signs work: how a sound, a mark, or a gesture comes to mean something, and what meaning actually is.' },
  { id: 12, numeral: 'XII',   title: 'Will, Appetite, and the Passions', latin: 'Voluntas et Passiones',  act: 3, built: true,
    aim: 'Why you want what you want: desire, emotion, and choice, and how free you really are in the moment you decide.' },
  { id: 13, numeral: 'XIII',  title: 'Natural Law and the Human Act',    latin: 'Lex Naturalis',          act: 3, built: true,
    aim: 'Where right and wrong come from: what makes an act good or bad, and why the rule is written into what we are.' },
  { id: 14, numeral: 'XIV',   title: 'Virtues and Habits',               latin: 'De Virtutibus',          act: 4, built: true,
    aim: 'How character is built: repeated choices become habits, and good habits become virtues. The craft of becoming someone who does the right thing easily.' },
  { id: 15, numeral: 'XV',    title: 'The Grammar of Distinctions',      latin: 'Distinctiones',          act: 4, built: true,
    aim: "Aquinas's signature skill: when a question traps you, split it in two so that both halves come out true. This module teaches you the move itself." },
  { id: 16, numeral: 'XVI',   title: 'Analogy of Being',                 latin: 'Analogia Entis',         act: 4, built: true,
    aim: 'How the word "is" can apply to a rock, a person, and God without meaning the same thing each time, and without going vague.' },
  { id: 17, numeral: 'XVII',  title: 'Method of the Summa',              latin: 'Modus Summae',           act: 4, built: true,
    aim: 'How the Summa is built: every topic framed as a question, the strongest objections stated first, then answered. Learn to read it the way it was written.' },
  { id: 18, numeral: 'XVIII', title: 'Existential Thomism: The Debate',  latin: 'De Esse',                act: 4, built: true, destination: true,
    aim: 'A modern debate about what Aquinas really meant by existence, and why some of his best readers disagree. By now you know enough to follow it.' },
];

export function getCourseEntry(id: number): CourseMapEntry | undefined {
  return COURSE_MAP.find(e => e.id === id);
}
