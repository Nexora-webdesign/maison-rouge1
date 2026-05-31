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

  // Elevation toggle without a scroll listener: a 1px sentinel at the very
  // top of the document is watched by an IntersectionObserver. When it
  // leaves the viewport the page has scrolled past the top.
  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.cssText =
      "position:absolute;top:0;left:0;height:1px;width:1px;pointer-events:none;";
    sentinel.setAttribute("aria-hidden", "true");
    document.body.prepend(sentinel);

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink/10 bg-paper/90 backdrop-blur-md"
          : "border-transparent bg-paper/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo — the single Rouge signature touch lives here */}
        <a href="#top" className="group flex items-baseline gap-1.5 leading-none">
          <span className="font-serif text-2xl font-medium tracking-tight text-ink">
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
              className="relative text-sm tracking-wide text-ink/75 transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-gold hover:text-ink"
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
          className="flex h-11 w-11 items-center justify-center rounded-md text-ink md:hidden"
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
