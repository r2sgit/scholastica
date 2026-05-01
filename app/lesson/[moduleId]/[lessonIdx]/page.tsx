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
import DrolleryMargin from '../../../../components/DrolleryMargin';
import DrolleryPendant from '../../../../components/DrolleryPendant';

function QuizCardInner() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { markLessonComplete } = useProgress();

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
      // Lesson complete
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
        `/complete/${moduleId}/${lessonIdx}?correct=${correctCount}&total=${totalCount}&sound=${sound}&missed=${missedIds.join(',')}`
      );
    }
  }, [questionIdx, questions, answers, moduleId, lessonIdx, mod, markLessonComplete, router]);

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
          lessonIdx={lessonIdx}
          lessonTitle={lesson.title}
          lessonNum={lesson.num}
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

        <div style={{ padding: '32px 24px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <article className="card">
            {/* Progress bar */}
            <div className="card-progress-bar">
              <ProgressDots
                total={questions.length}
                current={questionIdx}
                results={results}
                reviewMode={reviewMode}
                onDotClick={handleDotClick}
              />
              <span className="q-counter">Q {questionIdx + 1} / {questions.length}</span>
            </div>

            {/* Card head */}
            <div className="card-head">
              <span className="quaestio-label">Quaestio</span>
            </div>

            {/* Stem */}
            <h2
              className="quaestio"
              dangerouslySetInnerHTML={{ __html: currentQuestion.stem }}
            />

            {/* Exercise renderer */}
            <ExerciseRenderer
              key={`${currentQuestion.id}-${questionIdx}`}
              question={currentQuestion}
              onAnswer={handleAnswer}
              disabled={answerState !== 'idle'}
            />

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

          {/* Mouse pendant — tablet only (hidden on mobile via CSS) */}
          <div className="pendant-wrapper">
            <DrolleryPendant answerState={answerState} />
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
  // M0 only uses mcq, true_false_with_reason, distinction_application
  // All three use the same MCQ UI
  switch (question.type) {
    case 'mcq':
    case 'true_false_with_reason':
    case 'distinction_application':
      return <MCQ question={question} onAnswer={onAnswer} disabled={disabled} />;
    default:
      return (
        <div style={{ padding: 20, color: 'var(--ink-faint)', fontStyle: 'italic' }}>
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
