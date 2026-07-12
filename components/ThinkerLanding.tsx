import ThinkersNav from './ThinkersNav';
import type { Thinker } from '../content/thinkers';

/* ============================================================
   ThinkerLanding — the Portico Coming-Soon class page
   ============================================================
   One shared component for all five classes, implementing
   portico/portico-class-pages-copy-and-spec.md Part 2 (§A–H) and the
   reference mock (portico-class-page-reference-mock-nietzsche.html).

   Sections, top to bottom (spec Part 1 page order):
   1. Thinkers nav (one-way door)
   2. Hero: pill, headline, subhead, CTA, portrait right
   3. Vision paragraph
   4. Hook band (the one moment of theater)
   5. The moves — "What you will learn to do"
   6. Inside the class — the curriculum card
   7. Closing CTA block

   Per-class variation is ONE token: `accentClass` sets --accent /
   --accent-text (globals.css .portico-*). All copy is verbatim from
   content/thinkers.ts (Fable). Motion is CSS-only (spec §H); no client
   JS needed here. */

export default function ThinkerLanding({ thinker }: { thinker: Thinker }) {
  const initial = thinker.pill.charAt(0);
  return (
    <div className={`portico-page ${thinker.accentClass}`}>
      <ThinkersNav active={thinker.slug} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="pc-hero wrap">
        <div className="pc-hero-grid">
          <div>
            <span className="pc-pill fade">{thinker.pill}</span>
            <h1 className="pc-h1 fade d1">{thinker.headline}</h1>
            <p className="pc-lede fade d2">{thinker.subhead}</p>
            <div className="pc-cta-row fade d3">
              <span className="pc-status">Coming soon</span>
              <a className="pc-btn" href="#notify">Get notified</a>
            </div>
            <p className="pc-subbtn fade d3">{thinker.ctaSubline}</p>
          </div>
          <div
            className="pc-portrait fade d4"
            role="img"
            aria-label={`${thinker.pill}: portrait pending`}
          >
            <span className="pc-portrait-mark" aria-hidden="true">{initial}</span>
          </div>
        </div>
      </header>

      {/* ── Vision paragraph ─────────────────────────────────── */}
      <section className="wrap pc-vision-wrap">
        <p className="pc-lede pc-vision">{thinker.vision}</p>
      </section>

      {/* ── Hook band ────────────────────────────────────────── */}
      <div className="pc-hook">
        <div className="pc-hook-inner">
          <span className="pc-rule" aria-hidden="true" />
          <p>{thinker.hook}</p>
          <span className="pc-rule" aria-hidden="true" />
        </div>
      </div>

      {/* ── The moves ────────────────────────────────────────── */}
      <section className="wrap pc-section">
        <span className="pc-kicker">The moves</span>
        <h2 className="pc-h2">What you will learn to do</h2>
        {thinker.moves.map((m, i) => (
          <div className="pc-move" key={i}>
            <span className="pc-num">{roman(i + 1)}</span>
            <div>
              <h3 className="pc-h3">{m.name}</h3>
              <p className="pc-body">{m.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Inside the class — curriculum card ───────────────── */}
      <section className="wrap pc-section">
        <span className="pc-kicker">Inside the class</span>
        <h2 className="pc-h2">{thinker.courseCount}</h2>
        <div className="pc-card">
          <p className="pc-card-intro">{thinker.courseIntro}</p>
          {thinker.modules.map(m => (
            <div className="pc-mod" key={m.numeral}>
              <span className="pc-num">{m.numeral}</span>
              <div>
                <h3 className="pc-h3">{m.title}</h3>
                <p className="pc-src">{m.source}</p>
                <p className="pc-body">{m.teaser}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <div className="wrap pc-close" id="notify">
        <span className="pc-kicker">Coming soon</span>
        <h2 className="pc-h2">Be first through the door.</h2>
        <a className="pc-btn" href="#notify">Get notified</a>
        <p className="pc-subbtn">{thinker.ctaSubline}</p>
      </div>

      <footer className="pc-footer">
        <div className="wrap">Scholastica · a PhilosophyOS work</div>
      </footer>
    </div>
  );
}

function roman(n: number): string {
  const vals = [10, 9, 5, 4, 1];
  const syms = ['X', 'IX', 'V', 'IV', 'I'];
  let r = '';
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) { r += syms[i]; n -= vals[i]; }
  }
  return r;
}
