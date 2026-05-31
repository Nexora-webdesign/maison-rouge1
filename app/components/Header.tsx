"use client";

import { useEffect, useState } from "react";

const NAV = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Preise", href: "#preise" },
  { label: "Team", href: "#team" },
  { label: "Galerie", href: "#galerie" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Transparent over the hero, solid once the hero is fully scrolled past.
  // We watch the hero section itself; the top rootMargin equals the header
  // height (80px) so the switch fires exactly when the hero clears the bar.
  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The bar is opaque once scrolled past the hero, or while the mobile menu
  // is open (so its links sit on a solid surface).
  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-ink/10 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Logo — the single Rouge signature touch lives here */}
        <a href="#top" className="group flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-serif text-2xl font-medium tracking-tight transition-colors duration-300 ${
              solid ? "text-ink" : "text-paper"
            }`}
          >
            Maison Rouge
          </span>
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-rouge" />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-sm tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                solid
                  ? "text-ink/75 hover:text-ink"
                  : "text-paper/80 hover:text-paper"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
              solid
                ? "bg-ink text-paper hover:bg-gold hover:text-ink"
                : "border border-paper/40 text-paper hover:bg-paper hover:text-ink"
            }`}
          >
            Termin buchen
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-md transition-colors duration-300 md:hidden ${
            solid ? "text-ink" : "text-paper"
          }`}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden border-t border-ink/10 bg-paper md:hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col px-6 py-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-ink/8 text-base text-ink/85 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-4 mb-3 flex min-h-12 items-center justify-center rounded-full bg-ink px-5 font-medium text-paper transition-colors hover:bg-gold hover:text-ink"
          >
            Termin buchen
          </a>
        </nav>
      </div>
    </header>
  );
}
