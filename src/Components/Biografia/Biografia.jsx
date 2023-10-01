import style from "./Biografia.module.css";
import imagenMauricio from "../../assets/32.JPG";

function Biografia() {
  return (
    <div className={style.mainContainer} id="biografia">
      <div className={style.centerContainer}>
        <div className={style.rightContainer}>
          <img src={imagenMauricio} alt="Mauricio Dova" />
        </div>
        <div className={style.leftContainer}>
          <h2>MAURICIO DOVA</h2>
          <p>
            Soy abogado, Concejal mandato cumplido, fui Secretario de Gobierno y
            de Políticas Sociales de la Municipalidad de Río Cuarto.
            Actualmente, soy Presidente del Tribunal de Cuentas. Nací en Río
            Cuarto, soy papá de Francisco y Alfonsina; y quiero convertirme en
            el próximo Intendente, para continuar el camino que empezamos en
            2016. Voy a trabajar incansablemente para convertir a nuestra Ciudad
            en un lugar mejor para vivir, con más trabajo, más segura, más
            accesible y sustentable. Acompañame, para seguir transformando Rio
            Cuarto!
          </p>
          <div className={style.socialContainer}>
            <span>Seguime en Redes</span>
            <a href="https://twitter.com/MauricioDova">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="https://www.instagram.com/mauriciodova/">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.facebook.com/DovaMauricio">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://mail.google.com/">
              <i class="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biografia;
