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
  // Two correctness encodings exist: Module 1 marks options with `correct: true`;
  // Module 2+ (and the tf/fallacy types throughout) carry payload.correct_option_id.
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
        const dimmed = isAnswered && !isSelected;

        const cls = ['exercise-option'];
        if (isCorrect) cls.push('correct');
        if (isWrong) cls.push('wrong', 'shake');

        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => handleSelect(opt)}
            disabled={disabled || isAnswered}
            className={cls.join(' ')}
            style={{
              opacity: dimmed ? 0.65 : 1,
              color: dimmed ? 'var(--ink-mute)' : 'var(--ink)',
              cursor: disabled || isAnswered ? 'default' : 'pointer',
            }}
            dangerouslySetInnerHTML={{ __html: opt.text }}
          />
        );
      })}
    </div>
  );
}
