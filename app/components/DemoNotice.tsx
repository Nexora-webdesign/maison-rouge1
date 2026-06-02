/**
 * Slim demo disclaimer strip shown above the Header. A single concise line:
 * this is a demo site by Nexora-webdesign.de. Hairline rose-gold rules top
 * and bottom; not sticky — scrolls away with the page.
 */
export default function DemoNotice() {
  return (
    <section
      className="border-b border-gold/40 bg-grey-50 px-6 py-2"
      aria-label="Hinweis: Demo-Website"
    >
      <p className="text-center text-[0.8rem] leading-snug text-grey-600">
        Demo-Website von{" "}
        <a
          href="https://nexora-webdesign.de"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-ink underline-offset-2 transition-colors hover:text-gold hover:underline"
        >
          Nexora-webdesign.de
        </a>
      </p>
    </section>
  );
}
