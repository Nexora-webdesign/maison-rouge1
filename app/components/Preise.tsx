import Reveal from "./Reveal";

type Item = { name: string; price: string };
type Group = { title: string; items: Item[] };

const GROUPS: Group[] = [
  {
    title: "Damen",
    items: [
      { name: "Waschen, Schneiden, Föhnen", price: "ab 65 €" },
      { name: "Komplett-Coloration", price: "ab 95 €" },
      { name: "Strähnen & Highlights", price: "ab 110 €" },
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

export default function Preise() {
  return (
    <section id="preise" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-ink sm:text-5xl">
            Preise.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-grey-600">
            Richtwerte ab Preis. Den genauen Preis besprechen wir vorab
            gemeinsam, abgestimmt auf Haarlänge und Aufwand.
          </p>
        </Reveal>

        {/* Price menu: dotted leaders align names and prices; only the
            cluster headings carry a hairline, never each row. */}
        <div className="mt-16 space-y-14">
          {GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 80}>
              <h3 className="border-t border-ink/15 pt-5 font-serif text-xl font-light tracking-wide text-gold">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-3">
                    <span className="text-[15px] text-ink sm:text-base">
                      {item.name}
                    </span>
                    <span
                      aria-hidden
                      className="mt-[2px] hidden flex-1 self-center border-b border-dotted border-grey-300 sm:block"
                    />
                    <span className="ml-auto shrink-0 font-medium tabular-nums text-ink sm:ml-0">
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
