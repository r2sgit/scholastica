'use client';

import { useEffect, useMemo, useState } from 'react';
import TopBar from '../../components/TopBar';
import {
  useProgress,
  readProgress,
  recordThesesCeremonyPlayed,
  recordDivisionsIlluminated,
} from '../../lib/progress';
import { getThesesEarned, lessonsAwayForThesis } from '../../lib/gamification';
import { playSound } from '../../lib/sound';
import { COURSE_MAP } from '../../content/courseMap';
import { MODULES } from '../../content/modules';
import { THESES, THESIS_GROUPS, type Thesis, type ThesisGroup } from '../../content/theses';

/* ── The Theses Board (§20.1 / G2, anticipation layer B2) ────────────────
   The 24 Thomistic Theses as the trophy case. An earned thesis is an
   illuminated entry (unlock_line leading, Latin + English beneath, gold
   Emeritus numeral). A locked thesis stays TEXTLESS on the doctrine itself
   (no Latin, no English ever reaches the DOM) but now tempts: a riddle-hint
   in the Commentator's register, and a path line naming the gating
   module(s), with a countdown when the gate is one module away.

   Unlock ceremony now fires at the fin screen (ThesisCeremony, B1); this
   page's own ceremony effect below is the catch-up path for a thesis that
   became earned without the ceremony recording (e.g. the learner left the
   fin screen before the mount effect ran). */

function reducedMotion(): boolean {
  return typeof window !== 'undefined'
    && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

function toRoman(n: number): string {
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let r = '';
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) { r += syms[i]; n -= vals[i]; }
  }
  return r;
}

/** "taught by Module II · Act and Potency" / "taught by Modules II & III ·
    Act and Potency & Being and Essence" — no thesis currently gates on more
    than two modules; a third+ falls back to a plain count. */
function pathLabel(moduleIds: number[]): string {
  const entries = moduleIds.map(id => COURSE_MAP.find(e => e.id === id)).filter((e): e is NonNullable<typeof e> => !!e);
  if (entries.length === 0) return '';
  if (entries.length === 1) {
    return `taught by Module ${entries[0].numeral} · ${entries[0].title}`;
  }
  if (entries.length === 2) {
    return `taught by Modules ${entries[0].numeral} & ${entries[1].numeral} · ${entries[0].title} & ${entries[1].title}`;
  }
  return `taught by ${entries.length} modules`;
}

function EarnedEntry({ thesis, ceremony }: { thesis: Thesis; ceremony: boolean }) {
  return (
    <article className={`thesis-card earned${ceremony ? ' ceremony' : ''}`}>
      <div className="thesis-numeral" aria-hidden="true">{thesis.numeral}</div>
      <div className="thesis-body">
        <div className="thesis-headline" role={ceremony ? 'status' : undefined}>{thesis.unlock_line}</div>
        <div className="thesis-latin" lang="la">{thesis.latin}</div>
        <div className="thesis-english">{thesis.english}</div>
      </div>
    </article>
  );
}

