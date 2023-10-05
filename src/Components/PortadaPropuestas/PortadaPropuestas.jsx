import { Link } from "react-router-dom";
import style from "./PortadaPropuestas.module.css";

function PortadaPropuestas() {
  return (
    <div className={style.mainContainer}>
      <div className={style.internContainer}>
        <h2>¡Conocé más sobre el equipo de Mauricio!</h2>
        <Link to="https://forms.gle/Ra6yNE6WJ34anUXF7" target="_blank">
          <button>PARTICIPÁ</button>
        </Link>
      </div>
    </div>
  );
}

export default PortadaPropuestas;
