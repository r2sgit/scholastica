'use client';

import { useRouter } from 'next/navigation';
import { MODULES } from '../../content/modules';
import { COURSE_MAP, ACTS, type CourseMapEntry } from '../../content/courseMap';
import { useProgress, type ModuleProgress, type StorageSchema } from '../../lib/progress';
import { getRank, getThesesEarned, getNearestUnlock } from '../../lib/gamification';
import { THESES } from '../../content/theses';
import { TERMS, isTermEarned } from '../../content/terms';
import TopBar from '../../components/TopBar';
import DrolleryCourt from '../../components/DrolleryCourt';

interface ModuleState {
  id: number;
  title: string;
  total: number;
  done: number;
  /** per-lesson dot: 'sine' (sticky perfect first pass, gold mark) |
      'done' (complete, with mistakes) | 'todo' (not yet begun) */
  pips: ('sine' | 'done' | 'todo')[];
  /** every lesson carries a sine errore mark → module-level flourish */
  allSineErrore: boolean;
}

function buildState(
  id: number,
  mp: ModuleProgress | undefined,
  marks: boolean[] | undefined,
): ModuleState | undefined {
  const mod = MODULES.find(m => m.id === id);
  if (!mod) return undefined;
  const lessonsComplete = mp?.lessonsComplete || [];
  const sine = marks || [];
  const pips = mod.lessons.map((_, i): 'sine' | 'done' | 'todo' => {
    if (!lessonsComplete[i]) return 'todo';
    return sine[i] ? 'sine' : 'done';
  });
  const done = pips.filter(p => p !== 'todo').length;
  return {
    id,
    title: mod.title,
    total: mod.lessons.length,
    done,
    pips,
    allSineErrore: done === mod.lessons.length && pips.every(p => p === 'sine'),
  };
}

/* ── Continue hero — the single most prominent element, "what do I do
   now" (B5 §2) ──────────────────────────────────────────────────── */

function ContinueHero({ states }: { states: ModuleState[] }) {
  const router = useRouter();

  // localStorage keeps no timestamps, so "most recent in progress" resolves
  // by the tie-break rule: lowest module id with 0 < done < total. Failing
  // that, the first incomplete module gets a Begin; failing that, complete.
  const inProgress = states.find(s => s.done > 0 && s.done < s.total);
  const firstIncomplete = states.find(s => s.done < s.total);
  const target = inProgress || firstIncomplete;
  const trulyFresh = states.every(s => s.done === 0);

  if (!target) {
    return (
      <div className="continue">
        <div>
          <div className="eyebrow">every built module complete</div>
          <div className="where">Revisit anything below whenever you like</div>
        </div>
        <button className="btn" onClick={() => router.push('/modules/1')}>
          Review <span>&rarr;</span>
        </button>
      </div>
    );
  }

  const mod = MODULES.find(m => m.id === target.id)!;
  const nextIdx = Math.max(0, mod.lessons.findIndex((_, i) => target.pips[i] === 'todo'));
  const lesson = mod.lessons[nextIdx];
  const beginning = target.done === 0;

  return (
    <div className="continue">
      <div>
        <div className="eyebrow">{trulyFresh ? 'start here' : beginning ? 'begin here' : 'pick up where you left off'}</div>
        <div className="where">
          {trulyFresh
            ? 'Begin at the Foundations'
            : (
              <>
                {target.title} &middot; Lesson {lesson.num} <span className="lat">&middot; {lesson.latin}</span>
              </>
            )}
        </div>
      </div>
      <button className="btn" onClick={() => router.push(`/lesson/${target.id}/${nextIdx}`)}>
        {beginning ? 'Begin' : 'Continue'} <span>&rarr;</span>
      </button>
    </div>
  );
}

/* ── Vine divider ─────────────────────────────────────────── */

