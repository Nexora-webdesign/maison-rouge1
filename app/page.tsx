import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Team />
      <Gallery />
      <Contact />
    </>
  );
}
