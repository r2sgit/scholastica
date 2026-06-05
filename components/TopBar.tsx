'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
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
}

function TopBarInner({ moduleId, lessonIdx, lessonTitle, lessonNum, moduleTitle }: TopBarProps) {
  const searchParams = useSearchParams();
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

  return (
    <div className="topbar">
      <Link href="/modules" className="wordmark" style={{ textDecoration: 'none', color: 'inherit' }}>
        Scholastica<span className="dot" aria-hidden="true" />
      </Link>

      <nav className="curriculum-path" aria-label="Course location">
        {moduleId !== undefined && (
          <>
            <span className="cp-label">Module</span>
            <span className="cp-num">{moduleId}</span>
            {moduleTitle && (
              <>
                <span className="cp-sep">{'\u00b7'}</span>
                <span className="cp-name">{moduleTitle}</span>
              </>
            )}
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
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifySelf: 'end' }}>
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
