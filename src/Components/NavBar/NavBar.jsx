import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import imagenLogo from "./../../assets/logo.png";
import RedesSociales from "../RedesSociales/RedesSociales";

function NavBar() {
  return (
    <div className={style.mainContainer}>
      <NavLink to="/" className={style.contenedorImagen}>
        <img src={imagenLogo} alt="logo" />
      </NavLink>

      <div className={style.navContainer}>
        <div>
          <ul className={style.list}>
            <li className={style.navLink}>
              <a href="/#biografia">Biografía</a>
            </li>
            <li className={style.navLink}>
              <a href="#propuestas">Propuestas</a>
            </li>
            <li className={style.navLink}>
              <a href="#vecinos">Vecinos</a>
            </li>
            <li className={style.navLink}>
              <a href="#novedades">Novedades</a>
            </li>
          </ul>
        </div>
        <RedesSociales />
      </div>
    </div>
  );
}

export default NavBar;
