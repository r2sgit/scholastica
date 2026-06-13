'use client';

import { useRouter } from 'next/navigation';
import { MODULES } from '../../content/modules';
import { COURSE_MAP, ACTS, type CourseMapEntry } from '../../content/courseMap';
import { useProgress, type ModuleProgress } from '../../lib/progress';
import TopBar from '../../components/TopBar';

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
  /** per-lesson: 'done' (perfect) | 'part' (complete with mistakes) | 'todo' */
  pips: ('done' | 'part' | 'todo')[];
  allPerfect: boolean;
}

function buildState(id: number, mp: ModuleProgress | undefined): ModuleState | undefined {
  const mod = MODULES.find(m => m.id === id);
  if (!mod) return undefined;
  const lessonsComplete = mp?.lessonsComplete || [];
  const scores = mp?.scores || [];
  const pips = mod.lessons.map((_, i): 'done' | 'part' | 'todo' => {
    if (!lessonsComplete[i]) return 'todo';
    const sc = scores[i];
    return sc && sc.correct === sc.total ? 'done' : 'part';
  });
  const done = pips.filter(p => p !== 'todo').length;
  return {
    id,
    title: mod.title,
    total: mod.lessons.length,
    done,
    pips,
    allPerfect: done === mod.lessons.length && pips.every(p => p === 'done'),
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
    else { status = state.allPerfect ? 'Complete · sine errore' : 'Complete'; complete = true; }
  }

  const cls = [
    'cm-card',
    !entry.built && 'scriptorio',
    complete && 'complete',
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
              <span key={i} className={`cm-pip${p === 'done' ? ' done' : p === 'part' ? ' part' : ''}`} />
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
  const { getModuleProgress } = useProgress();

  const states = MODULES
    .map(m => buildState(m.id, getModuleProgress(m.id)))
    .filter((s): s is ModuleState => !!s);
  const stateById = new Map(states.map(s => [s.id, s]));

  return (
    <div className="map-page">
      <TopBar />

      <div className="cm-stage" style={{ animation: 'fadeIn .4s ease both' }}>
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
