'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import SettingsSheet from './SettingsSheet';
import { readProgress, localISODate, type StorageSchema } from '../lib/progress';
import { getScore, getScoreCeiling, getStreak } from '../lib/gamification';
import {
  readTheologiaProgress,
  getScoreTheologia,
  getScoreCeilingTheologia,
} from '../lib/progressTheologia';

const STORAGE_KEY = 'scholastica_v1';

function getMuted(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    return data.prefs?.muted === true;
  } catch {
    return false;
  }
}

function setMutedPref(muted: boolean): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : {};
    if (!data.prefs) data.prefs = {};
    data.prefs.muted = muted;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch { /* noop */ }
}

interface TopBarProps {
  moduleId?: number;
  moduleTitle?: string;
  /** Show a "Modules /" crumb linking back to the course map */
  modulesCrumb?: boolean;
  /** Lesson progress hairline under the bar: fills gold as questions advance. */
  progress?: { current: number; total: number };
  /** Which wing this bar renders in. Swaps the section nav and the course
      switcher's active pill. Default 'philosophia' so every existing call
      site (none of which pass this prop) is unaffected. */
  course?: 'philosophia' | 'theologia';
}

/* Course switcher (two-course IA, scholastica-two-course-nav-prototype.html):
   a small pill pair above/beside the section nav. Philosophia is the only
   wing with real content today; Theologia carries a single DRAFT module
   (R2's explicit call to ship it ahead of the theologian-review gate --
   see content/theologia/t1.ts). Persists the last-active wing so a bare
   wordmark click or /modules visit can resolve sensibly later. */
function CourseSwitcher({ course }: { course: 'philosophia' | 'theologia' }) {
  return (
    <div className="course-switch" role="tablist" aria-label="Course">
      <Link
        href="/modules"
        role="tab"
        aria-selected={course === 'philosophia'}
        className={`course-switch-btn${course === 'philosophia' ? ' active' : ''}`}
      >
        Philosophia
      </Link>
      <Link
        href="/theologia"
        role="tab"
        aria-selected={course === 'theologia'}
        className={`course-switch-btn${course === 'theologia' ? ' active' : ''}`}
      >
        Theologia
      </Link>
    </div>
  );
}

/* The persistent HUD (redesign-v4, gamification-v3 §4): score + streak, in
   the manuscript identity, on every TopBar surface — the direct fix for
   "the scoring is so hard to find." Self-sources from localStorage (TopBar
   takes no progress props), re-reading on route change so a lesson-complete
   is reflected the moment the player lands anywhere. A 'scholastica:hud'
   CustomEvent lets the lesson page push live updates without a re-read:
   `detail.score` bumps the running total; `detail.pending` drives the
   in-lesson pending accrual chip (RD3, §4.1). */
export interface HudEventDetail {
  score?: number;
  /** In-lesson pending accrual (§4.1); null/0 clears the chip. */
  pending?: number | null;
}

function Hud({ pathname }: { pathname: string }) {
  const [score, setScore] = useState(0);
  const [ceiling, setCeiling] = useState(0);
  const [streak, setStreak] = useState(0);
  const [pending, setPending] = useState<number | null>(null);
  const [tick, setTick] = useState(false);

  // Read (and re-read on navigation) the live state from storage. The lesson
  // page's pending chip is transient, so a route change also clears it.
  // Wing-aware (WP1): theology surfaces show the theology total/ceiling; the
  // two are never summed. The streak stays shared — one flame both wings
  // (WP2) — so it always reads the philosophy store's habitus.days.
  useEffect(() => {
    const philData = readProgress() as StorageSchema;
    const isTheologia = pathname.startsWith('/theologia');
    if (isTheologia) {
      setScore(getScoreTheologia(readTheologiaProgress()));
      setCeiling(getScoreCeilingTheologia());
    } else {
      setScore(getScore(philData));
      setCeiling(getScoreCeiling());
    }
    setStreak(getStreak(philData, localISODate()));
    setPending(null);
  }, [pathname]);

  // Live pushes from the lesson/fin flow (no storage round-trip needed).
  useEffect(() => {
    function onHud(e: Event) {
      const detail = (e as CustomEvent<HudEventDetail>).detail || {};
      if (typeof detail.score === 'number') setScore(detail.score);
      if ('pending' in detail) {
        setPending(detail.pending ?? null);
        // Retrigger the little pop on each pending change.
        setTick(true);
        window.setTimeout(() => setTick(false), 260);
      }
    }
    window.addEventListener('scholastica:hud', onHud as EventListener);
    return () => window.removeEventListener('scholastica:hud', onHud as EventListener);
  }, []);

  return (
    <div className="hud">
      <div className="scorebox">
        <span className="score-row">
          <span className="score-val">{score.toLocaleString()}</span>
          <span className={`score-pending${pending ? ' on' : ''}${tick ? ' tick' : ''}`}>
            {pending ? `+${pending}` : ''}
          </span>
        </span>
        <span className="score-cap">of {ceiling.toLocaleString()}</span>
      </div>
      <div className="hud-streak" aria-label={`${streak} day streak`}>
        <span className="flame" aria-hidden="true">{'🔥'}</span>
        <span className="streak-col">
          <span className="streak-val">{streak}</span>
          <span className="streak-cap">day streak</span>
        </span>
      </div>
    </div>
  );
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 3.5v2.3M12 18.2v2.3M4.9 6.5l1.6 1.6M17.5 15.9l1.6 1.6M3.5 12h2.3M18.2 12h2.3M4.9 17.5l1.6-1.6M17.5 8.1l1.6-1.6"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      />
    </svg>
  );
}

