import Image from "next/image";
import Reveal from "./Reveal";

// 8 images, 8 bento cells. The span map gives the grid an asymmetric rhythm
// on desktop (two large anchors, six supporting tiles) and collapses to a
// simple two-column stack on mobile.
const IMAGES: { id: string; alt: string; span: string }[] = [
  { id: "1633681926022-84c23e8cb2d6", alt: "Frische Coloration in warmen Tönen", span: "lg:col-span-2 lg:row-span-2" },
  { id: "1487412947147-5cebf100ffc2", alt: "Eleganter Damen-Haarschnitt", span: "" },
  { id: "1560869713-7d0a29430803", alt: "Natürliche Balayage-Strähnen", span: "" },
  { id: "1522337360788-8b13dee7a37e", alt: "Stylistin bei der Arbeit im Salon", span: "lg:col-span-2" },
  { id: "1562322140-8baeececf3df", alt: "Pflege und Föhn-Finish", span: "" },
  { id: "1519699047748-de8e457a634e", alt: "Hochwertiges Beauty-Editorial", span: "" },
  { id: "1605497788044-5a32c7078486", alt: "Moderner Herren-Schnitt", span: "" },
  { id: "1595476108010-b4d1f102b1b1", alt: "Detailaufnahme einer Hochsteckfrisur", span: "lg:col-span-2" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="scroll-mt-24 bg-paper pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-2xl font-serif text-4xl font-light leading-tight tracking-tight text-ink sm:text-5xl">
            Arbeiten aus dem Salon.
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[200px]">
          {IMAGES.map((img, i) => (
            <Reveal
              key={img.id}
              variant="fade"
              delay={(i % 4) * 70}
              className={img.span}
            >
              <div className="group relative h-full w-full overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${img.id}?auto=format&fit=crop&w=900&q=75`}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
