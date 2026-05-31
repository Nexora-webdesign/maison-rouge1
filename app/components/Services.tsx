import Reveal from "./Reveal";

type Group = {
  title: string;
  lead: string;
  items: string[];
};

const GROUPS: Group[] = [
  {
    title: "Damen",
    lead: "Schnitt, Farbe und Pflege, abgestimmt auf Haarstruktur und Typ.",
    items: [
      "Waschen, Schneiden, Föhnen",
      "Komplett-Coloration",
      "Strähnen & Highlights",
      "Pflegebehandlung Premium",
    ],
  },
  {
    title: "Herren",
    lead: "Präziser Schnitt und Bartpflege mit Auge für Form.",
    items: ["Klassischer Haarschnitt", "Bartpflege & Rasur", "Tönung"],
  },
  {
    title: "Besonderes",
    lead: "Für die Momente, die in Erinnerung bleiben.",
    items: ["Hochsteckfrisur", "Brautstyling", "Festtags-Styling"],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="scroll-mt-24 bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            Leistungen
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl font-light leading-tight tracking-tight text-paper sm:text-5xl">
            Was wir für dich tun.
          </h2>
        </Reveal>

        {/* Indexed editorial list: each category is a row with a generous
            two-column split. Hairlines separate categories only, never rows. */}
        <div className="mt-16 divide-y divide-paper/12">
          {GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 90}>
              <div className="grid gap-6 py-10 sm:grid-cols-12 sm:gap-10">
                <div className="sm:col-span-4">
                  <h3 className="font-serif text-2xl font-light text-paper">
                    {group.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-grey-300">
                    {group.lead}
                  </p>
                </div>
                <ul className="grid gap-x-8 gap-y-3 sm:col-span-8 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-[15px] text-paper/90 sm:text-base"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-px w-4 shrink-0 bg-gold"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
