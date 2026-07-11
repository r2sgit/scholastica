'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, useCallback, Suspense } from 'react';
import { getTheologiaModule } from '../../../../../content/theologia';
import type { Question } from '../../../../../content/types';
import { useTheologiaProgress } from '../../../../../lib/progressTheologia';
import { playSound } from '../../../../../lib/sound';
import TopBar from '../../../../../components/TopBar';
import ProgressDots from '../../../../../components/ProgressDots';
import FeedbackPanel from '../../../../../components/FeedbackPanel';
import MCQ from '../../../../../components/MCQ';
import MatchPair from '../../../../../components/MatchPair';
import SyllogismBuilder from '../../../../../components/SyllogismBuilder';
import DialogueBranch from '../../../../../components/DialogueBranch';
import FillBlank from '../../../../../components/FillBlank';
import Sequence from '../../../../../components/Sequence';
import Classify from '../../../../../components/Classify';
import PlaceInTree from '../../../../../components/PlaceInTree';
import Prose from '../../../../../components/Prose';
import CardVines from '../../../../../components/CardVines';

/* Theologia's own lesson runner, parallel to app/lesson/[moduleId]/
   [lessonIdx]/page.tsx. Deliberately a sibling file rather than a shared
   parameterized component: the two pages already diverge (separate content
   namespace, separate progress store, no DrolleryMargin/Pendant since the
   asset manifest is philosophy-specific, a visible DRAFT ribbon), and a
   single course's worth of content isn't enough yet to justify the
   abstraction (Rule of Three, scriptorium-pattern.md). Revisit once a
   second theology module ships. */

function toRoman(n: number): string {
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let result = '';
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) { result += syms[i]; n -= vals[i]; }
  }
  return result;
}

