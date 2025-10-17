import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./educacion.css";

const Educacion: React.FC = () => {
  const [modalImage, setModalImage] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleImageClick = (imageSrc: string, title: string) => {
    setModalImage(imageSrc);
    setModalTitle(title);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Restaurar scroll
  };

  return (
    <div className="section-spacing">
      <section id="educacion">
        <h2 className="text-center fw-bold mb-5 tituloabout">Educación</h2>
        <div className="row g-4 justify-content-center">

          <div className="col-md-6 col-lg-4">
            <div 
              className="card text-bg-dark custom-card"
              onClick={() => handleImageClick("images/universidad_sanBuenaventura.jpg", "Estudiante de ingeniería en Sistemas")}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="images\universidad_sanBuenaventura.jpg"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content" style={{ pointerEvents: 'none' }}>
                <h5 className="card-title">Estudiante de ingeniería en Sistemas</h5>
                <p className="card-text">
                  Universidad San buenaventura cali (2022 - 2026)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div 
              className="card text-bg-dark custom-card"
              onClick={() => handleImageClick("images/fortinet.png", "Fundamentos de ciberseguridad")}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="images\fortinet.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content" style={{ pointerEvents: 'none' }}>
                <h5 className="card-title">Fundamentos de ciberseguridad</h5>
                <p className="card-text">
                  Fortinet training institute (2025 - 2027)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div 
              className="card text-bg-dark custom-card"
              onClick={() => handleImageClick("images/cisco_redes.png", "Curso conceptos básicos de redes")}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="images\cisco_redes.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content" style={{ pointerEvents: 'none' }}>
                <h5 className="card-title">Curso conceptos básicos de redes</h5>
                <p className="card-text">
                  Cisco Networking academy (2025)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div 
              className="card text-bg-dark custom-card"
              onClick={() => handleImageClick("images/cisco_ciberseguridad.png", "Curso introducción a la ciberseguridad")}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="images\cisco_ciberseguridad.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content" style={{ pointerEvents: 'none' }}>
                <h5 className="card-title">Curso introducción a la ciberseguridad</h5>
                <p className="card-text">
                  Cisco Networking academy (2025)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div 
              className="card text-bg-dark custom-card"
              onClick={() => handleImageClick("images/springboot.png", "Curso de Java Spring")}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="images\springboot.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content" style={{ pointerEvents: 'none' }}>
                <h5 className="card-title">Curso de Java Spring</h5>
                <p className="card-text">
                  Platzi (2024)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div 
              className="card text-bg-dark custom-card"
              onClick={() => handleImageClick("images/JavaScript.png", "Curso fundamentos de Javascrip")}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="images\JavaScript.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content" style={{ pointerEvents: 'none' }}>
                <h5 className="card-title">Curso fundamentos de Javascrip</h5>
                <p className="card-text">
                  Platzi (2024)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div 
              className="card text-bg-dark custom-card"
              onClick={() => handleImageClick("images/platzi_java.png", "Curso introductorio Java")}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="images\platzi_java.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content" style={{ pointerEvents: 'none' }}>
                <h5 className="card-title">Curso introductorio Java</h5>
                <p className="card-text">
                  Platzi (2024)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div 
              className="card text-bg-dark custom-card"
              onClick={() => handleImageClick("images/mintic-Photoroom.png", "Curso ciencia de datos 50 horas")}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="images\mintic-Photoroom.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content" style={{ pointerEvents: 'none' }}>
                <h5 className="card-title">Curso ciencia de datos 50 horas</h5>
                <p className="card-text">
                  MinTic y la universidad Distrital Francisco José de Caldas (2024)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div 
              className="card text-bg-dark custom-card"
              onClick={() => handleImageClick("images/python-Photoroom.png", "Curso corto de 0 a Python")}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="images\python-Photoroom.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content" style={{ pointerEvents: 'none' }}>
                <h5 className="card-title">Curso corto de 0 a Python</h5>
                <p className="card-text">
                  Universidad San buenaventura cali (2022)
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Modal personalizado para mostrar imagen grande */}
      {showModal && (
        <div className="image-modal-overlay" onClick={handleCloseModal}>
          <div className="image-modal-container">
            <button className="image-modal-close" onClick={handleCloseModal}>
              ✕
            </button>
            <h5 className="image-modal-title">{modalTitle}</h5>
            <img 
              src={modalImage} 
              alt={modalTitle}
              className="image-modal-img"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Educacion;