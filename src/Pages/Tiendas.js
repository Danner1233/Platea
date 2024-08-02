import React from "react";
import NavbarHome from "../Components/Layout/NavBarHome";
import Footer from "../Components/Layout/Footer";
import { Link } from 'react-router-dom';

const Tiendas = () => {
  return (
    <div className="body-tienda">
      <NavbarHome />
      <div className="container">
        <Link to  =  "/tiendauser" className="card-link">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="../img/netflix-symbol-black.png" alt="Netflix Logo" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="/tiendauser">Leer mas</Link>
              </div>
            </div>
          </div>
        </Link>

        <Link to  =  "/tiendauser" className="card-link">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img className="img" src="./img/hbo.jpeg" alt="Netflix Logo" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to = "/tiendauser">Leer mas</Link>
              </div>
            </div>
          </div>
        </Link>

        <Link to = "/tiendauser" className="card-link">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="../img/Prime.jpeg" alt="Netflix Logo" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to = "/tiendauser">Leer mas</Link>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="container">
        <Link to = "/tiendauser" className="card-link">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="../img/Prime.jpeg" alt="Netflix Logo" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to = "/tiendauser">Leer mas</Link>
              </div>
            </div>
          </div>
        </Link>

        <Link to = "/tiendauser" className="card-link">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img className="img" src="../img/netflix-symbol-black.png" alt="Netflix Logo" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to = "/tiendauser">Leer mas</Link>
              </div>
            </div>
          </div>
        </Link>

        <Link to = "/tiendauser" className="card-link">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="../img/hbo.jpeg" alt="Netflix Logo" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to = "/tiendauser">Leer mas</Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Tiendas;
