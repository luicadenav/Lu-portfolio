import About from "./components/About/About";
//import Collaborative from "./components/Collaborative/collaborative";
import Hero from "./components/Hero/Hero";
import More from "./components/More/More";
import Navbar from "./components/Navbar/Navbar";
import { initGA } from "./analytics";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    initGA();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      {/*       <Collaborative /> */}
      <About />
      <More />
      <Footer />
    </>
  );
}

export default App;
