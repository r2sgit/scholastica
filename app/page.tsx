'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

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

/* ── Drifting motes particle system ────────────────────────── */

function initMotes(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let W = 0, H = 0;

  interface Mote {
    x: number; y: number; r: number;
    vx: number; vy: number;
    color: string; phase: number; flick: number;
  }
  let motes: Mote[] = [];

  const rand = (min: number, max: number) => Math.random() * (max - min) + min;

  const tones = [
    'rgba(184,137,53,0.18)',
    'rgba(184,137,53,0.13)',
    'rgba(88,98,64,0.14)',
    'rgba(88,98,64,0.10)',
    'rgba(164,47,35,0.10)',
  ];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function seed() {
    motes = [];
    for (let i = 0; i < 70; i++) {
      const m: Mote = {
        x: rand(0, W), y: rand(0, H),
        r: rand(1, 2),
        vx: rand(-0.22, 0.22), vy: rand(-0.18, 0.18),
        color: tones[Math.floor(rand(0, tones.length))],
        phase: rand(0, Math.PI * 2),
        flick: rand(0.0008, 0.0016),
      };
      if (Math.abs(m.vx) < 0.04 && Math.abs(m.vy) < 0.04) {
        m.vx = (m.vx < 0 ? -1 : 1) * 0.08;
      }
      motes.push(m);
    }
  }

  let rafId: number;

  function draw() {
    ctx!.clearRect(0, 0, W, H);
    for (const m of motes) {
      m.x += m.vx;
      m.y += m.vy;
      m.phase += m.flick;
      if (m.x < -4) m.x = W + 4;
      if (m.x > W + 4) m.x = -4;
      if (m.y < -4) m.y = H + 4;
      if (m.y > H + 4) m.y = -4;
      const rr = m.r + Math.sin(m.phase) * 0.25;
      ctx!.beginPath();
      ctx!.fillStyle = m.color;
      ctx!.arc(m.x, m.y, Math.max(0.5, rr), 0, Math.PI * 2);
      ctx!.fill();
    }
    rafId = requestAnimationFrame(draw);
  }

  // Reduced motion: render once static
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    resize();
    seed();
    ctx.clearRect(0, 0, W, H);
    for (const m of motes) {
      ctx.beginPath();
      ctx.fillStyle = m.color;
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fill();
    }
    return () => {};
  }

  resize();
  seed();
  rafId = requestAnimationFrame(draw);

  let resizeTimer: ReturnType<typeof setTimeout>;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resize(); seed(); }, 120);
  };
  window.addEventListener('resize', onResize);

  return () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('resize', onResize);
    clearTimeout(resizeTimer);
  };
}

/* ── Component ─────────────────────────────────────────────── */

export default function LandingScreen() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (getIntroSeen()) {
      router.replace('/modules');
      return;
    }
    if (canvasRef.current) {
      const cleanup = initMotes(canvasRef.current);
      return cleanup;
    }
  }, [router]);

  function handleBegin() {
    setIntroSeen();
    router.push('/modules');
  }

  return (
    <div className="ftue-body">
      <canvas id="motes" ref={canvasRef} aria-hidden="true" />

      <main className="stage" role="main">
        {/* Wordmark */}
        <div className="wordmark fade-in" aria-label="Scholastica">
          Scholastica<span className="dot" aria-hidden="true" />
        </div>

        {/* Frontispiece SVG */}
        <svg
          className="frontispiece fade-in-1"
          viewBox="0 0 460 380"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Participation threads */}
          <g stroke="#B88935" strokeWidth="0.7" strokeLinecap="round" opacity="0.18">
            <line x1="230" y1="80" x2="85"  y2="232" />
            <line x1="230" y1="80" x2="185" y2="225" />
            <line x1="230" y1="80" x2="275" y2="225" />
            <line x1="230" y1="80" x2="375" y2="232" />
          </g>

          {/* FR-01a sun (Ipsum Esse) */}
          <image
            href="/images/fr-01a-sun.png"
            x="170" y="0" width="120" height="118"
            preserveAspectRatio="xMidYMid meet"
          />

          {/* DR-02 grotesque (far left) */}
          <image
            href="/images/drolleries/dr-02.png"
            x="55" y="192" width="60" height="80"
            preserveAspectRatio="xMidYMid meet"
          />

          {/* DR-08 fox-scholar (left of center) */}
          <image
            href="/images/drolleries/dr-08.png"
            x="154" y="185" width="62" height="80"
            preserveAspectRatio="xMidYMid meet"
          />

          {/* DR-03 hare (right of center) */}
          <image
            href="/images/drolleries/dr-03.png"
            x="254" y="185" width="42" height="80"
            preserveAspectRatio="xMidYMid meet"
          />

          {/* DR-12 stag (far right) */}
          <image
            href="/images/drolleries/dr-12-stag.png"
            x="350" y="192" width="50" height="80"
            preserveAspectRatio="xMidYMid meet"
          />

          {/* Gold band at foot */}
          <g>
            <rect x="50" y="310" width="360" height="14" fill="#B88935" opacity="0.78" />
            <path
              d="M50 310 L410 310 L410 324 L50 324 Z"
              fill="none" stroke="#3B3228" strokeWidth="0.6" opacity="0.55"
            />
            <line x1="56" y1="313" x2="404" y2="313" stroke="#D4A84B" strokeWidth="0.4" opacity="0.45" />
            <g stroke="#3B3228" strokeWidth="0.4" opacity="0.45" strokeLinecap="round">
              <line x1="52" y1="310" x2="62" y2="324" />
              <line x1="56" y1="310" x2="66" y2="324" />
              <line x1="60" y1="310" x2="70" y2="324" />
              <line x1="398" y1="310" x2="408" y2="324" />
              <line x1="394" y1="310" x2="404" y2="324" />
              <line x1="390" y1="310" x2="400" y2="324" />
            </g>
          </g>
        </svg>

        {/* Descriptor */}
        <div className="descriptor fade-in-2">
          <p>Aquinas built the West&rsquo;s most precise vocabulary for thinking about what is.</p>
          <p>Eight centuries dulled the language, not the thinking.</p>
          <p>Scholastica is the way back in. One distinction at a time, in his order and pace.</p>
        </div>

        {/* CTA */}
        <button
          className="cta fade-in-3"
          id="beginBtn"
          type="button"
          aria-label="Begin Module 0 Foundations"
          onClick={handleBegin}
        >
          <span>Begin Module&nbsp;0 &middot; <em>Foundations</em></span>
          <span className="arrow" aria-hidden="true">&rarr;</span>
        </button>

        {/* Colophon */}
        <div className="colophon fade-in-4">
          <span>XVIII modules</span>
          <span className="sep">&middot;</span>
          <span>VII lessons each</span>
          <span className="sep">&middot;</span>
          <span className="lat">incipiens ad sapientiam</span>
        </div>
      </main>
    </div>
  );
}
