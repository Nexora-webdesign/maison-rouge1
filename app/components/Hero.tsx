import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80"
        alt="Eleganter Innenraum des Maison Rouge Salons in Münster"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Warm dark overlay for legible white type */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center text-white">
        <h1 className="font-serif font-medium leading-[1.05] tracking-tight [font-size:clamp(2.5rem,7vw,5rem)]">
          Friseurkunst im Herzen Münsters.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
          Persönliche Beratung. Handwerkliche Präzision. Hochwertige Pflege —
          exklusiv für dich.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#kontakt"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-medium tracking-wide text-white shadow-md transition-colors duration-200 hover:bg-accent-deep"
          >
            Termin buchen
          </a>
          <a
            href="#leistungen"
            className="inline-flex min-h-12 items-center justify-center text-sm tracking-wide text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Unsere Leistungen ↓
          </a>
        </div>
      </div>
    </section>
  );
}