function MuteIcon({ muted }: { muted: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 9v6h4l5 5V4L8 9H4Z" fill="currentColor" />
      {muted ? (
        <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      ) : (
        <path d="M16.5 8.5a5 5 0 0 1 0 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      )}
    </svg>
  );
}

function toRoman(n: number): string {
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let r = '';
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) { r += syms[i]; n -= vals[i]; }
  }
  return r;
}

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: '/modules', label: 'Modules' },
  { href: '/theses', label: 'Theses' },
  { href: '/vocabularium', label: 'Vocabularium' },
];

// Theologia's own rooms. Modules + Vocabularium (the course-scoped codex,
// WP7); the Oratorium joins here in WP8. Its own Theses-equivalent is the
// Oratorium, not a second board.
const THEOLOGIA_NAV_ITEMS: { href: string; label: string }[] = [
  { href: '/theologia', label: 'Modules' },
  { href: '/theologia/oratorium', label: 'Oratorium' },
  { href: '/theologia/vocabularium', label: 'Vocabularium' },
];

function TopBarInner({ moduleId, moduleTitle, modulesCrumb, progress, course = 'philosophia' }: TopBarProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isReview = searchParams.get('review') === '1';
  const [muted, setMutedState] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    setMutedState(getMuted());
  }, []);

  function toggleMute() {
    const next = !muted;
    setMutedState(next);
    setMutedPref(next);
  }

  // Active route for the quiet nav: a section is active when the path starts
  // with its href (so /modules/2 and /lesson highlight Modules sensibly).
  function isActive(href: string): boolean {
    if (href === '/modules') {
      return pathname === '/modules' || pathname.startsWith('/modules/') ||
        pathname.startsWith('/lesson/') || pathname.startsWith('/complete/');
    }
    if (href === '/theologia') {
      // The theology "Modules" tab: the map and the lesson/complete flow, but
      // NOT the wing's other rooms (Vocabularium, later Oratorium), which have
      // their own /theologia/* hrefs and match via the generic branch below.
      return pathname === '/theologia'
        || pathname.startsWith('/theologia/lesson')
        || pathname.startsWith('/theologia/complete');
    }
    return pathname === href || pathname.startsWith(href + '/');
  }

  const progressPct = progress && progress.total > 0
    ? Math.min(100, Math.round((progress.current / progress.total) * 100))
    : null;

  const navItems = course === 'theologia' ? THEOLOGIA_NAV_ITEMS : NAV_ITEMS;

  return (
    <>
    <div className="topbar">
      {/* First grid column: wordmark + course switcher together, so the
          topbar's 3-column `1fr auto 1fr` grid (B6 receipt) stays a 3-child
          grid rather than breaking into 4. */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifySelf: 'start', minWidth: 0 }}>
        {/* Wordmark returns to the Threshold (a place, not an interstitial).
            ?door=1 renders it without auto-forward. */}
        <Link href="/?door=1" className="wordmark" style={{ textDecoration: 'none', color: 'inherit' }}>
          Scholastica<span className="dot" aria-hidden="true" />
        </Link>
        <CourseSwitcher course={course} />
      </div>

      <nav className="curriculum-path" aria-label="Course location">
        {moduleId !== undefined && (
          <>
            {modulesCrumb && (
              <>
                <Link href={course === 'theologia' ? '/theologia' : '/modules'} className="cp-crumb">Modules</Link>
                <span className="cp-sep">/</span>
              </>
            )}
            <span className="cp-label">Module</span>
            <span className="cp-num">{toRoman(moduleId)}</span>
            {moduleTitle && (
              <>
                <span className="cp-sep">{'\u00b7'}</span>
                <span className="cp-name">{moduleTitle}</span>
              </>
            )}
            {/* Lesson number + title moved into the card head (long titles
                overflowed this single line); the bar now carries the module only. */}
          </>
        )}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifySelf: 'end' }}>
        <nav className="tb-nav" aria-label="Sections">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`tb-nav-link${isActive(item.href) ? ' active' : ''}`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Hud pathname={pathname} />
        {isReview && (
          <span className="env-badge show">
            m{moduleId ?? '?'}{' \u00B7 '}prod
          </span>
        )}
        <button
          className="mute-btn"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute sound' : 'Mute sound'}
          title={muted ? 'Sound off' : 'Sound on'}
        >
          <MuteIcon muted={muted} />
        </button>
        <button
          className="mute-btn"
          onClick={() => setSettingsOpen(true)}
          aria-label="Settings"
          title="Settings"
        >
          <SettingsIcon />
        </button>
      </div>
    </div>
    <SettingsSheet
      open={settingsOpen}
      onClose={() => setSettingsOpen(false)}
      muted={muted}
      onToggleMute={toggleMute}
    />
    {progressPct !== null && progress && (
      <div
        className="tb-hairline"
        role="progressbar"
        aria-label={`question ${Math.min(progress.current + 1, progress.total)} of ${progress.total}`}
        aria-valuenow={progress.current}
        aria-valuemin={0}
        aria-valuemax={progress.total}
      >
        <div className="tb-hairline-fill" style={{ width: `${progressPct}%` }} />
      </div>
    )}
    <nav className="tab-bar" aria-label="Sections">
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={`tab-bar-link${isActive(item.href) ? ' active' : ''}`}
          aria-current={isActive(item.href) ? 'page' : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
    </>
  );
}

export default function TopBar(props: TopBarProps) {
  return (
    <Suspense fallback={
      <div className="topbar">
        <div className="wordmark">Scholastica<span className="dot" aria-hidden="true" /></div>
        <nav className="curriculum-path" aria-label="Course location" />
        <div />
      </div>
    }>
      <TopBarInner {...props} />
    </Suspense>
  );
}
