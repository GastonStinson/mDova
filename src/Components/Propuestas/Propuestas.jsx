import Carousel from "../Carousel/Carousel";
import style from "./Propuestas.module.css";
import { NavLink } from "react-router-dom";

function Propuestas() {
  return (
    <div className={style.mainContainer} id="propuestas">
      <h2>Nuestras Propuestas</h2>
      <p>Somos un equipo de profesionales apasionados...</p>
      <div className={style.carouselContainer}>
        <Carousel />
      </div>
      <NavLink to="/propuestas">
        <button>Ver todas</button>
      </NavLink>
    </div>
  );
}

export default Propuestas;
