'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MODULES } from '../../content/modules';
import TopBar from '../../components/TopBar';

const STORAGE_KEY = 'scholastica_v1';

/* ── All 18 modules for the rail ─────────────────────────────── */
const ALL_MODULES = [
  { n: '0',     t: 'Foundations',                          sub: 'Fundamenta',            active: true  },
  { n: 'I',     t: 'Act and Potency',                     sub: 'Actus et Potentia',      active: false },
  { n: 'II',    t: 'Being and Essence',                   sub: 'Esse et Essentia',       active: false },
  { n: 'III',   t: 'Hylomorphism',                        sub: 'Hylemorphismus',         active: false },
  { n: 'IV',    t: 'Substance, Suppositum, Person',       sub: 'Suppositum et Persona',  active: false },
  { n: 'V',     t: 'Logic',                               sub: 'Logica',                 active: true  },
  { n: 'VI',    t: 'The Transcendentals',                 sub: 'Transcendentalia',       active: false },
  { n: 'VII',   t: 'The Four Causes',                     sub: 'Quattuor Causae',        active: false },
  { n: 'VIII',  t: 'The Soul and Its Faculties',           sub: 'De Anima',               active: false },
  { n: 'IX',    t: 'Intellect and Knowledge',             sub: 'Intellectus et Cognitio',active: false },
  { n: 'X',     t: 'Semiotics — Signs and Meaning',       sub: 'De Signis',              active: false },
  { n: 'XI',    t: 'Will, Appetite, and the Passions',    sub: 'Voluntas et Passiones',  active: false },
  { n: 'XII',   t: 'Natural Law and the Human Act',       sub: 'Lex Naturalis',          active: true  },
  { n: 'XIII',  t: 'Virtues and Habits',                  sub: 'De Virtutibus',          active: false },
  { n: 'XIV',   t: 'The Grammar of Distinctions',         sub: 'Distinctiones',          active: false },
  { n: 'XV',    t: 'Analogy of Being',                    sub: 'Analogia Entis',         active: false },
  { n: 'XVI',   t: 'Method of the Summa',                 sub: 'Modus Summae',           active: false },
  { n: 'XVII',  t: 'Existential Thomism — The Debate',    sub: 'De Esse',                active: false },
];

/* Map rail index → content module id */
const RAIL_TO_MODULE_ID: Record<number, number> = { 0: 0, 5: 5, 12: 12 };

interface ModuleProgress {
  lessonsComplete: boolean[];
  scores: Array<{ correct: number; total: number; missedIds: string[] } | null>;
}

function getProgress(): Record<number, ModuleProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw).progress || {};
  } catch {
    return {};
  }
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

/* ── Lesson descriptions (M0-specific, for the map view) ──── */
const M0_BLURBS: Record<string, string> = {
  'The Two Questions': 'What a thing is, and that it is — the distinction at the root of everything else.',
  'Act and Potency': "Why a log can burn before it does. Aquinas' hinge, inherited from Aristotle.",
  'Real Things': 'The difference between a distinction that cuts nature at its joints and one that only lives in the mind.',
  'The Four Causes': 'Four answers to four different questions — not a list of four kinds of thrust.',
  'The Stuff and the Shape': 'Why a bronze statue is not the bronze, and not the shape, but both held together.',
  'The Thing and Its Properties': "What stands under; what rides upon. The grammar of 'the apple is red.'",
  'The Seven Moves': 'Run the six distinctions together on a single live example. No new vocabulary.',
};

