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
  built: boolean;
  draft?: boolean;
}

export const THEOLOGIA_COURSE_MAP: TheologiaCourseMapEntry[] = [
  { id: 1,  numeral: 'I',    title: 'Sacra Doctrina: What Theology Is', latin: 'De Sacra Doctrina',          built: true, draft: true },
  { id: 2,  numeral: 'II',   title: 'The Existence of God',             latin: 'De Deo Uno',                 built: false },
  { id: 3,  numeral: 'III',  title: 'The Divine Attributes & Operations', latin: 'De Attributis Divinis',    built: false },
  { id: 4,  numeral: 'IV',   title: 'The Trinity',                     latin: 'De Trinitate',                built: false },
  { id: 5,  numeral: 'V',    title: 'Creation',                        latin: 'De Creatione',                built: false },
  { id: 6,  numeral: 'VI',   title: 'Angels & Governance',             latin: 'De Angelis',                  built: false },
  { id: 7,  numeral: 'VII',  title: 'Beatitude',                       latin: 'De Beatitudine',              built: false },
  { id: 8,  numeral: 'VIII', title: 'Grace',                           latin: 'De Gratia',                   built: false },
  { id: 9,  numeral: 'IX',   title: 'De Auxiliis',                     latin: 'De Auxiliis',                 built: false },
  { id: 10, numeral: 'X',    title: 'The Incarnation',                 latin: 'De Incarnatione',             built: false },
  { id: 11, numeral: 'XI',   title: 'Redemption & the Mother',         latin: 'De Redemptione',              built: false },
  { id: 12, numeral: 'XII',  title: 'Church & Kingship',                latin: 'De Ecclesia',                 built: false },
  { id: 13, numeral: 'XIII', title: 'The Sacraments',                  latin: 'De Sacramentis',              built: false },
  { id: 14, numeral: 'XIV',  title: 'The Eucharist & the Mass',        latin: 'De Eucharistia',              built: false },
  { id: 15, numeral: 'XV',   title: 'Last Things',                     latin: 'De Novissimis',               built: false, },
];

export function getTheologiaCourseEntry(id: number): TheologiaCourseMapEntry | undefined {
  return THEOLOGIA_COURSE_MAP.find(e => e.id === id);
}
