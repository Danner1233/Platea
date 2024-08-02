import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="body">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1" />
          <div className="wave" id="wave2" />
          <div className="wave" id="wave3" />
          <div className="wave" id="wave4" />
        </div>
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="#">
              Inicio
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Acerca de
            </a>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/tiendas">
              Tiendas
            </Link>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Contacto
            </a>
          </li>
        </ul>
        <p>©2024 Plattea | Derechos Reservados</p>
      </footer>
    </div>
  );
};

export default Footer;
