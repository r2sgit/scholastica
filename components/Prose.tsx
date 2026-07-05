'use client';

import Term from './Term';

/* Render-time auto-wrap (G3 content-wiring pass).

   Lesson prose is stored as HTML strings and rendered via dangerouslySetInnerHTML.
   This component walks such a string and wraps each Latin-marked term — either
   <span class="lat">…</span> (m2/m3/m18 convention) or <em>…</em> (m1/m6/m13
   convention) — in the inline <Term> popover, rendering everything else verbatim.

   Safety: <Term> gates on the glossary (findTerm + isTermEarned). Only earned,
   known headwords become interactive; English emphasis, unknown words, and
   inflected/unearned forms fall back to plain styled text (.term-plain is
   styleless). So wrapping every <em> is safe — the glossary is the filter. */

const TERM_RE = /<span class="lat"[^>]*>([\s\S]*?)<\/span>|<em>([\s\S]*?)<\/em>/g;

function plainText(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim();
}

export default function Prose({
  html,
  as = 'span',
  className,
  style,
}: {
  html: string;
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2';
  className?: string;
  style?: React.CSSProperties;
}) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  TERM_RE.lastIndex = 0;

  while ((m = TERM_RE.exec(html)) !== null) {
    if (m.index > last) {
      parts.push(
        <span key={`h${i}`} dangerouslySetInnerHTML={{ __html: html.slice(last, m.index) }} />,
      );
    }
    const isLat = m[1] !== undefined;
    const inner = (isLat ? m[1] : m[2]) ?? '';
    const label = isLat ? (
      <span className="lat" lang="la" dangerouslySetInnerHTML={{ __html: inner }} />
    ) : (
      <em dangerouslySetInnerHTML={{ __html: inner }} />
    );
    parts.push(
      <Term key={`t${i}`} latin={plainText(inner)}>
        {label}
      </Term>,
    );
    last = m.index + m[0].length;
    i++;
  }
  if (last < html.length) {
    parts.push(<span key="tail" dangerouslySetInnerHTML={{ __html: html.slice(last) }} />);
  }

  const Tag = as;
  return <Tag className={className} style={style}>{parts}</Tag>;
}
