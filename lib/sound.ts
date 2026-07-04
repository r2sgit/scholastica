import { getMuted } from './progress';

export type SoundId = 'correct' | 'wrong' | 'lesson-complete' | 'module-complete' | 'ceremony';

// Asset per tier. 'ceremony' (thesis unlock, one tier above module-complete)
// has no dedicated cue yet — reuses module-complete at v0. Upgrade by
// pointing this one entry at a new file; nothing else needs to change.
const SOUND_FILES: Record<SoundId, string> = {
  correct: 'correct',
  wrong: 'wrong',
  'lesson-complete': 'lesson-complete',
  'module-complete': 'module-complete',
  ceremony: 'module-complete',
};

export function playSound(id: SoundId): void {
  if (typeof window === 'undefined') return;
  if (getMuted()) return;
  const audio = new Audio(`/audio/sfx-${SOUND_FILES[id]}.mp3`);
  audio.play().catch(() => {});
}
