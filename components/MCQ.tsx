'use client';

import { useState } from 'react';
import type { Question } from '../content/types';

interface MCQProps {
  question: Question;
  onAnswer: (correct: boolean, feedback: string, doctrineTag?: string) => void;
  disabled: boolean;
}

interface MCQOption {
  id: string;
  label?: string;
  text: string;
  correct?: boolean;
  feedback: string;
}

export default function MCQ({ question, onAnswer, disabled }: MCQProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const options = (question.payload.options as MCQOption[]) || [];
  // Two correctness encodings exist: m0 marks options with `correct: true`;
  // m1+ (and the tf/fallacy types throughout) carry payload.correct_option_id.
  const correctOptionId = question.payload.correct_option_id as string | undefined;

  function isCorrectOption(opt: MCQOption): boolean {
    if (correctOptionId !== undefined) return opt.id === correctOptionId;
    return opt.correct === true;
  }

  function handleSelect(opt: MCQOption) {
    if (disabled || selectedId !== null) return;
    setSelectedId(opt.id);
    const correct = isCorrectOption(opt);
    let feedback = opt.feedback;
    // precision_check: structurally an MCQ; on a correct answer the precise
    // correction is appended to the feedback (prototype adapter behavior).
    const correction = question.payload.correction as string | undefined;
    if (question.type === 'precision_check' && correct && correction) {
      feedback = `${feedback} <em>Precisely: ${correction}</em>`;
    }
    onAnswer(correct, feedback, question.doctrine_line);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {options.map((opt) => {
        const isSelected = selectedId === opt.id;
        const isAnswered = selectedId !== null;
        const isCorrect = isSelected && isCorrectOption(opt);
        const isWrong = isSelected && !isCorrectOption(opt);

        let borderColor = 'var(--border)';
        let borderWidth = 1;
        if (isCorrect) { borderColor = 'var(--correct)'; borderWidth = 2; }
        else if (isWrong) { borderColor = 'var(--wrong)'; borderWidth = 2; }

        const opacity = isAnswered && !isSelected ? 0.4 : 1;

        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => handleSelect(opt)}
            disabled={disabled || isAnswered}
            className={isWrong ? 'shake' : undefined}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              background: 'var(--paper)',
              border: `${borderWidth}px solid ${borderColor}`,
              borderRadius: 12,
              padding: '14px 18px',
              cursor: disabled || isAnswered ? 'default' : 'pointer',
              transition: 'border-color .18s, opacity .18s',
              opacity,
              fontFamily: 'inherit',
            }}
          >
            <div
              style={{
                fontVariantCaps: 'all-small-caps',
                letterSpacing: '0.18em',
                fontSize: 11,
                fontWeight: 500,
                color: 'var(--gold)',
                marginBottom: 4,
              }}
            >
              {opt.label || 'Respondeo:'}
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1.45,
              }}
              dangerouslySetInnerHTML={{ __html: opt.text }}
            />
          </button>
        );
      })}
    </div>
  );
}
