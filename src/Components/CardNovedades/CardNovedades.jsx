import React from "react";
import style from "./CardNovedades.module.css";

const CardNovedades = ({ imagen, titulo, cuerpo }) => {
  return (
    <div className={style.mainContainer}>
      <img src={imagen} alt="novedades" />
      <h4>{titulo}</h4>
      <p>{cuerpo}</p>
    </div>
  );
};

export default CardNovedades;
