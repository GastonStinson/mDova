import Carousel from "../Carousel/Carousel";
import style from "./Propuestas.module.css";
import { NavLink } from "react-router-dom";

function Propuestas() {
  return (
    <div className={style.mainContainer} id="propuestas">
      <h2>Nuestras Propuestas</h2>
      <p>
        Construyendo un futuro mejor: Nuestras propuestas para un cambio
        positivo.
      </p>
      <Carousel />
      <NavLink to="/propuestas" className={style.buttonAll}>
        <button>Ver todas</button>
      </NavLink>
    </div>
  );
}

export default Propuestas;
