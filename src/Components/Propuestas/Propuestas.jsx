import Carousel from "../Carousel/Carousel";
import style from "./Propuestas.module.css";
import { NavLink } from "react-router-dom";

function Propuestas() {
  return (
    <div className={style.mainContainer} id="propuestas">
      <h2>Nuestras Propuestas</h2>
      <Carousel />
      <NavLink to="/propuestas" className={style.buttonAll}>
        <button>VER TODAS</button>
      </NavLink>
    </div>
  );
}

export default Propuestas;
