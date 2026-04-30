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
  text: string;
  correct: boolean;
  feedback: string;
}

export default function MCQ({ question, onAnswer, disabled }: MCQProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const options = (question.payload.options as MCQOption[]) || [];

  function handleSelect(opt: MCQOption) {
    if (disabled || selectedId !== null) return;
    setSelectedId(opt.id);
    onAnswer(opt.correct, opt.feedback, question.doctrine_line);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {options.map((opt) => {
        const isSelected = selectedId === opt.id;
        const isAnswered = selectedId !== null;
        const isCorrect = isSelected && opt.correct;
        const isWrong = isSelected && !opt.correct;

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
              Respondeo:
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
