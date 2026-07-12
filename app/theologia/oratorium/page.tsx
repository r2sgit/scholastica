'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import { useTheologiaProgress, getModulesCompleteTheologia } from '../../../lib/progressTheologia';
import {
  ORATORIUM, ORATORIUM_HYMNS, getHymnAssembly, type OratoriumPiece,
} from '../../../content/theologia/oratorium';
import { getTheologiaCourseEntry } from '../../../content/theologia/courseMap';

/* The Oratorium (WP8): theology's hall — Aquinas's own prayers and hymns,
   earned piece by piece. Locked pieces are textless; earned ones illuminate
   in ultramarine (the wing accent). Hymns show their assembly state, stanzas
   painting onto one shared plate as modules complete. */

function gateLabel(gate: number): string {
  const e = getTheologiaCourseEntry(gate);
  return e ? `Theologia ${e.numeral}` : `Module ${gate}`;
}

function EarnedPiece({ p }: { p: OratoriumPiece }) {
  return (
    <div className="orat-piece orat-earned">
      <div className="orat-piece-name">{p.piece}</div>
      {p.textPending ? (
        <p className="orat-pending">{p.english}</p>
      ) : (
        <>
          <p className="orat-latin" lang="la">
            {p.latin.split('\n').map((line, i) => (
              <span key={i}>{line}{i < p.latin.split('\n').length - 1 && <br />}</span>
            ))}
          </p>
          <p className="orat-english">
            {p.english.split('\n').map((line, i) => (
              <span key={i}>{line}{i < p.english.split('\n').length - 1 && <br />}</span>
            ))}
          </p>
        </>
      )}
    </div>
  );
}

function LockedPiece({ p }: { p: OratoriumPiece }) {
  // Textless: the piece is not revealed until earned. Only the fact that
  // something waits, and where it is earned.
  return (
    <div className="orat-piece orat-locked" aria-hidden="true">
      <div className="orat-piece-name orat-locked-mark">&#10023;</div>
      <p className="orat-locked-say">Earned at {gateLabel(p.gate)}</p>
    </div>
  );
}

export default function OratoriumPage() {
  const { data } = useTheologiaProgress();
  const completed = useMemo(() => getModulesCompleteTheologia(data), [data]);
  const doneSet = useMemo(() => new Set(completed), [completed]);
  const assembly = useMemo(() => getHymnAssembly(completed), [completed]);

  // Standalone pieces (prayers, antiphon — no partOf): their own cards.
  const standalone = ORATORIUM.filter(p => !p.partOf);
  const earnedCount = ORATORIUM.filter(p => doneSet.has(p.gate)).length;

  return (
    <div className="map-page theologia-wing">
      <TopBar course="theologia" />

      <div className="orat-stage" style={{ animation: 'fadeIn .4s ease both' }}>
        <header className="orat-head">
          <h1 className="orat-title"><em>Oratorium</em></h1>
          <p className="orat-sub">
            The prayers and hymns Thomas wrote, earned one piece at a time. What
            the Church still sings at Benediction, given back to you whole.
          </p>
          <div className="orat-count">{earnedCount} of {ORATORIUM.length} earned</div>
        </header>

        {/* The hymns, assembling stanza by stanza onto shared plates. */}
        {assembly.map(({ hymn, pieces, earned, total, complete }) => (
          <section key={hymn.id} className={`orat-hymn${complete ? ' orat-hymn-complete' : ''}`}>
            <div className="orat-hymn-head">
              <span className="orat-hymn-title" lang="la">{hymn.title}</span>
              <span className="orat-hymn-tally">
                {complete ? 'complete' : `${earned} of ${total} ${total === 1 ? 'part' : 'parts'}`}
              </span>
            </div>
            <div className="orat-grid">
              {pieces.map(p => doneSet.has(p.gate)
                ? <EarnedPiece key={p.id} p={p} />
                : <LockedPiece key={p.id} p={p} />)}
            </div>
          </section>
        ))}

        {/* Standalone prayers and the antiphon. */}
        <section className="orat-standalone">
          <div className="orat-hymn-head">
            <span className="orat-hymn-title">Prayers</span>
          </div>
          <div className="orat-grid">
            {standalone.map(p => doneSet.has(p.gate)
              ? <EarnedPiece key={p.id} p={p} />
              : <LockedPiece key={p.id} p={p} />)}
          </div>
        </section>

        {earnedCount === 0 && (
          <p className="vocab-empty" style={{ marginTop: 8 }}>
            The first piece, Thomas’s prayer before study, is earned when you
            finish Theologia I.{' '}
            <Link href="/theologia/lesson/1/0" className="vocab-empty-door">Begin Theologia I &rarr;</Link>
          </p>
        )}
      </div>
    </div>
  );
}
