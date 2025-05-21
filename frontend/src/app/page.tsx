import Hero from "./components/hero/page";
import About from "./components/about/page";
import Header from "./components/header/page";
import Skills from "./components/skills/page";
import Experience from "./components/experience/page";
import Portfolio from "./components/portfolio/page";
import Blog from "./components/blog/page";
import Contact from "./components/contact/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
