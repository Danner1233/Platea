import React from 'react';
import '../index.css';
import NavBar from '../Components/Layout/NavBar';


const Configuracion = () => {
    console.log('Main component is rendering');
    return (
        <div className='body-settings'>
                <NavBar />

            <div className="content-body-settings">
                <h1 id="titulo">Configuracion</h1>
                <h1 id="subtitulo">Cuenta</h1>
                <div className="cuenta-settings">
                    <p>Nombre de usuario: danner <span> Editar</span></p>
                    <p>Numero de celular: 2312323 <span>Editar</span></p>
                    <p>Correo electronico: danner@gmail.com <span>Editar</span></p>
                    <p>Contraseña:  ******  <span>Editar</span></p>
                </div>
                <div className="tema-settings">
                    <h1 id="subtitulo">Tema</h1>
                    <div className="checkbox-container-settings">
                    <label>
                        <input type="radio" name="descuento" /> Blaco
                    </label>
                    <label>
                        <input type="radio" name="descuento" /> Negro
                    </label>
                    <label>
                        <input type="radio" name="descuento" /> Por Defecto
                    </label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Configuracion;