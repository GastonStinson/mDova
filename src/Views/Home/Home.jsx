import Footer from "../../Components/Footer/Footer";
import Biografia from "../../Components/Biografia/Biografia";
import Portada from "../../Components/Portada/Portada";
import Propuestas from "../../Components/Propuestas/Propuestas";
import PropuestaCiudadana from "../../Components/PropuestaCiudadana/PropuestaCiudadana";
import style from "./Home.module.css";
import separadorNavBar from "./../../assets/separadorNavBar.png";
import Novedades from "../../Components/Novedades/Novedades";

function Home() {
  return (
    <div className={style.contenedorHome}>
      <img src={separadorNavBar} alt="sepNavBar" />
      <Portada />
      <Biografia />
      <Propuestas />
      <PropuestaCiudadana />
      <Novedades />
      <Footer />
    </div>
  );
}

export default Home;
