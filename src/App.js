import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <div>
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />

      <Footer />

      <SocialLinks />
    </div>
  );
}
