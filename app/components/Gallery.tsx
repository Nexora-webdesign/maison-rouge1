import Image from "next/image";
import Reveal from "./Reveal";

// Editorial triptych: a dominant centre image flanked by two smaller ones.
// Three real images, three cells — no empty tiles.
const IMAGES: { src: string; alt: string }[] = [
  { src: "/arbeiten/work-bob.jpg", alt: "Klassischer Bob mit präziser Kante" },
  { src: "/arbeiten/work-waves.jpg", alt: "Glamouröse, fließende Wellen mit Glanz-Finish" },
  { src: "/arbeiten/work-updo.jpg", alt: "Elegante Hochsteckfrisur von hinten" },
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

        {/* Centre image is larger; the two side images sit vertically centred
            beside it on desktop and stack on mobile. */}
        <div className="mt-14 grid grid-cols-1 items-center gap-4 sm:grid-cols-12 sm:gap-5">
          {IMAGES.map((img, i) => {
            const isCentre = i === 1;
            return (
              <Reveal
                key={img.src}
                variant="fade"
                delay={i * 90}
                className={isCentre ? "sm:col-span-6" : "sm:col-span-3"}
              >
                <figure className="group relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={
                      isCentre
                        ? "(max-width: 640px) 100vw, 50vw"
                        : "(max-width: 640px) 100vw, 25vw"
                    }
                    className="object-cover grayscale transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