function VineDivider() {
  return (
    <div className="cm-vinediv" aria-hidden="true">
      <svg viewBox="0 0 860 30" preserveAspectRatio="xMinYMid meet">
        <path d="M0 16 C 120 10, 240 22, 360 15 C 480 9, 600 22, 720 14 C 780 11, 820 18, 860 16"
          fill="none" stroke="#586240" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M180 15 C 170 4, 190 1, 190 13 Z" fill="#B88935" opacity="0.75" />
        <path d="M420 14 C 410 3, 430 1, 430 12 Z" fill="#B88935" opacity="0.75" />
        <path d="M660 14 C 650 3, 670 1, 670 12 Z" fill="#B88935" opacity="0.75" />
        <circle cx="295" cy="14" r="3" fill="#A42F23" /><circle cx="300" cy="18" r="3" fill="#A42F23" /><circle cx="305" cy="13" r="2.6" fill="#A42F23" />
        <circle cx="540" cy="14" r="3" fill="#A42F23" /><circle cx="545" cy="18" r="3" fill="#A42F23" /><circle cx="550" cy="13" r="2.6" fill="#A42F23" />
      </svg>
    </div>
  );
}

/* ── Module row (B5 §4): tone-pass blurb, progress dots, sine errore
   flourish; numerals in Fraunces, drolleries stay in the margins ── */

function ModuleRow({ entry, state }: { entry: CourseMapEntry; state?: ModuleState }) {
  const router = useRouter();
  const built = entry.built;
  const total = state?.total ?? 0;
  const done = state?.done ?? 0;
  const isDone = built && total > 0 && done === total;
  const isNow = built && done > 0 && done < total;
  const nextIdx = state ? state.pips.findIndex(p => p === 'todo') : -1;

  function openModule() {
    if (built) router.push(`/modules/${entry.id}`);
  }

  const cls = ['cm-row-card', !built && 'cm-row-locked', isDone && 'cm-row-done', entry.destination && 'cm-row-destination']
    .filter(Boolean).join(' ');

  return (
    <article
      className={cls}
      onClick={built ? openModule : undefined}
      role={built ? 'link' : undefined}
      tabIndex={built ? 0 : undefined}
      onKeyDown={e => { if (built && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openModule(); } }}
    >
      <div className="cm-row-numeral">{entry.numeral}</div>
      <div>
        <div className="cm-row-title">
          {entry.title} <span className="cm-row-latin">{entry.latin}</span>
        </div>
        <p className="cm-row-blurb">{entry.aim}</p>
        {built && state && (
          <div className="cm-row-meta">
            <span className="cm-row-dots">
              {state.pips.map((p, i) => (
                <span key={i} className={p !== 'todo' ? 'done' : (isNow && i === nextIdx ? 'now' : '')} />
              ))}
            </span>
            {state.allSineErrore ? (
              <span className="cm-row-sine">sine errore</span>
            ) : isDone ? (
              <span className="cm-row-label">complete</span>
            ) : isNow ? (
              <span className="cm-row-label">{`lesson ${done + 1} of ${total}`}</span>
            ) : (
              <span className="cm-row-label">{`${total} lessons`}</span>
            )}
          </div>
        )}
      </div>
      <div className="cm-row-state">
        {!built ? (
          <span className="cm-chip">in the scriptorium</span>
        ) : isDone ? (
          <a className="cm-review" href={`/modules/${entry.id}`} onClick={e => e.stopPropagation()}>Revisit</a>
        ) : isNow ? (
          <button
            className="btn small now"
            onClick={e => { e.stopPropagation(); router.push(`/lesson/${entry.id}/${nextIdx}`); }}
          >
            Continue <span>&rarr;</span>
          </button>
        ) : (
          <button
            className="btn small"
            onClick={e => { e.stopPropagation(); router.push(`/lesson/${entry.id}/0`); }}
          >
            Start
          </button>
        )}
      </div>
    </article>
  );
}

/* ── Course map page (B5: home-page register) ────────────────────── */

