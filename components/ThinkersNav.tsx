import Link from 'next/link';

/* ============================================================
   ThinkersNav — the shared Portico nav bar
   ============================================================
   Shown ONLY on the five Coming-Soon class pages (spec §G). Seven
   uniform name items in course order; the current page renders in the
   accent with an underline. A ONE-WAY door: Aquinas (the live
   Scholastica flagship, /) and Augustine (Tolle Lege, /augustine) link
   OUT to their own products and never carry this nav back. `active` is
   the slug of the current thinker page. */

const NAV: { slug: string; label: string; href: string }[] = [
  { slug: 'plato', label: 'Plato', href: '/plato' },
  { slug: 'aristotle', label: 'Aristotle', href: '/aristotle' },
  { slug: 'augustine', label: 'Augustine', href: '/augustine' },
  { slug: 'aquinas', label: 'Aquinas', href: '/' },
  { slug: 'kant', label: 'Kant', href: '/kant' },
  { slug: 'hegel', label: 'Hegel', href: '/hegel' },
  { slug: 'nietzsche', label: 'Nietzsche', href: '/nietzsche' },
];

export default function ThinkersNav({ active }: { active: string }) {
  return (
    <nav className="pc-nav" aria-label="Thinkers">
      <div className="wrap pc-nav-row">
        <Link href="/" className="pc-nav-mark" aria-label="Scholastica">Scholastica</Link>
        {NAV.map(item =>
          item.slug === active ? (
            <span key={item.slug} className="pc-nav-link active" aria-current="page">
              {item.label}
            </span>
          ) : (
            <Link key={item.slug} href={item.href} className="pc-nav-link">
              {item.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
