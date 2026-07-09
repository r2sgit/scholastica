'use client';

import Link from 'next/link';
import TopBar from '../../components/TopBar';
import { useProgress, type StorageSchema } from '../../lib/progress';
import {
  getRank,
  getScore,
  getScoreCeiling,
  getActBreakdown,
  getThesesEarned,
  getSineErroreTally,
  getCodexEntries,
} from '../../lib/gamification';
import { THESES } from '../../content/theses';

/* ── /record — Registrum-lite (scholastica-prelogin-scoring.md §5) ───────
   Read-only, quiet, no feeds, no comparisons, no activity log. Everything
   here is computable from localStorage today, per the write-time score
   (lib/score.ts) and the existing gamification derivations. What waits
   for accounts on purpose: display name, "studying since," cross-device
   sync — none of those render here. When accounts land this page grows
   into the full Registrum; nothing here gets thrown away. */
export default function RecordPage() {
  const { data } = useProgress();

  const rank = getRank(data as StorageSchema, THESES);
  const score = getScore(data as StorageSchema);
  const ceiling = getScoreCeiling();
  const acts = getActBreakdown(data as StorageSchema);
  const thesesEarned = getThesesEarned(data as StorageSchema, THESES).length;
  const sineErrore = getSineErroreTally(data as StorageSchema);
  const codexCount = getCodexEntries(data as StorageSchema).length;

  return (
    <div className="map-page">
      <TopBar />

      <div className="record-stage" style={{ animation: 'fadeIn .4s ease both' }}>
        <header className="record-head">
          <h1 className="record-title"><em>Registrum</em></h1>
          <p className="record-sub">
            What the record shows so far. Quiet and entirely yours; an account
            will carry it further, not replace it.
          </p>
          <div className="record-rank" aria-label={`Rank: ${rank}`}>{rank}</div>
        </header>

        <section className="record-score" aria-label="Score">
          <div className="record-score-total">
            <span className="n">{score.toLocaleString()}</span>
            <span className="of">{`of ${ceiling.toLocaleString()}`}</span>
          </div>
          <div className="record-acts">
            {acts.map(a => (
              <div className="record-act-row" key={a.act}>
                <span className="act-name">{a.act}</span>
                <span className="act-score">{`${a.score.toLocaleString()} of ${a.ceiling.toLocaleString()}`}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="record-collections" aria-label="Collections">
          <Link href="/theses" className="record-collect-card">
            <span className="t">Theses</span>
            <span className="tally">{`${thesesEarned} of 24 earned`}</span>
          </Link>
          <div className="record-collect-card static">
            <span className="t">Sine Errore</span>
            <span className="tally">{`${sineErrore} lesson${sineErrore === 1 ? '' : 's'}`}</span>
          </div>
          <Link href="/vocabularium" className="record-collect-card">
            <span className="t">Codex</span>
            <span className="tally">{`${codexCount} distinction${codexCount === 1 ? '' : 's'}`}</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
