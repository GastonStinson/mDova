import React from "react";
import style from "./CardNovedades.module.css";
import { NavLink } from "react-router-dom";

const CardNovedades = ({ imagen, titulo, cuerpo, url }) => {
  return (
    <div>
      <NavLink to={url} target="_blank" className={style.cardNovedades}>
        <div className={style.imageContainer}>
          <img src={imagen} alt="novedades" />
        </div>
        <h4>{titulo}</h4>
      </NavLink>
    </div>
  );
};

export default CardNovedades;
