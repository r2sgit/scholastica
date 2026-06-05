'use client';

export default function CardVines() {
  const stem = "M9 0 C 2 100, 16 200, 9 300 S 1 500, 9 600 S 16 700, 9 800";
  return (
    <>
      {(['left', 'right'] as const).map(side => (
        <svg
          key={side}
          className={`card-vine card-vine-${side}`}
          viewBox="0 0 18 800"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="vine-stem"
            d={stem}
            fill="none"
            stroke="var(--vine-green)"
            strokeWidth="1.2"
            opacity="0.92"
          />
          <g fill="var(--gold)" opacity="0.88">
            {[110,230,360,490,620,740].map((y,i) => (
              <path key={i} className="vine-leaf"
                d={i%2===0
                  ? `M9 ${y} C -2 ${y-6}, -5 ${y-18}, 4 ${y-22} C 7 ${y-14}, 8 ${y-6}, 9 ${y} Z`
                  : `M9 ${y} C 20 ${y-6}, 23 ${y-18}, 14 ${y-22} C 11 ${y-14}, 10 ${y-6}, 9 ${y} Z`
                }
              />
            ))}
          </g>
          <g fill="var(--vermillion)">
            {[170,300,430,560,685].map((y,i) => (
              <circle key={i} className="vine-berry" cx="9" cy={y} r="2.3" />
            ))}
          </g>
        </svg>
      ))}
    </>
  );
}
