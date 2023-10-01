import Carousel from "../Carousel/Carousel";
import style from "./Propuestas.module.css";
import { NavLink } from "react-router-dom";

function Propuestas() {
  return (
    <div className={style.mainContainer} id="propuestas">
      <div className={style.centerContainer}>
        <h2>Nuestras Propuestas</h2>
        <p>Somos un equipo de profesionales apasionados...</p>
        <Carousel />
        <NavLink to="/propuestas">
          <button>Ver todas</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Propuestas;
