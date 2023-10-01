import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Biografia from "../../Components/Biografia/Biografia";
import Portada from "../../Components/Portada/Portada";
import Propuestas from "../../Components/Propuestas/Propuestas";
import Vecinos from "../../Components/Vecinos/Vecinos";
import Voluntarios from "../../Components/Voluntarios/Voluntarios";
import PropuestaCiudadana from "../../Components/PropuestaCiudadana/PropuestaCiudadana";
import imagenLogo from "./../../assets/logo.png";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.contenedorHome}>
      <NavBar />
      <Portada />
      <Biografia />
      <Propuestas />
      <PropuestaCiudadana />
      <Voluntarios />
      <Vecinos />
      <Footer />
    </div>
  );
}

export default Home;
