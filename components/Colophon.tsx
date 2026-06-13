'use client';

import { usePathname } from 'next/navigation';

/* Site colophon — lifted into the shared layout (handbook §6 / G0.3).
   Present on every page EXCEPT the Threshold ('/'), whose restraint is the
   statement. Three quiet lines, no social icons, ever. The "patrons of
   Incipiens" link is the business model's only in-product surface: a link,
   never a paywall, never a nag. */
export default function Colophon() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <footer className="site-colophon" role="contentinfo">
      <div className="rule" />
      <div className="sc-wordmark">
        <em>Scholastica</em>
      </div>
      <div className="sc-line">
        Built under PhilosophyOS &middot; supported by patrons of{' '}
        <a href="https://quasithomist.substack.com" target="_blank" rel="noopener noreferrer">
          <em>Incipiens</em>
        </a>
      </div>
      <div className="sc-fin">finis</div>
    </footer>
  );
}
