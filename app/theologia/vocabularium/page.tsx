'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import DistinctionMotif from '../../../components/DistinctionMotif';
import { useTheologiaProgress, getCodexEntriesTheologia } from '../../../lib/progressTheologia';
import { THEOLOGIA_MODULES } from '../../../content/theologia';
import type { CodexEntry } from '../../../lib/gamification';

/* Theology's Vocabularium (WP7): the course-scoped codex. Same shelf as
   philosophy's /vocabularium, over the theology distinction cards, wrapped in
   theologia-wing so the accent is ultramarine. No terms/pills shelf yet — the
   Part II glossary registry is authoring-side; the distinction codex is what
   the wing collects today. */

function CodexCard({ entry }: { entry: CodexEntry }) {
  const d = entry.distinction;
  return (
    <div className="codex-card">
      <div className="dcard-pair codex-pair" lang="la">
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

function FacedownCard() {
  return (
    <div className="codex-card codex-facedown" aria-hidden="true">
      <div className="codex-facedown-mark">&#10047;</div>
      <p className="codex-facedown-say">The next distinction waits.</p>
    </div>
  );
}

export default function TheologiaVocabulariumPage() {
  const { data } = useTheologiaProgress();

  const codex = useMemo(() => getCodexEntriesTheologia(data), [data]);

  // The next-acquisition tease: the first theology lesson in course order that
  // carries a distinction and isn't complete yet. One card, face down.
  const hasNextDistinction = useMemo(() => {
    for (const mod of THEOLOGIA_MODULES) {
      const mp = data.progress?.[mod.id];
      for (let i = 0; i < mod.lessons.length; i++) {
        if (mod.lessons[i].fin.distinction && !mp?.lessonsComplete?.[i]) return true;
      }
    }
    return false;
  }, [data]);

  return (
    <div className="map-page theologia-wing">
      <TopBar course="theologia" />

      <div className="vocab-stage" style={{ animation: 'fadeIn .4s ease both' }}>
        <header className="vocab-head">
          <h1 className="vocab-title"><em>Vocabularium</em></h1>
          <p className="vocab-sub">
            The distinctions the theology has handed you, one at a time.
          </p>
        </header>

        {codex.length > 0 || hasNextDistinction ? (
          <section className="codex-shelf">
            <div className="vocab-group-head">
              <span className="vocab-group-title">The distinctions you own</span>
            </div>
            <div className="codex-grid">
              {codex.map(entry => <CodexCard key={entry.key} entry={entry} />)}
              {hasNextDistinction && <FacedownCard />}
            </div>
          </section>
        ) : (
          <p className="vocab-empty">
            The first distinction arrives with your first theology lesson.{' '}
            <Link href="/theologia/lesson/1/0" className="vocab-empty-door">Begin Theologia I &rarr;</Link>
          </p>
        )}
      </div>
    </div>
  );
}
