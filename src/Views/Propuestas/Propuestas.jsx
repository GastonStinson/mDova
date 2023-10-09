import { NavLink } from "react-router-dom";
import { arrayPropuestas } from "../../assets/JS/propuestas.js";
import CardPropuestas from "../../Components/CardPropuestas/CardPropuestas.jsx";
import separadorNavBar from "./../../assets/separadorNavBar.png";
import PortadaPropuestas from "./../../Components/PortadaPropuestas/PortadaPropuestas.jsx";
import style from "./Propuestas.module.css";
import Footer from "../../Components/Footer/Footer.jsx";

function Propuestas() {
  return (
    <div className={style.mainContainer}>
      <img src={separadorNavBar} alt="sepNavBar" />
      <PortadaPropuestas />
      <div className={style.propuestas}>
        <h2>Nuestras Propuestas</h2>
        <div className={style.cardContainer}>
          {arrayPropuestas?.map((propuesta, index) => (
            <NavLink to={`/propuestas/${propuesta.id}`}>
              <CardPropuestas
                key={index}
                id={propuesta.id}
                imagen={propuesta.imagen}
                titulo={propuesta.titulo}
                cuerpo={propuesta.cuerpo}
              />
            </NavLink>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Propuestas;
