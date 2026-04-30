'use client';

const MODULE_RIGHT_DROLLERY: Record<number, string> = {
  0: '/images/drolleries/dr-02.png',
  5: '/images/drolleries/dr-08.png',
  12: '/images/drolleries/dr-12-stag.png',
};

interface DrolleryMarginProps {
  moduleId: number;
}

export default function DrolleryMargin({ moduleId }: DrolleryMarginProps) {
  const rightSrc = MODULE_RIGHT_DROLLERY[moduleId] || MODULE_RIGHT_DROLLERY[0];

  return (
    <div className="canvas-art" aria-hidden="true">
      {/* DR-01 scribe friar — left margin */}
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

      {/* Module-specific right margin drollery */}
      <div
        className="drollery"
        style={{ right: 'max(24px, calc(50% - 520px))', top: 120 }}
      >
        <img
          src={rightSrc}
          alt=""
          style={{ width: 110, height: 'auto' }}
        />
      </div>
    </div>
  );
}
