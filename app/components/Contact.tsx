import Reveal from "./Reveal";

const HOURS = [
  { day: "Montag bis Freitag", time: "9:00 - 19:00" },
  { day: "Samstag", time: "9:00 - 16:00" },
  { day: "Sonntag", time: "geschlossen" },
];

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
    <path
      d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.58 3.6a1 1 0 0 1-.25 1l-2.2 2.2Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02A9.84 9.84 0 0 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.84-.85 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7.59.26 1.04.41 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.25" />
    <path
      d="m4 7 8 6 8-6"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CARDS = [
  { label: "Anrufen", value: "0251 / 123 4567", href: "tel:+492511234567", icon: <PhoneIcon /> },
  { label: "WhatsApp", value: "+49 176 1234567", href: "https://wa.me/491761234567", icon: <WhatsappIcon /> },
  { label: "E-Mail", value: "hallo@maison-rouge.de", href: "mailto:hallo@maison-rouge.de", icon: <MailIcon /> },
];

export default function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            Termin vereinbaren
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl font-light leading-tight tracking-tight text-paper sm:text-5xl">
            Wir freuen uns auf dich.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-10 lg:grid-cols-2">
          {/* Contact channels */}
          <Reveal className="divide-y divide-paper/12 border-y border-paper/12">
            {CARDS.map((card) => (
              <a
                key={card.label}
                href={card.href}
                {...(card.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex min-h-16 items-center gap-5 py-5 transition-colors duration-300 hover:text-gold"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper/20 text-gold transition-colors duration-300 group-hover:border-gold">
                  {card.icon}
                </span>
                <span className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-grey-400">
                    {card.label}
                  </span>
                  <span className="mt-0.5 text-base font-medium text-paper transition-colors duration-300 group-hover:text-gold">
                    {card.value}
                  </span>
                </span>
              </a>
            ))}
          </Reveal>

          {/* Opening hours + address */}
          <Reveal delay={120}>
            <h3 className="font-serif text-2xl font-light text-paper">
              Öffnungszeiten
            </h3>
            <div className="mt-5 h-px w-12 bg-gold" />
            <ul className="mt-5">
              {HOURS.map((row) => (
                <li
                  key={row.day}
                  className="flex items-center justify-between border-b border-paper/10 py-3.5 text-[15px] last:border-b-0"
                >
                  <span className="text-grey-300">{row.day}</span>
                  <span className="font-medium tabular-nums text-paper">
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm tracking-wide text-grey-400">
              Prinzipalmarkt 12 · 48143 Münster
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
