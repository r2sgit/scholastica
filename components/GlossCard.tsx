import { getCourseEntry } from '../content/courseMap';
import type { Term } from '../content/terms';

/* The glossary marks inline Latin with markdown *emphasis*. Convert it to
   <em> (Fraunces italic per §4); the data is our own trusted static JSON and
   contains no HTML, so this is the only transform needed. */
function emphasize(text: string): string {
  return text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

/* Shared gloss card: Latin (blackletter header), English, one-sentence gloss,
   and the "first met" provenance line. Used by the Vocabularium pills and the
   inline <Term> tooltip so both speak the same. Blackletter is confined to the
   headword; the gloss prose stays Fraunces (handbook §4). */
export default function GlossCard({ term }: { term: Term }) {
  const metLine =
    term.module === 'structural'
      ? 'first met in the apparatus'
      : `first met in Module ${getCourseEntry(term.module)?.numeral ?? term.module}`;

  return (
    <div className="gloss-card">
      <div className="gloss-latin">{term.latin}</div>
      <div className="gloss-english">{term.english}</div>
      <p className="gloss-text" dangerouslySetInnerHTML={{ __html: emphasize(term.gloss) }} />
      <div className="gloss-met">{metLine}</div>
    </div>
  );
}
