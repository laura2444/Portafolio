import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./logros.css";

const Logros: React.FC = () => {
  const [modalImage, setModalImage] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleImageClick = (imageSrc: string, title: string) => {
    setModalImage(imageSrc);
    setModalTitle(title);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="section-spacing">
      <section id="logros">
        <h2 className="text-center fw-bold mb-5 tituloabout">Logros</h2>
        <div className="row g-4 justify-content-center">

          <div className="col-md-6 col-lg-4">
            <div 
              className="card text-bg-dark custom-cards"
              onClick={() => handleImageClick("images/todosytodas.jpg", "Beca todos y todas a estudiar")}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="images/todosytodas.jpg"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content" style={{ pointerEvents: 'none' }}>
                <h5 className="card-title">Beca todos y todas a estudiar</h5>
                <p className="card-text">
                  Beca "Todos y Todas a Estudiar", programa de la Alcaldía de cali en convenio con ICETEX y la Universidad de san buenaventura, con cobertura del 100% del valor de la carrera (vigente)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div 
              className="card text-bg-dark custom-cards"
              onClick={() => handleImageClick("images/becaExcelencia.jpeg", "Beca excelencia academica")}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="images/becaExcelencia.jpeg"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content" style={{ pointerEvents: 'none' }}>
                <h5 className="card-title">Beca excelencia academica</h5>
                <p className="card-text">
                  Universidad de san buenaventura
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div 
              className="card text-bg-dark custom-cards"
              onClick={() => handleImageClick("images/hackaton-Photoroom.png", "Hackathon universidad de san buenaventura")}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="images/hackaton-Photoroom.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content" style={{ pointerEvents: 'none' }}>
                <h5 className="card-title">Hackathon universidad de san buenaventura</h5>
                <p className="card-text">
                  Hackathon universidad san buenaventura – Tercer lugar, febrero 2024
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

export default Logros;