'use client';

import { useState } from 'react';
import type { Question } from '../content/types';
import Prose from './Prose';

interface PlaceInTreeProps {
  question: Question;
  onAnswer: (correct: boolean, feedback: string, doctrineTag?: string) => void;
  disabled: boolean;
}

interface TreeNode {
  id: string;
  label: string;
  parent_id: string | null;
}

interface TreeItem {
  id: string;
  text: string;
  correct_node_id: string;
}

interface ItemCorrection {
  item_id: string;
  feedback: string;
}

/* PLACE_IN_TREE: place terms under the correct node of a small taxonomy.
 * Same tap-item-then-tap-target interaction as Classify — the difference is
 * the target is a hierarchy (nodes indented by depth, connected by a rule),
 * not a flat row of categories, so the visual reads as "where does this sit
 * in the tree" rather than "which bucket." Reuses Classify's assignment
 * logic; kept as its own component per the codebase's one-component-per-
 * exercise-type convention (see MatchPair/FillBlank, not a shared base). */
interface PlaceInTreePayload {
  nodes: TreeNode[];
  items: TreeItem[];
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

function depthOf(node: TreeNode, byId: Map<string, TreeNode>): number {
  let d = 0;
  let cur: TreeNode | undefined = node;
  while (cur && cur.parent_id) {
    cur = byId.get(cur.parent_id);
    d++;
  }
  return d;
}

export default function PlaceInTree({ question, onAnswer, disabled }: PlaceInTreeProps) {
  const payload = question.payload as unknown as PlaceInTreePayload;
  const items = payload.items;

  // Preserve authored node order (a tree's shape is part of the content,
  // not shuffled) but compute each node's depth for indentation.
  const byId = new Map(payload.nodes.map(n => [n.id, n]));
  const nodesWithDepth = payload.nodes.map(n => ({ ...n, depth: depthOf(n, byId) }));

  const [bankOrder] = useState<TreeItem[]>(() => shuffled(items));
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [resolved, setResolved] = useState(false);

  const allAssigned = items.every(i => !!assignments[i.id]);

  function isCorrect(itemId: string) {
    return assignments[itemId] === items.find(i => i.id === itemId)?.correct_node_id;
  }

  function handleItemTap(id: string) {
    if (resolved || disabled) return;
    if (assignments[id]) {
      const next = { ...assignments };
      delete next[id];
      setAssignments(next);
      setSelectedItemId(null);
      return;
    }
    setSelectedItemId(prev => (prev === id ? null : id));
  }

  function handleNodeTap(nodeId: string) {
    if (resolved || disabled || !selectedItemId) return;
    setAssignments({ ...assignments, [selectedItemId]: nodeId });
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
      ? fb.all_correct || `All ${total} placed correctly.`
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
    <div className="tree-wrap">
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

      <div className="tree-nodes">
        {nodesWithDepth.map(node => {
          const assigned = items.filter(i => assignments[i.id] === node.id);
          return (
            <div
              key={node.id}
              className={`tree-node${!resolved && selectedItemId ? ' droppable' : ''}`}
              style={{ marginLeft: node.depth * 22 }}
              onClick={() => handleNodeTap(node.id)}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') handleNodeTap(node.id);
              }}
            >
              <span className="tree-node-label">{node.label}</span>
              <div className="tree-node-items">
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
                {assigned.length === 0 && !resolved && selectedItemId && (
                  <span className="classify-bucket-empty">tap to place here</span>
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
