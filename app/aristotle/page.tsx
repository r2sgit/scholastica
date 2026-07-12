import type { Metadata } from 'next';
import ThinkerLanding from '../../components/ThinkerLanding';
import { THINKERS } from '../../content/thinkers';

const thinker = THINKERS.aristotle;

export const metadata: Metadata = {
  title: `${thinker.title} · ${thinker.pill} — Coming Soon`,
  description: thinker.subhead,
  robots: { index: false, follow: false },
};

export default function AristotlePage() {
  return <ThinkerLanding thinker={thinker} />;
}
