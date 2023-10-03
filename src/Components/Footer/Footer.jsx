import style from "./Footer.module.css";
import logoSeparador from "./../../assets/logoSeparador.png";
import RedesSociales from "./../RedesSociales/RedesSociales";

function Footer() {
  return (
    <div className={style.mainFooter}>
      <div className={style.contenedorLogo}>
        <img src={logoSeparador} alt="logo" />
      </div>
      <span>SEGUINOS EN REDES</span>
      <RedesSociales />
    </div>
  );
}

export default Footer;
