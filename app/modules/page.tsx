'use client';

import { useRouter } from 'next/navigation';
import { MODULES } from '../../content/modules';
import { COURSE_MAP, ACTS, type CourseMapEntry } from '../../content/courseMap';
import { useProgress, type ModuleProgress, type StorageSchema } from '../../lib/progress';
import { getRank } from '../../lib/gamification';
import { THESES } from '../../content/theses';
import TopBar from '../../components/TopBar';
import HabitusVine from '../../components/HabitusVine';

function toRoman(n: number): string {
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let r = '';
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) { r += syms[i]; n -= vals[i]; }
  }
  return r;
}

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

/* ── Continue hero ────────────────────────────────────────── */

function ContinueHero({ states }: { states: ModuleState[] }) {
  const router = useRouter();

  // localStorage keeps no timestamps, so "most recent in progress" resolves
  // by the tie-break rule: lowest module id with 0 < done < total. Failing
  // that, the first incomplete module gets a Begin; failing that, complete.
  const inProgress = states.find(s => s.done > 0 && s.done < s.total);
  const firstIncomplete = states.find(s => s.done < s.total);
  const target = inProgress || firstIncomplete;

  if (!target) {
    return (
      <div className="continue cm-hero">
        <div className="mk">{'☛'}</div>
        <div className="who">
          <div className="k">Complete &middot; every built module finished</div>
          <div className="t">The rest of the course is in the scriptorium</div>
          <div className="m">Revisit any module below to review</div>
        </div>
        <button className="btn" onClick={() => router.push('/modules/0')}>
          Review &mdash; <em>repetere</em>
        </button>
      </div>
    );
  }

  const mod = MODULES.find(m => m.id === target.id)!;
  const nextIdx = Math.max(0, mod.lessons.findIndex((_, i) => target.pips[i] === 'todo'));
  const lesson = mod.lessons[nextIdx];
  const beginning = target.done === 0;

  return (
    <div className="continue cm-hero">
      <div className="mk">{'☛'}</div>
      <div className="who">
        <div className="k">
          {beginning ? 'Begin' : 'Continue'} &middot; Module {toRoman(target.id + 1)} &middot; {target.title}
        </div>
        <div className="t">
          Lectio {lesson.num} &mdash; {lesson.title} &middot; <span className="lat">{lesson.latin}</span>
        </div>
        <div className="m">
          {beginning
            ? 'Not yet begun'
            : `${target.done} of ${target.total} lessons done · the iron is still in the forge`}
        </div>
      </div>
      <button className="btn" onClick={() => router.push(`/lesson/${target.id}/${nextIdx}`)}>
        {beginning ? <>Begin &mdash; <em>incipit</em></> : <>Continue &mdash; <em>prosequi</em></>}
      </button>
    </div>
  );
}

/* ── Module card ──────────────────────────────────────────── */

function ModuleCard({ entry, state }: { entry: CourseMapEntry; state?: ModuleState }) {
  const router = useRouter();

  let status = 'In scriptorio';
  let complete = false;
  if (entry.built && state) {
    if (state.done === 0) status = 'Available';
    else if (state.done < state.total) status = 'In progress';
    else { status = state.allSineErrore ? 'Complete · sine errore' : 'Complete'; complete = true; }
  }

  const cls = [
    'cm-card',
    !entry.built && 'scriptorio',
    complete && 'complete',
    state?.allSineErrore && 'sine-errore',
    entry.destination && 'destination',
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cls}
      onClick={() => entry.built && router.push(`/modules/${entry.id}`)}
      role={entry.built ? 'link' : undefined}
      tabIndex={entry.built ? 0 : undefined}
      onKeyDown={e => { if (entry.built && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); router.push(`/modules/${entry.id}`); } }}
    >
      <span className="cm-numeral">{entry.numeral}</span>
      <h3>{entry.title}</h3>
      <div className="cm-sub">{entry.latin}</div>
      <div className="cm-aim">{entry.aim}</div>
      <div className="cm-foot">
        {entry.built && state && (
          <div className="cm-pips">
            {state.pips.map((p, i) => (
              <span key={i} className={`cm-pip${p === 'sine' ? ' sine' : p === 'done' ? ' done' : ''}`} />
            ))}
          </div>
        )}
        <span className="cm-status">{status}</span>
      </div>
    </div>
  );
}

/* ── Course map page ──────────────────────────────────────── */

export default function CourseMapPage() {
  const { data, getModuleProgress } = useProgress();

  const states = MODULES
    .map(m => buildState(m.id, getModuleProgress(m.id), data.sineErrore?.[m.id]))
    .filter((s): s is ModuleState => !!s);
  const stateById = new Map(states.map(s => [s.id, s]));

  const rank = getRank(data as StorageSchema, THESES);

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
        {/* Module-map header strip: the habitus vine on the left (fullness
            only, no numbers) and the rank on the right (subtle, never a badge
            or a progress-bar-to-next-rank). */}
        <div className="cm-header">
          <HabitusVine />
          <span className="cm-rank" aria-label={`Rank: ${rank}`}>{rank}</span>
        </div>

        <ContinueHero states={states} />

        {ACTS.map(act => (
          <div className="cm-act" key={act.act}>
            <div className="cm-act-hd">
              <span className="n">{act.latin}</span>
              <h2>{act.title}</h2>
              <div className="line" />
            </div>
            <p className="cm-act-sub">{act.sub}</p>
            <div className="cm-grid">
              {COURSE_MAP.filter(e => e.act === act.act).map(entry => (
                <ModuleCard key={entry.id} entry={entry} state={stateById.get(entry.id)} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
