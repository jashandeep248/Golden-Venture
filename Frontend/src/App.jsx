import Header from "./components/Header";
import Overview from "./components/Overview";
import FocusAreas from "./components/FocusAreas";
import Services from "./components/Services";
import Mission from "./components/Mission";
import Leadership from "./components/Leadership";
import Strengths from "./components/Strengths";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <div className="app-shell bg-light text-body">
      <Header />
      <main>
        <Overview />
        <FocusAreas />
        <Services />
        <Mission />
        <Leadership />
        <Strengths />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;