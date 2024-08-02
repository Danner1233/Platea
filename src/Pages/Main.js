import React from "react";
import NavBarHome from "../Components/Layout/NavBarHome";
import Footer from "../Components/Layout/Footer";
import Carrusel from "../Components/Carrusel";
import { Link } from 'react-router-dom';
import "../index.css";

const Main = () => {
  return (
    <div className="card">
      <NavBarHome />
      <Carrusel />
      <div className="container">
        <Link to  =  "/tienda" className="card-link">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="./netflix-symbol-black.png" alt="Netflix Logo" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="/tienda">Leer mas</Link>
              </div>
            </div>
          </div>
        </Link>

        <Link to  =  "/tienda" className="card-link">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img className="img" src="./netflix-symbol-black.png" alt="Netflix Logo" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to = "/tienda">Leer mas</Link>
              </div>
            </div>
          </div>
        </Link>

        <Link to = "/tienda" className="card-link">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="./netflix-symbol-black.png" alt="Netflix Logo" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to = "/tienda">Leer mas</Link>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="container">
        <Link to = "/tienda" className="card-link">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="./netflix-symbol-black.png" alt="Netflix Logo" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to = "/tienda">Leer mas</Link>
              </div>
            </div>
          </div>
        </Link>

        <Link to = "/tienda" className="card-link">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img className="img" src="./netflix-symbol-black.png" alt="Netflix Logo" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to = "/tienda">Leer mas</Link>
              </div>
            </div>
          </div>
        </Link>

        <Link to = "/tienda" className="card-link">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="./netflix-symbol-black.png" alt="Netflix Logo" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to = "/tienda">Leer mas</Link>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Main;