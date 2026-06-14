'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const STORAGE_KEY = 'scholastica_v1';

function getIntroSeen(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    return JSON.parse(raw).introSeen === true;
  } catch {
    return false;
  }
}

function setIntroSeen(): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : {};
    data.introSeen = true;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch { /* noop */ }
}

/* ── Home / landing: the Thomas hero ──────────────────────────
   First-visit gate preserved: a returning learner is forwarded to the
   course map; ?door=1 (the wordmark link from elsewhere) renders the
   home deliberately without forwarding. */

function HomeInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const deliberate = searchParams.get('door') === '1';

  useEffect(() => {
    if (getIntroSeen() && !deliberate) {
      router.replace('/modules');
    }
  }, [router, deliberate]);

  function handleBegin() {
    setIntroSeen();
    router.push('/modules');
  }

  return (
    <div className="home-page">
      <header className="home-top">
        <div className="wordmark" aria-label="Scholastica">
          Scholastica<span className="dot" aria-hidden="true" />
        </div>
      </header>

      <main className="home-hero">
        <section className="home-copy">
          <h1 className="home-headline">Learn to think like Thomas Aquinas.</h1>
          <p className="home-sub">
            The sharpest mind the Church ever produced, taught the way you&rsquo;d learn a language, one distinction at a time.
          </p>
          <button className="home-cta" type="button" onClick={handleBegin} aria-label="Begin the course">
            Begin <span className="arrow" aria-hidden="true">&rarr;</span>
          </button>
        </section>

        <section className="home-figure" aria-label="Saint Thomas Aquinas">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/thomas-hero.png" alt="Saint Thomas Aquinas holding a church and the open Summa" />
        </section>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="home-page" />}>
      <HomeInner />
    </Suspense>
  );
}
