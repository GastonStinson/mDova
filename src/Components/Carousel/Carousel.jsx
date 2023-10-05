import style from "./Carousel.module.css";
import React, { useState } from "react";
import CardPropuestas from "../CardPropuestas/CardPropuestas";
import { arrayPropuestas } from "../../assets/JS/propuestas";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsToShow = 3; // Número de tarjetas a mostrar a la vez
  const transitionDuration = 1000;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayPropuestas.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + arrayPropuestas.length) % arrayPropuestas.length
    );
  };

  // Lógica para asegurarse de que las tarjetas siempre se muestren de manera circular
  const cardsToRender = [];
  for (let i = 0; i < cardsToShow; i++) {
    const indexToRender = (currentIndex + i) % arrayPropuestas.length;
    cardsToRender.push(arrayPropuestas[indexToRender]);
  }

  return (
    <div className={style.carousel}>
      <button className={style.prevButton} onClick={prevSlide}>
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
      </button>
      <div className={style.cardsContainer}>
        {cardsToRender.map((propuesta, index) => (
          <div
            key={index}
            className={`${style.slide} ${index === 1 ? style.centerCard : ""}`}
            style={{
              flex: `0 0 ${100 / cardsToShow}%`,
              marginRight: index === cardsToShow - 1 ? "0" : "15px",
              transitionDuration: `${transitionDuration}ms`,
            }}
          >
            <CardPropuestas
              id={propuesta.id}
              imagen={propuesta.imagen}
              titulo={propuesta.titulo}
            />
          </div>
        ))}
      </div>
      <button className={style.nextButton} onClick={nextSlide}>
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
      </button>
    </div>
  );
}

export default Carousel;
