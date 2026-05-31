import Image from "next/image";
import Reveal from "./Reveal";

// Bento: a tall feature image plus a packed grid of supporting shots.
// Eight real images, eight cells, no empty tiles. On desktop the feature
// spans two rows of a 3-column grid; the remaining seven fill it exactly.
const IMAGES: { src: string; alt: string; feature?: boolean }[] = [
  {
    src: "/arbeiten/work-waves.jpg",
    alt: "Glamouröse, fließende Wellen mit Glanz-Finish",
    feature: true,
  },
  { src: "/arbeiten/work-bob.jpg", alt: "Klassischer Bob mit präziser Kante" },
  {
    src: "/arbeiten/work-styling.jpg",
    alt: "Stylistin föhnt und stylt das Haar einer Kundin",
  },
  {
    src: "/arbeiten/work-cut.jpg",
    alt: "Stylist schneidet präzise das Haar einer Kundin",
  },
  { src: "/arbeiten/work-updo.jpg", alt: "Elegante Hochsteckfrisur von hinten" },
  {
    src: "/arbeiten/work-color.jpg",
    alt: "Coloristin trägt Foliensträhnen auf",
  },
  {
    src: "/arbeiten/work-wash.jpg",
    alt: "Entspannende Haarwäsche am Waschbecken",
  },
  {
    src: "/arbeiten/work-comb.jpg",
    alt: "Detailaufnahme eines Kamms in glänzendem Haar",
  },
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

        <div className="mt-14 grid grid-cols-2 auto-rows-[170px] gap-3 sm:grid-cols-12 sm:auto-rows-[250px] sm:gap-4">
          {IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              variant="fade"
              delay={(i % 3) * 80}
              className={
                img.feature
                  ? "sm:col-span-4 sm:row-span-2"
                  : "sm:col-span-4"
              }
            >
              <figure className="group relative h-full w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={
                    img.feature
                      ? "(max-width: 640px) 50vw, 33vw"
                      : "(max-width: 640px) 50vw, 33vw"
                  }
                  className="object-cover grayscale transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
