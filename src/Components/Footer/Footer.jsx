import style from "./Footer.module.css";
import imagenLogo from "./../../assets/logo.png";

function Footer() {
  return (
    <div className={style.mainFooter}>
      <div className={style.contenedorImagen}>
        <img src={imagenLogo} alt="logo" />
      </div>
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

export default Footer;
