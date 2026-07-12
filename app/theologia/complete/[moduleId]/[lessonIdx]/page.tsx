'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { getTheologiaModule } from '../../../../../content/theologia';
import { playSound, type SoundId } from '../../../../../lib/sound';
import {
  readTheologiaProgress,
  getScoreTheologia,
  getScoreCeilingTheologia,
  getModulesCompleteTheologia,
} from '../../../../../lib/progressTheologia';
import { getNextOratoriumPiece } from '../../../../../content/theologia/oratorium';
import { readProgress, localISODate } from '../../../../../lib/progress';
import { getStreak } from '../../../../../lib/gamification';
import type { ScoreEvent } from '../../../../../lib/score';
import type { FinDistinction } from '../../../../../content/types';
import Prose from '../../../../../components/Prose';
import DistinctionCard from '../../../../../components/DistinctionCard';

/* Theologia fin, the sibling of app/complete/[moduleId]/[lessonIdx]/page.tsx.
   WP3 brings it to parity: it consumes the real markLessonComplete event
   (via ?event/&delta) and renders the produced RD4 reward stage over the
   theology score/ceiling and the shared streak — no fabricated data. No
   ThesisCeremony/rank/Drollery Court yet (the theology rank + Oratorium land
   in WP8). Distinction-card reveal and the review-mode "Already earned" tone
   are preserved. */

function finReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    || document.documentElement.classList.contains('motion-reduced');
}

/* rAF count-up, skipped under reduced motion (shows the final value). Local
   copy of the philosophy fin's helper — the two fin pages are deliberate
   siblings (see the philosophy page's note), and this is ~20 lines. */
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
    const settle = setTimeout(() => setShown(to), duration + 150);
    return () => { cancelAnimationFrame(raf); clearTimeout(settle); };
  }, [from, to, run]);
  return <>{format(shown)}</>;
}

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

/* The produced fin reward stage (RD4 parity, over the theology totals).
   Staged rows: score (count-up from the reconstructed pending to the flat
   award), the shared streak, and — on a perfect first pass — the sine-errore
   gold sweep. Then the friar and the distinction card. */
function RewardStage({
  event, delta, courseTotal, ceiling, streak, isPerfect, correct, total, distinction,
  oratoriumPull, onOratorium,
}: {
  event: ScoreEvent; delta: number; courseTotal: number; ceiling: number;
  streak: number; isPerfect: boolean; correct: number; total: number;
  distinction: FinDistinction | undefined;
  oratoriumPull: string | null;
  onOratorium: () => void;
}) {
  const reduced = finReducedMotion();
  const [stage, setStage] = useState(reduced ? 5 : 0);
  useEffect(() => {
    if (reduced) return;
    const seq = [220, 1000, 1700, 2300];
    const timers = seq.map((t, i) => setTimeout(() => {
      const s = i + 1;
      setStage(s);
      if (s === 2 && streak > 0) playSound('streak');
      if (s === 3 && event === 'first-perfect') playSound('sparkle');
    }, t));
    return () => timers.forEach(clearTimeout);
  }, [reduced, streak, event]);

  const award = REWARD_AWARD[event];
  // Reconstruct the in-lesson pending the HUD last showed, so the count-up
  // starts where the assembly left off (§4.1). Gap-close/revisit did not run
  // the accrual, so they count up from 0.
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

      {distinction && stage >= 4 && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 0' }}>
          <DistinctionCard distinction={distinction} />
        </div>
      )}

      {oratoriumPull && (
        <div>
          <button
            type="button"
            className={`fin-nextline${stage >= 4 ? ' in' : ''}`}
            onClick={onOratorium}
          >
            {oratoriumPull}{' '}<span className="arrow" aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </>
  );
}

