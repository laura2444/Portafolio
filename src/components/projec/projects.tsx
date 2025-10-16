import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../App.css";
import "./projects.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Importar iconos
import {
  FaPython,
  FaRobot,
  FaNetworkWired,
  FaBootstrap,
  FaNodeJs,
  FaReact
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiFlutter,
  SiFlask,
  SiIonic,
  SiAngular,
  SiFastapi,
  SiJavascript
} from "react-icons/si";

const Projects: React.FC = () => {
  return (
    <div className="about-full-width">
      <section id="projects" className="section-spacing">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 tituloabout">Proyectos</h2>
          
          <div id="projectsCarousel" className="carousel slide">
            {/* Indicadores */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#projectsCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#projectsCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>

            {/* Slides del carrusel */}
            <div className="carousel-inner">
              {/* Slide 1 - Primeros 3 proyectos */}
              <div className="carousel-item active">
                <div className="row g-4">

                <div className="col-md-6 col-lg-4">
                    <div className="card card-one h-100 shadow-sm">
                      <img
                        src="images\Hero.png"
                        alt="HeroeVerso"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">HeroeVerso – Plataforma de Gestión de Superhéroes</h5>
                        <p className="card-text text-muteds">
                          La plataforma ppermite administrar datos de héroes, películas y multimedia asociada. Incluye funcionalidades avanzadas como la gestión de casting de películas, vinculación de héroes con películas, y una galería multimedia organizada por categoría.
                        </p>
                        <div className="tech-icons-container">
                          <div className="tech-icon-item">
                            <SiJavascript size={30} color="#F7DF1E" />
                            <span className="tech-icon-name">JavaScript</span>
                          </div>
                          <div className="tech-icon-item">
                            <FaNodeJs size={30} color="#68A063" />
                            <span className="tech-icon-name">Node.js</span>
                          </div>
                          <div className="tech-icon-item">
                            <FaRobot size={30} color="#F7DF1E" />
                            <span className="tech-icon-name">Angular</span>
                          </div>

                          <div className="tech-icon-item">
                            <SiMongodb size={30} color="#47A248" />
                            <span className="tech-icon-name">MongoDB</span>
                          </div>
                          <div className="tech-icon-item">
                            <FaBootstrap size={30} color="#7952B3" />
                            <span className="tech-icon-name">Bootstrap</span>
                          </div>
                          <div className="tech-icon-item">
                            <SiTypescript size={30} color="#3178C6" />
                            <span className="tech-icon-name">TypeScript</span>
                          </div>
                        </div>
                        <div className="d-flex gap-2">
                          <a href="https://github.com/Trekhi/Base_Datos2.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
                            <FontAwesomeIcon icon={faGithub} size="2x" /> código
                          </a>
                          <a href="https://angular-kaoz.onrender.com/home" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                            ver proyecto
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* Proyecto 1 */}

                  <div className="col-md-6 col-lg-4">
                    <div className="card card-one h-100 shadow-sm">
                      <img
                        src="images/request.png"
                        alt="Request"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Request –Automatización de requerimientos</h5>
                        <p className="card-text text-muteds">
                          Plataforma web que convierte descripciones de proyectos en HU, requerimientos, su clasificación y priorización usando inteligencia artificial. Utiliza modelos de lenguaje (LLM) para interpretar texto natural
                        </p>
                        <div className="tech-icons-container">
                          <div className="tech-icon-item">
                            <FaPython size={30} color="#3776AB" />
                            <span className="tech-icon-name">Python</span>
                          </div>
                          <div className="tech-icon-item">
                            <SiFlask size={30} color="#000000" />
                            <span className="tech-icon-name">Flask</span>
                          </div>
                          <div className="tech-icon-item">
                            <FaRobot size={30} color="#F7DF1E" />
                            <span className="tech-icon-name">API IA</span>
                          </div>
                        </div>
                        <div className="d-flex gap-2">
                          <a href="https://github.com/laura2444/REQUESTWEB.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
                            <FontAwesomeIcon icon={faGithub} size="2x" /> código
                          </a>
                          <a href="https://requestweb.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                            ver proyecto
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Proyecto 2 */}


                  <div className="col-md-6 col-lg-4">
                    <div className="card card-one h-100 shadow-sm">
                      <img
                        src="images/productivity.png"
                        alt="Productivity"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Productivity</h5>
                        <p className="card-text text-muteds">
                          Aplicación web  que usa inteligencia artificial para a partir de tus tareas, la IA las divide en pasos manejables.

                          Actualmente en fase beta, con funciones básicas . Disponible para probar
                        </p>
                        <div className="tech-icons-container">
                          <div className="tech-icon-item">
                            <SiIonic size={30} color="#000000" />
                            <span className="tech-icon-name">Ionic</span>
                          </div>
                          <div className="tech-icon-item">
                            <SiTypescript size={30} color="#3178C6" />
                            <span className="tech-icon-name">TypeScript</span>
                          </div>
                          <div className="tech-icon-item">
                            <SiAngular size={30} color="#5469D4" />
                            <span className="tech-icon-name">Angular</span>
                          </div>
                        </div>
                        <div className="d-flex gap-2">
                          <a href="https://github.com/laura2444/productivity2.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
                            <FontAwesomeIcon icon={faGithub} size="2x" /> código
                          </a>
                          <a href="https://laura2444.github.io/PresentationProductivity/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                            ver proyecto
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Proyecto 3*/}
 

                  {/* Proyecto 4 */}

                </div>
              </div>

              {/* Slide 2 - Proyecto adicional */}
              <div className="carousel-item">
                <div className="row g-4">
                  {/* Proyecto 4 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="card card-one h-100 shadow-sm">
                      <img
                        src="images/GUYP-arreglado.png"
                        alt="Task Management App"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">GUYP: App para diagnóstico de plantas</h5>
                        <p className="card-text text-muteds">
Aplicación en desarrollo que usa visión por computadora para diagnosticar enfermedades en hojas de plantas a partir de imágenes. Genera respuestas para el usuario mediante un modelo de lenguaje.                        </p>
                        <div className="tech-icons-container">
                          <div className="tech-icon-item">
                            <SiFlutter size={30} color="#61DBFB" />
                            <span className="tech-icon-name">Flutter</span>
                          </div>
                          <div className="tech-icon-item">
                            <SiFastapi size={30} color="#68A063" />
                            <span className="tech-icon-name">Fast Api</span>
                          </div>
                          <div className="tech-icon-item">
                            <SiMongodb size={30} color="#47A248" />
                            <span className="tech-icon-name">MongoDB</span>
                          </div>
                          <div className="tech-icon-item">
                            <FaNetworkWired size={30} color="#000000" />
                            <span className="tech-icon-name">Deep learning</span>
                          </div>
                          <div className="tech-icon-item">
                            <FaRobot size={30} color="#7dc51eff" />
                            <span className="tech-icon-name">API ia</span>
                          </div>
                        </div>
                        <div className="d-flex gap-2">
                            <span className="badge badge-dev">App en desarrollo</span>
                          </div>

                      </div>
                    </div>
                  </div>

                  {/* Proyecto 5 */}
                   <div className="col-md-6 col-lg-4">
                    <div className="card card-one h-100 shadow-sm">
                      <img
                        src="images\Miportafolio.png"
                        alt="Task Management App"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Portafolio</h5>
                        <p className="card-text text-muteds">
                        Pagina web donde presento mi portafolio profesional, comparto mis proyectos más destacados y ablo sobre mi trayectoria y habilidades</p>
                        <div className="tech-icons-container">
                          <div className="tech-icon-item">
                            <FaReact size={30} color="#61DBFB" />
                            <span className="tech-icon-name">React</span>
                          </div>
                          <div className="tech-icon-item">
                            <SiTypescript size={30} color="#68A063" />
                            <span className="tech-icon-name">Typescript</span>
                          </div>
                          <div className="tech-icon-item">
                            <FaBootstrap size={30} color="#47A248" />
                            <span className="tech-icon-name">Bootstrap</span>
                          </div>
                      
                        </div>
                        <div className="d-flex gap-2">
                          <a href="https://github.com/laura2444/Portafolio.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
                            <FontAwesomeIcon icon={faGithub} size="2x" /> código
                          </a>
                          <a href="https://portafolio-chi-ivory.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                            ver proyecto
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controles del carrusel */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#projectsCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#projectsCarousel"
              data-bs-slide="next"
            > 
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;