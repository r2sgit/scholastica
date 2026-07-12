/* ============================================================
   Portico — Coming-Soon thinkers (data)
   ============================================================
   The five Coming-Soon landing pages (Plato, Aristotle, Kant,
   Hegel, Nietzsche) are built to ONE uniform Scholastica-style
   structure (portico/portico-landing-page-spec.md), differentiated
   only by content and a subtle per-thinker accent color. All copy
   here is lifted / adapted from each thinker's concept doc
   ({thinker}/{thinker}-concept.md); the pages own only the staging.

   Accent: each thinker names a scoped wrapper class (see globals.css,
   ".portico-*") that redefines only the --gold token family — exactly
   the ".theologia-wing" pattern — so the reused Scholastica UI takes
   the accent with no layout, type, or component changes. */

export interface ThinkerModule {
  /** Roman numeral shown in the row's numeral slot (Scholastica idiom). */
  numeral: string;
  title: string;
  /** Primary-source citation, rendered in the italic label slot. */
  source: string;
  /** "What the learner gets" — the row blurb. */
  gets: string;
}

export interface Thinker {
  slug: string;
  /** Wrapper class carrying the accent token swap (globals.css). */
  accentClass: string;
  /** Evocative course title (concept-doc H1, before the colon). */
  sigil: string;
  /** The Scholastica-parallel headline ("Learn to think like…"). */
  headline: string;
  /** Act / placement line (concept-doc line 3), Coming-Soon trimmed off. */
  actLine: string;
  /** Hero description — the hook, one or two sentences. */
  description: string;
  /** The single vision paragraph, between hero and course (The Idea). */
  vision: string;
  /** Course-section heading, e.g. "Seven modules". */
  courseCount: string;
  /** Primary-sources sentence under the course heading. */
  courseSources: string;
  /** Optional closing line under the module list (the arc's end). */
  closing?: string;
  modules: ThinkerModule[];
}

