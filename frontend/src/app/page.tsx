import Hero from "../components/sections/Hero";
import Ticker from "../components/sections/Ticker";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Portfolio from "../components/sections/Portfolio";
import Writing from "../components/sections/Writing";
import Footer from "../components/sections/Footer";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Writing />
      <Contact />
      <Footer />
    </>
  );
}
