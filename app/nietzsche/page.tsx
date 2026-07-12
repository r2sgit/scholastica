import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './nietzsche.module.css';

/* ============================================================
   /nietzsche — "The Hammer" · Act II Coming-Soon landing
   ============================================================
   A STATIC landing page, not a playable course: no lessons, no
   engine, no signup backend. All copy is lifted verbatim from
   portico/pitches/nietzsche.md (the pitch owns the words; this
   page owns only the staging). The visual identity is the pitch's
   German Expressionist woodcut art direction, scoped entirely in
   nietzsche.module.css so it stays deliberately apart from the
   platform's illuminated-manuscript world. This is the template
   for the other Act II Challenge landings (Kant, Hegel), each of
   which takes its own distinct style from its own pitch.
   ============================================================ */

export const metadata: Metadata = {
  title: 'The Hammer — Meeting Nietzsche at Full Strength · Coming Soon',
  description:
    'Act II · The Challenge. Nietzsche at his strongest, the tradition’s answer at its strongest, and you in the middle, arguing both. A debater, not a formation course. Coming soon.',
  robots: { index: false, follow: false },
};

/* The eight modules, staged as a fight in rounds — verbatim from the
   pitch's High-Level Curriculum table. `source` carries JSX so the
   primary-work titles can be italicised without altering the text. */
const ROUNDS: { n: string; title: string; source: React.ReactNode; gets: string }[] = [
  {
    n: 'I',
    title: 'The Madman',
    source: <><em>The Gay Science</em> §125</>,
    gets: '“God is dead”: the actual scene, the actual audience, and what he actually meant',
  },
  {
    n: 'II',
    title: 'The Genealogist',
    source: <><em>Genealogy of Morals</em> I</>,
    gets: 'Where “good” and “evil” came from: morality gets a history',
  },
  {
    n: 'III',
    title: 'Masters and Slaves',
    source: <><em>Genealogy</em> I · <em>Beyond Good and Evil</em></>,
    gets: 'The two moralities, and his story of how the weaker one won',
  },
  {
    n: 'IV',
    title: 'Ressentiment',
    source: <><em>Genealogy</em> I</>,
    gets: 'The revenge of the powerless: humility indicted as disguised hatred',
  },
  {
    n: 'V',
    title: 'The Will to Power',
    source: <><em>Beyond Good and Evil</em></>,
    gets: 'The single drive he finds under every ideal, including yours',
  },
  {
    n: 'VI',
    title: 'The Heaviest Weight',
    source: <><em>The Gay Science</em> §341</>,
    gets: 'Eternal recurrence: the test of whether you love your life or flee it',
  },
  {
    n: 'VII',
    title: 'The Übermensch',
    source: <><em>Thus Spoke Zarathustra</em></>,
    gets: 'After God: the one who creates values, and the tightrope over the market square',
  },
  {
    n: 'VIII',
    title: 'The Disputation',
    source: <>Staged: Nietzsche vs. Augustine and Aquinas</>,
    gets: 'Humility: holiness or ressentiment? A real Good, or only power? The learner argues both sides',
  },
];

