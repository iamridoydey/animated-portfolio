import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="services">
        <Parallax type="services" />
      </section>
      <section>Services</section>
      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="about">Contact</section>
    </div>
  );
};

export default App;
