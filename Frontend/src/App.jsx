import { useState, useEffect } from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import FocusAreas from "./components/FocusAreas";
import Services from "./components/Services";
import Mission from "./components/Mission";
import Leadership from "./components/Leadership";
import Team from "./components/Team";
import Strengths from "./components/Strengths";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();
  const [currentPath, setCurrentPath] = useState(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    return path === '/admin' || hash === '#/admin' || path.includes('/admin') ? '/admin' : '/';
  });

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      setCurrentPath(path === '/admin' || hash === '#/admin' || path.includes('/admin') ? '/admin' : '/');
    };
    
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  if (currentPath === '/admin') {
    return <Admin />;
  }

  return (
    <div className="app-shell bg-light text-body">
      <Header />
      <main>
        <Overview />
        <FocusAreas />
        <Services />
        <Mission />
        <Leadership />
        <Team />
        <Strengths />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;