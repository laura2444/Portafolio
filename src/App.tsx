import React from 'react';
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import About from './components/about-me/about';
import Presentation from './components/presentatios/presentation';
import Projects from './components/projec/projects';
import Skills from './components/skills/skills';
import "./App.css";
import Educacion from './components/educacion/educacion';
import Logros from './components/logros/logros';


const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Presentation />
      <About />
      <Projects />
      <Skills />
      <Educacion />
      <Logros />
      <Footer />
    </>

  );
};

export default App;