'use client';

import { useState } from 'react';
import type { Question } from '../content/types';
import Prose from './Prose';

interface ClassifyProps {
  question: Question;
  onAnswer: (correct: boolean, feedback: string, doctrineTag?: string) => void;
  disabled: boolean;
}

interface ClassifyCategory {
  id: string;
  label: string;
}

interface ClassifyItem {
  id: string;
  text: string;
  correct_category_id: string;
}

interface ItemCorrection {
  item_id: string;
  feedback: string;
}

/* CLASSIFY: sort a list of items into named categories (buckets). Tap an
 * unassigned item to select it (vermillion, matching MatchPair's selected
 * state), then tap a category to drop it there. Tap an already-assigned
 * item to release it back to the bank. Categories are reusable — unlike
 * match_pair, many items can share one category. */
interface ClassifyPayload {
  categories: ClassifyCategory[];
  items: ClassifyItem[];
  instruction?: string;
  feedback?: {
    all_correct?: string;
    partial_correct?: string;
    per_item_corrections?: ItemCorrection[];
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

export default function Classify({ question, onAnswer, disabled }: ClassifyProps) {
  const payload = question.payload as unknown as ClassifyPayload;
  const categories = payload.categories;
  const items = payload.items;

  const [bankOrder] = useState<ClassifyItem[]>(() => shuffled(items));
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [resolved, setResolved] = useState(false);

  const allAssigned = items.every(i => !!assignments[i.id]);

  function isCorrect(itemId: string) {
    return assignments[itemId] === items.find(i => i.id === itemId)?.correct_category_id;
  }

  function handleItemTap(id: string) {
    if (resolved || disabled) return;
    if (assignments[id]) {
      // Release: tapping an already-assigned item sends it back to the bank.
      const next = { ...assignments };
      delete next[id];
      setAssignments(next);
      setSelectedItemId(null);
      return;
    }
    setSelectedItemId(prev => (prev === id ? null : id));
  }

  function handleCategoryTap(categoryId: string) {
    if (resolved || disabled || !selectedItemId) return;
    setAssignments({ ...assignments, [selectedItemId]: categoryId });
    setSelectedItemId(null);
  }

  function handleCheck() {
    if (resolved || disabled) return;
    setResolved(true);

    const correctCount = items.filter(i => isCorrect(i.id)).length;
    const total = items.length;
    const allCorrect = correctCount === total;

    const fb = payload.feedback || {};
    let summary = allCorrect
      ? fb.all_correct || `All ${total} classified correctly.`
      : fb.partial_correct || `${correctCount} of ${total} correct.`;

    const corrections = fb.per_item_corrections || [];
    const lines = items
      .filter(i => !isCorrect(i.id))
      .map(i => corrections.find(c => c.item_id === i.id))
      .filter((c): c is ItemCorrection => !!c)
      .map(c => `<li>${c.feedback}</li>`);
    if (lines.length) {
      summary += `<ul style="margin:10px 0 0; padding-left:18px;">${lines.join('')}</ul>`;
    }

    onAnswer(allCorrect, summary, question.doctrine_line);
  }

  const unassigned = bankOrder.filter(i => !assignments[i.id]);

  return (
    <div className="classify-wrap">
      {payload.instruction && (
        <Prose as="div" className="syllogism-instruction" html={payload.instruction} />
      )}

      {!resolved && unassigned.length > 0 && (
        <div className="classify-bank">
          {unassigned.map(item => (
            <button
              key={item.id}
              type="button"
              className={`fb-chip${selectedItemId === item.id ? ' selected' : ''}`}
              disabled={disabled}
              onClick={() => handleItemTap(item.id)}
            >
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </button>
          ))}
        </div>
      )}

      <div className="classify-categories">
        {categories.map(cat => {
          const assigned = items.filter(i => assignments[i.id] === cat.id);
          return (
            <div
              key={cat.id}
              className={`classify-bucket${!resolved && selectedItemId ? ' droppable' : ''}`}
              onClick={() => handleCategoryTap(cat.id)}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') handleCategoryTap(cat.id);
              }}
            >
              <div className="classify-bucket-label">{cat.label}</div>
              <div className="classify-bucket-items">
                {assigned.map(item => {
                  const cls = resolved
                    ? `classify-tag ${isCorrect(item.id) ? 'correct' : 'wrong'}`
                    : 'classify-tag';
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={cls}
                      disabled={resolved || disabled}
                      onClick={e => {
                        e.stopPropagation();
                        handleItemTap(item.id);
                      }}
                    >
                      <span dangerouslySetInnerHTML={{ __html: item.text }} />
                    </button>
                  );
                })}
                {assigned.length === 0 && (
                  <span className="classify-bucket-empty">
                    {!resolved && selectedItemId ? 'tap to place here' : '—'}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {!resolved && allAssigned && (
        <div style={{ textAlign: 'center', padding: '14px 0 4px' }}>
          <button type="button" className="btn" onClick={handleCheck}>
            Check answers
          </button>
        </div>
      )}
    </div>
  );
}
