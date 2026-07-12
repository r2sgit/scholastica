/* ============================================================
   Portico — Coming-Soon class pages (data)
   ============================================================
   The five Coming-Soon class pages (Plato, Aristotle, Kant, Hegel,
   Nietzsche), each a standalone "class." Copy is VERBATIM from
   portico/portico-class-pages-copy-and-spec.md (Fable, v1.0) — do not
   rewrite in the wiring pass. Design/type/color per that doc's Part 2
   and the reference mock (portico-class-page-reference-mock-nietzsche.html).

   Module counts follow the corrected architecture: the cross-thinker
   Disputation was pulled from the individual courses into the Arena
   (portico-arena-architecture.md), so Kant is 5 and Hegel is 6, and
   Nietzsche is 7 (build spec §4). Plato and Aristotle are 7 each.

   Accent: each class names a scoped wrapper class (globals.css,
   ".portico-*") that sets --accent / --accent-text to the class hex
   (spec §E, verified AA). One token, no layout or type changes. */

export interface ThinkerMove {
  name: string;
  text: string;
}

export interface ThinkerModule {
  /** Roman numeral (Emeritus numeral slot). */
  numeral: string;
  title: string;
  /** Primary-source citation (meta italic slot). */
  source: string;
  /** Row teaser. */
  teaser: string;
}

export interface Thinker {
  slug: string;
  /** Wrapper class carrying the accent token swap (globals.css). */
  accentClass: string;
  /** Thinker-name pill above the headline. */
  pill: string;
  /** Class title (metadata / page title; not shown in the hero body). */
  title: string;
  headline: string;
  subhead: string;
  /** The single vision paragraph, between hero and hook. */
  vision: string;
  /** The hook pull-line (band). */
  hook: string;
  /** "What you will learn to do" — the moves. */
  moves: ThinkerMove[];
  /** Course-section h2, e.g. "Seven modules". */
  courseCount: string;
  /** The card's italic intro line (the count phrase lives in courseCount). */
  courseIntro: string;
  modules: ThinkerModule[];
  /** Under-button line at both CTAs. */
  ctaSubline: string;
}

