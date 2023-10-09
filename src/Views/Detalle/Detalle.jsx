import React, { useEffect } from "react";
import PortadaDetalle from "../../Components/PortadaDetalle/PortadaDetalle";
import { useParams } from "react-router-dom";
import { arrayPropuestas } from "../../assets/JS/propuestas";
import Footer from "./../../Components/Footer/Footer";
import separadorNavBar from "./../../assets/separadorNavBar.png";
import style from "./Detalle.module.css";
import Carousel from "./../../Components/Carousel/Carousel";

const Detalle = () => {
  const { id } = useParams();

  const propuestaId = parseInt(id, 10);
  const propuesta = arrayPropuestas.find(
    (propuesta) => propuesta.id === propuestaId
  );

  useEffect(() => {
    // Cuando el componente se monta, desplázate a la parte superior de la página
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className={style.mainContainer}>
      <img src={separadorNavBar} alt="sepNavBar" />
      <PortadaDetalle propuesta={propuesta} />
      <div className={style.cuerpoContainer}>
        <h3>Propuestas</h3>
        <ul>
          {propuesta.cuerpo?.map((frase, index) => (
            <li key={index}>{frase}</li>
          ))}
        </ul>
      </div>
      <h4>Otras Propuestas</h4>
      <div className={style.contenedorCarousel}>
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default Detalle;
