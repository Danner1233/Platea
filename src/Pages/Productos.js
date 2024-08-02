import React from 'react';
import NavBarHome from '../Components/Layout/NavBarHome';
import Footer from '../Components/Layout/Footer';
import '../index.css';

const Productos = () => {
    return (
        <div className="body-productos">
        <NavBarHome/>
      <div className="container-productos">
        <div className="products-productos">
          <div className="product-productos">
            <img
              className="img-productos"
              src="../balon.jpeg"
              alt="Balón Golty"
            />
            <div className="details-productos">
              <span className="span-productos">
                Balon Golty - Mega Efecto Curvado
              </span>
              <span className="span-productos">Golty</span>
              <div className="category-wrapper-productos">
                <span className="category-productos">Futbol</span>
              </div>
            </div>
            <span className="price-productos">$1.000.000</span>
          </div>
          <div className="product-productos">
            <img
              className="img-productos"
              src="../balon.jpeg"
              alt="Paracetamol"
            />
            <div className="details-productos">
              <span className="span-productos">
                Tabletas de Paracetamol - Volare
              </span>
              <span className="span-productos">Paracetamol</span>
              <div className="category-wrapper-productos">
                <span className="category-productos">Drogas</span>
              </div>
            </div>
            <span className="price-productos">$50.000</span>
          </div>
          <div className="product-productos">
            <img className="img-productos" src="../balon.jpeg" />
            <div className="details-productos">
              <span className="span-productos">
                Galletas Oreo Mini - Vienen muchas
              </span>
              <span className="span-productos">Oreo</span>
              <div className="category-wrapper-productos">
                <span className="category-productos">Dolores de barriga</span>
              </div>
            </div>
            <span className="price-productos">$5.000</span>
          </div>
          <div className="product-productos">
            <img
              className="img-productos"
              src="../balon.jpeg"
            />
            <div className="details-productos">
              <span className="span-productos">chocolate - una unidad</span>
              <span className="span-productos">sniker</span>
              <div className="category-wrapper-productos">
                <span className="category-productos">Dolores de barriga</span>
              </div>
            </div>
            <span className="price-productos">$5.000</span>
          </div>
          <div className="product-productos">
            <img className="img-productos" src="../balon.jpeg" />
            <div className="details-productos">
              <span className="span-productos">juguete de bebe- solo uno</span>
              <span className="span-productos">baby.inc</span>
              <div className="category-wrapper-productos">
                <span className="category-productos">para bebes</span>
              </div>
            </div>
            <span className="price-productos">$8.000</span>
          </div>
        </div>
        <div className="filters-productos">
          <h3 className="h3-productos">Filtros</h3>
          <h4 className="h4-productos">Creador</h4>
          <input
            type="text"
            placeholder="Ingresa el nombre del creador"
            className="creator-input-productos"
          />
          <h4 className="h4-productos">Categoría</h4>
          <label className="label-productos">
            <input className="input-productos" type="radio" name="categoria" />{" "}
            Relevancia
          </label>
          <label className="label-productos">
            <input className="input-productos" type="radio" name="categoria" />{" "}
            Los favoritos
          </label>
          <label className="label-productos">
            <input className="input-productos" type="radio" name="categoria" />{" "}
            Lo más vendido
          </label>
          <label className="label-productos">
            <input className="input-productos" type="radio" name="categoria" />{" "}
            Salido recientemente
          </label>
          <label className="label-productos">
            <input className="input-productos" type="radio" name="categoria" />{" "}
            Precio min a max
          </label>
          <label className="label-productos">
            <input className="input-productos" type="radio" name="categoria" />{" "}
            Precio max a min
          </label>
          <h4 className="h4-productos">Descuento</h4>
          <label className="label-productos">
            <input
              className="input-productos"
              type="radio"
              name="descuento"
              defaultValue={10}
            />{" "}
            10%
          </label>
          <label className="label-productos">
            <input
              className="input-productos"
              type="radio"
              name="descuento"
              defaultValue={20}
            />{" "}
            20%
          </label>
          <label className="label-productos">
            <input
              className="input-productos"
              type="radio"
              name="descuento"
              defaultValue={30}
            />{" "}
            30%
          </label>
          <label className="label-productos">
            <input
              className="input-productos"
              type="radio"
              name="descuento"
              defaultValue="custom"
              id="custom-discount"
            />{" "}
            Tu descuento
          </label>
          <div className="custom-discount-productos">
            <input
              type="number"
              placeholder="Ingresa tu descuento (%)"
              id="discount-input"
              className="input-productos"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>


    );
};

export default Productos;