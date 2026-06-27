import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import CursorGlow from "./components/CursorGlow";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import LoadingScreen from "./components/LoadingScreen";
import Stats from "./components/Stats";
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  return (

    <>

      {loading && <LoadingScreen />}

      <CursorGlow />

      <Navbar />

      <Hero />

      <Stats />

      <Services />

      <Projects />

      <About />

      <Skills />

      <Achievements />

      <Contact />

      <Footer />

      <ScrollTop />

      

    </>

  );
}

export default App;