import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import BackgroundMesh from "./components/BackgroundMesh";
import MouseSpotlight from "./components/MouseSpotlight";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen theme-bg-primary theme-text-primary transition-colors duration-300">
      <BackgroundMesh />
      <MouseSpotlight />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
