'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

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
}

function TopBarInner({ moduleId, lessonIdx, lessonTitle, lessonNum }: TopBarProps) {
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
      <div className="wordmark">
        Scholastica<span className="dot" aria-hidden="true" />
      </div>

      <div className="breadcrumb">
        {moduleId !== undefined && lessonIdx !== undefined ? (
          <>
            <b>Module {moduleId}</b> &middot; Lesson {lessonNum ?? lessonIdx + 1}
            {lessonTitle && (
              <span className="breadcrumb-title"> &mdash; {lessonTitle}</span>
            )}
          </>
        ) : moduleId !== undefined ? (
          <>Module <b>{moduleId}</b> of XVIII</>
        ) : null}
      </div>

      {isReview && (
        <span className="env-badge show">
          m{moduleId ?? '?'} &middot; prod
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
  );
}

export default function TopBar(props: TopBarProps) {
  return (
    <Suspense fallback={
      <div className="topbar">
        <div className="wordmark">Scholastica<span className="dot" aria-hidden="true" /></div>
        <div className="breadcrumb" />
      </div>
    }>
      <TopBarInner {...props} />
    </Suspense>
  );
}
