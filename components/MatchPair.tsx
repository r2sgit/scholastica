'use client';

import { useState } from 'react';
import type { Question } from '../content/types';
import Prose from './Prose';

interface MatchPairProps {
  question: Question;
  onAnswer: (correct: boolean, feedback: string, doctrineTag?: string) => void;
  disabled: boolean;
}

interface MatchItem {
  id: string;
  text: string;
}

interface PairCorrection {
  left_id: string;
  wrong_right_id: string;
  feedback: string;
}

/* Two payload schemas are in circulation:
 *   m1/m2: left_set / right_set + feedback.all_correct / partial_correct
 *   m12:   left / right         + feedback.correct / incorrect
 * Both use correct_pairs: [leftId, rightId][]. */
interface MatchPairPayload {
  left_set?: MatchItem[];
  right_set?: MatchItem[];
  left?: MatchItem[];
  right?: MatchItem[];
  correct_pairs: [string, string][];
  instruction?: string;
  feedback?: {
    all_correct?: string;
    partial_correct?: string;
    correct?: string;
    incorrect?: string;
    per_pair_corrections?: PairCorrection[];
  };
}

interface Pair {
  leftId: string;
  rightId: string;
}

function shuffled<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function MatchPair({ question, onAnswer, disabled }: MatchPairProps) {
  const payload = question.payload as unknown as MatchPairPayload;
  const leftSet = payload.left_set || payload.left || [];
  const rightSet = payload.right_set || payload.right || [];

  // Shuffle the right column once per exercise mount so the visual order
  // does not telegraph the pairings (source order is the answer). The page
  // keys this component by question id, so the order persists for the
  // lifetime of the exercise.
  const [rightOrder] = useState<MatchItem[]>(() => shuffled(rightSet));
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [selectedLeftId, setSelectedLeftId] = useState<string | null>(null);
  const [resolved, setResolved] = useState(false);

  const findPairByLeft = (id: string) => pairs.find(p => p.leftId === id);
  const findPairByRight = (id: string) => pairs.find(p => p.rightId === id);
  const isCorrectPair = (p: Pair) =>
    payload.correct_pairs.some(([l, r]) => l === p.leftId && r === p.rightId);

  function handleLeftClick(id: string) {
    if (resolved || disabled) return;
    const existing = findPairByLeft(id);
    if (existing) {
      setPairs(pairs.filter(p => p !== existing));
    } else if (selectedLeftId === id) {
      setSelectedLeftId(null);
    } else {
      setSelectedLeftId(id);
    }
  }

  function handleRightClick(id: string) {
    if (resolved || disabled) return;
    const existing = findPairByRight(id);
    if (existing) {
      setPairs(pairs.filter(p => p !== existing));
    } else if (selectedLeftId) {
      setPairs([...pairs, { leftId: selectedLeftId, rightId: id }]);
      setSelectedLeftId(null);
    }
  }

  function handleCheck() {
    if (resolved || disabled) return;
    setResolved(true);

    const correctCount = pairs.filter(isCorrectPair).length;
    const total = leftSet.length;
    const allCorrect = correctCount === total;

    const fb = payload.feedback || {};
    let summary: string;
    if (allCorrect) {
      summary = fb.all_correct || fb.correct || `All ${total} pairs locked.`;
    } else {
      summary = fb.partial_correct || fb.incorrect || `${correctCount} of ${total} correct.`;
    }

    // Per-pair corrections (m1/m2 schema): surface the matching correction
    // for each wrong pair the learner actually made.
    const corrections = fb.per_pair_corrections || [];
    const lines = pairs
      .filter(p => !isCorrectPair(p))
      .map(p => corrections.find(c => c.left_id === p.leftId && c.wrong_right_id === p.rightId))
      .filter((c): c is PairCorrection => !!c)
      .map(c => `<li>${c.feedback}</li>`);
    const correctionsHtml = lines.length
      ? `<ul style="margin:10px 0 0; padding-left:18px;">${lines.join('')}</ul>`
      : '';

    onAnswer(allCorrect, summary + correctionsHtml, question.doctrine_line);
  }

  function itemClass(side: 'left' | 'right', id: string): string {
    const pair = side === 'left' ? findPairByLeft(id) : findPairByRight(id);
    let cls = 'match-item';
    if (side === 'left' && selectedLeftId === id) cls += ' selected';
    if (pair) cls += ' paired';
    if (resolved && pair) cls += isCorrectPair(pair) ? ' correct' : ' wrong';
    return cls;
  }

  function badgeNum(side: 'left' | 'right', id: string): number | null {
    const pair = side === 'left' ? findPairByLeft(id) : findPairByRight(id);
    return pair ? pairs.indexOf(pair) + 1 : null;
  }

  const total = leftSet.length;
  const made = pairs.length;
  const allPaired = made === total;

  return (
    <div>
      {payload.instruction && (
        <Prose
          as="div"
          className="syllogism-instruction"
          html={payload.instruction}
        />
      )}
      <div className="match-pair-grid">
        <div className="match-pair-col left" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {leftSet.map(item => (
            <button
              key={item.id}
              type="button"
              className={itemClass('left', item.id)}
              disabled={resolved || disabled}
              onClick={() => handleLeftClick(item.id)}
            >
              {badgeNum('left', item.id) && <span className="pair-badge">{badgeNum('left', item.id)}</span>}
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </button>
          ))}
        </div>
        <div className="match-pair-col right" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {rightOrder.map(item => (
            <button
              key={item.id}
              type="button"
              className={itemClass('right', item.id)}
              disabled={resolved || disabled}
              onClick={() => handleRightClick(item.id)}
            >
              {badgeNum('right', item.id) && <span className="pair-badge">{badgeNum('right', item.id)}</span>}
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </button>
          ))}
        </div>
      </div>
      <div className="match-pair-status">
        {made} of {total} paired{resolved ? '' : ' · tap a paired item to release it'}
      </div>
      {!resolved && allPaired && (
        <div style={{ textAlign: 'center', padding: '14px 0 4px' }}>
          <button type="button" className="btn" onClick={handleCheck}>
            Check answers
          </button>
        </div>
      )}
    </div>
  );
}
