import React from "react";
import '../index.css'

const Tarjeta = () => {
  return (
    <div  className="body-tarjeta">
      <div className="form-container-tarjeta">
        <form>
          <h2 className="h2-tarjeta">Tarjeta</h2>
          <div className="form-group-tarjeta horizontal-tarjeta">
            <input
              type="text"
              id="nombres"
              name="nombres"
              className="input-tarjeta"
              placeholder="Nombres"
              required
            />
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              className="input-tarjeta"
              placeholder="Apellidos"
              required
            />
          </div>
          <div className="form-group-tarjeta">
            <input
              type="text"
              id="numero-tarjeta"
              name="numero-tarjeta"
              className="input-tarjeta"
              placeholder="Número de tarjeta"
              required
            />
          </div>
          <div className="form-group-tarjeta horizontal-tarjeta">
            <input
              type="text"
              id="fecha-exp"
              name="fecha-exp"
              className="input-tarjeta"
              placeholder="Fecha Exp."
              required
            />
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="input-tarjeta"
              placeholder="CVV"
              required
            />
          </div>
          <div className="form-group-tarjeta">
            <input
              type="text"
              id="numero-identificacion"
              name="numero-identificacion"
              className="input-tarjeta"
              placeholder="Número de identificación"
              required
            />
          </div>
          <div className="form-group-tarjeta centered-tarjeta">
            <button type="submit" className="button-tarjeta enviar-tarjeta">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tarjeta;
