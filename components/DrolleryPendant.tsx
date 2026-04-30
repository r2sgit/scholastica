'use client';

interface DrolleryPendantProps {
  answerState: 'idle' | 'correct' | 'wrong';
}

export default function DrolleryPendant({ answerState }: DrolleryPendantProps) {
  let rotation = -2; // idle
  if (answerState === 'correct') rotation = 4;
  if (answerState === 'wrong') rotation = -10;

  return (
    <div
      className="pendant"
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 24,
        transition: 'transform .3s ease',
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <img
        src="/images/drolleries/dr-06.png"
        alt=""
        aria-hidden="true"
        style={{ width: 80, height: 'auto', opacity: 0.85 }}
      />
    </div>
  );
}
