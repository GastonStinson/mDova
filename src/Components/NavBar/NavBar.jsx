import style from "./NavBar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import imagenLogo from "./../../assets/logo.png";
import RedesSociales from "../RedesSociales/RedesSociales";

function NavBar() {
  const location = useLocation();

  return (
    <div className={style.mainContainer}>
      <NavLink to="/" className={style.contenedorImagen}>
        <img src={imagenLogo} alt="logo" />
      </NavLink>

      <div className={style.navContainer}>
        {location.pathname === "/" ? (
          <div>
            <ul className={style.list}>
              <li className={style.navLink}>
                <a href="#biografia">Biografía</a>
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
        ) : (
          <ul className={style.list}>
            <li className={style.navLink}>
              <a href="/">Home</a>
            </li>
          </ul>
        )}
        <RedesSociales />
      </div>
    </div>
  );
}

export default NavBar;
