import { Link } from "react-router-dom";
import style from "./Portada.module.css";

function Portada() {
  return (
    <div className={style.mainContainer}>
      <div className={style.internContainer}>
        <h2>¡Conocé más sobre el equipo de Mauricio!</h2>
        <Link to="https://www.instagram.com/mauriciodova/" target="_blank">
          <button>VISITANOS</button>
        </Link>
      </div>
    </div>
  );
}

export default Portada;
