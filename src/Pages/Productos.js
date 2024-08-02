import React from 'react';
import NavbarHome from '../Components/Layout/NavBarHome';
import Footer from '../Components/Layout/Footer';
import '../index.css';

const Productos = () => {
    return (
        <div className='body-Products'>
            <NavbarHome/>
            <div className="container">
                <div className="products">
                    <div className="product">
                        <img src="../img/balon.jpeg" alt="Balón Golty" />
                        <div className="details">
                            <span>Balon Golty - Mega Efecto Curvado</span>
                            <span>Golty</span>
                            <span className="category">Futbol</span>
                        </div>
                        <span className="price">$1.000.000</span>
                    </div>
                    <div className="product">
                        <img src="../img/paracetamol.jpeg" alt="Paracetamol" />
                        <div className="details">
                            <span>Tabletas de Paracetamol - Volare</span>
                            <span>Paracetamol</span>
                            <span className="category">Las Drogas</span>
                        </div>
                        <span className="price">$50.000</span>
                    </div>
                    <div className="product">
                        <img src="../img/oreo.jpeg" alt="Galletas Oreo" />
                        <div className="details">
                            <span>Galletas Oreo Mini - Vienen muchas</span>
                            <span>Oreo</span>
                            <span className="category">Dolores de barriga</span>
                        </div>
                        <span className="price">$5.000</span>
                    </div>

                </div>
                <div className="filters">
                    <h3>Filtros</h3>
                    <h4>Precio</h4>
                    <label>
                        <input type="radio" name="precio" /> Cualquier Precio
                    </label>
                    <input type="number" placeholder="MAX" className="price-input" />
                    <input type="number" placeholder="MIN" className="price-input" />
                    <h4>Categoría</h4>
                    <label>
                        <input type="radio" name="categoria" /> Relevancia
                    </label>
                    <label>
                        <input type="radio" name="categoria" /> Los favoritos
                    </label>
                    <label>
                        <input type="radio" name="categoria" /> Lo más vendido
                    </label>
                    <label>
                        <input type="radio" name="categoria" /> Salido recientemente
                    </label>
                    <label>
                        <input type="radio" name="categoria" /> Precio min a max
                    </label>
                    <label>
                        <input type="radio" name="categoria" /> Precio max a min
                    </label>
                    <h4>Descuento</h4>
                    <label>
                        <input type="radio" name="descuento" defaultValue={10} /> 10%
                    </label>
                    <label>
                        <input type="radio" name="descuento" defaultValue={20} /> 20%
                    </label>
                    <label>
                        <input type="radio" name="descuento" defaultValue={30} /> 30%
                    </label>
                    <label>
                        <input type="radio" name="descuento" defaultValue="custom" id="custom-discount" /> Tu descuento
                    </label>
                    <div className="custom-discount">
                        <input type="number" placeholder="Ingresa tu descuento (%)" id="discount-input" />
                    </div>
                </div>
            </div>

            <Footer/>

        </div>


    );
};

export default Productos;