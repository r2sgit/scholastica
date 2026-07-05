'use client';

import { useEffect, useRef, useState } from 'react';
import { useProgress } from '../lib/progress';

/* Settings sheet (§4.7) — not a page, a sheet off the topbar's reserved
   slot. Three rows, 44px+: Sound · Latin density · Motion. Nothing else
   enters until accounts. */

interface SettingsSheetProps {
  open: boolean;
  onClose: () => void;
  muted: boolean;
  onToggleMute: () => void;
}

const DENSITY_OPTIONS: { value: 'ample' | 'balanced' | 'spare'; label: string }[] = [
  { value: 'ample', label: 'Ample' },
  { value: 'balanced', label: 'Balanced' },
  { value: 'spare', label: 'Spare' },
];

export default function SettingsSheet({ open, onClose, muted, onToggleMute }: SettingsSheetProps) {
  const { data, setPrefs } = useProgress();
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartY = useRef<number | null>(null);
  const [dragY, setDragY] = useState(0);

  // Reduced motion writes a class on <html> immediately — a live toggle, not
  // just a stored preference for next load.
  useEffect(() => {
    document.documentElement.classList.toggle('motion-reduced', data.prefs.motion === 'reduced');
  }, [data.prefs.motion]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  function handleTouchStart(e: React.TouchEvent) {
    touchStartY.current = e.touches[0].clientY;
  }
  function handleTouchMove(e: React.TouchEvent) {
    if (touchStartY.current === null) return;
    const delta = e.touches[0].clientY - touchStartY.current;
    if (delta > 0) setDragY(delta);
  }
  function handleTouchEnd() {
    if (dragY > 60) onClose();
    setDragY(0);
    touchStartY.current = null;
  }

  return (
    <div className="settings-scrim" onClick={onClose} role="presentation">
      <div
        className="settings-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Settings"
        onClick={e => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={dragY ? { transform: `translateY(${dragY}px)`, transition: 'none' } : undefined}
      >
        <div className="settings-grip" aria-hidden="true" />

        <div className="settings-row">
          <span className="settings-label">Sound</span>
          <button
            type="button"
            className={`settings-toggle${muted ? '' : ' on'}`}
            role="switch"
            aria-checked={!muted}
            aria-label={muted ? 'Sound off' : 'Sound on'}
            onClick={onToggleMute}
          >
            <span className="settings-toggle-knob" />
          </button>
        </div>

        <div className="settings-row settings-row-density">
          <span className="settings-label">Latin density</span>
          <div className="settings-segmented" role="radiogroup" aria-label="Latin density">
            {DENSITY_OPTIONS.map(opt => (
              <button
                key={opt.value}
                type="button"
                role="radio"
                aria-checked={data.prefs.latinDensity === opt.value}
                className={`settings-segment${data.prefs.latinDensity === opt.value ? ' active' : ''}`}
                onClick={() => setPrefs({ latinDensity: opt.value })}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="settings-row">
          <span className="settings-label">Motion</span>
          <button
            type="button"
            className={`settings-toggle${data.prefs.motion === 'full' ? ' on' : ''}`}
            role="switch"
            aria-checked={data.prefs.motion === 'full'}
            aria-label={data.prefs.motion === 'full' ? 'Motion full' : 'Motion reduced'}
            onClick={() => setPrefs({ motion: data.prefs.motion === 'full' ? 'reduced' : 'full' })}
          >
            <span className="settings-toggle-knob" />
          </button>
        </div>

        <button ref={closeRef} type="button" className="settings-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
