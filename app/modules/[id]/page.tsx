'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getModule } from '../../../content/modules';
import { useProgress } from '../../../lib/progress';
import TopBar from '../../../components/TopBar';

/* Eyebrow Latin + aim copy for modules whose content files predate the
   latin/aim fields. Newer modules carry these in their own data. */
const LEGACY_LATIN: Record<number, string> = {
  0: 'Fundamenta',
  5: 'Logica',
  12: 'Lex Naturalis',
};
const LEGACY_AIM: Record<number, string> = {
  0: 'The seven distinctions you need in hand before any Thomistic argument will sit still long enough to be examined.',
  5: 'Aristotelian logic as Aquinas inherited it — the organon that makes his arguments walk.',
  12: 'Natural law, the human act, and the moral vocabulary that follows from them.',
};

function toRoman(n: number): string {
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let r = '';
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) { r += syms[i]; n -= vals[i]; }
  }
  return r;
}

/* ── Vine SVG ─────────────────────────────────────────────── */
function VineDivider() {
  return (
    <div className="header-vine" aria-hidden="true">
      <svg viewBox="0 0 700 36" preserveAspectRatio="xMinYMid meet"
           style={{ width: '100%', maxWidth: 700, height: 36, display: 'block', overflow: 'visible' }}>
        <path d="M0 18 C 80 14, 160 22, 240 17 C 320 12, 400 22, 480 16 C 560 10, 630 20, 700 18"
              fill="none" stroke="#586240" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M120 17 C 110 6, 128 2, 130 14 Z" fill="#B88935" opacity="0.7"/>
        <path d="M280 16 C 270 5, 292 3, 290 15 Z" fill="#B88935" opacity="0.7"/>
        <path d="M460 15 C 450 4, 472 2, 468 14 Z" fill="#B88935" opacity="0.7"/>
        <path d="M620 17 C 612 6, 630 4, 628 16 Z" fill="#B88935" opacity="0.7"/>
        <circle cx="195" cy="16" r="3.2" fill="#A42F23"/>
        <circle cx="200" cy="20" r="3.2" fill="#A42F23"/>
        <circle cx="205" cy="14" r="2.8" fill="#A42F23"/>
        <circle cx="390" cy="17" r="3.2" fill="#A42F23"/>
        <circle cx="396" cy="21" r="3.2" fill="#A42F23"/>
        <circle cx="401" cy="14" r="2.8" fill="#A42F23"/>
        <circle cx="570" cy="16" r="3.2" fill="#A42F23"/>
        <circle cx="575" cy="20" r="2.8" fill="#A42F23"/>
      </svg>
    </div>
  );
}

/* ── Lesson descriptions (M0-specific, for the lesson list) ── */
const M0_BLURBS: Record<string, string> = {
  'The Two Questions': 'What a thing is, and that it is — the distinction at the root of everything else.',
  'Act and Potency': "Why a log can burn before it does. Aquinas' hinge, inherited from Aristotle.",
  'Real Things': 'The difference between a distinction that cuts nature at its joints and one that only lives in the mind.',
  'The Four Causes': 'Four answers to four different questions — not a list of four kinds of thrust.',
  'The Stuff and the Shape': 'Why a bronze statue is not the bronze, and not the shape, but both held together.',
  'The Thing and Its Properties': "What stands under; what rides upon. The grammar of 'the apple is red.'",
  'The Seven Moves': 'Run the six distinctions together on a single live example. No new vocabulary.',
};

