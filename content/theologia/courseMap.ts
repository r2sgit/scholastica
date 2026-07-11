// content/theologia/courseMap.ts
// The Theology (Part II) skeleton, parallel to content/courseMap.ts.
// Titles/order per scholastica-theology-blueprint.md v0.1 tool-recall map
// (six partes + prologue, T1-T15). Only T1 is built (DRAFT, R2's override
// of the standing theologian-reviewer gate; see content/theologia/t1.ts).
// T2-T15 stay `built: false` ("in the scriptorium") until authored.

export interface TheologiaCourseMapEntry {
  id: number;
  numeral: string;
  title: string;
  latin: string;
  /** Plainspoken blurb (RD7, scholastica-map-copy-v4.md) — net-new on the
      theology side; answers "what will I learn here" in one sentence. */
  aim: string;
  built: boolean;
  draft?: boolean;
}

export const THEOLOGIA_COURSE_MAP: TheologiaCourseMapEntry[] = [
  { id: 1,  numeral: 'I',    title: 'Sacra Doctrina: What Theology Is', latin: 'De Sacra Doctrina',          built: true, draft: true,
    aim: 'What theology is: how a science can rest on what God has revealed, and why faith and reason are not rivals.' },
  { id: 2,  numeral: 'II',   title: 'The Existence of God',             latin: 'De Deo Uno',                 built: false,
    aim: "The five ways: Aquinas's five arguments that God exists, each one starting from something you can see." },
  { id: 3,  numeral: 'III',  title: 'The Divine Attributes & Operations', latin: 'De Attributis Divinis',    built: false,
    aim: 'What God is like: simple, perfect, unchanging, eternal, one. And why we say it mostly by saying what God is not.' },
  { id: 4,  numeral: 'IV',   title: 'The Trinity',                     latin: 'De Trinitate',                built: false,
    aim: 'One God, three Persons. What the doctrine actually says, what it does not say, and the precise words the Church uses to keep both straight.' },
  { id: 5,  numeral: 'V',    title: 'Creation',                        latin: 'De Creatione',                built: false,
    aim: 'Why there is something rather than nothing: what it means that God creates from nothing and holds everything in being right now.' },
  { id: 6,  numeral: 'VI',   title: 'Angels & Governance',             latin: 'De Angelis',                  built: false,
    aim: 'Pure spirits: what angels are, how they know and choose, and how God governs the world through them.' },
  { id: 7,  numeral: 'VII',  title: 'Beatitude',                       latin: 'De Beatitudine',              built: false,
    aim: 'What you are for: why no created thing finally satisfies you, and what the vision of God means.' },
  { id: 8,  numeral: 'VIII', title: 'Grace',                           latin: 'De Gratia',                   built: false,
    aim: "God's own life shared with you: what grace is, the kinds there are, and why you cannot earn the beginning of it." },
  { id: 9,  numeral: 'IX',   title: 'De Auxiliis',                     latin: 'De Auxiliis',                 built: false,
    aim: "The hardest question: how God's grace and your freedom work together, and the famous dispute the Church left open." },
  { id: 10, numeral: 'X',    title: 'The Incarnation',                 latin: 'De Incarnatione',             built: false,
    aim: 'God became man: one Person, two natures, and why the precise wording carries everything.' },
  { id: 11, numeral: 'XI',   title: 'Redemption & the Mother',         latin: 'De Redemptione',              built: false,
    aim: 'How the Cross saves: satisfaction, sacrifice, and merit, and why Mary stands closer to it than anyone else.' },
  { id: 12, numeral: 'XII',  title: 'Church & Kingship',                latin: 'De Ecclesia',                 built: false,
    aim: 'What the Church is, and what it means to call Christ a king, here and now, not only at the end.' },
  { id: 13, numeral: 'XIII', title: 'The Sacraments',                  latin: 'De Sacramentis',              built: false,
    aim: 'Signs that do what they say: how the seven sacraments actually cause the grace they signify.' },
  { id: 14, numeral: 'XIV',  title: 'The Eucharist & the Mass',        latin: 'De Eucharistia',              built: false,
    aim: 'The Body of Christ, truly: what transubstantiation means, and why the Mass is a sacrifice and not only a meal.' },
  { id: 15, numeral: 'XV',   title: 'Last Things',                     latin: 'De Novissimis',               built: false,
    aim: 'Death, judgment, heaven, and hell: what happens at the end, for you and for everything.' },
];

export function getTheologiaCourseEntry(id: number): TheologiaCourseMapEntry | undefined {
  return THEOLOGIA_COURSE_MAP.find(e => e.id === id);
}
