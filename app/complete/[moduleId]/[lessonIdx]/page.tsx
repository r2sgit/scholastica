'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { getModule } from '../../../../content/modules';
import { playSound, type SoundId } from '../../../../lib/sound';
import { readProgress, localISODate } from '../../../../lib/progress';
import { getRank, getThesesEarned, getNearestUnlock, getScore, getScoreCeiling, getStreak, type Rank } from '../../../../lib/gamification';
import type { ScoreEvent } from '../../../../lib/score';
import { THESES, type Thesis } from '../../../../content/theses';
import type { FinDistinction } from '../../../../content/types';
import Prose from '../../../../components/Prose';
import ThesisCeremony from '../../../../components/ThesisCeremony';
import DistinctionCard from '../../../../components/DistinctionCard';

/* ── Vine Divider ─────────────────────────────────────────── */
function VineDivider() {
  return (
    <svg
      viewBox="0 0 400 24"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', maxWidth: 320, height: 24, display: 'block', margin: '20px auto', opacity: 0.7 }}
      aria-hidden="true"
    >
      <path d="M0 12 C 50 9, 100 15, 150 11 C 200 7, 250 15, 300 10 C 350 6, 380 14, 400 12"
            fill="none" stroke="#586240" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M80 11 C 72 3, 88 1, 86 10 Z" fill="#B88935" opacity="0.65"/>
      <path d="M220 10 C 212 2, 230 1, 226 9 Z" fill="#B88935" opacity="0.65"/>
      <path d="M340 11 C 334 3, 348 2, 346 10 Z" fill="#B88935" opacity="0.65"/>
      <circle cx="140" cy="11" r="2.5" fill="#A42F23"/>
      <circle cx="145" cy="14" r="2.2" fill="#A42F23"/>
      <circle cx="280" cy="10" r="2.5" fill="#A42F23"/>
      <circle cx="285" cy="13" r="2.2" fill="#A42F23"/>
    </svg>
  );
}

/* ── Score Pips ───────────────────────────────────────────── */
function ScorePips({ correct, total, missedIds, sweep }: { correct: number; total: number; missedIds: string[]; sweep: boolean }) {
  return (
    <div
      className={sweep ? 'pips-sweep' : undefined}
      style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', margin: '20px 0' }}
    >
      {Array.from({ length: total }, (_, i) => {
        const isMissed = i >= correct || i >= total - missedIds.length;
        // Simpler: first `correct` are green, rest are red
        const isCorrectPip = i < correct;
        return (
          <div
            key={i}
            className="pip-dot"
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: isCorrectPip ? 'var(--correct)' : 'transparent',
              border: isCorrectPip ? '2px solid var(--correct)' : '2px solid var(--wrong)',
            }}
          />
        );
      })}
    </div>
  );
}

function finReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    || document.documentElement.classList.contains('motion-reduced');
}