export default function CourseMapPage() {
  const { data, getModuleProgress } = useProgress();
  const router = useRouter();

  const states = MODULES
    .map(m => buildState(m.id, getModuleProgress(m.id), data.sineErrore?.[m.id]))
    .filter((s): s is ModuleState => !!s);
  const stateById = new Map(states.map(s => [s.id, s]));

  const rank = getRank(data as StorageSchema, THESES);
  const nearestUnlock = getNearestUnlock(data as StorageSchema, THESES);
  const nearestThesis = nearestUnlock ? THESES.find(t => t.n === nearestUnlock.n) : undefined;
  const earnedTheses = getThesesEarned(data as StorageSchema, THESES).length;
  const earnedWords = TERMS.filter(t => isTermEarned(t, data as StorageSchema)).length;

  return (
    <div className="map-page">
      <TopBar />

      {/* The original four margin drolleries, restored. Decorative; the assets
          all exist in /public/images/drolleries, so no 404 guard is needed. */}
      <div className="course-margin-art" aria-hidden="true">
        <div className="course-droll cd-tl"><img src="/images/drolleries/dr-01.png" alt="" /></div>
        <div className="course-droll cd-tr"><img src="/images/drolleries/dr-02.png" alt="" /></div>
        <div className="course-droll cd-bl"><img src="/images/drolleries/dr-03.png" alt="" /></div>
        <div className="course-droll cd-br"><img src="/images/drolleries/dr-04.png" alt="" /></div>
      </div>

      <div className="cm-stage" style={{ animation: 'fadeIn .4s ease both' }}>
        {/* Header strip: rank only, subtle. No habitus UI in v1 (B3). */}
        <div className="cm-header">
          <span className="cm-rank" aria-label={`Rank: ${rank}`}>{rank}</span>
        </div>

        {/* Header: what this course IS, one obvious next step (B5 §1) */}
        <section className="cm-hero">
          <h1>The <em>philosophy</em> of Thomas Aquinas.</h1>
          <p className="cm-lede">
            Eighteen modules in four acts that teach you to think the way Thomas thought.
            Each one hands you the tools the next one assumes. His theology comes later, as
            its own course; this is the ground it stands on.
          </p>
          <ContinueHero states={states} />
        </section>

        <VineDivider />

        {ACTS.map(act => {
          const mods = COURSE_MAP.filter(e => e.act === act.act);
          const built = mods.some(e => e.built);
          return (
            <section className={`cm-act${built ? '' : ' quiet'}`} key={act.act}>
              <div className="cm-act-kicker">{act.kicker}</div>
              <h2 className="cm-act-name">{act.title}</h2>
              <p className="cm-act-line">{act.sub}</p>
              <div className="cm-rows">
                {mods.map(entry => (
                  <ModuleRow key={entry.id} entry={entry} state={stateById.get(entry.id)} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Collections strip — after the acts; modules lead the page (B5 §5) */}
        <section className="cm-rooms-head">
          <div className="t">What you keep as you go</div>
          <p className="line">
            Two rooms collect everything you earn. Worth a visit whenever something new lands in them.
          </p>
        </section>
        <section className="cm-rooms" aria-label="Your collections">
          <a className="cm-room" href="#" onClick={e => { e.preventDefault(); router.push('/theses'); }}>
            <div className="name">
              <span className="t">Theses</span>
              <span className="tally">{earnedTheses} of 24 earned</span>
            </div>
            <p className="what">
              The twenty four sentences Rome thought worth defending. You earn each one by
              understanding it; the hall keeps what you&rsquo;ve won.
            </p>
            <div className="next">
              {nearestUnlock && nearestThesis
                ? `Thesis ${nearestThesis.numeral} is ${nearestUnlock.lessonsAway === 1 ? 'one lesson away' : `${nearestUnlock.lessonsAway} lessons away`} →`
                : earnedTheses === 0 ? 'the first awaits' : null}
            </div>
          </a>
          <a className="cm-room" href="#" onClick={e => { e.preventDefault(); router.push('/vocabularium'); }}>
            <div className="name">
              <span className="t">Vocabularium</span>
              <span className="tally">{earnedWords} words</span>
            </div>
            <p className="what">
              Your Latin, one word at a time. Every term you&rsquo;ve met, with its meaning in
              plain English, plus the distinctions you now own.
            </p>
          </a>
        </section>
      </div>

      {/* Drollery Court (B4): additive, grows in the margins as modules
          complete; compresses to a row above the colophon ≤640px. */}
      <DrolleryCourt />
    </div>
  );
}
