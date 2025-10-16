import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>© {new Date().getFullYear()} Hecho con amor por Laura :3</p>
      </div>
    </footer>
  );
};

export default Footer;
