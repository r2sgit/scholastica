import Link from 'next/link';
import TopBar from '../components/TopBar';

/* 404 — handbook G0.4. One drollery (DR-03, hare with spear, already in
   public/), one line, one door back. Copy locked this session. TopBar and the
   shared colophon are present (the colophon comes from the layout). */
export default function NotFound() {
  return (
    <div className="map-page">
      <TopBar />
      <div className="notfound-stage">
        <img
          src="/images/drolleries/dr-03.png"
          alt=""
          aria-hidden="true"
          className="notfound-drollery"
        />
        <h1 className="notfound-title"><em>Non inventum.</em></h1>
        <p className="notfound-body">
          You have wandered off the page, which the scholastics would call a
          privation rather than a place.
        </p>
        <Link href="/modules" className="notfound-door">
          Return to the course &rarr;
        </Link>
      </div>
    </div>
  );
}
