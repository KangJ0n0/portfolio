import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section2 id="Portfolio">
        <Portfolio />
      </section2>
      <section id="About">
        <About />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