/* rAF count-up, skipped under reduced motion (shows the final value). */
function CountUp({ from, to, run, format }: {
  from: number; to: number; run: boolean; format: (v: number) => string;
}) {
  const [shown, setShown] = useState(finReducedMotion() ? to : from);
  useEffect(() => {
    if (!run) return;
    if (finReducedMotion() || to === from) { setShown(to); return; }
    setShown(from);
    const duration = 600;
    const t0 = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(from + (to - from) * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    // Safety net: rAF is paused in a hidden/backgrounded tab, which would
    // otherwise freeze the count at `from`. This guarantees the true final
    // value settles regardless.
    const settle = setTimeout(() => setShown(to), duration + 150);
    return () => { cancelAnimationFrame(raf); clearTimeout(settle); };
  }, [from, to, run]);
  return <>{format(shown)}</>;
}

/* The friar's reaction line at the fin (RD4). Perfect and non-perfect
   variants, em-dash-free per handbook §10; ported from the prototype. */
function friarLine(isPerfect: boolean): string {
  return isPerfect
    ? 'A perfect pass, not one stumble. I shall note it in the margin where such things are kept.'
    : 'A stumble teaches what a stroll cannot. The distinction is yours all the same.';
}

const REWARD_AWARD: Record<string, string> = {
  'first-perfect': '+10',
  'first-miss': '+6',
  'gap-close': '+3',
  'revisit': '+1',
};

/* ── The produced fin reward stage (RD4, gamification-v3 §5) ──────────────
   Staged rows: score (count-up from the reconstructed pending to the flat
   award), streak, and — on a perfect first pass — the sine-errore gold
   sweep. Then the friar at real size with a reaction line, and the
   next-unlock pull. Reveals in sequence; reduced motion shows it all at
   once with final values. */
function RewardStage({
  event, delta, courseTotal, ceiling, streak, isPerfect, correct, total,
  distinction, nearestThesisNumeral, lessonsAway, onNext,
}: {
  event: ScoreEvent; delta: number; courseTotal: number; ceiling: number;
  streak: number; isPerfect: boolean; correct: number; total: number;
  distinction: FinDistinction | undefined;
  nearestThesisNumeral: string | null; lessonsAway: number | null;
  onNext: () => void;
}) {
  const reduced = finReducedMotion();
  const [stage, setStage] = useState(reduced ? 5 : 0);
  useEffect(() => {
    if (reduced) return;
    // rl1 score, rl3 streak, rl4 perfect, friar, nextline (prototype timings)
    const seq = [220, 1000, 1700, 2300, 2900];
    const timers = seq.map((t, i) => setTimeout(() => setStage(i + 1), t));
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  const award = REWARD_AWARD[event];
  // Reconstruct the in-lesson pending the HUD last showed, so the count-up
  // starts where the assembly left off (§4.1): first passes ran the accrual
  // (target 10 clean / 6 after a miss); gap-close and revisit did not, so
  // they count up from 0.
  const isFirstPass = event === 'first-perfect' || event === 'first-miss';
  const pendingStart = isFirstPass && total > 0
    ? Math.round((correct / total) * (event === 'first-perfect' ? 10 : 6))
    : 0;

  return (
    <>
      <div className="rewardrow">
        {award && (
          <div className={`rline${stage >= 1 ? ' in' : ''}`}>
            <span className="lbl"><span className="g" aria-hidden="true">✦</span> Score</span>
            <span className="amt">
              +<CountUp from={pendingStart} to={delta} run={stage >= 1} format={v => `${v}`} />
            </span>
          </div>
        )}
        {streak > 0 && (
          <div className={`rline${stage >= 2 ? ' in' : ''}`}>
            <span className="lbl"><span className="g" aria-hidden="true">🔥</span> Streak</span>
            <span className="amt">{streak} {streak === 1 ? 'day' : 'days'}</span>
          </div>
        )}
        {event === 'first-perfect' && (
          <div className={`rline perfect goldsweep${stage >= 3 ? ' in sweep' : ''}`}>
            <span className="lbl"><span className="g" aria-hidden="true">✶</span> <em>Sine errore</em></span>
            <span className="amt">perfect · first pass</span>
          </div>
        )}
      </div>
      {award && (
        <div className="fin-reward-total">{`${courseTotal.toLocaleString()} of ${ceiling.toLocaleString()}`}</div>
      )}

      <div className={`friarwrap${stage >= 4 ? ' in' : ''}`}>
        <img src="/images/drolleries/dr-05.png" alt="" aria-hidden="true" />
        <div className="say">{friarLine(isPerfect)}</div>
      </div>

      {/* Distinction card — mounts at the friar stage so its own flip
          sequences after the reward rows rather than racing them. */}
      {distinction && stage >= 4 && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 0' }}>
          <DistinctionCard distinction={distinction} />
        </div>
      )}

      {nearestThesisNumeral && lessonsAway != null && (
        <div>
          <button
            type="button"
            className={`fin-nextline${stage >= 5 ? ' in' : ''}`}
            onClick={onNext}
          >
            {`Thesis ${nearestThesisNumeral} is `}
            {lessonsAway === 1 ? 'one lesson away' : `${lessonsAway} lessons away`}
            {' '}<span className="arrow" aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </>
  );
}

/* ── FinScreen Inner ──────────────────────────────────────── */
function FinScreenInner() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const moduleId = Number(params.moduleId);
  const lessonIdx = Number(params.lessonIdx);
  const correct = Number(searchParams.get('correct') || 0);
  const total = Number(searchParams.get('total') || 0);
  const sound = searchParams.get('sound') as SoundId | null;
  const missedParam = searchParams.get('missed') || '';
  const missedIds = missedParam ? missedParam.split(',') : [];
  // A retake of a lesson already complete before this attempt: identical
  // flow, but the fin shows "already earned" in place of reward replay — no
  // pips re-gild, no ceremony replay. §4.3 / app-design-architecture.
  const alreadyDone = searchParams.get('already') === '1';
  // W3-Score: the event/delta markLessonComplete decided at write time,
  // carried on the redirect (never re-derived here — see lib/score.ts).
  const scoreEvent = (searchParams.get('event') || 'none') as ScoreEvent;
  const scoreDelta = Number(searchParams.get('delta') || 0);

  const mod = getModule(moduleId);
  const lesson = mod?.lessons[lessonIdx];
  const isPerfect = correct === total;
  const isLastLesson = mod ? lessonIdx >= mod.lessons.length - 1 : false;

  // Rank is read from storage on the client (after markLessonComplete has
  // written this lesson). Shown only on module-complete fins, never every
  // lesson, never as a badge. §20.2 / G1.
  const [rank, setRank] = useState<Rank | null>(null);
  // Theses this module completion newly satisfies (taught by this module,
  // now earned, not yet ceremonied). The announcement only; the board itself
  // owns the illuminated-initial animation and the ceremony-once guard.
  const [newTheses, setNewTheses] = useState<Thesis[]>([]);
  // The ceremony overlay fires before this screen's content is usable; once
  // dismissed (or if there was nothing to ceremony), the normal fin renders.
  const [ceremonyDone, setCeremonyDone] = useState(false);
  // Nearest not-yet-earned thesis, for the "Thesis N is one lesson away"
  // anticipation line (B2). Computed once at mount from real module progress;
  // unaffected by the ceremony (that's about thesesEarned bookkeeping, not
  // module completion, so it can't change the nearest-unlock answer here).
  const [nearestUnlock, setNearestUnlock] = useState<{ n: number; lessonsAway: number } | null>(null);
  // Course score total, read post-write (markLessonComplete already wrote
  // this pass's points before this screen mounted). null until the mount
  // effect runs, same pattern as rank/nearestUnlock above.
  const [score, setScore] = useState<{ total: number; ceiling: number } | null>(null);
  // Strict day streak (RD1/RD4), read post-write for the fin's streak row.
  const [streak, setStreak] = useState(0);
  useEffect(() => {
    const data = readProgress();
    setRank(getRank(data, THESES));
    setNearestUnlock(getNearestUnlock(data, THESES));
    setScore({ total: getScore(data), ceiling: getScoreCeiling() });
    setStreak(getStreak(data, localISODate()));
    if (isLastLesson) {
      const earned = new Set(getThesesEarned(data, THESES));
      const played = new Set(data.thesesEarned || []);
      const fresh = THESES.filter(
        t => t.modules_teach.includes(moduleId) && earned.has(t.n) && !played.has(t.n)
      ).sort((a, b) => a.n - b.n);
      setNewTheses(fresh);
    }
  }, [isLastLesson, moduleId]);

  // Play sound on mount
  useEffect(() => {
    if (sound) {
      // Small delay so the page renders first
      const t = setTimeout(() => playSound(sound), 200);
      return () => clearTimeout(t);
    }
  }, [sound]);

  if (!mod || !lesson) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--ink-soft)' }}>
        Lesson not found.
      </div>
    );
  }

  const fin = lesson.fin;

  function handleNextLesson() {
    if (isLastLesson) {
      // Module complete: back to this module's detail page
      router.push(`/modules/${moduleId}`);
    } else {
      router.push(`/lesson/${moduleId}/${lessonIdx + 1}`);
    }
  }

  function handleReviewMissed() {
    router.push(`/lesson/${moduleId}/${lessonIdx}?filter=missed&missed=${missedParam}`);
  }

  // Ceremony gate: fires in place of the fin screen's old inline thesis
  // announcement, before the rest of this screen is usable. Never on a
  // retake of an already-done lesson — the ceremony-once guard already
  // stops newTheses from repopulating, but alreadyDone is the belt to that
  // guard's suspenders.
  if (newTheses.length > 0 && !ceremonyDone && !alreadyDone) {
    return (
      <ThesisCeremony
        theses={newTheses}
        moduleId={moduleId}
        onDone={() => setCeremonyDone(true)}
      />
    );
  }

  return (
    <div
      style={{
        minHeight: '100dvh',
        background: 'var(--canvas)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '56px 24px 80px',
      }}
    >
      <div
        style={{
          maxWidth: 560,
          width: '100%',
          textAlign: 'center',
          animation: 'fadeIn .5s ease both',
        }}
      >
        {/* Latin tag pill */}
        <span
          style={{
            display: 'inline-block',
            fontFamily: '"Emeritus", serif',
            fontSize: 16,
            color: 'var(--gold-text)',
            border: '1px solid var(--gold)',
            borderRadius: 4,
            padding: '4px 14px',
            marginBottom: 20,
            letterSpacing: '0.02em',
          }}
        >
          {fin.tag}
        </span>

        {/* Chestertonian heading */}
        <Prose
          as="h1"
          style={{
            fontFamily: '"Fraunces", serif',
            fontSize: 24,
            fontWeight: 600,
            color: 'var(--ink)',
            lineHeight: 1.35,
            margin: '0 0 12px',
          }}
          html={fin.heading}
        />

        {/* Score subtitle */}
        <div
          style={{
            fontSize: 16,
            color: 'var(--ink-soft)',
            fontStyle: 'italic',
            marginBottom: 8,
          }}
        >
          {correct} of {total} correct
        </div>

        <VineDivider />

        {/* Fin body */}
        <Prose
          as="div"
          style={{
            fontSize: 17,
            color: 'var(--ink-soft)',
            lineHeight: 1.55,
            marginBottom: 20,
            textAlign: 'left',
            maxWidth: 480,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          html={fin.body}
        />

        {/* Rank — only on a module-complete fin. perfectus carries the
            self-aware joke; lesser ranks get one quiet small-caps line. */}
        {isLastLesson && rank && (
          rank === 'perfectus' ? (
            <p
              style={{
                fontSize: 16,
                color: 'var(--ink-soft)',
                lineHeight: 1.55,
                fontStyle: 'italic',
                maxWidth: 480,
                margin: '0 auto 8px',
              }}
            >
              You are now, by the course&rsquo;s own reckoning, <em>perfectus</em>.
              Aquinas reserved the word for the saints in glory, so do try to wear
              it lightly.
            </p>
          ) : (
            <div
              style={{
                fontVariantCaps: 'all-small-caps',
                letterSpacing: '0.16em',
                fontSize: 13,
                color: 'var(--ink-mute)',
                margin: '4px 0 0',
              }}
            >
              {rank}
            </div>
          )
        )}

        {/* Score pips — gold sweep on a perfect lesson, but never re-gilded
            on a retake of an already-done lesson (§4.3). */}
        <ScorePips correct={correct} total={total} missedIds={missedIds} sweep={isPerfect && !alreadyDone} />

        {/* The produced fin reward stage (RD4): staged score/streak/sine-errore
            rows, the friar at real size with a reaction line, the distinction
            card, and the next-unlock pull. A retake of an already-done lesson
            keeps the quiet "already earned" tone instead — the reward never
            replays (§4.3). */}
        {alreadyDone ? (
          (isPerfect || fin.distinction) && (
            <p className="fin-already-earned">
              {isPerfect ? 'Already earned, sine errore.' : 'Already earned.'}
            </p>
          )
        ) : score && (
          <RewardStage
            event={scoreEvent}
            delta={scoreDelta}
            courseTotal={score.total}
            ceiling={score.ceiling}
            streak={streak}
            isPerfect={isPerfect}
            correct={correct}
            total={total}
            distinction={fin.distinction}
            nearestThesisNumeral={nearestUnlock ? (THESES.find(t => t.n === nearestUnlock.n)?.numeral ?? null) : null}
            lessonsAway={nearestUnlock ? nearestUnlock.lessonsAway : null}
            onNext={() => router.push('/theses')}
          />
        )}

        {/* Navigation buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
          <button
            type="button"
            onClick={handleNextLesson}
            style={{
              fontFamily: 'inherit',
              fontSize: 16,
              fontWeight: 500,
              padding: '14px 28px',
              background: 'var(--gold)',
              color: 'var(--paper)',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              transition: 'background .2s',
              width: '100%',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'var(--gold-deep)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'var(--gold)')}
          >
            {isLastLesson ? 'Back to Module →' : 'Next Lesson →'}
          </button>

          {missedIds.length > 0 && (
            <button
              type="button"
              onClick={handleReviewMissed}
              style={{
                fontFamily: 'inherit',
                fontSize: 15,
                padding: '12px 24px',
                background: 'transparent',
                color: 'var(--ink-soft)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                cursor: 'pointer',
                transition: 'border-color .2s',
                width: '100%',
              }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--ink-faint)')}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              Review missed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Page wrapper ─────────────────────────────────────────── */
export default function FinScreenPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100dvh', background: 'var(--canvas)', display: 'grid', placeItems: 'center' }}>
        <div style={{ color: 'var(--ink-soft)', fontStyle: 'italic' }}>Loading...</div>
      </div>
    }>
      <FinScreenInner />
    </Suspense>
  );
}
