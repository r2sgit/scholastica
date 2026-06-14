'use client';

const MODULE_RIGHT_DROLLERY: Record<number, string> = {
  0: '/images/drolleries/dr-02.png',
  1: '/images/drolleries/dr-13-small.png',
  2: '/images/drolleries/dr-14-small.png',
  3: '/images/drolleries/dr-15-small.png',
  4: '/images/drolleries/dr-16-small.png',
  5: '/images/drolleries/dr-08.png',
  7: '/images/drolleries/dr-18-small.png',
  9: '/images/drolleries/dr-20-small.png',
  12: '/images/drolleries/dr-12-stag.png',
  16: '/images/drolleries/dr-26-small.png',
  17: '/images/drolleries/dr-27-small.png',
};

interface DrolleryMarginProps {
  moduleId: number;
}

export default function DrolleryMargin({ moduleId }: DrolleryMarginProps) {
  const rightSrc = MODULE_RIGHT_DROLLERY[moduleId];

  return (
    <div className="canvas-art" aria-hidden="true">
      {/* DR-01 scribe friar — left margin (universal) */}
      <div
        className="drollery"
        style={{ left: 'max(18px, calc(50% - 540px))', top: 120 }}
      >
        <img
          src="/images/drolleries/dr-01.png"
          alt=""
          style={{ width: 110, height: 'auto' }}
        />
      </div>

      {/* Module-specific right margin drollery; absent for modules
          whose commission is pending */}
      {rightSrc && (
        <div
          className="drollery"
          style={{ right: 'max(24px, calc(50% - 520px))', top: 120 }}
        >
          <img
            src={rightSrc}
            alt=""
            style={{ width: 140, height: 150, objectFit: 'contain' }}
          />
        </div>
      )}
    </div>
  );
}
