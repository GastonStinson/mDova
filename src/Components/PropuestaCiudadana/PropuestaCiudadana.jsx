import React from "react";
import { NavLink } from "react-router-dom";
import style from "PropuestaCiudadana.module.css";

const PropuestaCiudadana = () => {
  return (
    <div className={style.PropuestaCiudadana}>
      <div>
        <h3>PROPUESTA CIUDADANA</h3>
        <h6>Tenés una propuesta para tu barrio o sector?</h6>
        <p>Acércanosla haciendo clic en el siguiente botón</p>
      </div>
      <NavLink>
        <button>PARTICIPÁ</button>
      </NavLink>
    </div>
  );
};

export default PropuestaCiudadana;
