import About from "./components/About/About";
import Collaborative from "./components/Collaborative/collaborative";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collaborative />
      <About />
    </>
  );
}

export default App;
