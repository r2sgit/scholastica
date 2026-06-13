'use client';

import { useState } from 'react';
import type { Question } from '../content/types';
import { playSound } from '../lib/sound';

interface DialogueBranchProps {
  question: Question;
  onAnswer: (correct: boolean, feedback: string, doctrineTag?: string) => void;
  disabled: boolean;
}

interface Branch {
  id?: string;
  text: string;
  /** Exactly one branch carries verdict "correct"; the rest are null/partial/wrong. */
  verdict: string | null;
  feedback: string;
  doctrineTag?: string;
}

interface DialogueBranchPayload {
  commentatorLine: string;
  branches: Branch[];
}

function shuffledIndices(n: number): number[] {
  const idx = Array.from({ length: n }, (_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

export default function DialogueBranch({ question, onAnswer, disabled }: DialogueBranchProps) {
  const payload = question.payload as unknown as DialogueBranchPayload;
  const branches = payload.branches;

  // Display order is shuffled once per exercise mount (the page keys this
  // component by question id) so the source order never gives the answer away.
  const [displayOrder] = useState<number[]>(() => shuffledIndices(branches.length));
  const [tried, setTried] = useState<number[]>([]);
  const [resolved, setResolved] = useState(false);
  const [lastFeedback, setLastFeedback] = useState<string | null>(null);

  const isCorrectBranch = (b: Branch) => b.verdict === 'correct';

  // Redirect mechanic (ported from the M17 prototype): a wrong pick is removed
  // from view and the learner keeps choosing until the correct branch is found.
  const visible = displayOrder
    .map(i => ({ b: branches[i], i }))
    .filter(({ b, i }) => isCorrectBranch(b) || !tried.includes(i));

  function handlePick(i: number) {
    if (resolved || disabled) return;
    const branch = branches[i];

    if (isCorrectBranch(branch)) {
      setResolved(true);
      // Reaching the correct branch resolves the exercise affirmatively: the
      // prototype always shows the green "Respondeo" panel and the correct
      // chime here, regardless of how many redirects it took. Wrong picks were
      // already corrected inline via the "Try again" panel above; the v1 pip
      // model has no partial state, so a guided arrival counts as correct.
      const tag = question.latin_tag ?? branch.doctrineTag;
      onAnswer(true, branch.feedback, tag);
    } else {
      setTried(prev => (prev.includes(i) ? prev : [...prev, i]));
      setLastFeedback(branch.feedback);
      playSound('wrong');
    }
  }

  return (
    <div>
      <div
        className="commentator-line"
        dangerouslySetInnerHTML={{ __html: payload.commentatorLine }}
      />

      <div className="branch-options" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {visible.map(({ b, i }) => {
          const showCorrect = resolved && isCorrectBranch(b);
          return (
            <button
              key={b.id ?? i}
              type="button"
              onClick={() => handlePick(i)}
              disabled={resolved || disabled}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'var(--paper)',
                border: `${showCorrect ? 2 : 1}px solid ${showCorrect ? 'var(--correct)' : 'var(--border)'}`,
                borderRadius: 12,
                padding: '14px 18px',
                cursor: resolved || disabled ? 'default' : 'pointer',
                transition: 'border-color .18s, opacity .18s',
                fontFamily: 'inherit',
                fontSize: 18,
                lineHeight: 1.45,
                color: 'var(--ink)',
              }}
              dangerouslySetInnerHTML={{ __html: b.text }}
            />
          );
        })}
      </div>

      {/* Inline "try again" redirect feedback for a wrong pick. The correct-answer
          feedback is shown by the shared FeedbackPanel once the exercise resolves. */}
      {!resolved && lastFeedback && (
        <div
          className="feedback-panel"
          style={{
            background: 'var(--paper)',
            borderLeft: '3px solid var(--wrong)',
            padding: '16px 20px',
            borderRadius: '0 8px 8px 0',
            marginTop: 16,
            animation: 'fadeIn 300ms ease both',
          }}
        >
          <div
            style={{
              fontVariantCaps: 'all-small-caps',
              letterSpacing: '0.18em',
              fontSize: 11,
              fontWeight: 500,
              color: 'var(--wrong)',
              marginBottom: 6,
            }}
          >
            Try again
          </div>
          <div
            style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink)' }}
            dangerouslySetInnerHTML={{ __html: lastFeedback }}
          />
        </div>
      )}
    </div>
  );
}
