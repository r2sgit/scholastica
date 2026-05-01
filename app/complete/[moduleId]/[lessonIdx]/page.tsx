'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { getModule, MODULES } from '../../../../content/modules';
import { playSound, type SoundId } from '../../../../lib/sound';

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
function ScorePips({ correct, total, missedIds }: { correct: number; total: number; missedIds: string[] }) {
  return (
    <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', margin: '20px 0' }}>
      {Array.from({ length: total }, (_, i) => {
        const isMissed = i >= correct || i >= total - missedIds.length;
        // Simpler: first `correct` are green, rest are red
        const isCorrectPip = i < correct;
        return (
          <div
            key={i}
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

  const mod = getModule(moduleId);
  const lesson = mod?.lessons[lessonIdx];
  const isPerfect = correct === total;
  const isLastLesson = mod ? lessonIdx >= mod.lessons.length - 1 : false;

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
      // Find next module in MODULES array
      const curIdx = MODULES.findIndex(m => m.id === moduleId);
      const nextMod = curIdx !== -1 ? MODULES[curIdx + 1] : undefined;
      if (nextMod) {
        router.push(`/lesson/${nextMod.id}/0`);
      } else {
        router.push('/modules');
      }
    } else {
      router.push(`/lesson/${moduleId}/${lessonIdx + 1}`);
    }
  }

  function handleReviewMissed() {
    router.push(`/lesson/${moduleId}/${lessonIdx}?filter=missed&missed=${missedParam}`);
  }

  return (
    <div
      style={{
        minHeight: '100vh',
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
            color: 'var(--gold)',
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
        <h1
          style={{
            fontFamily: '"Fraunces", serif',
            fontSize: 24,
            fontWeight: 600,
            color: 'var(--ink)',
            lineHeight: 1.35,
            margin: '0 0 12px',
          }}
          dangerouslySetInnerHTML={{ __html: fin.heading }}
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
        <div
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
          dangerouslySetInnerHTML={{ __html: fin.body }}
        />

        {/* Score pips */}
        <ScorePips correct={correct} total={total} missedIds={missedIds} />

        {/* Drollery */}
        <div style={{ margin: '24px 0', display: 'flex', justifyContent: 'center' }}>
          <img
            src={isPerfect ? '/images/drolleries/dr-05.png' : '/images/drolleries/dr-07.png'}
            alt=""
            aria-hidden="true"
            style={{ width: 120, height: 'auto', opacity: 0.9 }}
          />
        </div>

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
            {isLastLesson
              ? (MODULES.findIndex(m => m.id === moduleId) < MODULES.length - 1
                ? 'Next Module →'
                : 'Back to Module Map →')
              : 'Next Lesson →'}
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
      <div style={{ minHeight: '100vh', background: 'var(--canvas)', display: 'grid', placeItems: 'center' }}>
        <div style={{ color: 'var(--ink-soft)', fontStyle: 'italic' }}>Loading...</div>
      </div>
    }>
      <FinScreenInner />
    </Suspense>
  );
}
