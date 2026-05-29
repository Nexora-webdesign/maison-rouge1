import Image from "next/image";
import Reveal from "./Reveal";

const IMAGES = [
  { id: "1633681926022-84c23e8cb2d6", alt: "Frische Coloration in warmen Tönen" },
  { id: "1487412947147-5cebf100ffc2", alt: "Eleganter Damen-Haarschnitt" },
  { id: "1560869713-7d0a29430803", alt: "Natürliche Balayage-Strähnen" },
  { id: "1522337360788-8b13dee7a37e", alt: "Stylist bei der Arbeit im Salon" },
  { id: "1562322140-8baeececf3df", alt: "Pflege und Föhn-Finish" },
  { id: "1519699047748-de8e457a634e", alt: "Hochwertiges Beauty-Editorial" },
  { id: "1605497788044-5a32c7078486", alt: "Moderner Herren-Schnitt" },
  { id: "1595476108010-b4d1f102b1b1", alt: "Detailaufnahme einer Hochsteckfrisur" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Galerie
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Inspirationen aus unserem Salon.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {IMAGES.map((img, i) => (
            <Reveal key={img.id} delay={(i % 4) * 70}>
              <div className="group relative aspect-square w-full overflow-hidden rounded-sm">
                <Image
                  src={`https://images.unsplash.com/photo-${img.id}?auto=format&fit=crop&w=700&q=80`}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Soft rose-gold wash on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/25"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
