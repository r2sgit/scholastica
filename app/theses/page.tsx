'use client';

import { useEffect, useMemo, useState } from 'react';
import TopBar from '../../components/TopBar';
import { useProgress, readProgress, recordThesesCeremonyPlayed } from '../../lib/progress';
import { getThesesEarned } from '../../lib/gamification';
import { playSound } from '../../lib/sound';
import { THESES, THESIS_GROUPS, type Thesis } from '../../content/theses';

/* ── The Theses Board (§20.1 / G2) ──────────────────────────────────────
   The 24 Thomistic Theses as the trophy case. An earned thesis is an
   illuminated entry (Latin + English, gold Emeritus numeral). A locked
   thesis is dimmed and TEXTLESS: no Latin, no English, no hint ever reaches
   the DOM. The text itself is the trophy.

   Unlock ceremony: a thesis becomes earned when ALL ids in its modules_teach
   are complete. The first time the board is seen after a new unlock, the
   earned entry animates (illuminated initial), the module-complete sound
   tier plays once, the Commentator's unlock_line shows, and the thesis n is
   appended to thesesEarned so the ceremony never replays. */

function reducedMotion(): boolean {
  return typeof window !== 'undefined'
    && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

function EarnedEntry({ thesis, ceremony }: { thesis: Thesis; ceremony: boolean }) {
  return (
    <article className={`thesis-card earned${ceremony ? ' ceremony' : ''}`}>
      <div className="thesis-numeral" aria-hidden="true">{thesis.numeral}</div>
      <div className="thesis-body">
        <div className="thesis-latin">{thesis.latin}</div>
        <div className="thesis-english">{thesis.english}</div>
        {ceremony && (
          <p className="thesis-unlock" role="status">{thesis.unlock_line}</p>
        )}
      </div>
    </article>
  );
}

function LockedEntry({ thesis }: { thesis: Thesis }) {
  // Textless on purpose. Numeral + the single line; nothing else renders.
  return (
    <article className="thesis-card locked" aria-label={`Thesis ${thesis.numeral}, not yet earned`}>
      <div className="thesis-numeral" aria-hidden="true">{thesis.numeral}</div>
      <div className="thesis-locked-line">Thesis {thesis.numeral} &middot; not yet earned</div>
    </article>
  );
}

export default function ThesesBoardPage() {
  const { data } = useProgress();

  const earned = useMemo(
    () => new Set(getThesesEarned(data, THESES)),
    [data],
  );

  // Theses to ceremony this view: earned but whose ceremony has not played.
  // Snapshotted once from a fresh localStorage read so the animation is
  // driven independently of the hook's stored flag.
  const [ceremonying, setCeremonying] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Runs once. Reads localStorage directly (available at mount, no wait on
    // the hook's async load).
    const live = readProgress();
    const earnedNow = getThesesEarned(live, THESES);
    const played = new Set(live.thesesEarned || []);
    const pending = earnedNow.filter(n => !played.has(n)).sort((a, b) => a - b);
    if (pending.length === 0) return;

    setCeremonying(new Set(pending));
    const delay = reducedMotion() ? 150 : 280;
    const t = setTimeout(() => playSound('module-complete'), delay);
    // Record immediately and idempotently: the ceremony never replays, even
    // if the learner leaves before the animation ends (the animation runs off
    // the snapshotted `ceremonying` state, not the stored flag).
    recordThesesCeremonyPlayed(pending);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="map-page">
      <TopBar />

      <div className="theses-stage" style={{ animation: 'fadeIn .4s ease both' }}>
        <header className="theses-head">
          <div className="theses-title">
            Theses <span className="theses-xxiv">XXIV</span>
          </div>
          <p className="theses-sub">
            The four and twenty theses of Thomism, earned as you learn what they say.
            Each is quoted doctrine; the text itself is the trophy.
          </p>
        </header>

        {THESIS_GROUPS.map(group => {
          const rows = THESES.filter(t => t.group === group.id);
          return (
            <section className="theses-group" key={group.id}>
              <div className="theses-group-label">{group.label}</div>
              <div className="theses-list">
                {rows.map(t =>
                  earned.has(t.n)
                    ? <EarnedEntry key={t.n} thesis={t} ceremony={ceremonying.has(t.n)} />
                    : <LockedEntry key={t.n} thesis={t} />
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