function LockedEntry({ thesis, lessonsAway }: { thesis: Thesis; lessonsAway: number | null }) {
  const isNext = lessonsAway !== null;
  const path = pathLabel(thesis.modules_teach);

  // No safe hint (defensive branch; every current thesis has one): numeral
  // only, per the riddle-hint authoring rule — nothing else renders.
  if (!thesis.riddle_hint) {
    return (
      <article className="thesis-card locked" aria-label={`Thesis ${thesis.numeral}, not yet earned`}>
        <div className="thesis-numeral" aria-hidden="true">{thesis.numeral}</div>
      </article>
    );
  }

  return (
    <article
      className={`thesis-card locked${isNext ? ' next' : ''}`}
      aria-label={`Thesis ${thesis.numeral}, not yet earned. ${thesis.riddle_hint}`}
    >
      <div className="thesis-numeral" aria-hidden="true">{thesis.numeral}</div>
      <div className="thesis-body">
        <p className="thesis-hint">{thesis.riddle_hint}</p>
        <div className="thesis-path">
          {path}
          {isNext && (
            <span className="away">
              {` · ${lessonsAway} lesson${lessonsAway === 1 ? '' : 's'} away`}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ThesesBoardPage() {
  const { data } = useProgress();

  const earned = useMemo(
    () => new Set(getThesesEarned(data, THESES)),
    [data],
  );

  // Fresh-hall anticipation (§4.5): before anything is earned, the shortest
  // path to the first thesis — the built module with the fewest lessons
  // among those that alone gate a thesis. Not tied to live progress (a
  // brand-new learner has none), so this is the course's own answer, not
  // the state's.
  const emptyLessonsAway = useMemo(() => {
    if (earned.size > 0) return null;
    const singleGateModuleIds = THESES
      .filter(t => t.modules_teach.length === 1)
      .map(t => t.modules_teach[0])
      .filter(modId => MODULES.some(m => m.id === modId));
    if (singleGateModuleIds.length === 0) return null;
    const modId = Math.min(...singleGateModuleIds);
    return MODULES.find(m => m.id === modId)?.lessons.length ?? null;
  }, [earned]);

  // Theses to ceremony this view: earned but whose ceremony has not played
  // (catch-up path only; B1's fin-screen ceremony is the primary path now).
  const [ceremonying, setCeremonying] = useState<Set<number>>(new Set());
  // Division labels whose one-beat gold illumination is playing this view.
  const [illuminating, setIlluminating] = useState<Set<ThesisGroup>>(new Set());

  useEffect(() => {
    // Runs once. Reads localStorage directly (available at mount, no wait on
    // the hook's async load).
    const live = readProgress();
    const earnedNow = new Set(getThesesEarned(live, THESES));
    const played = new Set(live.thesesEarned || []);
    const pending = [...earnedNow].filter(n => !played.has(n)).sort((a, b) => a - b);

    // Division illumination: any group now fully earned that hasn't played
    // its beat yet. Quiet tier — a label flash, not the full ceremony.
    const doneGroups = new Set(live.divisionsIlluminated || []);
    const newlyDone = THESIS_GROUPS
      .map(g => g.id)
      .filter(id => !doneGroups.has(id) && THESES.filter(t => t.group === id).every(t => earnedNow.has(t.n)));

    if (pending.length === 0 && newlyDone.length === 0) return;

    let soundTimer: ReturnType<typeof setTimeout> | undefined;
    if (pending.length > 0) {
      setCeremonying(new Set(pending));
      const delay = reducedMotion() ? 150 : 280;
      soundTimer = setTimeout(() => playSound('module-complete'), delay);
      // Record immediately and idempotently: the ceremony never replays,
      // even if the learner leaves before the animation ends.
      recordThesesCeremonyPlayed(pending);
    }
    if (newlyDone.length > 0) {
      setIlluminating(new Set(newlyDone));
      recordDivisionsIlluminated(newlyDone);
    }
    return () => { if (soundTimer) clearTimeout(soundTimer); };
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
          {emptyLessonsAway !== null && (
            <p className="theses-empty-anticipation">
              {`Twenty four sentences wait to be earned. The first is ${emptyLessonsAway === 1 ? 'one lesson' : `${emptyLessonsAway} lessons`} away.`}
            </p>
          )}
        </header>

        {THESIS_GROUPS.map(group => {
          const rows = THESES.filter(t => t.group === group.id);
          const earnedCount = rows.filter(t => earned.has(t.n)).length;
          return (
            <section className="theses-group" key={group.id}>
              <div className={`theses-group-label${illuminating.has(group.id) ? ' illuminate' : ''}`}>
                {group.label}
                <span className="tally">
                  {`${earnedCount === 0 ? '0' : toRoman(earnedCount).toLowerCase()} of ${toRoman(rows.length).toLowerCase()} illuminated`}
                </span>
              </div>
              <div className="theses-list">
                {rows.map(t =>
                  earned.has(t.n)
                    ? <EarnedEntry key={t.n} thesis={t} ceremony={ceremonying.has(t.n)} />
                    : <LockedEntry key={t.n} thesis={t} lessonsAway={lessonsAwayForThesis(data, t)} />
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
