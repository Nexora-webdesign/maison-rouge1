import type { Metadata } from "next";
import { Bodoni_Moda, Geist } from "next/font/google";
import "./globals.css";
import DemoNotice from "./components/DemoNotice";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Display: a high-contrast Didone for editorial, magazine-grade headlines.
// Body: Geist, a clean modern grotesque. Both are variable fonts, so we
// expose the weight axis via a CSS variable rather than fixed weights.
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maison-rouge.de"),
  title: "Maison Rouge · Friseurkunst in Münster",
  description:
    "Friseurkunst im Herzen Münsters. Persönliche Beratung, handwerkliche Präzision, hochwertige Pflege.",
  openGraph: {
    title: "Maison Rouge · Friseurkunst in Münster",
    description:
      "Friseurkunst im Herzen Münsters. Persönliche Beratung, handwerkliche Präzision, hochwertige Pflege.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${bodoni.variable} ${geist.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-sm focus:text-paper"
        >
          Zum Inhalt springen
        </a>
        <DemoNotice />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
