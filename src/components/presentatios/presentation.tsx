import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../../App.css";
import "./presentation.css"

const Presentation: React.FC = () => {
  const handleDownloadCV = () => {
    // Ruta del PDF en tu carpeta public o assets
    const pdfPath = "public/documents/curriculum ATS (5).pdf";
    
    // Crear un elemento <a> temporal
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Laura_Castaño_CV.pdf"; // Nombre del archivo descargado
    
    // Agregar al DOM, hacer click y remover
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container-fluid p-0 full-width-section ">
      {/* Hero Section */}
      <section id="hero" className="heroclass" style={{ position: 'relative' }}>
          <div className="spotlight"></div>
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>

        <div className="container">
          <div className="row align-items-center" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
            {/* Texto */}
            <div className="col-lg-6 col-md-7 order-2 order-md-1 text-md-start text-center ">
              <h1 className="display-4 fw-bold mb-1">
                <span className="hero-intro">Hola, soy</span> <span className="hero-tittle">Laura Castaño</span>
              </h1>

              <p className="mb-5">
                <span className="hero-subtittle">Estudiante Ingeniera de software</span>
              </p>
              <p className="fs-5 mb-5 parrafo-presentation">
                Apasionada por aprender siempre nuevas cosas y usar la tecnologia para resolver problemas
              </p>
              <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-md-start">
                <a href="#about" className="btn btn boton btn-lg">Contáctame</a>
                <button 
                  onClick={handleDownloadCV} 
                  className="btn btn-outline-light btn-lg"
                  style={{ cursor: 'pointer' }}
                >
                  Descargar CV
                </button>
              </div>
            </div>
            
            {/* Imagen */}
            <div className="col-lg-6 col-md-5 d-flex justify-content-end justify-content-md-end justify-content-center mb-4 mb-md-0 order-1 order-md-2">
              <div className="profile-image-container">
                <img
                  src="/images/pixel2.png"
                  alt="Profile Pixelado"
                  className="profile-image pixelated"
                />
                <img
                  src="images/foto1 (4).jpg"
                  alt="Profile"
                  className="profile-image normal"
                />
                
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;