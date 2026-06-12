/* Interim site footer (course map only) until the G0 app-shell pass
   lands site-wide. Markup kept self-contained so it can be lifted into
   the shared shell unchanged. */
export default function Colophon() {
  return (
    <div className="cm-colophon">
      <div className="rule" />
      <em>Scholastica</em> &nbsp;&middot;&nbsp; Built under PhilosophyOS &middot; supported by patrons of <em>Incipiens</em> &nbsp;&middot;&nbsp;{' '}
      <span style={{ fontVariantCaps: 'all-small-caps', letterSpacing: '.14em' }}>Finis</span>
    </div>
  );
}
