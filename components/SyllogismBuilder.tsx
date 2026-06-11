'use client';

import { useState } from 'react';
import type { Question } from '../content/types';

interface SyllogismBuilderProps {
  question: Question;
  onAnswer: (correct: boolean, feedback: string, doctrineTag?: string) => void;
  disabled: boolean;
}

interface SyllogismComponent {
  id: string;
  text: string;
  role: string; // 'major' | 'minor' | 'conclusion' — source order is the answer
}

interface SyllogismPayload {
  instruction?: string;
  components: SyllogismComponent[];
  feedback: { correct: string; incorrect: string };
  doctrineTag?: string;
}

const ALL_ROLES = [
  { id: 'major', label: 'Universal premise' },
  { id: 'minor', label: 'Particular premise' },
  { id: 'conclusion', label: 'Conclusion' },
];

function shuffledIds(components: SyllogismComponent[]): string[] {
  const ids = components.map(c => c.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids;
}

export default function SyllogismBuilder({ question, onAnswer, disabled }: SyllogismBuilderProps) {
  const payload = question.payload as unknown as SyllogismPayload;
  const components = payload.components;

  // Display order is shuffled once per exercise mount (the page keys this
  // component by question id) so the source order never gives the answer away.
  const [displayOrder] = useState<string[]>(() => shuffledIds(components));
  const [assigned, setAssigned] = useState<Record<string, string>>({});
  const [resolved, setResolved] = useState(false);

  const displayComps = displayOrder
    .map(id => components.find(c => c.id === id))
    .filter((c): c is SyllogismComponent => !!c);

  const allAssigned = displayComps.every(c => !!assigned[c.id]);

  function handleCheck() {
    if (resolved || disabled) return;
    setResolved(true);
    const allCorrect = components.every(c => assigned[c.id] === c.role);
    onAnswer(
      allCorrect,
      allCorrect ? payload.feedback.correct : payload.feedback.incorrect,
      allCorrect ? (question.doctrine_line ?? payload.doctrineTag) : undefined,
    );
  }

  const roleLabel = (id: string | undefined) =>
    (ALL_ROLES.find(r => r.id === id) || { label: id || '' }).label;

  if (resolved) {
    return (
      <div>
        {payload.instruction && <div className="syllogism-instruction">{payload.instruction}</div>}
        <div className="syllogism-recap">
          {components.map(c => {
            const ok = assigned[c.id] === c.role;
            return (
              <div key={c.id} className={`syllogism-recap-row ${ok ? 'ok' : 'no'}`}>
                <div className="recap-text" dangerouslySetInnerHTML={{ __html: c.text }} />
                <div className="recap-roles">
                  <span className="recap-chosen">{roleLabel(assigned[c.id])}</span>
                  {!ok && (
                    <>
                      <span className="recap-arrow">{'→'}</span>
                      <span className="recap-correct">{roleLabel(c.role)}</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      {payload.instruction && <div className="syllogism-instruction">{payload.instruction}</div>}
      <div className="syllogism-rows">
        {displayComps.map(c => (
          <div key={c.id} className="syllogism-row">
            <div className="syllogism-statement" dangerouslySetInnerHTML={{ __html: c.text }} />
            <div className="syllogism-role-picker" role="radiogroup" aria-label="Pick a role">
              {ALL_ROLES.map(r => (
                <button
                  key={r.id}
                  type="button"
                  className={`role-chip${assigned[c.id] === r.id ? ' selected' : ''}`}
                  aria-pressed={assigned[c.id] === r.id}
                  disabled={disabled}
                  onClick={() => setAssigned({ ...assigned, [c.id]: r.id })}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="syllogism-submit-wrap">
        <button
          type="button"
          className="btn syllogism-submit"
          disabled={!allAssigned || disabled}
          onClick={handleCheck}
        >
          {allAssigned ? 'Check answers' : 'Pick a role for each statement'}
        </button>
      </div>
    </div>
  );
}