function FinScreenInner() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const moduleId = Number(params.moduleId);
  const lessonIdx = Number(params.lessonIdx);
  const correct = Number(searchParams.get('correct') || 0);
  const total = Number(searchParams.get('total') || 0);
  const sound = searchParams.get('sound') as SoundId | null;
  const alreadyDone = searchParams.get('already') === '1';
  const event = (searchParams.get('event') || 'none') as ScoreEvent;
  const delta = Number(searchParams.get('delta') || 0);

  const [courseTotal, setCourseTotal] = useState(0);
  const [streak, setStreak] = useState(0);
  const [oratoriumPull, setOratoriumPull] = useState<string | null>(null);
  const ceiling = getScoreCeilingTheologia();

  const mod = getTheologiaModule(moduleId);
  const lesson = mod?.lessons[lessonIdx];
  const isPerfect = correct === total;
  const isLastLesson = mod ? lessonIdx >= mod.lessons.length - 1 : false;

  // markLessonComplete already wrote this pass; read the new totals for the
  // reward stage. Streak reads the shared philosophy store (one flame, WP2).
  useEffect(() => {
    const td = readTheologiaProgress();
    setCourseTotal(getScoreTheologia(td));
    setStreak(getStreak(readProgress(), localISODate()));
    // Nearest-Oratorium pull (WP8, §6): the next prayer/hymn piece waiting.
    const next = getNextOratoriumPiece(getModulesCompleteTheologia(td));
    setOratoriumPull(next ? `${next.piece} waits in the Oratorium` : null);
  }, []);

  useEffect(() => {
    if (sound) {
      const t = setTimeout(() => playSound(sound), 200);
      return () => clearTimeout(t);
    }
  }, [sound]);

  if (!mod || !lesson) {
    return <div style={{ padding: 40, textAlign: 'center', color: 'var(--ink-soft)' }}>Lesson not found.</div>;
  }

  const fin = lesson.fin;

  function handleNext() {
    if (isLastLesson) {
      router.push('/theologia');
    } else {
      router.push(`/theologia/lesson/${moduleId}/${lessonIdx + 1}`);
    }
  }

  return (
    <div
      className="theologia-wing"
      style={{ minHeight: '100dvh', background: 'var(--canvas)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '56px 24px 80px' }}
    >
      <div style={{ maxWidth: 560, width: '100%', textAlign: 'center', animation: 'fadeIn .5s ease both' }}>
        <span
          style={{
            display: 'inline-block', fontFamily: '"Emeritus", serif', fontSize: 16,
            color: 'var(--gold-text)', border: '1px solid var(--gold)', borderRadius: 4,
            padding: '4px 14px', marginBottom: 20, letterSpacing: '0.02em',
          }}
        >
          {fin.tag}
        </span>

        <Prose
          as="h1"
          style={{ fontFamily: '"Fraunces", serif', fontSize: 24, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.35, margin: '0 0 12px' }}
          html={fin.heading}
        />

        <div style={{ fontSize: 16, color: 'var(--ink-soft)', fontStyle: 'italic', marginBottom: 8 }}>
          {correct} of {total} correct
        </div>

        <Prose
          as="div"
          style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.55, marginBottom: 20, textAlign: 'left', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}
          html={fin.body}
        />

        {alreadyDone ? (
          (isPerfect || fin.distinction) && (
            <>
              <p style={{ color: 'var(--ink-mute)', fontStyle: 'italic', fontSize: 14 }}>Already earned.</p>
              {fin.distinction && (
                <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
                  <DistinctionCard distinction={fin.distinction} />
                </div>
              )}
            </>
          )
        ) : (
          <RewardStage
            event={event}
            delta={delta}
            courseTotal={courseTotal}
            ceiling={ceiling}
            streak={streak}
            isPerfect={isPerfect}
            correct={correct}
            total={total}
            distinction={fin.distinction}
            oratoriumPull={oratoriumPull}
            onOratorium={() => router.push('/theologia/oratorium')}
          />
        )}

        {isLastLesson && (
          <p style={{ fontSize: 14, color: 'var(--ink-mute)', fontStyle: 'italic', margin: '16px 0 0' }}>
            Module complete. <a href="/theologia">Back to Theologia</a>.
          </p>
        )}

        <button
          type="button"
          onClick={handleNext}
          className="btn"
          style={{ marginTop: 24, width: '100%', maxWidth: 320, fontSize: 16, padding: '14px 24px', borderRadius: 8 }}
        >
          {isLastLesson ? 'Back to Theologia' : 'Next Lesson'} <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default function TheologiaFinPage() {
  return (
    <Suspense fallback={<div style={{ padding: 40, textAlign: 'center' }}>Loading...</div>}>
      <FinScreenInner />
    </Suspense>
  );
}