export default function ModuleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { data, getModuleProgress } = useProgress();

  const moduleId = Number(params.id);
  const mod = getModule(moduleId);

  // Unknown or unbuilt module id: back to the course map
  useEffect(() => {
    if (!mod) router.replace('/modules');
  }, [mod, router]);

  if (!mod) return null;

  const mp = getModuleProgress(moduleId);
  const lessonsComplete = mp?.lessonsComplete || [];
  const scores = mp?.scores || [];
  const sineMarks = data.sineErrore?.[moduleId] || [];
  const doneCount = lessonsComplete.filter(Boolean).length;
  const totalLessons = mod.lessons.length;
  const pct = totalLessons > 0 ? Math.round(100 * doneCount / totalLessons) : 0;

  // Find next lesson to play. Iterate the lesson list, not the stored
  // array: lessonsComplete is sparse and shorter than the module while
  // later lessons are unplayed.
  const firstIncomplete = mod.lessons.findIndex((_, i) => !lessonsComplete[i]);
  const nextIdx = firstIncomplete === -1 ? 0 : firstIncomplete;

  // Sine errore is sticky: a perfect first pass earns the gold mark and a
  // later imperfect retake never removes it. 'done' = complete without the
  // mark; 'available' = not yet begun.
  function getLessonStatus(idx: number): 'sine' | 'done' | 'available' {
    if (!lessonsComplete[idx]) return 'available';
    return sineMarks[idx] ? 'sine' : 'done';
  }

  function getScoreText(idx: number): string {
    const sc = scores[idx];
    if (!sc) return 'Not yet begun';
    return `${sc.correct}/${sc.total}`;
  }

  function handleLessonClick(idx: number) {
    router.push(`/lesson/${moduleId}/${idx}`);
  }

  const nextLesson = mod.lessons[nextIdx];

  return (
    <div className="map-page">
      <TopBar moduleId={moduleId} moduleTitle={mod.title} modulesCrumb />

      <div className="map-stage" style={{ animation: 'fadeIn .4s ease both' }}>
        {/* Module header */}
        <div className="module-hd">
          <div className="module-copy">
            <div className="eyebrow">
              Module {toRoman(moduleId + 1)} &middot; {mod.title} &middot;{' '}
              <span className="small-caps" style={{ color: 'var(--ink-soft)', letterSpacing: '0.08em', fontSize: 13 }}>
                {mod.latin ?? LEGACY_LATIN[moduleId] ?? ''}
              </span>
            </div>
            <h1><em>{mod.title}</em></h1>
            <p className="aim">
              {mod.aim ?? LEGACY_AIM[moduleId] ?? ''}
            </p>
          </div>
        </div>

        <VineDivider />

        {/* Module progress */}
        <div className="mod-progress">
          <div className="meta"><b>{doneCount}</b> of {totalLessons} complete</div>
          <div className="bar"><div className="fill" style={{ width: `${pct}%` }} /></div>
          {nextLesson && doneCount < totalLessons && (
            <div className="meta" style={{ color: 'var(--gold-deep)' }}>
              Next: <span className="lat">{nextLesson.latin}</span>
            </div>
          )}
        </div>

        {/* Continue card */}
        {nextLesson && (
          <div className="continue">
            <div className="mk">{'☛'}</div>
            <div className="who">
              <div className="k">
                {doneCount === 0 ? 'Begin' : doneCount >= totalLessons ? 'Module complete' : 'Next up'} &middot; <em>Lectio {nextLesson.num}</em>
              </div>
              <div className="t">
                {nextLesson.title} &mdash; <em>{nextLesson.latin}</em>
              </div>
              <div className="m">
                {doneCount === 0 ? 'Not yet begun' : `${doneCount} of ${totalLessons} lessons done`}
              </div>
            </div>
            <button className="btn" onClick={() => handleLessonClick(nextIdx)}>
              {doneCount === 0 ? <>Begin &mdash; <em>incipit</em></> : <>Continue &mdash; <em>prosequi</em></>}
            </button>
          </div>
        )}

        {/* Lesson list */}
        <ul className="lessons">
          {mod.lessons.map((lesson, idx) => {
            const status = getLessonStatus(idx);
            const isCapstone = idx === mod.lessons.length - 1;
            const blurb = moduleId === 0 ? (M0_BLURBS[lesson.title] || '') : '';

            return (
              <li
                key={lesson.id}
                className={`lesson s-${status}${isCapstone ? ' capstone' : ''}`}
                onClick={() => handleLessonClick(idx)}
              >
                <div className="numeral">
                  {isCapstone ? (
                    <span style={{ fontFamily: 'Fraunces', fontStyle: 'italic', fontWeight: 500, fontSize: 14 }}>Cap.</span>
                  ) : lesson.num}
                </div>
                <div className="txt">
                  <div className="row1">
                    <span className="tag">Lectio {lesson.num}</span>
                  </div>
                  <h3>{lesson.title}</h3>
                  <div className="sub">
                    <span className="lat">{lesson.latin}</span>
                    {blurb && <> &middot; {blurb}</>}
                  </div>
                </div>
                <div className="rightcol">
                  <span className="state">
                    <span className="dot" />
                    {status === 'available' ? 'Available' : 'Complete'}
                  </span>
                  <span className="score-line">
                    {status === 'available' ? (
                      'Not yet begun'
                    ) : status === 'sine' ? (
                      <><b>{getScoreText(idx)}</b> &middot; <em>sine errore</em></>
                    ) : (
                      <b>{getScoreText(idx)}</b>
                    )}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
