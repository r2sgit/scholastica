import type { Metadata } from 'next';
import ThinkerLanding from '../../components/ThinkerLanding';
import { THINKERS } from '../../content/thinkers';

/* /nietzsche — rebuilt to the uniform Portico spec (2026-07-12).
   The earlier bespoke German-Expressionist page was scrapped per
   portico/portico-landing-page-spec.md: every Portico landing now
   uses one Scholastica-style structure, differentiated only by a
   subtle accent. The old nietzsche.module.css is gone. */

const thinker = THINKERS.nietzsche;

export const metadata: Metadata = {
  title: `${thinker.title} · ${thinker.pill} — Coming Soon`,
  description: thinker.subhead,
  robots: { index: false, follow: false },
};

export default function NietzschePage() {
  return <ThinkerLanding thinker={thinker} />;
}
