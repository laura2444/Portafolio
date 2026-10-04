import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./skills.css";
import powerbi from "../../assets/icons/powerbi.webp";
import powerapps from "../../assets/icons/powerapps.webp";
import powerAutomate from "../../assets/icons/powerautomate.svg";



import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  //FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  //FaFigma,
  FaPython,
  //FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  //SiPostgresql,
  SiPostman,
  SiAndroidstudio,
  //SiGooglecolab, 
  SiFlutter,
  SiIonic,

} from "react-icons/si";

import { 
  FaUsers,           // Trabajo en equipo
  FaComments,        // Comunicación
  FaRegClock,        // Gestión del tiempo
  FaBrain,           // Pensamiento crítico
  FaDatabase
} from "react-icons/fa";

import { SiAngular } from "react-icons/si";
import FastAPI from "../../assets/icons/FastAPI.svg";
import { VscVscode } from "react-icons/vsc";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-spacing">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 tituloabout">
          Habilidades Técnicas y Blandas
        </h2>

        <div className="row g-4">
          {/* Frontend */}
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <h5 className="card-header">Frontend</h5>
              <div className="card-body">
                <div className="row row-cols-3 g-3">
                  <div className="col skill-item">
                    <FaReact size={40} color="#61DBFB" />
                    <small>React</small>
                  </div>
                  <div className="col skill-item">
                    <SiAngular size={40} color="#DD0031" />
                    <small>Angular</small>
                  </div>
                  <div className="col skill-item">
                    <FaJsSquare size={40} color="#F7DF1E" />
                    <small>JavaScript</small>
                  </div>
                  <div className="col skill-item">
                    <SiTypescript size={40} color="#3178C6" />
                    <small>TypeScript</small>
                  </div>
                  <div className="col skill-item">
                    <FaHtml5 size={40} color="#E34C26" />
                    <small>HTML5</small>
                  </div>
                  <div className="col skill-item">
                    <FaCss3Alt size={40} color="#2667C0" />
                    <small>CSS3</small>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <h5 className="card-header">Backend</h5>
              <div className="card-body">
                <div className="row row-cols-3 g-3">
                  <div className="col skill-item">
                    <FaNodeJs size={40} color="#68A063" />
                    <small>Node.js</small>
                  </div>
                  <div className="col skill-item">
                    <img
                      src={FastAPI}
                      alt="FastAPI"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain",
                      }}
                    />
                    <small>FastAPI</small>
                  </div>
                  
                  <div className="col skill-item">
                    <FaDatabase size={40} color="#afc6e4"/>
                    <small>SQL</small>
                  </div>
                  <div className="col skill-item">
                    <SiMongodb size={40} color="#47A248" />
                    <small>MongoDB</small>
                  </div>
                  <div className="col skill-item">
                    <FaPython size={40} color="#3776AB" />
                    <small>Python</small>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <h5 className="card-header">Herramientas</h5>
              <div className="card-body">
                <div className="row row-cols-3 g-3">
                  <div className="col skill-item">
                    <FaGitAlt size={40} color="#F05032" />
                    <small>Git</small>
                  </div>
                  
                  <div className="col skill-item">
                    <VscVscode size={40} color="#007ACC" />
                    <small>VS Code</small>
                  </div>
                  
                  <div className="col skill-item">
                    <SiAndroidstudio size={40} color="#3DDC84" />
                    <small>Android Studio</small>
                  </div>
                  <div className="col skill-item">
                    <SiPostman size={40} color="#F24E1E" />
                    <small>Postman</small>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Testing & QA */}
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <h5 className="card-header">Desarrollo móvil</h5>
              <div className="card-body">
                <div className="row row-cols-3 g-3">
                  <div className="col skill-item">
                    <SiIonic size={40} color="#388E3C" />
                    <small>Ionic</small>
                  </div>
                  <div className="col skill-item">
                    <SiFlutter size={40} color="#02569B" />
                    <small>Flutter</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          {/* Backend */}
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <h5 className="card-header">Microsoft power platform</h5>
              <div className="card-body">
                <div className="row row-cols-3 g-3">
                  <div className="col skill-item">
                    <img
                      src={powerbi}
                      alt="Power BI"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain",
                      }}
                    />
                    <small>Power BI</small>
                  </div>

                  <div className="col skill-item">
                    <img
                      src={powerapps}
                      alt="Power Apps"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain",
                      }}
                    />
                    <small>Power Apps</small>
                  </div>

                  <div className="col skill-item">
                    <img
                      src={powerAutomate}
                      alt="Power Automate"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain",
                      }}
                    />
                    <small>Power Automate</small>
                  </div>



                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 text-center">
              <h5 className="card-header">Competencias blandas</h5>
              <div className="card-body">
                <div className="row row-cols-3 g-3">
                  <div className="col skill-item">
                    <FaUsers size={40} color="#007ACC" />
                    <small>Trabajo en equipo</small>
                  </div>
                  <div className="col skill-item">
                    <FaBrain size={40} color="#F9AB00" />
                    <small>Pensamiento critico</small>
                  </div>

                  <div className="col skill-item">
                    <FaComments size={40} color="#43B02A" />
                    <small>Comunicación</small>
                  </div>

                  <div className="col skill-item">
                    <FaRegClock size={40} color="#7952B3" />
                    <small>Gestión del tiempo</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
