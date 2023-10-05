import style from "./Biografia.module.css";
import imagenMauricio from "../../assets/biografia.png";
import RedesSociales from "../RedesSociales/RedesSociales";

function Biografia() {
  return (
    <div className={style.mainContainer} id="biografia">
      <div className={style.centerContainer}>
        <div className={style.rightContainer}>
          <img src={imagenMauricio} alt="Mauricio Dova" />
        </div>
        <div className={style.leftContainer}>
          <h2>MAURICIO DOVA</h2>
          <div className={style.body}>
            <p>
              Soy abogado, Concejal mandato cumplido, fui Secretario de Gobierno
              y de Políticas Sociales de la Municipalidad de Río Cuarto.
              Actualmente, soy Presidente del Tribunal de Cuentas. Nací en Río
              Cuarto, soy papá de Francisco y Alfonsina; y quiero convertirme en
              el próximo Intendente, para continuar el camino que empezamos en
              2016. Voy a trabajar incansablemente para convertir a nuestra
              Ciudad en un lugar mejor para vivir, con más trabajo, más segura,
              más accesible y sustentable.
            </p>
            <h6>Acompañame, para seguir transformando Rio Cuarto!</h6>
          </div>
          <div className={style.socialContainer}>
            <span>Seguinos en Redes</span>
            <RedesSociales />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biografia;
