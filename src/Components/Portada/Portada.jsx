import { Link } from "react-router-dom";
import style from "./Portada.module.css";

function Portada() {
  return (
    <div className={style.mainContainer}>
      <div className={style.internContainer}>
        <h2>Sumate al equipo de Mauricio</h2>
        <Link>
          <button type="button" className="btn btn-primary">
            PARTICIPÁ
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Portada;
