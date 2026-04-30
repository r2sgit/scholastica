import { getMuted } from './progress';

export type SoundId = 'correct' | 'wrong' | 'lesson-complete' | 'module-complete';

export function playSound(id: SoundId): void {
  if (typeof window === 'undefined') return;
  if (getMuted()) return;
  const audio = new Audio(`/audio/sfx-${id}.mp3`);
  audio.play().catch(() => {});
}
