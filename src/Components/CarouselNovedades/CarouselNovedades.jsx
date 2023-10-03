import React, { useState } from "react";
import "./Carousel.css"; // Asegúrate de importar tu archivo de estilos CSS

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { title: "Card 1", content: "Contenido de la Card 1" },
    { title: "Card 2", content: "Contenido de la Card 2" },
    { title: "Card 3", content: "Contenido de la Card 3" },
    { title: "Card 4", content: "Contenido de la Card 4" },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={handlePrev}>Prev</button>
      <div className="carousel">
        <div
          className="cards"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div key={index} className="card">
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
