const NAV = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Preise", href: "#preise" },
  { label: "Team", href: "#team" },
  { label: "Galerie", href: "#galerie" },
  { label: "Kontakt", href: "#kontakt" },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
    <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.5c0-.8.2-1.3 1.3-1.3h1.4V5.8c-.7-.1-1.4-.1-2-.1-2 0-3.4 1.2-3.4 3.5v1.9H8.5V14h2.3v7h2.7Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <p className="flex items-baseline gap-1.5 font-serif text-2xl font-medium tracking-tight">
              Maison Rouge
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-rouge" />
            </p>
            <p className="mt-2 text-sm text-grey-400">
              Friseurkunst im Herzen Münsters.
            </p>
          </div>

          {/* Mini nav */}
          <nav aria-label="Footer-Navigation" className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-paper/75 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Maison Rouge auf Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper/75 transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="Maison Rouge auf Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper/75 transition-colors hover:border-gold hover:text-gold"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-paper/15" />

        <div className="mt-6 flex flex-col gap-2 text-xs text-grey-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Maison Rouge · Prinzipalmarkt 12, 48143 Münster</p>
          <p>
            Demo-Website von Nexora Studio ·{" "}
            <a
              href="https://nexora-webdesign.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition-colors hover:text-paper"
            >
              nexora-webdesign.de
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
