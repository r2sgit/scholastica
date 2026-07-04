'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import TopBar from '../../components/TopBar';
import GlossCard from '../../components/GlossCard';
import DistinctionMotif from '../../components/DistinctionMotif';
import { useProgress } from '../../lib/progress';
import { getCourseEntry } from '../../content/courseMap';
import { MODULES } from '../../content/modules';
import type { FinDistinction } from '../../content/types';
import {
  TERMS, isTermEarned, termGroupsInOrder, type Term, type TermModule,
} from '../../content/terms';

interface CodexEntry {
  key: string;
  distinction: FinDistinction;
}

/* One earned distinction, browsable — the codex shelf (§4.2 / B3). Static
   (no flip-in; that celebration already happened on its fin screen). */
function CodexCard({ entry }: { entry: CodexEntry }) {
  const d = entry.distinction;
  return (
    <div className="codex-card">
      <div className="dcard-pair codex-pair">
        {d.latin.split('·').map((term, i, arr) => (
          <span key={i}>
            <em>{term.trim()}</em>
            {i < arr.length - 1 && <span className="sep">&middot;</span>}
          </span>
        ))}
      </div>
      <div className="dcard-pair-en">{d.english}</div>
      <p className="dcard-gloss">{d.gloss}</p>
      <DistinctionMotif kind={d.motif} on />
    </div>
  );
}

function groupHead(mod: TermModule): string {
  if (mod === 'structural') return 'Structura';
  return getCourseEntry(mod)?.numeral ?? String(mod);
}
function groupTitle(mod: TermModule): string {
  if (mod === 'structural') return 'The apparatus';
  return getCourseEntry(mod)?.title ?? '';
}

export default function VocabulariumPage() {
  const { data } = useProgress();
  const [active, setActive] = useState<Term | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Earned terms grouped by introducing module, in display order. Unearned
  // terms never render (not even dimmed): the shelf grows, it does not taunt.
  const groups = useMemo(() => {
    const earned = TERMS.filter(t => isTermEarned(t, data));
    const byMod = new Map<TermModule, Term[]>();
    for (const t of earned) {
      const list = byMod.get(t.module) || [];
      list.push(t);
      byMod.set(t.module, list);
    }
    return termGroupsInOrder()
      .filter(m => byMod.has(m))
      .map(m => ({ mod: m, terms: byMod.get(m)! }));
  }, [data]);

  // Distinction Card codex (§4.2): every completed lesson that carries a
  // fin.distinction, in module/lesson order. Earned cards only.
  const codex = useMemo(() => {
    const out: CodexEntry[] = [];
    for (const mod of MODULES) {
      const mp = data.progress?.[mod.id];
      mod.lessons.forEach((lesson, i) => {
        if (mp?.lessonsComplete?.[i] && lesson.fin.distinction) {
          out.push({ key: lesson.id, distinction: lesson.fin.distinction });
        }
      });
    }
    return out;
  }, [data]);

  // Modal a11y: focus the close control on open; Escape dismisses.
  useEffect(() => {
    if (!active) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  const empty = groups.length === 0;

  return (
    <div className="map-page">
      <TopBar />

      <div className="vocab-stage" style={{ animation: 'fadeIn .4s ease both' }}>
        <header className="vocab-head">
          <h1 className="vocab-title"><em>Vocabularium</em></h1>
          <p className="vocab-sub">
            Every Latin term gathers here as the module that introduces it is begun.
            A word earned is a distinction owned.
          </p>
        </header>

        {empty ? (
          <p className="vocab-empty">
            The shelf is empty. Begin a lesson and the first terms will gather.
          </p>
        ) : (
          groups.map(({ mod, terms }) => (
            <section className="vocab-group" key={String(mod)}>
              <div className="vocab-group-head">
                <span className="vocab-numeral">{groupHead(mod)}</span>
                <span className="vocab-group-title">{groupTitle(mod)}</span>
              </div>
              <div className="vocab-pills">
                {terms.map(t => (
                  <button
                    key={t.latin}
                    type="button"
                    className="vocab-pill"
                    onClick={() => setActive(t)}
                    aria-label={`${t.latin}, ${t.english}`}
                  >
                    {t.latin}
                  </button>
                ))}
              </div>
            </section>
          ))
        )}

        {/* Distinction Card codex (§4.2 / B3) — one room for everything
            collected-by-understanding. Earned cards only; empty and silent
            until the first one is owned. */}
        {codex.length > 0 && (
          <section className="codex-shelf">
            <div className="vocab-group-head">
              <span className="vocab-group-title">The distinctions you own</span>
            </div>
            <div className="codex-grid">
              {codex.map(entry => <CodexCard key={entry.key} entry={entry} />)}
            </div>
          </section>
        )}
      </div>

      {/* Gloss-card modal */}
      {active && (
        <div
          className="gloss-modal-backdrop"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <div
            className="gloss-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.latin}, ${active.english}`}
            onClick={e => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              className="gloss-close"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              ×
            </button>
            <GlossCard term={active} />
          </div>
        </div>
      )}
    </div>
  );
}
