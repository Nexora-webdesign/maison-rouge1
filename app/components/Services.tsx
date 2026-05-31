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

        {/* Service menu: one column per category, separated by fine vertical
            hairlines. Each column fills its own height, so the differing item
            counts read as an intentional menu rather than empty grid cells. */}
        <div className="mt-16 grid grid-cols-1 gap-y-12 border-t border-paper/12 pt-14 sm:grid-cols-3 sm:gap-y-0 sm:divide-x sm:divide-paper/12">
          {GROUPS.map((group, gi) => (
            <Reveal
              key={group.title}
              delay={gi * 100}
              className="sm:px-10 sm:first:pl-0 sm:last:pr-0"
            >
              <h3 className="font-serif text-2xl font-light text-paper">
                {group.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-grey-300">
                {group.lead}
              </p>
              <ul className="mt-7 space-y-3.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-paper/90 sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.6rem] h-px w-3 shrink-0 bg-gold"
                    />
                    <span>{item}</span>
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
