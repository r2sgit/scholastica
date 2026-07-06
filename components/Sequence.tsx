'use client';

import { useState } from 'react';
import type { Question } from '../content/types';
import Prose from './Prose';

interface SequenceProps {
  question: Question;
  onAnswer: (correct: boolean, feedback: string, doctrineTag?: string) => void;
  disabled: boolean;
}

interface SequenceItem {
  id: string;
  text: string;
}

/* SEQUENCE: arrange items into the correct logical/temporal order. Tap an
 * item from the bank to drop it in the next open slot; tap a filled slot to
 * pull that item back to the bank (any slot, not just the last — the learner
 * may want to fix an early slot without losing later work). No drag —
 * every renderer in this app is tap-based, per the mobile-first / a11y
 * convention set by MatchPair and FillBlank. */
interface SequencePayload {
  items: SequenceItem[];
  correct_order: string[];
  instruction?: string;
  feedback?: {
    all_correct?: string;
    partial_correct?: string;
  };
}

function shuffled<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function Sequence({ question, onAnswer, disabled }: SequenceProps) {
  const payload = question.payload as unknown as SequencePayload;
  const items = payload.items;

  // Shuffle the bank once per mount (the page keys this component by
  // question id, so order persists for the exercise's lifetime) — source
  // order is the answer and must not telegraph it.
  const [bankOrder] = useState<SequenceItem[]>(() => shuffled(items));
  const [slots, setSlots] = useState<(string | null)[]>(() => items.map(() => null));
  const [resolved, setResolved] = useState(false);

  const placedIds = new Set(slots.filter((id): id is string => id !== null));
  const allFilled = slots.every(id => id !== null);

  function itemById(id: string) {
    return items.find(i => i.id === id)!;
  }

  function handleBankTap(id: string) {
    if (resolved || disabled || placedIds.has(id)) return;
    const nextEmpty = slots.findIndex(s => s === null);
    if (nextEmpty === -1) return;
    const next = [...slots];
    next[nextEmpty] = id;
    setSlots(next);
  }

  function handleSlotTap(idx: number) {
    if (resolved || disabled) return;
    if (slots[idx] === null) return;
    const next = [...slots];
    next[idx] = null;
    setSlots(next);
  }

  function handleCheck() {
    if (resolved || disabled) return;
    setResolved(true);

    const correctness = slots.map((id, i) => id === payload.correct_order[i]);
    const correctCount = correctness.filter(Boolean).length;
    const total = slots.length;
    const allCorrect = correctCount === total;

    const fb = payload.feedback || {};
    const summary = allCorrect
      ? fb.all_correct || `All ${total} in order.`
      : fb.partial_correct || `${correctCount} of ${total} in the correct position.`;

    onAnswer(allCorrect, summary, question.doctrine_line);
  }

  function slotClass(idx: number): string {
    let cls = 'seq-slot';
    if (slots[idx] !== null) cls += ' filled';
    if (resolved && slots[idx] !== null) {
      cls += slots[idx] === payload.correct_order[idx] ? ' correct' : ' wrong';
    }
    return cls;
  }

  return (
    <div className="seq-wrap">
      {payload.instruction && (
        <Prose as="div" className="syllogism-instruction" html={payload.instruction} />
      )}

      <ol className="seq-track">
        {slots.map((id, idx) => (
          <li key={idx} className={slotClass(idx)}>
            <button
              type="button"
              className="seq-slot-btn"
              disabled={resolved || disabled || id === null}
              onClick={() => handleSlotTap(idx)}
            >
              <span className="seq-slot-num">{idx + 1}</span>
              {id !== null ? (
                <span
                  className="seq-slot-text"
                  dangerouslySetInnerHTML={{ __html: itemById(id).text }}
                />
              ) : (
                <span className="seq-slot-empty">tap an item below</span>
              )}
            </button>
          </li>
        ))}
      </ol>

      {/* Once resolved, the bank is spent — the slots above are the record
          of what was tried. Hidden rather than shown-disabled: an empty
          bank with nothing left to tap reads as "done," not as chrome. */}
      {!resolved && (
        <div className="seq-bank">
          {bankOrder.map(item => {
            const used = placedIds.has(item.id);
            return (
              <button
                key={item.id}
                type="button"
                className={`fb-chip${used ? ' used' : ''}`}
                disabled={used || disabled}
                onClick={() => handleBankTap(item.id)}
              >
                <span dangerouslySetInnerHTML={{ __html: item.text }} />
              </button>
            );
          })}
        </div>
      )}

      {!resolved && allFilled && (
        <div style={{ textAlign: 'center', padding: '14px 0 4px' }}>
          <button type="button" className="btn" onClick={handleCheck}>
            Check order
          </button>
        </div>
      )}
    </div>
  );
}
