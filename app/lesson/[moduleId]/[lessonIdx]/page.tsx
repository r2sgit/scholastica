'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useCallback, Suspense } from 'react';
import { getModule } from '../../../../content/modules';
import type { Question } from '../../../../content/types';
import { useProgress } from '../../../../lib/progress';
import { playSound } from '../../../../lib/sound';
import TopBar from '../../../../components/TopBar';
import ProgressDots from '../../../../components/ProgressDots';
import FeedbackPanel from '../../../../components/FeedbackPanel';
import MCQ from '../../../../components/MCQ';
import MatchPair from '../../../../components/MatchPair';
import SyllogismBuilder from '../../../../components/SyllogismBuilder';
import DialogueBranch from '../../../../components/DialogueBranch';
import FillBlank from '../../../../components/FillBlank';
import Sequence from '../../../../components/Sequence';
import Classify from '../../../../components/Classify';
import PlaceInTree from '../../../../components/PlaceInTree';
import Prose from '../../../../components/Prose';
import DrolleryMargin from '../../../../components/DrolleryMargin';
import DrolleryPendant from '../../../../components/DrolleryPendant';
import CardVines from '../../../../components/CardVines';

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
  const searchParams = useSearchParams();
  const { markLessonComplete, getModuleProgress } = useProgress();

  const moduleId = Number(params.moduleId);
  const lessonIdx = Number(params.lessonIdx);

  const mod = getModule(moduleId);
  const lesson = mod?.lessons[lessonIdx];

  // Review mode
  const reviewMode = searchParams.get('review') === '1';
  // Filter missed mode
  const filterMissed = searchParams.get('filter') === 'missed';
  const missedParam = searchParams.get('missed') || '';

  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<{ correct: boolean; attempted: boolean }[]>([]);
  const [answerState, setAnswerState] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [feedbackBody, setFeedbackBody] = useState('');
  const [feedbackDoctrineTag, setFeedbackDoctrineTag] = useState<string | undefined>();

  // URL normalization
  useEffect(() => {
    if (typeof window !== 'undefined' && /\?[^?]*\?/.test(window.location.href)) {
      const fixed = window.location.href.replace(/\?([^?]*)\?/, '?$1&');
      window.history.replaceState(null, '', fixed);
    }
  }, []);

  // Initialize questions
  useEffect(() => {
    if (!lesson) return;
    let qs = lesson.questions;
    if (filterMissed && missedParam) {
      const missedIds = missedParam.split(',');
      qs = qs.filter(q => missedIds.includes(q.id));
    }
    setQuestions(qs);
    setAnswers(qs.map(() => ({ correct: false, attempted: false })));
    setQuestionIdx(0);
    setAnswerState('idle');
  }, [lesson, filterMissed, missedParam]);

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
      // Lesson complete. Whether this lesson was already complete BEFORE this
      // attempt determines the fin's tone: a retake of a done lesson shows
      // "already earned" in place of reward replay, per the app design
      // architecture's review-mode rule — read before markLessonComplete
      // overwrites it.
      const alreadyDone = getModuleProgress(moduleId)?.lessonsComplete[lessonIdx] === true;

      const correctCount = answers.filter(a => a.correct).length;
      const totalCount = questions.length;
      const missedIds = questions
        .filter((_, i) => !answers[i]?.correct)
        .map(q => q.id);

      // Write to localStorage
      markLessonComplete(moduleId, lessonIdx, {
        correct: correctCount,
        total: totalCount,
        missedIds,
      });

      // Determine sound
      const isLastLesson = mod && lessonIdx >= mod.lessons.length - 1;
      const sound = isLastLesson ? 'module-complete' : 'lesson-complete';

      router.push(
        `/complete/${moduleId}/${lessonIdx}?correct=${correctCount}&total=${totalCount}&sound=${sound}&missed=${missedIds.join(',')}${alreadyDone ? '&already=1' : ''}`
      );
    }
  }, [questionIdx, questions, answers, moduleId, lessonIdx, mod, markLessonComplete, getModuleProgress, router]);

  const handleDotClick = useCallback((idx: number) => {
    if (!reviewMode) return;
    setQuestionIdx(idx);
    setAnswerState('idle');
    setFeedbackBody('');
    setFeedbackDoctrineTag(undefined);
  }, [reviewMode]);

  // Review mode question selector
  const handleQuestionSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const idx = Number(e.target.value);
    setQuestionIdx(idx);
    setAnswerState('idle');
    setFeedbackBody('');
    setFeedbackDoctrineTag(undefined);
  }, []);

  if (!mod || !lesson || !currentQuestion) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--ink-soft)' }}>
        Loading...
      </div>
    );
  }

  const results = answers.map(a => a.attempted ? a.correct : null);

  return (
    <div className="quiz-layout" style={{ minHeight: '100vh', background: 'var(--canvas)', position: 'relative' }}>
      <DrolleryMargin moduleId={moduleId} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <TopBar
          moduleId={moduleId}
          moduleTitle={mod.title}
          progress={{ current: questionIdx + (answerState !== 'idle' ? 1 : 0), total: questions.length }}
        />

        {/* Review mode question selector */}
        {reviewMode && (
          <div style={{ textAlign: 'center', padding: '8px 0' }}>
            <select
              value={questionIdx}
              onChange={handleQuestionSelect}
              style={{
                fontFamily: 'inherit',
                fontSize: 13,
                padding: '4px 8px',
                borderRadius: 6,
                border: '1px solid var(--border)',
                background: 'var(--paper)',
                color: 'var(--ink)',
              }}
            >
              {questions.map((_, i) => (
                <option key={i} value={i}>Question {i + 1}</option>
              ))}
            </select>
          </div>
        )}

        <div className="card-area">
          <article className="card">
            <CardVines />
            {/* Card head — lesson identity leads the card. The lesson name is
                the title of the question, so it sits at the very top, above the
                progress/counter row, and larger than the QUÆSTIO counter. */}
            <div className="card-head">
              <span className="lesson-eyebrow">
                <span className="le-label">Lesson</span>{' '}
                <span className="le-num">{lesson.num != null ? lesson.num : lessonIdx + 1}</span>
                <span className="le-sep">{' · '}</span>
                <span className="le-name">{lesson.title}</span>
              </span>
            </div>

            {/* Progress bar */}
            <div className="card-progress-bar">
              <ProgressDots
                total={questions.length}
                current={questionIdx}
                results={results}
                reviewMode={reviewMode}
                onDotClick={handleDotClick}
              />
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

            {/* Stem + exercise crossfade together on question change (250ms +
                8px rise, §4.3) — the key remounts this block each question so
                the animation retriggers instead of the text just swapping. */}
            <div key={`${currentQuestion.id}-${questionIdx}`} className="q-crossfade">
              <Prose as="h2" className="quaestio" html={currentQuestion.stem} />
              <ExerciseRenderer
                question={currentQuestion}
                onAnswer={handleAnswer}
                disabled={answerState !== 'idle'}
              />
            </div>

            {/* Feedback panel */}
            {answerState !== 'idle' && (
              <FeedbackPanel
                type={answerState}
                body={feedbackBody}
                doctrineTag={feedbackDoctrineTag}
              />
            )}

            {/* Continue button */}
            {answerState !== 'idle' && (
              <button
                type="button"
                onClick={handleContinue}
                className="btn"
                style={{
                  marginTop: 20,
                  width: '100%',
                  fontSize: 16,
                  padding: '14px 24px',
                  borderRadius: 8,
                }}
              >
                {questionIdx < questions.length - 1 ? 'Continue →' : 'Complete Lesson →'}
              </button>
            )}
          </article>

          {/* Pendant — tablet/mobile only (CSS controls visibility) */}
          <div className={`pendant-wrapper${answerState !== 'idle' ? ` ${answerState}` : ''}`}>
            <DrolleryPendant />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Exercise Renderer (routes to correct component) ─────── */

function ExerciseRenderer({
  question,
  onAnswer,
  disabled,
}: {
  question: Question;
  onAnswer: (correct: boolean, feedback: string, doctrineTag?: string) => void;
  disabled: boolean;
}) {
  switch (question.type) {
    // Single-select types all share the MCQ UI. precision_check additionally
    // appends its correction to correct-answer feedback (handled in MCQ).
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
    // Real dedicated renderers (2026-07-05 build, R2's call to build ahead
    // of content demanding them — see g-session-receipts.md). 'sequence'
    // previously aliased to MCQ (single-select over pre-built orderings);
    // that alias is gone now that a genuine ordering UI exists. No shipped
    // content used the old alias, so this is not a breaking change.
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

/* ── Page wrapper with Suspense ──────────────────────────── */

export default function QuizCardPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', background: 'var(--canvas)', display: 'grid', placeItems: 'center' }}>
        <div style={{ color: 'var(--ink-soft)', fontStyle: 'italic' }}>Loading...</div>
      </div>
    }>
      <QuizCardInner />
    </Suspense>
  );
}
