import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  FaPlay,
  FaTimes,
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
  video?: string;   // video local (se abre en el modal al hacer clic)
  inDevelopment?: boolean;
}

/* ---------- Modal del video ---------- */
const VideoModal: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey); // esto permite cerrar el modal con la tecla ESC
    document.body.style.overflow = 'hidden'; //con eso no se puede hacer scroll mientras el modal está abierto
    return () => {  // la funcion cleanup se ejecuta cuando el componente se desmonta, es decir, cuando el modal se cierra
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]); //este efecto depende de onClose, es decir, se ejecuta cada vez que onClose cambia, pero en este caso onClose no cambia, así que se ejecuta solo una vez al montar el componente

  return createPortal( // esto DIBUJA el modal en el DOM, pero fuera del componente padre, es decir, en el body del documento, para que no se vea afectado por el CSS del componente padre
    //si das click en el fondo se cierra el modal, pero si das click en el video no se cierra
    <div className="video-modal-backdrop" onClick={onClose}>  
      <div className="video-modal" onClick={(e) => e.stopPropagation()}> {/* stoppropagation esto evita que el click en el video cierre el modal */}
        <button className="video-modal-close" onClick={onClose} aria-label="Cerrar video"><FaTimes /></button>
        <video src={src} controls autoPlay playsInline />
      </div>
    </div>,
    document.body
  );
};

/* ---------- Card de proyecto ---------- */
const ProjectCard: React.FC<{ project: Project; onPlayVideo: (src: string) => void }> = ({ project, onPlayVideo }) => {
  return (
    <div className="card card-one h-100 shadow-sm">
      <div className="card-media">
        <img src={project.image} alt={project.title} className="card-img-top" />

        {project.video && (  //si hay video has esto
          <>
            <span className="demo-badge">▶ Demo en video</span>
            <button
              className="play-btn"
              onClick={() => onPlayVideo(project.video!)}
              aria-label={`Ver demo de ${project.title}`}
            >
              <FaPlay />
            </button>
          </>
        )}
      </div>

      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>

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
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm btn-icon">
                  <FontAwesomeIcon icon={faGithub} size="2x" /> código
                </a>
              )}
              {project.video && (
                <button className="btn btn-primary btn-sm btn-icon" onClick={() => onPlayVideo(project.video!)}>
                  <FaPlay size={11} /> ver demo
                </button>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm btn-icon">
                  ver proyecto
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

/* ---------- Sección principal ---------- */
const Projects: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const projects: Project[] = [
    {
      image: "images/GUYP-arreglado.png",
      title: "GUYP: App para diagnóstico de plantas",
      description: "Aplicación que usa visión por computadora para diagnosticar enfermedades en hojas de plantas a partir de imágenes. Genera respuestas para el usuario mediante un modelo de lenguaje.",
      technologies: [
        { Icon: SiFlutter, color: "#61DBFB", name: "Flutter" },
        { Icon: SiFastapi, color: "#68A063", name: "Fast Api" },
        { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
        { Icon: FaNetworkWired, color: "#000000", name: "Deep learning" },
        { Icon: FaRobot, color: "#7dc51eff", name: "API ia" }
      ],
      github: "https://github.com/laura2444/guyp_fastApiBack.git",
      video: "videos/GUYP.mp4",   // 
    },
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
      demo: "https://angular-rouge-nine.vercel.app/home"
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
                      <ProjectCard project={project} onPlayVideo={setActiveVideo} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="carousel-item">
                <div className="row g-4">
                  {projects.slice(3, 5).map((project, idx) => (
                    <div key={idx} className="col-lg-4">
                      <ProjectCard project={project} onPlayVideo={setActiveVideo} />
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
                      <ProjectCard project={project} onPlayVideo={setActiveVideo} />
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

      {activeVideo && (
        <VideoModal src={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
};

export default Projects;