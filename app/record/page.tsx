'use client';

import { useEffect, useState } from 'react';
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
import {
  readTheologiaProgress,
  getCodexEntriesTheologia,
  getScoreTheologia,
  getScoreCeilingTheologia,
  getRankTheologia,
} from '../../lib/progressTheologia';
import { ORATORIUM } from '../../content/theologia/oratorium';
import { getModulesCompleteTheologia } from '../../lib/progressTheologia';
import type { Rank } from '../../lib/gamification';
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

  // Theology collection count (WP7), per wing — the codex is course-scoped, so
  // /record shows both totals separately, never summed. Read client-side to
  // avoid a hydration mismatch (theology store is empty on the server).
  const [theo, setTheo] = useState<{
    codex: number; score: number; ceiling: number; rank: Rank; oratorium: number;
  } | null>(null);
  useEffect(() => {
    const td = readTheologiaProgress();
    const done = new Set(getModulesCompleteTheologia(td));
    setTheo({
      codex: getCodexEntriesTheologia(td).length,
      score: getScoreTheologia(td),
      ceiling: getScoreCeilingTheologia(),
      rank: getRankTheologia(td),
      oratorium: ORATORIUM.filter(p => done.has(p.gate)).length,
    });
  }, []);

  return (
    <div className="map-page">
      <TopBar />

      <div className="record-stage" style={{ animation: 'fadeIn .4s ease both' }}>
        <header className="record-head">
          <h1 className="record-title"><em>Registrum</em></h1>
          <p className="record-sub">
            What the record shows so far. Quiet and entirely yours; an account
            will carry it further, not replace it. Two volumes, kept apart:
            the two knowledges are not one number.
          </p>
        </header>

        {/* Both volumes side by side (WP8). Each carries its own rank and its
            own score/ceiling; the totals are never summed. */}
        <section className="record-volumes" aria-label="Volumes">
          <div className="record-volume">
            <div className="record-volume-name">Philosophia</div>
            <div className="record-rank" aria-label={`Philosophy rank: ${rank}`}>{rank}</div>
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
          </div>

          <div className="record-volume theologia-wing">
            <div className="record-volume-name">Theologia</div>
            <div className="record-rank" aria-label={`Theology rank: ${theo?.rank ?? 'incipiens'}`}>{theo?.rank ?? 'incipiens'}</div>
            <div className="record-score-total">
              <span className="n">{(theo?.score ?? 0).toLocaleString()}</span>
              <span className="of">{`of ${(theo?.ceiling ?? 0).toLocaleString()}`}</span>
            </div>
            <div className="record-acts">
              <div className="record-act-row">
                <span className="act-name">Oratorium</span>
                <span className="act-score">{`${theo?.oratorium ?? 0} of ${ORATORIUM.length} earned`}</span>
              </div>
            </div>
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
            <span className="t">Codex · Philosophia</span>
            <span className="tally">{`${codexCount} distinction${codexCount === 1 ? '' : 's'}`}</span>
          </Link>
          <Link href="/theologia/vocabularium" className="record-collect-card">
            <span className="t">Codex · Theologia</span>
            <span className="tally">{`${theo?.codex ?? 0} distinction${(theo?.codex ?? 0) === 1 ? '' : 's'}`}</span>
          </Link>
          <Link href="/theologia/oratorium" className="record-collect-card">
            <span className="t">Oratorium</span>
            <span className="tally">{`${theo?.oratorium ?? 0} of ${ORATORIUM.length} earned`}</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
