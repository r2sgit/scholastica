'use client';

import Link from 'next/link';
import { THINKERS, THINKER_ORDER } from '../content/thinkers';

/* ============================================================
   ThinkersNav — the shared Portico nav bar
   ============================================================
   Shown ONLY on the five Coming-Soon thinker pages. Links all five
   thinkers plus the two standalone demo products — Aquinas (the live
   Scholastica flagship) and Augustine (Tolle Lege) — for seven
   destinations in all. The nav is a ONE-WAY door: it points INTO
   Aquinas/Augustine, and those two pages never carry it back
   (portico-landing-page-spec.md, Navigation). `active` is the slug
   of the current thinker page, which renders as a non-link. */

const DEMOS: { href: string; label: string; note: string }[] = [
  // Aquinas = the live Scholastica flagship (the home threshold).
  { href: '/', label: 'Aquinas', note: 'Scholastica' },
  // Augustine = Tolle Lege, its own standalone shell at /augustine.
  { href: '/augustine', label: 'Augustine', note: 'Tolle Lege' },
];

export default function ThinkersNav({ active }: { active: string }) {
  return (
    <nav className="thinkers-nav" aria-label="Thinkers">
      <div className="tn-inner">
        <span className="tn-mark">Portico</span>

        <div className="tn-links">
          {THINKER_ORDER.map(slug => {
            const t = THINKERS[slug];
            const isActive = slug === active;
            return isActive ? (
              <span key={slug} className="tn-link active" aria-current="page">
                {label(slug)}
              </span>
            ) : (
              <Link key={slug} href={`/${slug}`} className="tn-link">
                {label(slug)}
              </Link>
            );
          })}

          <span className="tn-sep" aria-hidden="true" />

          {DEMOS.map(d => (
            <Link key={d.href} href={d.href} className="tn-link tn-demo">
              {d.label}
              <span className="tn-demo-note">{d.note}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function label(slug: string): string {
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}
