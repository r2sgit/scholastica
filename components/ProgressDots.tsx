'use client';

interface ProgressDotsProps {
  total: number;
  current: number;
  results: (boolean | null)[];
  reviewMode?: boolean;
  onDotClick?: (idx: number) => void;
}

export default function ProgressDots({ total, current, results, reviewMode, onDotClick }: ProgressDotsProps) {
  const useSmallerDots = total > 7;
  const dotSize = useSmallerDots ? 6 : 8;
  const gap = useSmallerDots ? 4 : 6;

  return (
    <div style={{ display: 'flex', gap, alignItems: 'center', flexWrap: 'wrap' }}>
      {Array.from({ length: total }, (_, i) => {
        let bg = 'var(--border)';
        let border = 'var(--border)';

        if (results[i] === true) {
          bg = 'var(--correct)';
          border = 'var(--correct)';
        } else if (results[i] === false) {
          bg = 'var(--wrong)';
          border = 'var(--wrong)';
        } else if (i === current) {
          bg = 'var(--gold)';
          border = 'var(--gold)';
        }

        return (
          <button
            key={i}
            type="button"
            onClick={() => reviewMode && onDotClick?.(i)}
            disabled={!reviewMode}
            aria-label={`Question ${i + 1}`}
            style={{
              width: dotSize,
              height: dotSize,
              minWidth: dotSize,
              minHeight: dotSize,
              borderRadius: '50%',
              background: bg,
              border: `1.5px solid ${border}`,
              padding: 0,
              cursor: reviewMode ? 'pointer' : 'default',
              transition: 'background .18s, border-color .18s',
            }}
          />
        );
      })}
    </div>
  );
}
