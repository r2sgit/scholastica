'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { getTheologiaModule } from '../../../../../content/theologia';
import { playSound, type SoundId } from '../../../../../lib/sound';
import Prose from '../../../../../components/Prose';
import DistinctionCard from '../../../../../components/DistinctionCard';

/* Simplified sibling of app/complete/[moduleId]/[lessonIdx]/page.tsx: same
   fin-copy contract (tag/heading/body[/distinction]), no ThesisCeremony, no
   rank, no Drollery Court, no Sine Errore friar art -- all real Philosophy
   mechanics with nothing on the theology side to attach to yet (one draft
   module, no theses-equivalent board). Score pips kept since they're a
   plain, general "how did that lesson go" signal that costs nothing to
   keep honest. */

function ScorePips({ correct, total }: { correct: number; total: number }) {
  return (
    <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', margin: '20px 0' }}>
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          style={{
            width: 10, height: 10, borderRadius: '50%',
            background: i < correct ? 'var(--correct)' : 'transparent',
            border: i < correct ? '2px solid var(--correct)' : '2px solid var(--wrong)',
          }}
        />
      ))}
    </div>
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

  const mod = getTheologiaModule(moduleId);
  const lesson = mod?.lessons[lessonIdx];
  const isPerfect = correct === total;
  const isLastLesson = mod ? lessonIdx >= mod.lessons.length - 1 : false;

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

        <ScorePips correct={correct} total={total} />

        {alreadyDone ? (
          (isPerfect || fin.distinction) && (
            <p style={{ color: 'var(--ink-mute)', fontStyle: 'italic', fontSize: 14 }}>Already earned.</p>
          )
        ) : (
          <>
            {/* The friar's reaction (RD4). The theology wing has no score,
                streak, or sine-errore tracking yet (a fast-follow, §8), so the
                fin carries the produced warmth it honestly can: the friar with
                a reaction line. No fabricated reward rows. */}
            <div className="friarwrap in">
              <img src="/images/drolleries/dr-05.png" alt="" aria-hidden="true" />
              <div className="say">
                {isPerfect
                  ? 'A perfect pass, not one stumble. I shall note it in the margin where such things are kept.'
                  : 'A stumble teaches what a stroll cannot. The distinction is yours all the same.'}
              </div>
            </div>
            {fin.distinction && (
              <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
                <DistinctionCard distinction={fin.distinction} />
              </div>
            )}
          </>
        )}

        {isLastLesson && (
          <p style={{ fontSize: 14, color: 'var(--ink-mute)', fontStyle: 'italic', margin: '16px 0 0' }}>
            Module complete. Draft, pre-review: <a href="/theologia">back to Theologia</a>.
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
