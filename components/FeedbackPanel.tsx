'use client';

interface FeedbackPanelProps {
  type: 'correct' | 'wrong';
  body: string;
  doctrineTag?: string;
}

export default function FeedbackPanel({ type, body, doctrineTag }: FeedbackPanelProps) {
  const borderColor = type === 'correct' ? 'var(--correct)' : 'var(--wrong)';

  return (
    <div
      className="feedback-panel"
      style={{
        background: 'var(--paper)',
        borderLeft: `3px solid ${borderColor}`,
        padding: '16px 20px',
        borderRadius: '0 8px 8px 0',
        marginTop: 20,
        animation: 'fadeIn 300ms ease both',
      }}
    >
      <div
        style={{
          fontVariantCaps: 'all-small-caps',
          letterSpacing: '0.18em',
          fontSize: 11,
          fontWeight: 500,
          color: 'var(--gold)',
          marginBottom: 6,
        }}
      >
        Respondeo:
      </div>
      <div
        style={{
          fontSize: 17,
          lineHeight: 1.55,
          color: 'var(--ink)',
        }}
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {doctrineTag && (
        <span
          style={{
            display: 'inline-block',
            marginTop: 12,
            fontFamily: '"Emeritus", serif',
            fontSize: 14,
            color: 'var(--gold)',
            border: '1px solid var(--gold)',
            borderRadius: 4,
            padding: '2px 10px',
            letterSpacing: '0.02em',
          }}
        >
          {doctrineTag}
        </span>
      )}
    </div>
  );
}
