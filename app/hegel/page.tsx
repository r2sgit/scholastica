import type { Metadata } from 'next';
import ThinkerLanding from '../../components/ThinkerLanding';
import { THINKERS } from '../../content/thinkers';

const thinker = THINKERS.hegel;

export const metadata: Metadata = {
  title: `${thinker.sigil} — ${thinker.headline} · Coming Soon`,
  description: thinker.description,
  robots: { index: false, follow: false },
};

export default function HegelPage() {
  return <ThinkerLanding thinker={thinker} />;
}