function Lock() {
  return (
    <svg className={styles.lock} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="10.5" width="15" height="10.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7.5 10.5V7.5a4.5 4.5 0 0 1 9 0v3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function NietzschePage() {
  return (
    <div className={styles.page}>
      {/* Top marker: a way back to the flagship, and the Coming-Soon stamp. */}
      <div className={styles.marker}>
        <Link href="/?door=1" className={styles.back}>
          &larr; Scholastica
        </Link>
        <span>Portico &middot; Act II &middot; The Challenge</span>
        <span className={styles.stamp}>Coming Soon</span>
      </div>

      <div className={styles.inner}>
        {/* ── HERO ─────────────────────────────────────────────── */}
        <header className={styles.hero}>
          <div className={`${styles.slash} ${styles.slash1}`} aria-hidden="true" />
          <div className={`${styles.slash} ${styles.slash2}`} aria-hidden="true" />

          {/* Lightning — a hammer-cut bolt down the alpine sky. */}
          <svg className={styles.bolt} viewBox="0 0 60 200" aria-hidden="true">
            <polygon
              points="38,0 6,104 30,104 14,200 58,78 32,78 50,0"
              fill="var(--blood-bright)"
              stroke="var(--bone)"
              strokeWidth="1.5"
            />
          </svg>

          <p className={styles.kicker}>Meeting Nietzsche at Full Strength</p>
          <h1 className={styles.title}>
            <span className={styles.hammer}>The Hammer</span>
          </h1>
          <p className={styles.tagline}>
            Act II &nbsp;&middot;&nbsp; The Challenge &nbsp;&middot;&nbsp; A debater, not a formation
            course &nbsp;&middot;&nbsp; <span className={styles.soon}>Coming Soon</span>
          </p>

          {/* Marked slot for the woodcut hero asset (generated separately). */}
          <div className={styles.slot} role="img" aria-label="Woodcut hero image — placeholder">
            <svg className={styles.slotArt} viewBox="0 0 800 350" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              {/* A crude suggestion of the intended cut: a tightrope over the
                  market square, alpine ridge behind. Placeholder line-art only. */}
              <polygon points="0,350 130,180 250,270 400,120 540,240 680,150 800,300 800,350" fill="none" stroke="#b21419" strokeWidth="2" opacity="0.55" />
              <line x1="60" y1="150" x2="760" y2="120" stroke="#ECE5D2" strokeWidth="2" opacity="0.6" />
              <g stroke="#ECE5D2" strokeWidth="3" fill="none" opacity="0.7">
                <line x1="410" y1="135" x2="410" y2="95" />
                <circle cx="410" cy="85" r="10" />
                <line x1="392" y1="112" x2="428" y2="112" />
                <line x1="410" y1="135" x2="396" y2="165" />
                <line x1="410" y1="135" x2="424" y2="165" />
              </g>
            </svg>
            <div className={styles.slotLabel}>
              <div className={styles.tag}>[ woodcut hero slot ]</div>
              <div className={styles.desc}>
                German Expressionist woodcut: a tightrope walker over the market square,
                alpine ridgelines and lightning behind. Asset generated separately.
              </div>
            </div>
          </div>

          {/* Alpine ridgeline — bone mountains gouged from the black. */}
          <svg className={styles.ridge} viewBox="0 0 1040 90" preserveAspectRatio="none" aria-hidden="true">
            <polygon
              points="0,90 90,34 150,60 250,10 340,58 430,22 520,66 620,18 720,54 820,8 910,50 1000,26 1040,58 1040,90"
              fill="#ECE5D2"
            />
          </svg>
        </header>

        {/* ── LEAD (verbatim from The Idea / The Hook) ───────────── */}
        <section className={styles.lead} aria-label="The idea">
          <p className={styles.hook}>
            Everyone quotes &ldquo;what doesn&rsquo;t kill me makes me stronger&rdquo; and
            &ldquo;God is dead.&rdquo; Almost no one has met the argument.
          </p>
          <p>
            It stages the fight: Nietzsche at his strongest, the tradition&rsquo;s answer at its
            strongest, and <em>you in the middle, arguing both.</em>
          </p>
        </section>

        {/* ── THE EIGHT ROUNDS (locked teaser) ───────────────────── */}
        <section aria-label="Curriculum">
          <div className={styles.roundsHead}>
            <h2>Eight Rounds</h2>
            <p className={styles.roundsSub}>
              Eight modules, staged as a fight in rounds. Primary sources:{' '}
              <cite>The Gay Science</cite>, <cite>On the Genealogy of Morals</cite>,{' '}
              <cite>Beyond Good and Evil</cite>, and <cite>Thus Spoke Zarathustra</cite>, in short
              excerpts.
            </p>
          </div>

          <ol className={styles.rounds}>
            {ROUNDS.map(r => (
              <li className={styles.round} key={r.n}>
                <span className={styles.num} aria-hidden="true">{r.n}</span>
                <div className={styles.body}>
                  <h3 className={styles.rtitle}>{r.title}</h3>
                  <p className={styles.source}>{r.source}</p>
                  <p className={styles.gets}>{r.gets}</p>
                </div>
                <Lock />
              </li>
            ))}
          </ol>
        </section>

        {/* ── CLOSE — static Coming-Soon affordance, no signup ───── */}
        <section className={styles.close} aria-label="Status">
          <div className={styles.closeStamp}>Coming Soon</div>
          <p className={styles.closeLine}>
            The most dangerous course on the platform. Here you actually fight him, and see whether
            the tradition can take the punch.
          </p>
        </section>

        {/* ── In-theme colophon (manuscript colophon suppressed here) ─ */}
        <footer className={styles.colophon}>
          <div className={styles.mark}>Portico</div>
          <div className={styles.row}>
            PhilosophyOS made public &middot;{' '}
            <Link href="/?door=1">Scholastica is live &rarr;</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
