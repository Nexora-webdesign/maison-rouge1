import Image from "next/image";
import Reveal from "./Reveal";

const TEAM = [
  {
    name: "Élise Vogt",
    role: "Inhaberin & Coloristin",
    focus: "Natürliche Balayage und individuelle Farbkonzepte.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=75",
  },
  {
    name: "Marc Lehmann",
    role: "Senior Stylist",
    focus: "Präziser Schnitt mit Auge für Form und Persönlichkeit.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=75",
  },
  {
    name: "Sofia Bauer",
    role: "Brautstyling & Hochsteckfrisuren",
    focus: "Macht den schönsten Tag deines Lebens unvergesslich.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=75",
  },
  {
    name: "Daniel Krüger",
    role: "Herrenfrisuren & Bart",
    focus: "Klassische Schnitte mit modernem Touch.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=75",
  },
];

export default function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-2xl font-serif text-4xl font-light leading-tight tracking-tight text-ink sm:text-5xl">
            Die Menschen hinter Maison Rouge.
          </h2>
        </Reveal>

        {/* Staggered portrait row: alternating tiles drop down a step on
            desktop for an editorial, contact-sheet rhythm. */}
        <ul className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-8 lg:grid-cols-4">
          {TEAM.map((person, i) => (
            <Reveal
              as="li"
              key={person.name}
              variant="blur"
              delay={i * 100}
              className={i % 2 === 1 ? "lg:mt-16" : ""}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={person.img}
                  alt={`Porträt von ${person.name}, ${person.role} bei Maison Rouge`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale"
                />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-light text-ink">
                {person.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">
                {person.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-grey-600">
                {person.focus}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
