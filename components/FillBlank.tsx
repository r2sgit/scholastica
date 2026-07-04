'use client';

import { useEffect, useState } from 'react';
import type { Question } from '../content/types';

interface FillBlankProps {
  question: Question;
  onAnswer: (correct: boolean, feedback: string, doctrineTag?: string) => void;
  disabled: boolean;
}

interface BlankSlot {
  id: string;
  correct_answers: string[];
  case_sensitive?: boolean;
}

interface FillBlankPayload {
  blanks: BlankSlot[];
  word_bank?: string[];
  feedback?: {
    all_correct?: string;
    partial_correct?: string;
    fully_wrong?: string;
  };
}

export default function FillBlank({ question, onAnswer, disabled }: FillBlankProps) {
  const payload = question.payload as unknown as FillBlankPayload;
  const blanks = payload.blanks;

  const [values, setValues] = useState<Record<string, string>>({});
  const [activeBlankId, setActiveBlankId] = useState<string | null>(blanks[0]?.id ?? null);
  const [resolved, setResolved] = useState(false);

  const isBlankCorrect = (b: BlankSlot) => {
    const v = values[b.id] || '';
    return b.correct_answers.some(a => a.toLowerCase() === v.toLowerCase());
  };

  // The blanks are <span class="fb-blank" data-blank="…"> inside the stem,
  // which the page renders as HTML above this component. Wire them here.
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.fb-blank');
    els.forEach(el => {
      const id = el.dataset.blank;
      if (!id) return;
      const filled = values[id];
      el.classList.remove('active', 'filled', 'correct', 'wrong');
      el.textContent = filled || '______';
      if (filled) el.classList.add('filled');
      if (activeBlankId === id && !resolved) el.classList.add('active');
      if (resolved) {
        const slot = blanks.find(b => b.id === id);
        el.classList.add(slot && isBlankCorrect(slot) ? 'correct' : 'wrong');
        el.style.cursor = 'default';
        el.onclick = null;
      } else {
        el.style.cursor = 'pointer';
        el.onclick = () => {
          setValues(prev => {
            if (!prev[id]) return prev;
            const next = { ...prev };
            delete next[id];
            return next;
          });
          setActiveBlankId(id);
        };
      }
    });
    return () => {
      els.forEach(el => { el.onclick = null; });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, activeBlankId, resolved]);

  function handleChip(word: string) {
    if (resolved || disabled) return;
    const targetId = activeBlankId || blanks.find(b => !values[b.id])?.id;
    if (!targetId) return;
    const next = { ...values, [targetId]: word };
    setValues(next);
    const nextEmpty = blanks.find(b => !next[b.id]);
    setActiveBlankId(nextEmpty ? nextEmpty.id : null);
  }

  function handleCheck() {
    if (resolved || disabled) return;
    setResolved(true);
    const correctness = blanks.map(isBlankCorrect);
    const correctCount = correctness.filter(Boolean).length;
    const total = blanks.length;
    const allCorrect = correctCount === total;

    const fb = payload.feedback || {};
    let summary: string;
    if (allCorrect) summary = fb.all_correct || 'All correct.';
    else if (correctCount === 0) summary = fb.fully_wrong || 'None correct yet.';
    else summary = fb.partial_correct || `${correctCount} of ${total} correct.`;

    onAnswer(allCorrect, summary, question.doctrine_line);
  }

  const usedValues = new Set(Object.values(values).map(v => v.toLowerCase()));
  const allFilled = blanks.every(b => !!values[b.id]);
  const bank = payload.word_bank || [];

  if (resolved) return null;

  return (
    <div>
      {bank.length > 0 && (
        <div className="fb-bank">
          {bank.map(w => {
            const used = usedValues.has(w.toLowerCase());
            return (
              <button
                key={w}
                type="button"
                className={`fb-chip${used ? ' used' : ''}`}
                disabled={used || disabled}
                onClick={() => handleChip(w)}
              >
                {w}
              </button>
            );
          })}
        </div>
      )}
      {allFilled && (
        <div style={{ textAlign: 'center', padding: '14px 0 4px' }}>
          <button type="button" className="btn" onClick={handleCheck}>
            Check answers
          </button>
        </div>
      )}
    </div>
  );
}