export default function ModuleMapPage() {
  const router = useRouter();
  const [progress, setProgress] = useState<Record<number, ModuleProgress>>({});
  const [activeModuleId, setActiveModuleId] = useState(0);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const activeModule = MODULES.find(m => m.id === activeModuleId);
  if (!activeModule) return null;

  const mp = progress[activeModuleId];
  const lessonsComplete = mp?.lessonsComplete || [];
  const scores = mp?.scores || [];
  const doneCount = lessonsComplete.filter(Boolean).length;
  const totalLessons = activeModule.lessons.length;
  const pct = totalLessons > 0 ? Math.round(100 * doneCount / totalLessons) : 0;

  // Find next lesson to play
  const nextIdx = lessonsComplete.findIndex((done, i) => !done) === -1
    ? 0
    : lessonsComplete.findIndex((done) => !done);

  function getLessonStatus(idx: number): 'complete' | 'mistakes' | 'available' {
    if (!lessonsComplete[idx]) return 'available';
    const sc = scores[idx];
    if (sc && sc.correct === sc.total) return 'complete';
    return 'mistakes';
  }

  function getScoreText(idx: number): string {
    const sc = scores[idx];
    if (!sc) return 'Not yet begun';
    return `${sc.correct}/${sc.total}`;
  }

  function handleLessonClick(idx: number) {
    router.push(`/lesson/${activeModuleId}/${idx}`);
  }

  function handleModuleSwitch(railIdx: number) {
    const moduleId = RAIL_TO_MODULE_ID[railIdx];
    if (moduleId !== undefined) {
      setActiveModuleId(moduleId);
    }
  }

  const nextLesson = activeModule.lessons[nextIdx];

  return (
    <div className="map-page">
      <TopBar moduleId={activeModuleId} />

      <div className="map-stage" style={{ animation: 'fadeIn .4s ease both' }}>
        {/* Module header */}
        <div className="module-hd">
          <div className="module-copy">
            <div className="eyebrow">
              {activeModule.label} &middot;{' '}
              <span className="small-caps" style={{ color: 'var(--ink-soft)', letterSpacing: '0.08em', fontSize: 13 }}>
                {activeModuleId === 0 ? 'Fundamenta' : activeModuleId === 5 ? 'Logica' : 'Lex Naturalis'}
              </span>
            </div>
            <h1><em>{activeModule.title}</em></h1>
            <p className="aim">
              {activeModuleId === 0 && 'The seven distinctions you need in hand before any Thomistic argument will sit still long enough to be examined.'}
              {activeModuleId === 5 && 'Aristotelian logic as Aquinas inherited it — the organon that makes his arguments walk.'}
              {activeModuleId === 12 && 'Natural law, the human act, and the moral vocabulary that follows from them.'}
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
            <div className="mk">{'\u261B'}</div>
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
          {activeModule.lessons.map((lesson, idx) => {
            const status = getLessonStatus(idx);
            const isCapstone = idx === activeModule.lessons.length - 1;
            const blurb = M0_BLURBS[lesson.title] || '';

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
                    {status === 'complete' ? 'Complete' : status === 'mistakes' ? 'Complete \u00B7 review' : 'Available'}
                  </span>
                  <span className="score-line">
                    {status === 'available' ? (
                      'Not yet begun'
                    ) : status === 'complete' ? (
                      <><b>{getScoreText(idx)}</b> &middot; <em>sine errore</em></>
                    ) : (
                      <><b>{getScoreText(idx)}</b> &middot; one to revisit</>
                    )}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Locked-modules rail */}
        <div className="modules-rail">
          {ALL_MODULES.map((m, i) => (
            <div
              key={i}
              className={`mrail ${m.active ? 'active' : 'locked'}`}
              onClick={() => m.active && handleModuleSwitch(i)}
              style={m.active && i === (activeModuleId === 0 ? 0 : activeModuleId === 5 ? 5 : 12) ? { borderColor: 'var(--gold)', borderWidth: 2 } : undefined}
            >
              <div className="n">{m.n}</div>
              <div className="t">{m.t}</div>
              <div className="sub-lat">{m.sub}</div>
              {m.active ? (
                <div className="pad" style={{ marginTop: 4, fontSize: '10.5px', letterSpacing: '0.12em', fontVariantCaps: 'all-small-caps', color: 'var(--gold)' }}>
                  Available
                </div>
              ) : (
                <div className="pad" style={{ marginTop: 4, fontSize: '10.5px', letterSpacing: '0.12em', fontVariantCaps: 'all-small-caps', color: 'var(--ink-faint)' }}>
                  Locked
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="map-colophon">
          <em>Scholastica</em> &nbsp;&middot;&nbsp; 18 modules &nbsp;&middot;&nbsp; Module 0 through Module XVII
        </div>
      </div>
    </div>
  );
}