export const THINKERS: Record<string, Thinker> = {
  plato: {
    slug: 'plato',
    accentClass: 'portico-plato',
    pill: 'Plato',
    title: 'Out of the Cave',
    headline: 'What if everything you see is a shadow?',
    subhead:
      'Climb with the man who drew the map. By the end you can tell what you know from what you merely believe.',
    vision:
      'Plato was the first man to argue, in public and with reasons, that the world you see is not the whole story. He did not write textbooks; he wrote drama: dinner parties, trials, a teacher who annoyed a city into killing him. This class seats you inside those scenes and lets Socrates work on you the way he worked on the general and the poet. You will not be told what the Forms are. You will be asked, until you see them.',
    hook:
      'The Matrix was doing Plato. So is every story where the hero learns the world is a lie. Meet the original.',
    moves: [
      { name: 'Turn around.', text: "The Cave's real lesson: truth begins not with new information but with a turn of the whole person. The turn hurts before it frees." },
      { name: 'Hunt the thing itself.', text: 'Asked what courage is, a general lists brave deeds. Socrates asks again. Learn what he is asking for.' },
      { name: 'Sort knowledge from opinion.', text: 'A true guess is still a guess. The Divided Line shows what knowing would actually take.' },
      { name: 'Trust the jolt.', text: 'The shock of recognizing a truth nobody taught you. He thinks that jolt is a clue about what you are.' },
      { name: 'Follow beauty upward.', text: 'From one beautiful face, to beautiful souls, to Beauty itself: love as a ladder instead of a trap.' },
    ],
    courseCount: 'Seven modules',
    courseIntro: 'Read in short passages from the dialogues themselves.',
    modules: [
      { numeral: 'I', title: 'The Cave', source: 'Republic VII', teaser: 'Shadows, chains, a fire, a climb. And the strangest part: why does the freed man go back down?' },
      { numeral: 'II', title: 'The Divided Line', source: 'Republic VI', teaser: 'You are sure of many things. Which of them do you actually know?' },
      { numeral: 'III', title: 'Recollection', source: 'Meno, Phaedo', teaser: 'A slave boy discovers geometry nobody taught him. Where did it come from?' },
      { numeral: 'IV', title: 'Eros and the Ladder', source: 'Symposium', teaser: 'A dinner party on love, and the ascent from one beautiful face to Beauty itself.' },
      { numeral: 'V', title: 'The Forms', source: 'Phaedo, Republic V to VII', teaser: 'If Beauty itself is real, what else is? The boldest idea in philosophy, taken seriously.' },
      { numeral: 'VI', title: 'The Good Beyond Being', source: 'Republic VI to VII', teaser: 'The sun outside the cave. At the summit he goes quiet, and you will see why.' },
      { numeral: 'VII', title: 'The Soul and Justice', source: 'Republic II to IV, IX', teaser: 'Three parts, one right order. Justice as a soul in tune, long before it is a law.' },
    ],
    ctaSubline: 'Be there the day the chains come off.',
  },

  aristotle: {
    slug: 'aristotle',
    accentClass: 'portico-aristotle',
    pill: 'Aristotle',
    title: 'What Things Are For',
    headline: 'You already think like Aristotle. Learn to do it on purpose.',
    subhead:
      'By the end you can unlock any object with four questions, and answer the biggest one: what is a life for?',
    vision:
      'Aristotle was Plato’s best student, and he turned back to the world. He tutored Alexander the Great and dissected cuttlefish, and he treated both jobs the same way: look hard at the thing until you can say what it is made of, what shape it takes, what brought it about, and what it is for. Out of that patient looking he built the toolkit the West still thinks with, mostly without knowing it. This class makes the invisible toolkit visible, one move at a time, every abstraction earned from an object you can hold.',
    hook:
      'You have been using his toolkit your whole life. Meet the man who made it.',
    moves: [
      { name: 'Ask the four questions.', text: 'What is it made of, what shape is it, what brought it here, what is it for. Any object on your desk, unlocked.' },
      { name: 'See the oak in the acorn.', text: 'Potential is real. Change stops being magic the moment you can name what a thing could become.' },
      { name: 'Survive a haircut.', text: 'What a thing is, versus what it happens to have. Substance and accident, learned in one joke.' },
      { name: 'Practice virtue like a craft.', text: 'Courage is learned the way carpentry is learned: by doing it, aimed between too much and too little.' },
      { name: 'Sort your friendships.', text: 'Useful, pleasant, good. Why only the third kind survives a bad year.' },
    ],
    courseCount: 'Seven modules',
    courseIntro: 'Argued from things you can pick up: an acorn, a bronze statue, a friend who moved away.',
    modules: [
      { numeral: 'I', title: 'The Four Causes', source: 'Physics II', teaser: 'Four questions that unlock any thing. He found them by looking harder than anyone had.' },
      { numeral: 'II', title: 'Act and Potency', source: 'Metaphysics IX', teaser: 'The acorn and the oak: how change is possible at all.' },
      { numeral: 'III', title: 'Substance and the Categories', source: 'Categories, Metaphysics VII', teaser: 'Why you survive a haircut, and what that tells you about everything else.' },
      { numeral: 'IV', title: 'Happiness', source: 'Nicomachean Ethics I', teaser: 'Not a mood: a whole life doing its proper work well. And he shows you the work.' },
      { numeral: 'V', title: 'The Golden Mean', source: 'Nicomachean Ethics II', teaser: 'Virtue as a learnable skill, aimed between too much and too little.' },
      { numeral: 'VI', title: 'Friendship', source: 'Nicomachean Ethics VIII to IX', teaser: 'The three kinds of friends, and the one kind that lasts.' },
      { numeral: 'VII', title: 'The Unmoved Mover', source: 'Physics VIII, Metaphysics XII', teaser: 'Follow motion all the way up, to something that moves all things without being moved.' },
    ],
    ctaSubline: 'Be told when the workshop opens.',
  },

  kant: {
    slug: 'kant',
    accentClass: 'portico-kant',
    pill: 'Kant',
    title: 'The Tribunal of Reason',
    headline: 'Meet the man who put reason itself on trial.',
    subhead:
      'He redrew the limits of what anyone can know. By the end you can walk the whole fence line, step by numbered step.',
    vision:
      'Immanuel Kant was a small, punctual professor in Königsberg; neighbors were said to set their clocks by his afternoon walk. He never traveled, and he quietly rearranged the world. His claim: the mind only ever knows things as they appear to it, never as they are in themselves, and every metaphysics that ignores the line is building past its permit. He said he denied knowledge in order to make room for faith, and he meant it. This class walks his argument in his own words, every term defined, every step numbered.',
    hook:
      'Most people saying "you can’t prove God, that’s just faith" are quoting Kant without knowing his name. Come read the actual argument.',
    moves: [
      { name: 'Run the Copernican turn.', text: 'The mind is not a mirror but a lens, shaping whatever appears in it. Learn why he thought all prior metaphysics had failed.' },
      { name: 'Walk the fence.', text: 'Appearances on this side, things-in-themselves on the far side. Locate, exactly, where he says knowledge stops.' },
      { name: 'Put the proofs on trial.', text: 'Follow his case that every road from the world to God reaches past the fence, stated the way he meant it.' },
      { name: 'Weigh duty.', text: 'Morality with no eye on reward: act only on what you could will as a law for everyone. Feel what that costs.' },
      { name: 'Examine the postulates.', text: 'God, freedom, and immortality return, not as things known but as what the moral life must assume. Decide what that concession is worth.' },
    ],
    courseCount: 'Five modules',
    courseIntro: 'In short readings from the Critiques themselves.',
    modules: [
      { numeral: 'I', title: 'The Copernican Turn', source: 'Critique of Pure Reason, Preface', teaser: 'His revolution: the mind shapes what it knows. Every metaphysics before him, he rules, had it backwards.' },
      { numeral: 'II', title: 'The Fence', source: 'Critique of Pure Reason, Prolegomena', teaser: 'Phenomena and noumena: an island of truth, ringed by a wide and stormy sea.' },
      { numeral: 'III', title: 'The Proofs on Trial', source: 'Critique of Pure Reason, Dialectic', teaser: 'Every classical road to God, cross-examined at full strength.' },
      { numeral: 'IV', title: 'Duty', source: 'Groundwork', teaser: 'The categorical imperative: morality without heaven, and what it costs.' },
      { numeral: 'V', title: 'The Postulates', source: 'Critique of Practical Reason', teaser: 'God, freedom, and immortality readmitted, as assumptions the moral life cannot do without.' },
    ],
    ctaSubline: 'Be present when the court convenes.',
  },

  hegel: {
    slug: 'hegel',
    accentClass: 'portico-hegel',
    pill: 'Hegel',
    title: 'The Owl at Dusk',
    headline: 'He watched Napoleon ride past his window and called him the world-soul. He meant it.',
    subhead:
      'The most difficult prose in philosophy, told plainly as one story. By the end you can run the dialectic on anything that moves: an argument, an age, a life.',
    vision:
      'In October 1806, a young professor in Jena watched Napoleon ride through the occupied town and wrote to a friend that he had seen the world-soul on horseback. That sentence is the whole class. Hegel’s claim is that truth is not fixed and eternal; it unfolds, and history is the story of reality coming to know itself. He wrote the most notoriously difficult prose in the canon, so this class’s first mercy is clarity: the famous passages walked in plain words, the system told as the story it is. He called philosophy its own time comprehended in thought. This class takes him at his word.',
    hook:
      'Every "right side of history" is Hegel, secondhand. He is the secret engine of how modern people talk about power and progress. Meet the source.',
    moves: [
      { name: 'Run the dialectic.', text: 'Thought moves through contradiction: every position breeds its opposite, and the collision births something larger that keeps them both.' },
      { name: 'Read master and slave.', text: 'The most famous pages he wrote: recognition, struggle, and why the slave’s work, not the master’s leisure, drives history forward.' },
      { name: 'Follow Spirit.', text: 'Not a ghost: reality as one great process coming to know itself, with human history as its growing self-awareness.' },
      { name: 'Spot the cunning of reason.', text: 'History uses its actors. Private passions serve a plot none of them chose.' },
      { name: 'Fly at dusk.', text: 'Why an age understands itself only as it grows old, and what that means for yours.' },
    ],
    courseCount: 'Six modules',
    courseIntro: 'In short readings from the Phenomenology and the lectures on history.',
    modules: [
      { numeral: 'I', title: 'The World-Soul on Horseback', source: 'Letters, Phenomenology Preface', teaser: 'Jena, 1806: the scene, the man, and the claim that truth unfolds.' },
      { numeral: 'II', title: 'The Dialectic', source: 'Phenomenology Preface, Encyclopaedia Logic', teaser: 'How thought moves through contradiction, and why he thought nothing stands still.' },
      { numeral: 'III', title: 'Master and Slave', source: 'Phenomenology IV', teaser: 'Recognition, struggle, and the slave who builds the world.' },
      { numeral: 'IV', title: 'Spirit', source: 'Phenomenology, Encyclopaedia', teaser: 'Reality coming to know itself, and where you fit in that story.' },
      { numeral: 'V', title: 'The Cunning of Reason', source: 'Philosophy of History, Introduction', teaser: 'History uses its actors: passion as the plot’s raw material.' },
      { numeral: 'VI', title: 'Freedom and the Owl', source: 'Philosophy of History; Philosophy of Right, Preface', teaser: 'One free, some free, all free. And why philosophy takes flight only at dusk.' },
    ],
    ctaSubline: 'Be watching when the owl flies.',
  },

  nietzsche: {
    slug: 'nietzsche',
    accentClass: 'portico-nietzsche',
    pill: 'Nietzsche',
    title: 'The Hammer',
    headline: 'Meet the man who declared war on your morality.',
    subhead:
      'No softening, no straw men. By the end you can run his genealogy on any value in the room, including yours.',
    vision:
      'Nietzsche is the most quoted philosopher alive in the culture, and the least met. The captions are famous. The argument underneath is ferocious, and almost nobody has read it. This class does not soften him, and it does not convert you. It puts you in front of the real thing, in his own words, until you can state his case at full voltage. Whatever you believe walking in, you will know exactly what hit the modern world. Most people never do.',
    hook:
      'Everyone quotes "what doesn’t kill me makes me stronger." Almost no one has met the argument underneath. Here you meet it at full strength.',
    moves: [
      { name: 'Read him at strike speed.', text: 'The best prose stylist philosophy ever produced, in his own words, every lesson.' },
      { name: 'Run the genealogy.', text: 'Show that a value has a history. "Good" and "evil" were manufactured, and he claims he found the workshop.' },
      { name: 'Sort masters from slaves.', text: 'Two moralities with different birth certificates. Learn to tell them apart in the wild.' },
      { name: 'Strip the captions.', text: '"God is dead" is not what the t-shirt thinks. Eternal recurrence is not reincarnation. Precision is the point.' },
      { name: 'Lift the heaviest weight.', text: 'This exact life, again, and innumerable times again. Could you say yes to it?' },
    ],
    courseCount: 'Seven modules',
    courseIntro: 'His own words, liberally: he earned that.',
    modules: [
      { numeral: 'I', title: 'The Madman', source: 'The Gay Science §125', teaser: 'A lantern at noon, a marketplace, laughing atheists. The news is for them, not the believers.' },
      { numeral: 'II', title: 'The Genealogist', source: 'Genealogy of Morals I', teaser: 'Where "good" and "evil" came from. Morality gets a history, and a suspect.' },
      { numeral: 'III', title: 'Masters and Slaves', source: 'Genealogy I, Beyond Good and Evil', teaser: 'Two moralities, two birth certificates, and his story of how the weaker one won.' },
      { numeral: 'IV', title: 'Ressentiment', source: 'Genealogy I', teaser: 'The revenge of the powerless. Humility indicted as disguised hatred: his most serious charge.' },
      { numeral: 'V', title: 'The Will to Power', source: 'Beyond Good and Evil', teaser: 'One drive under every ideal, every charity, every truth-claim. Including yours. Including his.' },
      { numeral: 'VI', title: 'The Heaviest Weight', source: 'The Gay Science §341', teaser: 'Eternal recurrence. Not reincarnation: a test. Could you say yes?' },
      { numeral: 'VII', title: 'The Übermensch', source: 'Thus Spoke Zarathustra', teaser: 'After God, someone must create values. A tightrope, a market square, a crowd.' },
    ],
    ctaSubline: 'Be ringside for round one.',
  },
};

/** Nav order for the shared Thinkers bar. The seven names run in course
    order (spec §G): Plato, Aristotle, Augustine, Aquinas, Kant, Hegel,
    Nietzsche. Aquinas (=Scholastica, /) and Augustine (=Tolle Lege,
    /augustine) link out; the five below are the Coming-Soon classes. */
export const THINKER_ORDER = ['plato', 'aristotle', 'kant', 'hegel', 'nietzsche'] as const;
