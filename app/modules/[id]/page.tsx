'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getModule } from '../../../content/modules';
import { getCourseEntry } from '../../../content/courseMap';
import { useProgress } from '../../../lib/progress';
import { getModulesComplete, getThesesEarned } from '../../../lib/gamification';
import { THESES } from '../../../content/theses';
import TopBar from '../../../components/TopBar';

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

/* ── Lesson descriptions (Module 1-specific, for the lesson list) ── */
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
  const isModuleComplete = totalLessons > 0 && doneCount === totalLessons;

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
  const courseEntry = getCourseEntry(moduleId);

  // Thesis promise (§4.2): theses where this module is the one piece still
  // missing — finishing it is the domino that unlocks them. The anticipation
  // layer's strongest placement, since it names the payoff right where the
  // learner is about to act on it.
  const modulesDone = new Set(getModulesComplete(data));
  const earnedNs = new Set(getThesesEarned(data, THESES));
  const promised = THESES.filter(t =>
    !earnedNs.has(t.n) &&
    t.modules_teach.includes(moduleId) &&
    t.modules_teach.every(id => id === moduleId || modulesDone.has(id))
  );

  return (
    <div className="map-page">
      <TopBar moduleId={moduleId} moduleTitle={mod.title} modulesCrumb />

      <div className="map-stage" style={{ animation: 'fadeIn .4s ease both' }}>
        {/* Module header — same card language as the map (courseMap's
            tone-pass blurb, kept in sync with the /modules row). */}
        <div className="module-hd">
          <div className="module-copy">
            <div className="eyebrow">
              Module {toRoman(moduleId)} &middot; {mod.title} &middot;{' '}
              <span className="small-caps" lang="la" style={{ color: 'var(--ink-soft)', letterSpacing: '0.08em', fontSize: 13 }}>
                {mod.latin ?? courseEntry?.latin ?? ''}
              </span>
              {isModuleComplete && (
                <span className="module-complete-flourish" aria-hidden="true">{' '}&#10047;</span>
              )}
            </div>
            <h1><em>{mod.title}</em></h1>
            <p className="aim">
              {courseEntry?.aim ?? mod.aim ?? ''}
            </p>
          </div>
        </div>

        <VineDivider />

        {/* Module progress. Complete: no "next" to name, so the strip's
            primary action becomes Revisit instead — reviewing never
            re-triggers ceremonies or the sine-errore sweep (§4.2/§4.3). */}
        <div className="mod-progress">
          <div className="meta"><b>{doneCount}</b> of {totalLessons} complete</div>
          <div className="bar"><div className="fill" style={{ width: `${pct}%` }} /></div>
          {isModuleComplete ? (
            <button
              type="button"
              className="btn small revisit"
              onClick={() => handleLessonClick(0)}
            >
              Revisit <span>&rarr;</span>
            </button>
          ) : (
            nextLesson && (
              <div className="meta" style={{ color: 'var(--gold-deep)' }}>
                Next: <span className="lat" lang="la">{nextLesson.latin}</span>
              </div>
            )
          )}
        </div>

        {/* Thesis promise (§4.2): the anticipation layer's strongest
            placement — the payoff named right where the learner acts. */}
        {promised.length > 0 && (
          <p className="module-thesis-promise">
            {`Finishing this module earns ${promised.length > 1 ? 'Theses' : 'Thesis'} ${promised.map(t => t.numeral).join(' & ')}.`}
          </p>
        )}

        {/* Lesson list — done (gold ± sine fleuron) · next (vermillion, the
            row itself carries the primary button — the one prominent
            element) · pending (quiet) · capstone (recapitulatio label). */}
        <ul className="lessons">
          {mod.lessons.map((lesson, idx) => {
            const status = getLessonStatus(idx);
            const isCapstone = idx === mod.lessons.length - 1;
            const isNext = idx === nextIdx && doneCount < totalLessons;
            const blurb = moduleId === 1 ? (M0_BLURBS[lesson.title] || '') : '';

            return (
              <li
                key={lesson.id}
                className={`lesson s-${status}${isCapstone ? ' capstone' : ''}${isNext ? ' s-next' : ''}`}
                onClick={() => handleLessonClick(idx)}
              >
                <div className="numeral">
                  {isCapstone ? (
                    <span style={{ fontFamily: 'Fraunces', fontStyle: 'italic', fontWeight: 500, fontSize: 14 }}>Cap.</span>
                  ) : lesson.num}
                </div>
                <div className="txt">
                  <div className="row1">
                    <span className="tag">{isCapstone ? 'recapitulatio' : `Lectio ${lesson.num}`}</span>
                  </div>
                  <h3>{lesson.title}</h3>
                  <div className="sub">
                    <span className="lat" lang="la">{lesson.latin}</span>
                    {blurb && <> &middot; {blurb}</>}
                  </div>
                </div>
                <div className="rightcol">
                  {isNext ? (
                    <button
                      className="btn small now"
                      onClick={e => { e.stopPropagation(); handleLessonClick(idx); }}
                    >
                      {doneCount === 0 ? 'Begin' : 'Continue'} <span>&rarr;</span>
                    </button>
                  ) : (
                    <>
                      <span className="state">
                        <span className="dot" />
                        {status === 'available' ? 'Available' : 'Complete'}
                        {status === 'sine' && <span className="fleuron" aria-hidden="true"> &#10047;</span>}
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
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
