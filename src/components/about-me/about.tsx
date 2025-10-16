import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./about.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  return (
    <div className="about-full-width">
      <section id="about" className="section-spacing">
        <div className="container">
          {/* Título */}
          <div className="title-container">
            <h2 className="text-center fw-bold mb-5">
              <span className="titulosobre">Sobre mí</span>
            </h2>
            <div className="title-underline"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Texto normal sin tarjetas */}
              <p className="parrafo mb-5">
                Hola! Soy estudiante de octavo semestre de Ingeniería de Sistemas en la Universidad San Buenaventura Cali,
                 apasionada por el desarrollo de software y el aprendizaje constante. Cada interacción y experiencia es una
                  oportunidad para inspirarme y descubrir cosas nuevas, por eso me gusta explorar tecnologías web y móviles
                   como FastAPI, React, MongoDB, Flutter, Node.js y Angular. Me considero una persona tranquila, pero disfruto
                    asumir retos y probar cosas diferentes. Soy curiosa, comprometida y siempre dispuesta a aprender y aportar 
                      en cada proyecto.
              </p>

              {/* Frase */}
              <blockquote className="mb-5">
                “Siempre nos hemos definido por la capacidad de superar lo
                imposible… apuntar más alto, alcanzar las estrellas.”
                <footer className="blockquote-footer">Interstellar</footer>
              </blockquote>

              {/* Conectemos + Carrusel */}
              <div className="carrusel row mt-5 align-items-start">
                {/* Columna izquierda: Botones sociales */}
                <div className="col-md-4 mb-4 mb-md-0">
                  <h5 className="mb-3">¡Conectemos!</h5>
                  <div className="d-flex flex-column gap-3">
                    <a
                      href="https://github.com/laura2444"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn github-btn"
                    >
                      <FontAwesomeIcon icon={faGithub} /> <span>GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/laura-casta%C3%B1o-986051266/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn linkedin-btn"
                    >
                      <FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn</span>
                    </a>
                    <a
                      href="mailto:lauracast142@gmail.com"
                      className="social-btn email-btn"
                    >
                      <FontAwesomeIcon icon={faEnvelope} /> <span>Email</span>
                    </a>
                  </div>
                </div>

                {/* Columna derecha: Carrusel de imágenes */}
                <div className="col-md-8">
                  <div className="carousel-container">
                   <h4>Más sobre mi</h4>

                    <div
                      id="aboutCarousel"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {/* Imagen 1 */}
                        <div className="carousel-item active">
                          <div className="card text-bg-dark custom-card">
                            <img
                              src="images/me-programming.jpeg"
                              className="card-img"
                              alt="img1"
                            />
                            <div className="card-img-overlay overlay-content">
                              <h5 className="card-title">Programando</h5>
                              <p className="card-text">
                                Siempre dispuesta a indagar en nuevas tecnologias, asumiendo retos pero manteniendo la calma.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Imagen 2 */}
                        <div className="carousel-item">
                          <div className="card text-bg-dark custom-card">
                            <img
                              src="images\sushi.jpeg"
                              className="card-img"
                              alt="img2"
                            />
                            <div className="card-img-overlay overlay-content">
                              <h5 className="card-title">Cocina Asiática </h5>
                              <p className="card-text">
                                me gusta experimentar nuevos sabores, texturas, olores, y aprender sobre diferentes culturas culinarias.
                              </p>
                            </div>
                          </div>
                        </div>

                        
                         <div className="carousel-item">
                          <div className="card text-bg-dark custom-card">
                            <img
                              src="images/bambi.jpeg"
                              className="card-img"
                              alt="img2"
                            />
                            <div className="card-img-overlay overlay-content">
                              <h5 className="card-title">Bambi</h5>
                              <p className="card-text">
                                Una integrante más de mi familia, tengo un cariño muy especial a los perros
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="card text-bg-dark custom-card">
                            <img
                              src="images/movie.jpg"
                              className="card-img"
                              alt="img2"
                            />
                            <div className="card-img-overlay overlay-content">
                              <h5 className="card-title">Cine</h5>
                              <p className="card-text">
                                me gusta disfrutar diferentes géneros y la profundidad de las cintas cinematográficas, creo que cada obra me lleva a un mundo distinto con miles de posibilidades
                              </p>
                            </div>
                          </div>
                        </div>


                      </div>

                      

                      {/* Controles */}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#aboutCarousel"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Anterior</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#aboutCarousel"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Siguiente</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