function QuizCardInner() {
  const params = useParams();
  const router = useRouter();
  const { markLessonComplete, getModuleProgress } = useTheologiaProgress();

  const moduleId = Number(params.moduleId);
  const lessonIdx = Number(params.lessonIdx);

  const mod = getTheologiaModule(moduleId);
  const lesson = mod?.lessons[lessonIdx];

  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<{ correct: boolean; attempted: boolean }[]>([]);
  const [answerState, setAnswerState] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [feedbackBody, setFeedbackBody] = useState('');
  const [feedbackDoctrineTag, setFeedbackDoctrineTag] = useState<string | undefined>();

  useEffect(() => {
    if (!lesson) return;
    const qs = lesson.questions;
    setQuestions(qs);
    setAnswers(qs.map(() => ({ correct: false, attempted: false })));
    setQuestionIdx(0);
    setAnswerState('idle');
  }, [lesson]);

  const currentQuestion = questions[questionIdx];

  const handleAnswer = useCallback((correct: boolean, feedback: string, doctrineTag?: string) => {
    setAnswerState(correct ? 'correct' : 'wrong');
    setFeedbackBody(feedback);
    setFeedbackDoctrineTag(doctrineTag);
    playSound(correct ? 'correct' : 'wrong');
    setAnswers(prev => {
      const next = [...prev];
      next[questionIdx] = { correct, attempted: true };
      return next;
    });
  }, [questionIdx]);

  const handleContinue = useCallback(() => {
    if (questionIdx < questions.length - 1) {
      setQuestionIdx(questionIdx + 1);
      setAnswerState('idle');
      setFeedbackBody('');
      setFeedbackDoctrineTag(undefined);
    } else {
      const alreadyDone = getModuleProgress(moduleId)?.lessonsComplete[lessonIdx] === true;
      const correctCount = answers.filter(a => a.correct).length;
      const totalCount = questions.length;
      const missedIds = questions.filter((_, i) => !answers[i]?.correct).map(q => q.id);

      markLessonComplete(moduleId, lessonIdx, { correct: correctCount, total: totalCount, missedIds });

      const isLastLesson = mod && lessonIdx >= mod.lessons.length - 1;
      const sound = isLastLesson ? 'module-complete' : 'lesson-complete';

      router.push(
        `/theologia/complete/${moduleId}/${lessonIdx}?correct=${correctCount}&total=${totalCount}&sound=${sound}&missed=${missedIds.join(',')}${alreadyDone ? '&already=1' : ''}`
      );
    }
  }, [questionIdx, questions, answers, moduleId, lessonIdx, mod, markLessonComplete, getModuleProgress, router]);

  if (!mod || !lesson || !currentQuestion) {
    return (
      <div className="theologia-wing" style={{ padding: 40, textAlign: 'center', color: 'var(--ink-soft)' }}>
        Loading...
      </div>
    );
  }

  const results = answers.map(a => a.attempted ? a.correct : null);

  return (
    <div className="quiz-layout theologia-wing" style={{ minHeight: '100vh', background: 'var(--canvas)', position: 'relative' }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <TopBar
          course="theologia"
          moduleId={moduleId}
          moduleTitle={mod.title}
          modulesCrumb
          progress={{ current: questionIdx + (answerState !== 'idle' ? 1 : 0), total: questions.length }}
        />

        <div className="card-area">
          <article className="card">
            <CardVines />
            <div className="card-head">
              <span className="lesson-eyebrow">
                <span className="le-label">Lesson</span>{' '}
                <span className="le-num">{lesson.num != null ? lesson.num : lessonIdx + 1}</span>
                <span className="le-sep">{' · '}</span>
                <span className="le-name">{lesson.title}</span>
              </span>
            </div>

            <div className="card-progress-bar">
              <ProgressDots total={questions.length} current={questionIdx} results={results} reviewMode={false} onDotClick={() => {}} />
              <span className="q-counter">
                <span style={{color:'var(--vermillion)',fontVariantCaps:'all-small-caps',letterSpacing:'0.06em'}}>
                  {`QU${String.fromCharCode(198)}STIO`}{' '}{toRoman(questionIdx + 1)}
                </span>
                <span style={{color:'var(--ink-mute)',margin:'0 4px'}}>{'·'}</span>
                <span style={{fontVariantCaps:'all-small-caps',color:'var(--ink-mute)',letterSpacing:'0.06em'}}>
                  {toRoman(questions.length).toLowerCase()}
                </span>
              </span>
            </div>

            <div key={`${currentQuestion.id}-${questionIdx}`} className="q-crossfade">
              <Prose as="h2" className="quaestio" html={currentQuestion.stem} />
              <ExerciseRenderer question={currentQuestion} onAnswer={handleAnswer} disabled={answerState !== 'idle'} />
            </div>

            {answerState !== 'idle' && (
              <FeedbackPanel type={answerState} body={feedbackBody} doctrineTag={feedbackDoctrineTag} />
            )}

            {answerState !== 'idle' && (
              <button
                type="button"
                onClick={handleContinue}
                className="btn"
                style={{ marginTop: 20, width: '100%', fontSize: 16, padding: '14px 24px', borderRadius: 8 }}
              >
                {questionIdx < questions.length - 1 ? 'Continue →' : 'Complete Lesson →'}
              </button>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}

function ExerciseRenderer({
  question, onAnswer, disabled,
}: {
  question: Question;
  onAnswer: (correct: boolean, feedback: string, doctrineTag?: string) => void;
  disabled: boolean;
}) {
  switch (question.type) {
    case 'mcq':
    case 'true_false_with_reason':
    case 'distinction_application':
    case 'spot_the_fallacy':
    case 'close_reading':
    case 'precision_check':
      return <MCQ question={question} onAnswer={onAnswer} disabled={disabled} />;
    case 'match_pair':
      return <MatchPair question={question} onAnswer={onAnswer} disabled={disabled} />;
    case 'syllogism_builder':
      return <SyllogismBuilder question={question} onAnswer={onAnswer} disabled={disabled} />;
    case 'dialogue_branch':
      return <DialogueBranch question={question} onAnswer={onAnswer} disabled={disabled} />;
    case 'fill_blank':
      return <FillBlank question={question} onAnswer={onAnswer} disabled={disabled} />;
    case 'sequence':
      return <Sequence question={question} onAnswer={onAnswer} disabled={disabled} />;
    case 'classify':
      return <Classify question={question} onAnswer={onAnswer} disabled={disabled} />;
    case 'place_in_tree':
      return <PlaceInTree question={question} onAnswer={onAnswer} disabled={disabled} />;
    default:
      return (
        <div style={{ padding: 20, color: 'var(--ink-mute)', fontStyle: 'italic' }}>
          Exercise type &ldquo;{question.type}&rdquo; not yet implemented.
        </div>
      );
  }
}

export default function TheologiaLessonPage() {
  return (
    <Suspense fallback={
      <div className="theologia-wing" style={{ minHeight: '100vh', background: 'var(--canvas)', display: 'grid', placeItems: 'center' }}>
        <div style={{ color: 'var(--ink-soft)', fontStyle: 'italic' }}>Loading...</div>
      </div>
    }>
      <QuizCardInner />
    </Suspense>
  );
}
