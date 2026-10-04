import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./experience.css";

import powerbi from "../../assets/icons/powerbi.webp";
import powerapps from "../../assets/icons/powerapps.webp";
import powerAutomate from "../../assets/icons/powerautomate.svg";

import { FaDatabase } from "react-icons/fa";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-spacing">
      <div className="container">

        <h2 className="text-center fw-bold mb-5 experience-title">
          Experiencia
        </h2>

        <div className="row g-4 justify-content-center">

          {/* Experiencia 1 */}
          <div className="col-md-5 col-lg-4">
            <div className="experience-card">

              <div className="experience-header">
                <h4>Banco W</h4>
                <span>Nov 2025 — May 2026</span>
              </div>

              <h5>Aprendiz Universitario · Desarrollo TI</h5>

              <p className="experience-location">
                Cali, Colombia
              </p>

              <p className="experience-description">
                Desarrollo de soluciones, automatización de procesos y
                pruebas funcionales para apoyar procesos tecnológicos
                dentro de la organización.
              </p>

              <div className="experience-technologies">

                <span className="technology-tag">
                  <img src={powerapps} alt="Power Apps" />
                  Power Apps
                </span>

                <span className="technology-tag">
                  <img src={powerbi} alt="Power BI" />
                  Power BI
                </span>

                <span className="technology-tag">
                  <img src={powerAutomate} alt="Power Automate" />
                  Power Automate
                </span>

                <span className="technology-tag">
                  <FaDatabase />
                  SQL Developer
                </span>

              </div>

            </div>
          </div>

          {/* Experiencia 2 - futura */}
          {/* <div className="col-md-5 col-lg-4">
            <div className="experience-card">
              ...
            </div>
          </div> */}

          {/* Experiencia 3 - futura */}
          {/* <div className="col-md-5 col-lg-4">
            <div className="experience-card">
              ...
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default Experience;