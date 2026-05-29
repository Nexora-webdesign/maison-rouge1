import Image from "next/image";
import Reveal from "./Reveal";

const TEAM = [
  {
    name: "Élise Vogt",
    role: "Inhaberin & Coloristin",
    focus:
      "Spezialisiert auf natürliche Balayage und individuelle Farbkonzepte.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Marc Lehmann",
    role: "Senior Stylist",
    focus: "Präziser Schnitt mit Auge für Form und Persönlichkeit.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Sofia Bauer",
    role: "Brautstyling & Hochsteckfrisuren",
    focus: "Macht den schönsten Tag deines Lebens unvergesslich.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Daniel Krüger",
    role: "Herrenfrisuren & Bart",
    focus: "Klassische Schnitte mit modernem Touch.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
  },
];

export default function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Unser Team
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Die Menschen hinter Maison Rouge.
          </h2>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((person, i) => (
            <Reveal as="li" key={person.name} delay={i * 90}>
              <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                <Image
                  src={person.img}
                  alt={`Porträt von ${person.name}, ${person.role} bei Maison Rouge`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-medium text-ink">
                {person.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {person.role}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {person.focus}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
