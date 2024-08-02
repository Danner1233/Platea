import React from 'react';
import NavBar from '../Components/Layout/NavBar';
import '../index.css';
import Footer from '../Components/Layout/Footer';

const buttons = document.querySelectorAll('.boton');
const colors = ['red', 'green', 'aquamarine', 'yellow','orange'];

buttons.forEach((button, index) => {
    button.style.backgroundColor = colors[index % colors.length];
});

const Categoriasuser = () => {
    return (
        <div className='body-Category'>
            <NavBar />

            <div className="content-body">
                <div className="content">
                    <div className="categoria-titulo">
                        <p>Peliculas</p>
                        <hr className="custom-line" />
                    </div>
                    <div className="categoria-cubiculo">
                        <div className="boton"><input type="button" defaultValue="peliflix" /></div>
                        <div className="boton"><input type="button" defaultValue="pelis" /></div>
                        <div className="boton"><input type="button" defaultValue="cueva" /></div>
                        <div className="boton"><input type="button" defaultValue="animeflv" /></div>
                    </div>
                </div>
                <div className="content">
                    <div className="categoria-titulo">
                        <p>Deporte</p>
                        <hr className="custom-line" />
                    </div>
                    <div className="categoria-cubiculo">
                        <div className="boton"><input type="button" defaultValue="tennis" /></div>
                        <div className="boton"><input type="button" defaultValue="bascket" /></div>
                        <div className="boton"><input type="button" defaultValue="golf" /></div>
                        <div className="boton"><input type="button" defaultValue="sports" /></div>
                    </div>
                </div>
                <div className="content">
                    <div className="categoria-titulo">
                        <p>Juegos</p>
                        <hr className="custom-line" />
                    </div>
                    <div className="categoria-cubiculo">
                        <div className="boton"><input type="button" defaultValue="valorant" /></div>
                        <div className="boton"><input type="button" defaultValue="brawlstar" /></div>
                        <div className="boton"><input type="button" defaultValue="mario" /></div>
                        <div className="boton"><input type="button" defaultValue="clash " /></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default Categoriasuser;