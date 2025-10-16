import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./logros.css";

const Logros: React.FC = () => {
  return (
    <div className="section-spacing">
      <section id="logros">
        <h2 className="text-center fw-bold mb-5 tituloabout">Logros</h2>
        <div className="row g-4 justify-content-center">

          <div className="col-md-6 col-lg-4">
            <div className="card text-bg-dark custom-cards">
              <img
                src="src/assets/images/todosytodas.jpg"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content">
                <h5 className="card-title">Beca todos y todas a estudiar</h5>
                <p className="card-text">
Beca “Todos y Todas a Estudiar”, programa de la Alcaldía de cali en convenio con ICETEX y la Universidad de san buenaventura, con cobertura del 100% del valor de la carrera (vigente)                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card text-bg-dark custom-cards">
              <img
                src="src/assets/images/becaExcelencia.jpeg"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content">
                <h5 className="card-title">Beca excelencia academica</h5>
                <p className="card-text">
                  Universidad de san buenaventura
                </p>
              </div>
            </div>
          </div>

                    <div className="col-md-6 col-lg-4">
            <div className="card text-bg-dark custom-cards">
              <img
                src="src/assets/images/hackaton-Photoroom.png"
                className="card-img"
                alt="Educación"
              />
              <div className="card-img-overlay overlay-content">
                <h5 className="card-title">Hackathon universidad de san buenaventura</h5>
                <p className="card-text">
Hackathon universidad san buenaventura – Tercer lugar, febrero 2024                </p>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
};

export default Logros;
