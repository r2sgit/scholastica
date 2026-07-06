'use client';

import { useRouter } from 'next/navigation';
import { THEOLOGIA_MODULES } from '../../content/theologia';
import { THEOLOGIA_COURSE_MAP, type TheologiaCourseMapEntry } from '../../content/theologia/courseMap';
import { useTheologiaProgress } from '../../lib/progressTheologia';
import TopBar from '../../components/TopBar';

/* Simplified sibling of app/modules/page.tsx, scoped down on purpose: no
   Theses/Vocabularium-equivalent collections, no Drollery Court, no rank --
   those are real Philosophy-side mechanics built over 18 modules and 24
   theses; theologia has one draft module. Build the real equivalents
   (a Credo board, etc.) once there is enough theology content for them to
   mean anything, per the same Formal Object Rule the renderer work follows
   elsewhere in this app. */

interface ModuleState {
  id: number;
  total: number;
  done: number;
  pips: ('done' | 'todo')[];
}

function buildState(entry: TheologiaCourseMapEntry, lessonsComplete: boolean[] | undefined): ModuleState | undefined {
  const mod = THEOLOGIA_MODULES.find(m => m.id === entry.id);
  if (!mod) return undefined;
  const lc = lessonsComplete || [];
  const pips = mod.lessons.map((_, i): 'done' | 'todo' => (lc[i] ? 'done' : 'todo'));
  return { id: entry.id, total: mod.lessons.length, done: pips.filter(p => p === 'done').length, pips };
}

function ModuleRow({ entry, state }: { entry: TheologiaCourseMapEntry; state?: ModuleState }) {
  const router = useRouter();
  const built = entry.built;
  const total = state?.total ?? 0;
  const done = state?.done ?? 0;
  const isDone = built && total > 0 && done === total;
  const isNow = built && done > 0 && done < total;
  const nextIdx = state ? state.pips.findIndex(p => p === 'todo') : -1;

  function open() {
    if (built) router.push(`/theologia/lesson/${entry.id}/${done < total ? Math.max(0, nextIdx) : 0}`);
  }

  return (
    <article
      className={['cm-row-card', !built && 'cm-row-locked', isDone && 'cm-row-done'].filter(Boolean).join(' ')}
      onClick={built ? open : undefined}
      role={built ? 'link' : undefined}
      tabIndex={built ? 0 : undefined}
      onKeyDown={e => { if (built && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); open(); } }}
    >
      <div className="cm-row-numeral">{entry.numeral}</div>
      <div>
        <div className="cm-row-title">
          {entry.title} <span className="cm-row-latin" lang="la">{entry.latin}</span>
          {entry.draft && <span className="cm-chip" style={{ marginLeft: 8, verticalAlign: 'middle' }}>draft &middot; pre-review</span>}
        </div>
        {built && state && (
          <div className="cm-row-meta">
            <span className="cm-row-dots">
              {state.pips.map((p, i) => <span key={i} className={p === 'done' ? 'done' : ''} />)}
            </span>
            <span className="cm-row-label">
              {isDone ? 'complete' : isNow ? `lesson ${done + 1} of ${total}` : `${total} lessons`}
            </span>
          </div>
        )}
      </div>
      <div className="cm-row-state">
        {!built ? (
          <span className="cm-chip">in the scriptorium</span>
        ) : isDone ? (
          <a className="cm-review" href={`/theologia/lesson/${entry.id}/0`} onClick={e => e.stopPropagation()}>Revisit</a>
        ) : isNow ? (
          <button className="btn small now" onClick={e => { e.stopPropagation(); router.push(`/theologia/lesson/${entry.id}/${nextIdx}`); }}>
            Continue <span>&rarr;</span>
          </button>
        ) : (
          <button className="btn small" onClick={e => { e.stopPropagation(); router.push(`/theologia/lesson/${entry.id}/0`); }}>
            Start
          </button>
        )}
      </div>
    </article>
  );
}

export default function TheologiaMapPage() {
  const { data, getModuleProgress } = useTheologiaProgress();

  const states = THEOLOGIA_COURSE_MAP
    .map(e => buildState(e, getModuleProgress(e.id)?.lessonsComplete))
    .filter((s): s is ModuleState => !!s);
  const stateById = new Map(states.map(s => [s.id, s]));

  return (
    <div className="map-page theologia-wing">
      <TopBar course="theologia" />

      <div className="cm-stage" style={{ animation: 'fadeIn .4s ease both' }}>
        <section className="cm-hero">
          <h1>The <em>theology</em> of Thomas Aquinas.</h1>
          <p className="cm-lede">
            Where the philosophy was heading all along: the Summa&rsquo;s three parts, taught the
            same way, one distinction at a time. This wing is early. One module exists, and it is
            marked plainly as a pre-review draft &mdash; the doctrine is authored to the same source
            discipline as the philosophy course, but no theologian has signed off on it yet.
          </p>
        </section>

        <div className="cm-vinediv" aria-hidden="true" />

        <section className="cm-act">
          <div className="cm-act-kicker">prologue &middot; pars i-vi</div>
          <h2 className="cm-act-name">De Deo, De Homine, De Christo</h2>
          <p className="cm-act-line">
            Fifteen modules mirroring the Summa&rsquo;s own shape: God one and triune, creation and
            the angels, grace and the human return, Christ, the sacraments, the last things.
          </p>
          <div className="cm-rows">
            {THEOLOGIA_COURSE_MAP.map(entry => (
              <ModuleRow key={entry.id} entry={entry} state={stateById.get(entry.id)} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
