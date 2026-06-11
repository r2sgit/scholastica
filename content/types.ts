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
  | 'sequence';

export interface MCQOption {
  id: string;
  label?: string;      // small-caps prefix, e.g. "Respondeo:" / "Statement:"
  text: string;        // may contain HTML
  correct?: boolean;   // m0 style; m1+ encode payload.correct_option_id instead
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

export interface FinMeta {
  tag: string;
  heading: string;     // may contain <em>
  body: string;        // may contain <em>
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
