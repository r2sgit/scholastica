import ThinkersNav from './ThinkersNav';
import type { Thinker } from '../content/thinkers';

/* ============================================================
   ThinkerLanding — the uniform Portico Coming-Soon page
   ============================================================
   One structure for all five thinkers (portico-landing-page-spec.md):
   1. Hero — description LEFT, image RIGHT (Scholastica home-hero
      style), with a "Coming Soon" label where Begin/Continue sits.
   2. One vision paragraph between hero and course.
   3. The course summary / module list, in the SAME Scholastica
      module-map style (cm-* classes, reused verbatim).
   The ONLY per-thinker variation is the accent color, applied by the
   `accentClass` wrapper (globals.css redefines the --gold family
   there — the same mechanism as .theologia-wing). No portraits exist
   for these five yet, so the hero image is a clean placeholder slot. */

export default function ThinkerLanding({ thinker }: { thinker: Thinker }) {
  return (
    <div className={`portico-page ${thinker.accentClass}`}>
      <ThinkersNav active={thinker.slug} />

      {/* ── HERO — description left, image right ─────────────── */}
      <main className="home-hero portico-hero">
        <section className="home-copy">
          <p className="portico-sigil">{thinker.sigil}</p>
          <h1 className="home-headline">{thinker.headline}</h1>
          <p className="home-sub">{thinker.description}</p>
          <p className="portico-act">{thinker.actLine}</p>
          <span className="portico-soon" aria-label="Coming soon">Coming Soon</span>
        </section>

        <section className="home-figure" aria-label={`${cap(thinker.slug)} — portrait coming soon`}>
          <div className="portico-portrait" role="img" aria-label="Portrait placeholder">
            <span className="pp-name">{cap(thinker.slug)}</span>
            <span className="pp-note">portrait coming soon</span>
          </div>
        </section>
      </main>

      {/* ── Course summary (Scholastica module-map style) ────── */}
      <div className="cm-stage portico-stage">
        {/* One vision paragraph, between the hero and the course. */}
        <p className="cm-lede portico-vision">{thinker.vision}</p>

        <section className="cm-act">
          <div className="cm-act-kicker">the course</div>
          <h2 className="cm-act-name">{thinker.courseCount}</h2>
          <p className="cm-act-line">{thinker.courseSources}</p>

          <div className="cm-rows">
            {thinker.modules.map(m => (
              <article className="cm-row-card cm-row-locked" key={m.numeral}>
                <div className="cm-row-numeral">{m.numeral}</div>
                <div>
                  <div className="cm-row-title">
                    {m.title} <span className="cm-row-latin portico-source">{m.source}</span>
                  </div>
                  <p className="cm-row-blurb">{m.gets}</p>
                </div>
                <div className="cm-row-state">
                  <span className="cm-chip">coming soon</span>
                </div>
              </article>
            ))}
          </div>

          {thinker.closing && <p className="portico-closing">{thinker.closing}</p>}
        </section>
      </div>
    </div>
  );
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
