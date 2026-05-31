import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Preise from "./components/Preise";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Preise />
      <Gallery />
      <Team />
      <Contact />
    </>
  );
}
