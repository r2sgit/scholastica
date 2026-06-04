'use client';

interface DrolleryPendantProps {
  src?: string;
}

export default function DrolleryPendant({ src = '/images/drolleries/dr-06.png' }: DrolleryPendantProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      style={{ width: '100%', height: 'auto', opacity: 0.88, display: 'block' }}
    />
  );
}
