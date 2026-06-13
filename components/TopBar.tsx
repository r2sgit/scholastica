'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

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
  lessonIdx?: number;
  lessonTitle?: string;
  lessonNum?: string;
  moduleTitle?: string;
  /** Show a "Modules /" crumb linking back to the course map */
  modulesCrumb?: boolean;
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

function TopBarInner({ moduleId, lessonIdx, lessonTitle, lessonNum, moduleTitle, modulesCrumb }: TopBarProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isReview = searchParams.get('review') === '1';
  const [muted, setMutedState] = useState(false);

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
    return pathname === href || pathname.startsWith(href + '/');
  }

  return (
    <div className="topbar">
      {/* Wordmark returns to the Threshold (a place, not an interstitial).
          ?door=1 renders it without auto-forward. */}
      <Link href="/?door=1" className="wordmark" style={{ textDecoration: 'none', color: 'inherit' }}>
        Scholastica<span className="dot" aria-hidden="true" />
      </Link>

      <nav className="curriculum-path" aria-label="Course location">
        {moduleId !== undefined && (
          <>
            {modulesCrumb && (
              <>
                <Link href="/modules" className="cp-crumb">Modules</Link>
                <span className="cp-sep">/</span>
              </>
            )}
            <span className="cp-label">Module</span>
            <span className="cp-num">{toRoman(moduleId + 1)}</span>
            {moduleTitle && (
              <>
                <span className="cp-sep">{'\u00b7'}</span>
                <span className="cp-name">{moduleTitle}</span>
              </>
            )}
            {(lessonNum != null || lessonIdx !== undefined) && (
              <>
                <span className="cp-fleuron" aria-hidden="true" />
                <span className="cp-label">Lesson</span>
                <span className="cp-num">{lessonNum != null ? lessonNum : lessonIdx !== undefined ? lessonIdx + 1 : ''}</span>
                {lessonTitle && (
                  <>
                    <span className="cp-sep">{'\u00b7'}</span>
                    <span className="cp-name">{lessonTitle}</span>
                  </>
                )}
              </>
            )}
          </>
        )}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifySelf: 'end' }}>
        <nav className="tb-nav" aria-label="Sections">
          {NAV_ITEMS.map(item => (
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
        {isReview && (
          <span className="env-badge show">
            m{moduleId ?? '?'}{' \u00B7 '}prod
          </span>
        )}
        {/* Settings slot reserved (no settings page yet). */}
        <button
          className="mute-btn"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute sound' : 'Mute sound'}
          title={muted ? 'Sound off' : 'Sound on'}
        >
          {muted ? '\uD83D\uDD07' : '\uD83D\uDD0A'}
        </button>
      </div>
    </div>
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
