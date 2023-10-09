import React from "react";
import { NavLink } from "react-router-dom";
import style from "./PropuestaCiudadana.module.css";
import separadorFooter from "./../../assets/separadorFooter.png";
import imagenPropuesta from "./../../assets/20.png";

const PropuestaCiudadana = () => {
  return (
    <div className={style.contenedorColor} id="vecinos">
      <div className={style.propuestaCiudadana}>
        <h3>PROPUESTA CIUDADANA</h3>
        <img src={separadorFooter} alt="" />
        <div className={style.tarjetaPropuesta}>
          <div className={style.contenedorImagen}>
            <img src={imagenPropuesta} alt="propuesta" />
          </div>
          <div className={style.infoPropuesta}>
            <h6>¿Tenés una propuesta para tu barrio o sector?</h6>
            <p>Acércanosla haciendo clic en el siguiente botón</p>
            <NavLink
              to="https://forms.gle/Ra6yNE6WJ34anUXF7"
              className={style.botonPropuesta}
            >
              <button>PARTICIPÁ</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropuestaCiudadana;
