import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Works from './components/Works/Works';
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Audio from "./components/Audio/Audio";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Events />
      <Works />
      <Contact />
      <Audio />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
