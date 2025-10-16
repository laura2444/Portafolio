import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./educacion.css";

const Educacion: React.FC = () => {
  return (
    <div className="section-spacing">
      <section id="educacion">
        <h2 className="text-center fw-bold mb-5 tituloabout">Educación</h2>
        <div className="row g-4 justify-content-center">

          <div className="col-md-6 col-lg-4">
            <div className="card text-bg-dark custom-card">
              <img
                src="src\assets\images\universidad_sanBuenaventura.jpg"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content">
                <h5 className="card-title">Estudiante de ingeniería en Sistemas</h5>
                <p className="card-text">
                  Universidad San buenaventura cali (2022 - 2026)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card text-bg-dark custom-card">
              <img
                src="src\assets\images\fortinet.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content">
                <h5 className="card-title">Fundamentos de ciberseguridad</h5>
                <p className="card-text">
                  Fortinet training institute (2025 - 2027)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card text-bg-dark custom-card">
              <img
                src="src\assets\images\cisco_redes.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content">
                <h5 className="card-title">Curso conceptos básicos de redes</h5>
                <p className="card-text">
                  Cisco Networking academy (2025)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card text-bg-dark custom-card">
              <img
                src="src\assets\images\cisco_ciberseguridad.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content">
                <h5 className="card-title">Curso introducción a la ciberseguridad</h5>
                <p className="card-text">
                  Cisco Networking academy (2025)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card text-bg-dark custom-card">
              <img
                src="src\assets\images\springboot.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content">
                <h5 className="card-title">Curso de Java Spring</h5>
                <p className="card-text">
                  Platzi (2024)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card text-bg-dark custom-card">
              <img
                src="src\assets\images\JavaScript.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content">
                <h5 className="card-title">Curso fundamentos de Javascrip</h5>
                <p className="card-text">
                  Platzi (2024)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card text-bg-dark custom-card">
              <img
                src="src\assets\images\platzi_java.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content">
                <h5 className="card-title">Curso introductorio Java</h5>
                <p className="card-text">
                  Platzi (2024)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card text-bg-dark custom-card">
              <img
                src="src\assets\images\mintic-Photoroom.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content">
                <h5 className="card-title">Curso ciencia de datos 50 horas</h5>
                <p className="card-text">
                  MinTic y la universidad Distrital Francisco José de Caldas (2024)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card text-bg-dark custom-card">
              <img
                src="src\assets\images\python-Photoroom.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content">
                <h5 className="card-title">Curso corto de 0 a Python</h5>
                <p className="card-text">
                  Universidad San buenaventura cali (2022)
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
};

export default Educacion;
