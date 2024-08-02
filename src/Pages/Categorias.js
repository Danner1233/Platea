import React from 'react';
import NavBarHome from '../Components/Layout/NavBarHome';
import '../index.css';
import Footer from '../Components/Layout/Footer';
import { Link } from 'react-router-dom';

const buttons = document.querySelectorAll('.boton');
const colors = ['red', 'green', 'aquamarine', 'yellow','orange'];

buttons.forEach((button, index) => {
    button.style.backgroundColor = colors[index % colors.length];
});

const Categorias = () => {
    return (
        <div className='body-Category'>
            <NavBarHome />

            <div className="content-body">
                <div className="content">
                    <div className="categoria-titulo">
                        <p>Peliculas</p>
                        <hr className="custom-line" />
                    </div>
                    <div className="categoria-cubiculo">
                        <div className="boton"><Link to="/tiendas"><input type="button" defaultValue="peliflix" /></Link></div>
                        <div className="boton"><Link to="/tiendas"><input type="button" defaultValue="pelis" /></Link></div>
                        <div className="boton"><Link to="/tiendas"><input type="button" defaultValue="cueva" /></Link></div>
                        <div className="boton"><Link to="/tiendas"><input type="button" defaultValue="animeflv" /></Link></div>
                    </div>
                </div>
                <div className="content">
                    <div className="categoria-titulo">
                        <p>Deporte</p>
                        <hr className="custom-line" />
                    </div>
                    <div className="categoria-cubiculo">
                        <div className="boton"><Link to="/tarjeta"><input type="button" defaultValue="tennis" /></Link></div>
                        <div className="boton"><Link to="/tarjeta"><input type="button" defaultValue="bascket" /></Link></div>
                        <div className="boton"><Link to="/tarjeta"><input type="button" defaultValue="golf" /></Link></div>
                        <div className="boton"><Link to="/tarjeta"><input type="button" defaultValue="sports" /></Link></div>
                    </div>
                </div>
                <div className="content">
                    <div className="categoria-titulo">
                        <p>Juegos</p>
                        <hr className="custom-line" />
                    </div>
                    <div className="categoria-cubiculo">
                        <div className="boton"><Link to="/tarjeta"><input type="button" defaultValue="valorant" /></Link></div>
                        <div className="boton"><Link to="/tarjeta"><input type="button" defaultValue="brawlstar" /></Link></div>
                        <div className="boton"><Link to="/tarjeta"><input type="button" defaultValue="mario" /></Link></div>
                        <div className="boton"><Link to="/tarjeta"><input type="button" defaultValue="clash " /></Link></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default Categorias;