import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Text */}
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Über uns
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Mehr als nur ein Friseur.
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" />

          <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
            <p>
              Seit 2018 steht Maison Rouge am Prinzipalmarkt für eine ganz
              eigene Auffassung von Friseurhandwerk: ruhig, persönlich und mit
              dem Anspruch, dass jeder Besuch sich wie eine kleine Auszeit
              anfühlt.
            </p>
            <p>
              Wir nehmen uns Zeit für ein echtes Gespräch, bevor die erste
              Schere zum Einsatz kommt. Denn die schönste Frisur ist die, die zu
              dir passt — zu deinem Typ, deinem Alltag und deiner
              Persönlichkeit.
            </p>
            <p>
              In einem Ambiente aus warmem Licht, edlen Materialien und
              ausgewählter Pflege verbinden wir handwerkliche Präzision mit
              echter Gastfreundschaft. Willkommen bei Maison Rouge.
            </p>
          </div>
        </Reveal>

        {/* Image */}
        <Reveal delay={120}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
              alt="Warmes, elegantes Salon-Interieur von Maison Rouge"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
