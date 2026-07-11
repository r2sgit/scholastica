import { getMuted } from './progress';

/* The Fable scriptorium sound set (redesign-v4, RD6). Ported verbatim in
   spirit from scholastica-redesign-v4-prototype.html: the manuscript world
   should sound like quiet materials — felt piano, wood, small bells — not
   casino sparkle. Every voice runs through a lowpass, attacks are soft, gains
   sit low. The combo climbs a pentatonic ladder in the felt voice.

   This is a WebAudio synth behind the same playSound() interface the rest of
   the app already calls. The old sfx-*.mp3 files stay on disk (public/audio)
   but are no longer part of the flow. Mute pref is respected as before. */

export type SoundId =
  | 'correct'
  | 'wrong'
  | 'tick'
  | 'lesson-complete'
  | 'streak'
  | 'sparkle'
  | 'module-complete'
  | 'ceremony';

let actx: AudioContext | null = null;
function ac(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!actx) {
    try {
      const Ctor = window.AudioContext
        || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      actx = Ctor ? new Ctor() : null;
    } catch { actx = null; }
  }
  // A user gesture (the answer tap) unlocks/resumes the context.
  if (actx && actx.state === 'suspended') actx.resume();
  return actx;
}

/* ── voices ─────────────────────────────────────────────────── */

// Soft felt-piano tone: two detuned sines through a lowpass, gentle attack.
function felt(freq: number, dur: number, gain: number, delay = 0): void {
  const c = ac(); if (!c) return;
  const t0 = c.currentTime + delay;
  const o = c.createOscillator();
  const o2 = c.createOscillator();
  const g = c.createGain();
  const fl = c.createBiquadFilter();
  o.type = 'sine'; o.frequency.value = freq;
  o2.type = 'sine'; o2.frequency.value = freq * 1.003;
  fl.type = 'lowpass'; fl.frequency.value = 1500; fl.Q.value = 0.4;
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(gain, t0 + 0.018);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(fl); o2.connect(fl); fl.connect(g); g.connect(c.destination);
  o.start(t0); o2.start(t0); o.stop(t0 + dur + 0.03); o2.stop(t0 + dur + 0.03);
}

// Small bell: fundamental + a quiet inharmonic partial.
function bellTone(freq: number, dur: number, gain: number, delay = 0): void {
  const c = ac(); if (!c) return;
  const t0 = c.currentTime + delay;
  ([[1, 1], [2.76, 0.22]] as [number, number][]).forEach(([mult, amp]) => {
    const o = c.createOscillator();
    const g = c.createGain();
    const fl = c.createBiquadFilter();
    o.type = 'sine'; o.frequency.value = freq * mult;
    fl.type = 'lowpass'; fl.frequency.value = 2600;
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(gain * amp, t0 + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur * (mult > 1 ? 0.45 : 1));
    o.connect(fl); fl.connect(g); g.connect(c.destination);
    o.start(t0); o.stop(t0 + dur + 0.05);
  });
}

// Dry wood tap: filtered noise burst + a low felt thud.
function woodTap(): void {
  const c = ac(); if (!c) return;
  const t0 = c.currentTime;
  const len = Math.floor(c.sampleRate * 0.09);
  const buf = c.createBuffer(1, len, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
  const src = c.createBufferSource(); src.buffer = buf;
  const fl = c.createBiquadFilter(); fl.type = 'bandpass'; fl.frequency.value = 210; fl.Q.value = 1.6;
  const g = c.createGain();
  g.gain.setValueAtTime(0.16, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.11);
  src.connect(fl); fl.connect(g); g.connect(c.destination); src.start(t0);
  felt(138, 0.12, 0.045);
}

// The pentatonic ladder the correct-cue climbs with the combo.
const LADDER = [523.25, 587.33, 659.25, 783.99, 880];

const SFX: Record<string, (n?: number) => void> = {
  // combo n (1-based): each consecutive-correct steps one rung up the ladder.
  correct(n = 1) {
    const root = LADDER[Math.min(Math.max(n - 1, 0), 4)];
    felt(root, 0.38, 0.05);
    felt(root * 1.5, 0.32, 0.028, 0.045);
  },
  wrong() { woodTap(); },
  tick() { felt(1318.5, 0.09, 0.016); },
  fin() {
    felt(523.25, 0.5, 0.05);
    felt(659.25, 0.5, 0.05, 0.09);
    felt(783.99, 0.6, 0.05, 0.18);
    bellTone(1046.5, 1.0, 0.035, 0.34);
  },
  streak() { bellTone(783.99, 1.2, 0.045); },
  sparkle() { bellTone(1046.5, 0.7, 0.03); },
  module() {
    felt(349.23, 0.9, 0.05);
    felt(440, 0.9, 0.045, 0.02);
    felt(523.25, 0.9, 0.05, 0.04);
    felt(392, 1.3, 0.05, 0.55);
    felt(523.25, 1.3, 0.045, 0.57);
    felt(659.25, 1.3, 0.05, 0.59);
    bellTone(1046.5, 1.4, 0.035, 1.1);
  },
  ceremony() {
    felt(130.81, 2.8, 0.045);
    felt(196, 2.8, 0.04, 0.03);
    bellTone(523.25, 1.6, 0.045, 0.7);
    bellTone(659.25, 1.6, 0.04, 1.3);
    bellTone(783.99, 2.0, 0.045, 1.9);
  },
};

/* playSound keeps its old signature; `combo` only matters for 'correct'
   (the pentatonic ladder). Mute pref is respected. SSR no-ops. */
export function playSound(id: SoundId, combo = 1): void {
  if (typeof window === 'undefined') return;
  if (getMuted()) return;
  const fn = SFX[id === 'lesson-complete' ? 'fin' : id === 'module-complete' ? 'module' : id];
  if (fn) fn(combo);
}
