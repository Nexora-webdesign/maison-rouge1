/**
 * Demo disclaimer band shown between the sticky Header and the Hero.
 * Full-bleed bg-warm with hairline rose-gold rules top & bottom; the content
 * is centred and capped at 1100px. Not sticky — scrolls away with the page.
 */
export default function DemoNotice() {
  return (
    <section
      className="bg-warm px-6 py-4 sm:py-5"
      style={{
        borderTop: "1px solid #C9A876",
        borderBottom: "1px solid #C9A876",
      }}
      aria-label="Hinweis: Demo-Website"
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-5 sm:text-left">
        {/* Jewel-box / sparkle icon (SVG, not emoji) */}
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-accent-deep">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
            <path
              d="M12 3l1.9 3.9L18 8l-3.1 2.9.8 4.2L12 13.9 8.3 15.1l.8-4.2L6 8l4.1-1.1L12 3z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path
              d="M5 19.5h14"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </span>

        {/* Text block */}
        <div className="flex flex-col items-center sm:items-start">
          <p className="font-serif text-ink [font-size:1.05rem] leading-tight">
            Demo-Website von Nexora Studio
          </p>

          {/* Desktop / full line */}
          <p className="mt-1 hidden text-[0.9rem] leading-snug text-muted sm:block">
            Diese Website ist ein Beispielprojekt — Namen, Bilder und Inhalte
            sind frei erfunden. So könnte deine eigene Website aussehen.
          </p>
          {/* Mobile / condensed line */}
          <p className="mt-1 block text-[0.9rem] leading-snug text-muted sm:hidden">
            Beispielprojekt von Nexora — Inhalte frei erfunden.
          </p>

          <a
            href="https://nexora-webdesign.de"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center text-[0.9rem] font-bold text-accent underline-offset-4 transition-colors hover:text-accent-deep hover:underline"
          >
            »Eigene Website anfragen →«
          </a>
        </div>
      </div>
    </section>
  );
}
