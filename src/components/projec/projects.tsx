import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../App.css";
import "./projects.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import {
  FaPython,
  FaRobot,
  FaNetworkWired,
  FaBootstrap,
  FaNodeJs,
  FaReact,
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
import type { IconType } from 'react-icons';

interface Technology {
  Icon: IconType;
  color: string;
  name: string;
}

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: Technology[];
  github?: string;
  demo?: string;
  inDevelopment?: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      image: "images/Hero.png",
      title: "HeroeVerso – Plataforma de Gestión de Superhéroes",
      description: "La plataforma permite administrar datos de héroes, películas y multimedia asociada. Incluye funcionalidades avanzadas como la gestión de casting de películas, vinculación de héroes con películas, y una galería multimedia organizada por categoría.",
      technologies: [
        { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
        { Icon: FaNodeJs, color: "#68A063", name: "Node.js" },
        { Icon: SiAngular, color: "#f71e1eff", name: "Angular" },
        { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
        { Icon: FaBootstrap, color: "#7952B3", name: "Bootstrap" },
        { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" }
      ],
      github: "https://github.com/Trekhi/Base_Datos2.git",
      demo: "https://angular-kaoz.onrender.com/home"
    },
    {
      image: "images/request.png",
      title: "Request – Automatización de requerimientos",
      description: "Plataforma web que convierte descripciones de proyectos en HU, requerimientos, su clasificación y priorización usando inteligencia artificial. Utiliza modelos de lenguaje (LLM) para interpretar texto natural",
      technologies: [
        { Icon: FaPython, color: "#3776AB", name: "Python" },
        { Icon: SiFlask, color: "#000000", name: "Flask" },
        { Icon: FaRobot, color: "#F7DF1E", name: "API IA" }
      ],
      github: "https://github.com/laura2444/REQUESTWEB.git",
      demo: "https://requestweb.onrender.com/"
    },
    {
      image: "images/productivity.png",
      title: "Productivity",
      description: "Aplicación web que usa inteligencia artificial para a partir de tus tareas, la IA las divide en pasos manejables. Actualmente en fase beta, con funciones básicas. Disponible para probar",
      technologies: [
        { Icon: SiIonic, color: "#000000", name: "Ionic" },
        { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
        { Icon: SiAngular, color: "#f71e1eff", name: "Angular" }
      ],
      github: "https://github.com/laura2444/productivity2.git",
      demo: "https://laura2444.github.io/PresentationProductivity/"
    },
    {
      image: "images/GUYP-arreglado.png",
      title: "GUYP: App para diagnóstico de plantas",
      description: "Aplicación en desarrollo que usa visión por computadora para diagnosticar enfermedades en hojas de plantas a partir de imágenes. Genera respuestas para el usuario mediante un modelo de lenguaje.",
      technologies: [
        { Icon: SiFlutter, color: "#61DBFB", name: "Flutter" },
        { Icon: SiFastapi, color: "#68A063", name: "Fast Api" },
        { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
        { Icon: FaNetworkWired, color: "#000000", name: "Deep learning" },
        { Icon: FaRobot, color: "#7dc51eff", name: "API ia" }
      ],
      inDevelopment: true
    },
    {
      image: "images/Miportafolio.png",
      title: "Portafolio",
      description: "Página web donde presento mi portafolio profesional, comparto mis proyectos más destacados y hablo sobre mi trayectoria y habilidades",
      technologies: [
        { Icon: FaReact, color: "#61DBFB", name: "React" },
        { Icon: SiTypescript, color: "#68A063", name: "Typescript" },
        { Icon: FaBootstrap, color: "#47A248", name: "Bootstrap" }
      ],
    }
  ];

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="card card-one h-100 shadow-sm">
      <img src={project.image} alt={project.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text text-muteds">{project.description}</p>
        <div className="tech-icons-container">
          {project.technologies.map((tech, idx) => {
            const TechIcon = tech.Icon;
            return (
              <div key={idx} className="tech-icon-item">
                <TechIcon size={30} color={tech.color} />
                <span className="tech-icon-name">{tech.name}</span>
              </div>
            );
          })}
        </div>
        <div className="d-flex gap-2">
          {project.inDevelopment ? (
            <span className="badge badge-dev">App en desarrollo</span>
          ) : (
            <>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
                  <FontAwesomeIcon icon={faGithub} size="2x" /> código
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  ver proyecto
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="about-full-width">
      <section id="projects" className="section-spacing">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 tituloabout">Proyectos</h2>
          
          {/* Carrusel para Desktop */}
          <div id="projectsCarouselDesktop" className="carousel slide d-none d-lg-block">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#projectsCarouselDesktop" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#projectsCarouselDesktop" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row g-4">
                  {projects.slice(0, 3).map((project, idx) => (
                    <div key={idx} className="col-lg-4">
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="carousel-item">
                <div className="row g-4">
                  {projects.slice(3, 5).map((project, idx) => (
                    <div key={idx} className="col-lg-4">
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarouselDesktop" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#projectsCarouselDesktop" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Carrusel para Mobile */}
          <div id="projectsCarouselMobile" className="carousel slide d-lg-none">
            <div className="carousel-indicators">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#projectsCarouselMobile"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? "active" : ""}
                  aria-current={idx === 0 ? "true" : undefined}
                  aria-label={`Slide ${idx + 1}`}
                ></button>
              ))}
            </div>

            <div className="carousel-inner">
              {projects.map((project, idx) => (
                <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                  <div className="row g-4 justify-content-center">
                    <div className="col-12">
                      <ProjectCard project={project} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarouselMobile" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#projectsCarouselMobile" data-bs-slide="next">
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