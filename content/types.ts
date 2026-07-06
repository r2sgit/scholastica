// content/types.ts

export type ExerciseType =
  | 'mcq'
  | 'true_false_with_reason'
  | 'distinction_application'
  | 'close_reading'
  | 'match_pair'
  | 'fill_blank'
  | 'syllogism_builder'
  | 'dialogue_branch'
  | 'spot_the_fallacy'
  | 'precision_check'
  | 'sequence'
  | 'classify'
  | 'place_in_tree';

export interface MCQOption {
  id: string;
  label?: string;      // small-caps prefix, e.g. "Respondeo:" / "Statement:"
  text: string;        // may contain HTML
  correct?: boolean;   // Module 1 style; Module 2+ encode payload.correct_option_id instead
  feedback: string;    // may contain HTML
}

export interface Question {
  id: string;
  type: ExerciseType;
  stem: string;
  latin_tag?: string;
  doctrine_line?: string;
  lesson_complete?: boolean;
  payload: Record<string, unknown>;
}

/** The per-lesson reward (gamification v2 §4.2 / B3): the distinction the
    lesson just taught, handed over as a small illuminated card on the fin
    screen. latin/english are the pair in each register (e.g. "potentia ·
    actus" / "potency · act"); gloss is the one-line plain-English take;
    motif selects the inline-SVG visual-distinctions grammar frame. Optional
    — a lesson without this field renders fin without a card, no gap. */
export interface FinDistinction {
  latin: string;
  english: string;
  gloss: string;
  motif: string;
}

export interface FinMeta {
  tag: string;
  heading: string;     // may contain <em>
  body: string;        // may contain <em>
  distinction?: FinDistinction;
}

export interface LessonMeta {
  id: string;
  num: string;
  title: string;
  latin: string;
  tag: string;
  fin: FinMeta;
  questions: Question[];
}

export interface ModuleMeta {
  id: number;
  title: string;
  short: string;
  label: string;
  latin?: string;      // latin_title from the module JSON
  aim?: string;        // core_principle from the module JSON
  lessons: LessonMeta[];
}
