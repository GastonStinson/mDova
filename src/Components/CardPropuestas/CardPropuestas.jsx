import style from "./CardPropuestas.module.css";
import { NavLink } from "react-router-dom";

function Card({ id, imagen, titulo }) {
  return (
    <div className={style.mainContainer}>
      <NavLink to={`/propuestas/${id}`}>
        <img src={imagen} alt="propuesta" />
        <div className={style.titleContainer}>
          <h4>{titulo}</h4>
        </div>
      </NavLink>
    </div>
  );
}

export default Card;
