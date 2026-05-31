import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-end overflow-hidden bg-ink"
    >
      {/* B&W graded background video (poster shows instantly) */}
      <HeroVideo />

      {/* Cinematic scrim: darker at the bottom so type stays AAA-legible,
          plus a faint overall wash. Pure gradients, no layout cost. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/40"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
          Friseurkunst · Münster
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-5xl font-light leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl">
          Wo Handwerk zur{" "}
          <em className="font-medium italic leading-[1.1]">Ruhe</em> wird.
        </h1>

        <p className="mt-7 max-w-md text-base leading-relaxed text-paper/80 sm:text-lg">
          Persönliche Beratung, präziser Schnitt und hochwertige Pflege im Herzen
          der Altstadt.
        </p>

        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-3 rounded-full bg-paper py-2 pl-7 pr-2 text-sm font-medium tracking-wide text-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-gold active:scale-[0.98]"
          >
            Termin buchen
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                aria-hidden
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <a
            href="#leistungen"
            className="text-sm tracking-wide text-paper/85 underline-offset-8 transition-colors duration-300 hover:text-paper hover:underline"
          >
            Unsere Leistungen
          </a>
        </div>
      </div>
    </section>
  );
}