export const THINKERS: Record<string, Thinker> = {
  plato: {
    slug: 'plato',
    accentClass: 'portico-plato',
    sigil: 'Out of the Cave',
    headline: 'Learn to think like Plato.',
    actLine: 'Act I · The Ascent · First rung of the interior ladder · Preamble to Augustine',
    description:
      'The Matrix was doing Plato. So was every “the real you is inside” story you have ever heard. Meet the original, climb the ladder as far as it goes, and end standing exactly where Augustine stood when grace finished the climb.',
    vision:
      'A warm, beautiful learning game that teaches you to think like Plato: the first man to argue, in public and with reasons, that the world you see is not the whole story. It runs on the proven engine behind Scholastica, the live Aquinas course, and it opens the platform’s first staircase. This is where the interior road begins — the soul notices the shadows, turns around, and starts to climb. Seven centuries later, Augustine reads the Platonists and weeps with recognition. This course is what he recognized.',
    courseCount: 'Seven modules',
    courseSources:
      'Primary sources: the Republic, the Meno, the Phaedo, and the Symposium, read in short excerpts (public-domain Jowett).',
    closing:
      'The arc ends at the Good, where Plato himself can say little more than “beyond being.” The interior road continues in Tolle Lege, the Augustine course.',
    modules: [
      { numeral: 'I', title: 'The Cave', source: 'Republic VII', gets: 'Shadows, the turn, the painful climb, and why the freed prisoner goes back down' },
      { numeral: 'II', title: 'The Divided Line', source: 'Republic VI', gets: 'Opinion and knowledge: why a true guess still is not knowing' },
      { numeral: 'III', title: 'Recollection', source: 'Meno · Phaedo', gets: 'A slave boy discovers geometry no one taught him; learning as remembering' },
      { numeral: 'IV', title: 'Eros and the Ladder', source: 'Symposium', gets: 'A dinner party on love, and the ascent from one beautiful face to Beauty itself' },
      { numeral: 'V', title: 'The Forms', source: 'Phaedo · Republic V–VII', gets: 'If Beauty itself is real, what else is? The boldest idea in philosophy, generalized' },
      { numeral: 'VI', title: 'The Good Beyond Being', source: 'Republic VI–VII', gets: 'The sun outside the cave: the source that makes everything else visible and real' },
      { numeral: 'VII', title: 'The Soul and Justice', source: 'Republic II–IV, IX', gets: 'Three parts, one order: justice as the soul in tune, and why the just life is the happy one' },
    ],
  },

  aristotle: {
    slug: 'aristotle',
    accentClass: 'portico-aristotle',
    sigil: 'What Things Are For',
    headline: 'Learn to think like Aristotle.',
    actLine: 'Act I · The Ascent · First rung of the empirical ladder · Preamble to Aquinas',
    description:
      'Every time you ask “yeah, but what’s it for?” you are being Aristotle. In the Summa, Aquinas does not even use his name; he writes “the Philosopher,” and everyone knew. Meet the man behind the common sense, and follow his last argument up to the exact rung where Aquinas picks up the climb.',
    vision:
      'A learning game that teaches you to think like Aristotle: Plato’s best student, who turned back to the world. He tutored Alexander the Great and dissected cuttlefish, and he treated both jobs the same way — look hard at the thing until you can say what it is made of, what shape it takes, what brought it about, and what it is for. Out of that patient looking he built the toolkit the West still thinks with, mostly without knowing it. Anyone who has played Scholastica will recognize every tool in it, because Aquinas borrowed all of them. This is where they came from.',
    courseCount: 'Seven modules',
    courseSources:
      'Primary sources: the Nicomachean Ethics and the Metaphysics, with the Physics and Categories supplying the tools.',
    closing:
      'The course ends where Scholastica begins. A learner who finishes it enters the Aquinas course already fluent in its instruments.',
    modules: [
      { numeral: 'I', title: 'The Four Causes', source: 'Physics II', gets: 'The four questions that unlock any thing: matter, form, maker, purpose' },
      { numeral: 'II', title: 'Act and Potency', source: 'Metaphysics IX', gets: 'The acorn and the oak: how change is possible at all' },
      { numeral: 'III', title: 'Substance and the Categories', source: 'Categories · Metaphysics VII', gets: 'What a thing is, versus what it merely has; why you survive a haircut' },
      { numeral: 'IV', title: 'Happiness', source: 'Nicomachean Ethics I', gets: 'What everything you do is ultimately for: a life, not a feeling' },
      { numeral: 'V', title: 'The Golden Mean', source: 'Nicomachean Ethics II', gets: 'Virtue as a learnable skill, aimed between too much and too little' },
      { numeral: 'VI', title: 'Friendship', source: 'Nicomachean Ethics VIII–IX', gets: 'The three kinds of friends, and the one kind that lasts' },
      { numeral: 'VII', title: 'The Unmoved Mover', source: 'Physics VIII · Metaphysics XII', gets: 'Following motion all the way up, to the argument Aquinas will finish' },
    ],
  },

  kant: {
    slug: 'kant',
    accentClass: 'portico-kant',
    sigil: 'The Tribunal of Reason',
    headline: 'Meet Kant at full strength.',
    actLine: 'Act II · The Challenge · A debater, not a formation course',
    description:
      'Most people saying “you can’t prove God, that’s just faith” are quoting Kant without knowing his name. Come see the actual argument, and the actual answer.',
    vision:
      'Act II begins here, and it begins politely. This is not a course that forms you into a Kantian; it is a staged disputation — the most consequential objection ever raised against Act I’s whole method, stated at full strength in Kant’s own words, then answered from the tradition. His claim: the mind only ever knows things as they appear to it, never as they are in themselves, so every proof that climbs from the world up to God reaches past the fence. If he is right, both ladders of Act I stand on air. The course gives him the floor, and then lets the tradition cross-examine.',
    courseCount: 'Six disputations',
    courseSources:
      'Primary sources: the Critique of Pure Reason, the Prolegomena, the Groundwork of the Metaphysics of Morals, and the Critique of Practical Reason, in short excerpts. Every module states Kant first and answers him inside the same module; the last is the full cross-examination.',
    modules: [
      { numeral: 'I', title: 'The Copernican Turn', source: 'Critique of Pure Reason, Preface', gets: 'His revolution: the mind shapes what it knows, and why he thought all prior metaphysics had failed' },
      { numeral: 'II', title: 'The Fence', source: 'Critique of Pure Reason · Prolegomena', gets: 'Phenomena and noumena: the island of truth and the stormy sea around it' },
      { numeral: 'III', title: 'The Proofs on Trial', source: 'Critique of Pure Reason, Dialectic', gets: 'His case that every road from the world to God overreaches, argued at full strength' },
      { numeral: 'IV', title: 'Duty', source: 'Groundwork', gets: 'The categorical imperative: morality without heaven, and what it costs' },
      { numeral: 'V', title: 'The Postulates', source: 'Critique of Practical Reason', gets: 'God, freedom, immortality readmitted as the moral life’s assumptions, not as knowledge' },
      { numeral: 'VI', title: 'The Disputation', source: 'Staged: Kant vs. Aristotle and Aquinas', gets: 'Does the fence hold? The Thomist reply in full, and the learner judges' },
    ],
  },

  hegel: {
    slug: 'hegel',
    accentClass: 'portico-hegel',
    sigil: 'The Owl at Dusk',
    headline: 'Meet Hegel at full strength.',
    actLine: 'Act II · The Challenge · A debater, not a formation course',
    description:
      'Every “right side of history,” every “thesis-antithesis-synthesis,” every master-slave dynamic in a seminar: that’s Hegel, usually secondhand. Come meet the source, then hear the tradition ask him one question — does history have a Judge, or is it one?',
    vision:
      'In October 1806, a young professor in Jena watched Napoleon ride through the occupied town and wrote to a friend that he had seen the world-soul on horseback. That sentence is the whole course. Hegel is the challenger who does not attack the cathedral and does not fence it off: he absorbs it. Reality, he says, is Spirit coming to know itself through history. Hegel thought he was completing Christianity; the tradition says he dissolved the Creator into the creation. This course stages that dispute at full strength — not a formation into Hegel, a meeting with him.',
    courseCount: 'Seven disputations',
    courseSources:
      'Primary sources: the Phenomenology of Spirit, the Lectures on the Philosophy of History, and the Philosophy of Right, in short excerpts.',
    modules: [
      { numeral: 'I', title: 'The World-Soul on Horseback', source: 'Letters · Phenomenology, Preface', gets: 'Jena, 1806: the scene, the man, and the claim that truth unfolds' },
      { numeral: 'II', title: 'The Dialectic', source: 'Phenomenology, Preface · Encyclopaedia Logic', gets: 'How thought moves through contradiction, and why he thought nothing stands still' },
      { numeral: 'III', title: 'Master and Slave', source: 'Phenomenology IV', gets: 'The most famous pages he wrote: recognition, struggle, and the slave who builds the world' },
      { numeral: 'IV', title: 'Spirit', source: 'Phenomenology · Encyclopaedia', gets: 'Geist: reality coming to know itself, and where you fit in that story' },
      { numeral: 'V', title: 'The Cunning of Reason', source: 'Philosophy of History, Introduction', gets: 'History uses its actors: passion as the plot’s raw material' },
      { numeral: 'VI', title: 'Freedom and the Owl', source: 'Philosophy of History · Philosophy of Right, Preface', gets: 'One free, some free, all free; and why philosophy arrives only at dusk' },
      { numeral: 'VII', title: 'The Disputation', source: 'Staged: Hegel vs. Augustine and Aquinas', gets: 'Creator or process? Two cities or one Spirit? The tradition’s answer in full, and the learner judges' },
    ],
  },

  nietzsche: {
    slug: 'nietzsche',
    accentClass: 'portico-nietzsche',
    sigil: 'The Hammer',
    headline: 'Meet Nietzsche at full strength.',
    actLine: 'Act II · The Challenge · A debater, not a formation course',
    description:
      'Everyone quotes “what doesn’t kill me makes me stronger” and “God is dead.” Almost no one has met the argument. Here you actually fight him, and see whether the tradition can take the punch.',
    vision:
      'The most dangerous course on the platform, built on one conviction: the tradition’s most powerful enemy deserves to be met at full strength, and can be. Nietzsche’s charge is total — Christian virtue, he says, is weakness wearing a costume, invented by history’s losers to shame the strong, and the whole table of values must be overturned. The course does not soften him, and it does not form you into him. It stages the fight: Nietzsche at his strongest, the tradition’s answer at its strongest, and you in the middle, arguing both.',
    courseCount: 'Eight rounds',
    courseSources:
      'Eight modules, staged as a fight in rounds. Primary sources: The Gay Science, On the Genealogy of Morals, Beyond Good and Evil, and Thus Spoke Zarathustra, in short excerpts.',
    modules: [
      { numeral: 'I', title: 'The Madman', source: 'The Gay Science §125', gets: '“God is dead”: the actual scene, the actual audience, and what he actually meant' },
      { numeral: 'II', title: 'The Genealogist', source: 'Genealogy of Morals I', gets: 'Where “good” and “evil” came from: morality gets a history' },
      { numeral: 'III', title: 'Masters and Slaves', source: 'Genealogy I · Beyond Good and Evil', gets: 'The two moralities, and his story of how the weaker one won' },
      { numeral: 'IV', title: 'Ressentiment', source: 'Genealogy I', gets: 'The revenge of the powerless: humility indicted as disguised hatred' },
      { numeral: 'V', title: 'The Will to Power', source: 'Beyond Good and Evil', gets: 'The single drive he finds under every ideal, including yours' },
      { numeral: 'VI', title: 'The Heaviest Weight', source: 'The Gay Science §341', gets: 'Eternal recurrence: the test of whether you love your life or flee it' },
      { numeral: 'VII', title: 'The Übermensch', source: 'Thus Spoke Zarathustra', gets: 'After God: the one who creates values, and the tightrope over the market square' },
      { numeral: 'VIII', title: 'The Disputation', source: 'Staged: Nietzsche vs. Augustine and Aquinas', gets: 'Humility: holiness or ressentiment? A real Good, or only power? The learner argues both sides' },
    ],
  },
};

/** Nav order for the shared Thinkers bar (the five Coming-Soon pages). */
export const THINKER_ORDER = ['plato', 'aristotle', 'kant', 'hegel', 'nietzsche'] as const;
