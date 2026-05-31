import Image from "next/image";
import Reveal from "./Reveal";

const TEAM = [
  {
    name: "Élise Vogt",
    role: "Inhaberin & Coloristin",
    focus: "Natürliche Balayage und individuelle Farbkonzepte.",
    img: "/team/team-elise.jpg",
  },
  {
    name: "Marc Lehmann",
    role: "Senior Stylist",
    focus: "Präziser Schnitt mit Auge für Form und Persönlichkeit.",
    img: "/team/team-marc.jpg",
  },
  {
    name: "Sofia Bauer",
    role: "Brautstyling & Hochsteckfrisuren",
    focus: "Macht den schönsten Tag deines Lebens unvergesslich.",
    img: "/team/team-sofia.jpg",
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

        {/* Staggered portrait row: the centre portrait drops a step on
            desktop for an editorial, contact-sheet rhythm. */}
        <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
          {TEAM.map((person, i) => (
            <Reveal
              as="li"
              key={person.name}
              variant="blur"
              delay={i * 100}
              className={i === 1 ? "lg:mt-20" : ""}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={person.img}
                  alt={`Porträt von ${person.name}, ${person.role} bei Maison Rouge`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
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
