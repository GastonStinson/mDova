import React, { useState, useEffect } from "react";
import CardNovedades from "../CardNovedades/CardNovedades";
import { arrayNovedades } from "./../../assets/JS/novedades";
import style from "./Novedades.module.css";
import { NavLink } from "react-router-dom";

const Novedades = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // const totalCards = arrayNovedades.length;

  // useEffect(() => {
  //   const handleResize = () => {
  //     // Verifica el ancho de la pantalla y ajusta el número de tarjetas a mostrar
  //     if (window.innerWidth <= 767) {
  //       setCardsToShow(1); // Pantalla pequeña
  //     } else {
  //       setCardsToShow(3); // Pantalla grande
  //     }
  //   };

  //   // Agrega un listener para el evento de cambio de tamaño de la ventana
  //   window.addEventListener("resize", handleResize);

  //   // Llama a handleResize una vez para establecer el valor inicial
  //   handleResize();

  //   // Elimina el listener cuando el componente se desmonta
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const handleNext = () => {
  //   setCurrentIndex((currentIndex + 1) % arrayNovedades.length);
  // };

  // const handlePrev = () => {
  //   setCurrentIndex(
  //     (currentIndex - 1 + arrayNovedades.length) % arrayNovedades.length
  //   );
  // };

  const visibleNovedades = [];
  for (let i = 0; i < cardsToShow; i++) {
    const novedadIndex = (currentIndex + i) % arrayNovedades.length;
    visibleNovedades.push(arrayNovedades[novedadIndex]);
  }

  return (
    <div className={style.mainContainer} id="novedades">
      <h2>Novedades</h2>
      <div className={style.cardContainer}>
        {/* <button onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="97"
            height="100"
            viewBox="0 0 97 100"
            fill="none"
          >
            <path
              d="M53.2089 75L27.4339 50L53.2089 25L59.25 30.8594L39.5159 50L59.25 69.1406L53.2089 75Z"
              fill="#E6E6E6"
            />
          </svg>
        </button> */}
        {visibleNovedades.map((novedad, index) => (
          <CardNovedades
            key={index}
            imagen={novedad.imagen}
            titulo={novedad.titulo}
            cuerpo={novedad.cuerpo}
            url={novedad.url}
          />
        ))}
        {/* <button onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="100"
            viewBox="0 0 96 100"
            fill="none"
          >
            <path
              d="M36.9505 69.1406L56.6845 50L36.9505 30.8594L42.9915 25L68.7666 50L42.9915 75L36.9505 69.1406Z"
              fill="#E6E6E6"
            />
          </svg>
        </button> */}
      </div>
      {/* <div className={style.indicatorsContainer}>
        {Array.from({ length: totalCards }).map((_, index) => (
          <div
            key={index}
            className={`${style.indicator} ${
              currentIndex === index ? style.activeIndicator : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
      <NavLink
        to="https://www.instagram.com/mauriciodova/"
        target="_blank"
        className={style.finalButton}
      >
        <button>OTRAS NOVEDADES</button>
      </NavLink>
    </div>
  );
};

export default Novedades;
