import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../App.css";
import './nav.css';

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) { // cuando baja 20px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-md navbar-dark fixed-top personalized-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#hero">
          <img src="src/assets/icons/pixel2.png" alt="Logo" width="30" height="30" className="pixel" />
          <span className="brand-text">Laura</span>
        </a>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <a className="nav-link" href="#hero">Inicio</a>
            </li> 
            <li className="nav-item me-4">
              <a className="nav-link" href="#about">Sobre mi</a>
            </li> 
             <li className="nav-item me-4">
              <a className="nav-link" href="#projects">Proyectos</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#skills">Habilidades</a>
            </li>
           
            <li className="nav-item me-4">
              <a className="nav-link" href="#educacion">Educación</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
