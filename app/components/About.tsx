import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="salon" className="scroll-mt-24 bg-paper py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Asymmetric editorial split: a tall portrait offset against a
            narrower text column, with a large Bodoni pull-quote anchoring it. */}
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12 lg:items-end">
          <Reveal
            variant="blur"
            as="figure"
            className="relative lg:col-span-7 lg:col-start-1"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/2] lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=75"
                alt="Innenraum des Maison Rouge Salons mit warmem Licht und edlen Materialien"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover grayscale"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 lg:pb-4">
            <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-ink sm:text-5xl">
              Mehr als nur ein Friseur.
            </h2>
            <div className="mt-6 h-px w-16 bg-gold" />

            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-grey-600 sm:text-base">
              <p>
                Seit 2018 steht Maison Rouge am Prinzipalmarkt für eine eigene
                Auffassung von Friseurhandwerk: ruhig, persönlich und mit dem
                Anspruch, dass jeder Besuch sich wie eine kleine Auszeit anfühlt.
              </p>
              <p>
                Wir nehmen uns Zeit für ein echtes Gespräch, bevor die erste
                Schere zum Einsatz kommt. Denn die schönste Frisur ist die, die zu
                dir passt: zu deinem Typ, deinem Alltag und deiner Persönlichkeit.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Full-width pull-quote, magazine-style */}
        <Reveal variant="fade" delay={80} as="blockquote" className="mt-20 lg:mt-28">
          <p className="mx-auto max-w-4xl text-center font-serif text-3xl font-light italic leading-[1.3] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            „Handwerkliche Präzision trifft auf echte Gastfreundschaft. Willkommen
            bei Maison Rouge.“
          </p>
        </Reveal>
      </div>
    </section>
  );
}
