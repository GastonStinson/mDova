import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import imagenLogo from "./../../assets/logo.png";

function NavBar() {
  return (
    <div className={style.mainContainer}>
      <NavLink to="/" className={style.contenedorImagen}>
        <img src={imagenLogo} alt="logo" />
      </NavLink>

      <ul className={style.list}>
        <li className={style.navLink}>
          <a href="#biografia">Biografia</a>
        </li>
        <li className={style.navLink}>
          <a href="#propuestas">Propuestas</a>
        </li>
        <li className={style.navLink}>
          <a href="#noticias">Noticias</a>
        </li>
        <li className={style.navLink}>
          <a href="#vecinos">Vecinos</a>
        </li>
      </ul>

      <div className={style.socialContainer}>
        <a href="https://twitter.com/MauricioDova">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="https://www.instagram.com/mauriciodova/">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="https://www.facebook.com/DovaMauricio">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="https://mail.google.com">
          <i class="bi bi-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
