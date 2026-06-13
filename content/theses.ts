// content/theses.ts
// Typed loader for the 24 Thomistic Theses (theses-24.json). The JSON is
// source-verified quoted doctrine: NEVER paraphrase the Latin or English.
// Honor meta.mapping_rules — modules_teach gates the unlock (all listed
// modules must be complete); modules_touch never gates.

import data from './theses-24.json';

export type ThesisGroup = 'ontology' | 'cosmology' | 'psychology' | 'theodicy';

export interface Thesis {
  n: number;
  numeral: string;
  group: ThesisGroup;
  latin: string;
  english: string;
  modules_teach: number[];
  modules_touch: number[];
  provisional: boolean;
  mapping_note?: string;
  unlock_line: string;
}

export interface ThesesMeta {
  title: string;
  decree: string;
  decree_citation: string;
  english_translation: string;
  groups?: Record<string, string>;
}

const raw = data as unknown as {
  meta: { mapping_rules: { groups: string } } & Record<string, unknown>;
  theses: Thesis[];
};

export const THESES: Thesis[] = raw.theses;

// Lumbreras' four divisions, in order, with the quiet small-caps labels the
// Theses Board groups entries under.
export const THESIS_GROUPS: { id: ThesisGroup; label: string }[] = [
  { id: 'ontology', label: 'ontologia' },
  { id: 'cosmology', label: 'cosmologia' },
  { id: 'psychology', label: 'psychologia' },
  { id: 'theodicy', label: 'theodicea' },
];

export function getThesis(n: number): Thesis | undefined {
  return THESES.find(t => t.n === n);
}

export function thesesInGroup(group: ThesisGroup): Thesis[] {
  return THESES.filter(t => t.group === group);
}
