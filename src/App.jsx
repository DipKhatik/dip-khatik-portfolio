import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Process from "./components/Process";
import Projects from "./components/Projects";
import WhyMe from "./components/WhyMe";
import Contact from "./components/Contact";
import About from "./components/about";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Process />
      <Projects />
      <WhyMe />
      <Contact />
    </div>
  );
}

export default App;
