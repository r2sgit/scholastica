'use client';

import { useEffect, useState } from 'react';
import { readProgress } from '../lib/progress';
import { getModulesComplete } from '../lib/gamification';

/* ── The Drollery Court (handbook §6 / §20.5, relocated to the Threshold) ──
   The four-frontispiece drolleries (DR-02, DR-08, DR-03, DR-12) live inside
   the frontispiece SVG and are the seed. As modules complete, each module's
   right-margin creature joins the spread here in the margins.

   Hard rule (run sheet item 4): guard on an asset manifest and silently skip
   any module whose DR asset is absent. Never 404 an <img>. The Court ships
   with whatever exists and grows as assets land. */

// Assets physically present in v1/public/images/drolleries/. Anything not
// here is silently skipped — no broken image, ever.
const ASSET_MANIFEST = new Set<string>([
  'dr-01', 'dr-02', 'dr-03', 'dr-04', 'dr-05', 'dr-06', 'dr-07', 'dr-08',
  'dr-12-stag', 'dr-13-small',
  'dr-14-small', 'dr-15-small', 'dr-16-small', 'dr-18-small', 'dr-20-small', 'dr-26-small', 'dr-27-small',
]);

// Per-module right-margin drollery (handbook §6 table; mirrors
// components/DrolleryMargin.tsx). A module joins the Court only when complete,
// so banked assets for not-yet-built modules (M4/M5/M8/M17) wait harmlessly here.
const MODULE_DROLLERY: Record<number, string> = {
  1: 'dr-02',
  2: 'dr-13-small',
  3: 'dr-14-small',
  4: 'dr-15-small',
  5: 'dr-16-small',
  6: 'dr-08',
  8: 'dr-18-small',
  10: 'dr-20-small',
  13: 'dr-12-stag',
  17: 'dr-26-small',
  18: 'dr-27-small',
};

// The four already drawn into the frontispiece SVG. Court additions exclude
// these so the seed creatures are never doubled.
const FRONTISPIECE_SEED = new Set<string>(['dr-02', 'dr-03', 'dr-08', 'dr-12-stag']);

const TOTAL_MODULES = 18;

function asset(slug: string): string {
  return `/images/drolleries/${slug}.png`;
}

export default function DrolleryCourt() {
  // Court is built from localStorage on the client; render nothing on the
  // server pass to keep the first paint stable and silent.
  const [court, setCourt] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const data = readProgress();
    const done = getModulesComplete(data);
    const slugs: string[] = [];
    const seen = new Set<string>();
    // Earned creatures, in module order, deduped and asset-guarded.
    for (const id of [...done].sort((a, b) => a - b)) {
      const slug = MODULE_DROLLERY[id];
      if (!slug) continue;                    // pending commission
      if (!ASSET_MANIFEST.has(slug)) continue; // never 404
      if (FRONTISPIECE_SEED.has(slug)) continue; // already in the frontispiece
      if (seen.has(slug)) continue;
      seen.add(slug);
      slugs.push(slug);
    }
    setCourt(slugs);
    setComplete(done.length >= TOTAL_MODULES);
  }, []);

  const showJubilant = complete && ASSET_MANIFEST.has('dr-05');

  if (court.length === 0 && !showJubilant) return null;

  // Density-aware scale: as the crowd grows toward ~18, figures shrink.
  const size = court.length <= 4 ? 72 : court.length <= 9 ? 60 : 48;

  // Symmetric placement: alternate right / left margins down the page, so the
  // spread stays balanced around the centered wordmark + frontispiece.
  const topStart = 150;
  const step = 120;

  return (
    <div className="drollery-court" aria-hidden="true">
      {court.map((slug, i) => {
        const side = i % 2 === 0 ? 'right' : 'left';
        const row = Math.floor(i / 2);
        const top = topStart + row * step;
        const pos =
          side === 'right'
            ? { right: 'max(16px, calc(50% - 460px))' as string }
            : { left: 'max(16px, calc(50% - 460px))' as string };
        return (
          <div
            key={slug}
            className={`court-drollery court-${side}`}
            style={{ top, ...pos }}
          >
            <img src={asset(slug)} alt="" style={{ width: size, height: size, objectFit: 'contain' }} />
          </div>
        );
      })}

      {/* On full course completion, the jubilant friar takes the center
          beside the wordmark. */}
      {showJubilant && (
        <div className="court-jubilant">
          <img src={asset('dr-05')} alt="" style={{ width: 96, height: 'auto' }} />
        </div>
      )}
    </div>
  );
}
