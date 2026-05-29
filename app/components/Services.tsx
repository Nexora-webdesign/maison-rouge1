import Reveal from "./Reveal";

type Service = { name: string; price: string };

const GROUPS: { title: string; items: Service[] }[] = [
  {
    title: "Damen",
    items: [
      { name: "Waschen, Schneiden, Föhnen", price: "ab 65 €" },
      { name: "Komplett-Coloration", price: "ab 95 €" },
      { name: "Strähnen / Highlights", price: "ab 110 €" },
      { name: "Pflegebehandlung Premium", price: "ab 45 €" },
    ],
  },
  {
    title: "Herren",
    items: [
      { name: "Klassischer Haarschnitt", price: "ab 38 €" },
      { name: "Bartpflege & Rasur", price: "ab 28 €" },
      { name: "Tönung", price: "ab 35 €" },
    ],
  },
  {
    title: "Besonderes",
    items: [
      { name: "Hochsteckfrisur", price: "ab 85 €" },
      { name: "Brautstyling", price: "ab 180 €" },
      { name: "Festtags-Styling", price: "ab 95 €" },
    ],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Leistungen
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Unser Angebot.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-14">
          {GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 80}>
              <h3 className="font-serif text-2xl font-medium text-accent-deep">
                {group.title}
              </h3>
              <ul className="mt-5">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 border-b border-accent/25 py-4 last:border-b-0"
                  >
                    <span className="text-[15px] text-ink sm:text-base">
                      {item.name}
                    </span>
                    {/* Dotted leader keeps prices visually aligned, editorial-style */}
                    <span
                      aria-hidden
                      className="mx-3 hidden flex-1 translate-y-[-3px] border-b border-dotted border-accent/40 sm:block"
                    />
                    <span className="shrink-0 font-medium text-accent-deep">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
