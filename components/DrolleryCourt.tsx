'use client';

import { useEffect, useState } from 'react';
import { readProgress } from '../lib/progress';
import { getModulesComplete } from '../lib/gamification';

/* ── The Drollery Court (gamification v2 §4.7, B4) ──────────────────────
   Lives on the module map, not the Threshold (R2, 7/3: the Threshold stays
   exactly as simple as it is — wordmark, headline, Begin button, Thomas art,
   nothing else, ever). The map's four fixed corner drolleries (dr-01–dr-04)
   are the seed; as modules complete, each module's own right-margin creature
   additionally joins the spread in the page margins here — additive only,
   per hard rail 10: the corner four and every existing per-module drollery
   stay exactly where they are.

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

// The module map's four fixed corner drolleries (app/modules/page.tsx,
// classes cd-tl/cd-tr/cd-bl/cd-br). Court additions exclude these so the
// corner creatures are never doubled. (B4, R2 7/3: the previous set —
// dr-02/dr-03/dr-08/dr-12-stag — dated from this component's original home
// on the old Threshold design and was stale here; left as-is it would have
// silently and permanently suppressed the module-6 and module-13 stickers.)
const FRONTISPIECE_SEED = new Set<string>(['dr-01', 'dr-02', 'dr-03', 'dr-04']);

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

  // Symmetric placement: alternate right / left margins down the page,
  // starting below the Continue hero so the spread runs alongside the acts
  // rather than crowding the header. Offset (580px half-width) matches the
  // module map's actual 1080px content column (.cm-stage), landing just
  // outside it in the true margin gutter, same family as the corner four's
  // ~600px offsets.
  const topStart = 420;
  const step = 130;

  return (
    <>
      {/* Wide: margin figures either side of the content column. */}
      <div className="drollery-court" aria-hidden="true">
        {court.map((slug, i) => {
          const side = i % 2 === 0 ? 'right' : 'left';
          const row = Math.floor(i / 2);
          const top = topStart + row * step;
          const pos =
            side === 'right'
              ? { right: 'max(16px, calc(50% - 580px))' as string }
              : { left: 'max(16px, calc(50% - 580px))' as string };
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

        {/* On full course completion, the jubilant friar joins the court. */}
        {showJubilant && (
          <div className="court-jubilant" style={{ top: topStart + Math.ceil(court.length / 2) * step }}>
            <img src={asset('dr-05')} alt="" style={{ width: 96, height: 'auto' }} />
          </div>
        )}
      </div>

      {/* Narrow (≤640px): the court compresses to a small row above the
          colophon instead of sitting in margins that no longer exist. */}
      <div className="drollery-court-row" aria-hidden="true">
        {court.map(slug => (
          <img key={slug} src={asset(slug)} alt="" />
        ))}
        {showJubilant && <img src={asset('dr-05')} alt="" />}
      </div>
    </>
  );
}
