// import React from "react";
// import CardNovedades from "../CardNovedades/CardNovedades";
// import { arrayNovedades } from "./../../assets/JSON/novedades";
// import style from "./Novedades.module.css";
// import { useState } from "react";

// const Novedades = () => {
//   const [novedades, setNovedades] = useState(arrayNovedades);

//   const handleNext = (e) => {
//     e.preventDefault();
//   };

//   const handlePrev = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className={style.mainContainer}>
//       <h3>Novedades</h3>
//       <p>Somos un equipo de profesionales apasionados...</p>
//       <div className={style.cardContainer}>
//         <button onClick={(e) => handlePrev(e)}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="97"
//             height="100"
//             viewBox="0 0 97 100"
//             fill="none"
//           >
//             <path
//               d="M53.2089 75L27.4339 50L53.2089 25L59.25 30.8594L39.5159 50L59.25 69.1406L53.2089 75Z"
//               fill="#E6E6E6"
//             />
//           </svg>
//         </button>
//         {novedades?.map((novedad, index) => (
//           <CardNovedades
//             key={index}
//             imagen={novedad.imagen}
//             titulo={novedad.titulo}
//             cuerpo={novedad.cuerpo}
//           />
//         ))}
//         <button onClick={(e) => handleNext(e)}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="96"
//             height="100"
//             viewBox="0 0 96 100"
//             fill="none"
//           >
//             <path
//               d="M36.9505 69.1406L56.6845 50L36.9505 30.8594L42.9915 25L68.7666 50L42.9915 75L36.9505 69.1406Z"
//               fill="#E6E6E6"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Novedades;

import React, { useState } from "react";
import CardNovedades from "../CardNovedades/CardNovedades";
import { arrayNovedades } from "./../../assets/JSON/novedades";
import style from "./Novedades.module.css";

const Novedades = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % arrayNovedades.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + arrayNovedades.length) % arrayNovedades.length
    );
  };

  const visibleNovedades = [];
  for (let i = 0; i < 4; i++) {
    const novedadIndex = (currentIndex + i) % arrayNovedades.length;
    visibleNovedades.push(arrayNovedades[novedadIndex]);
  }

  return (
    <div className={style.mainContainer}>
      <h3>Novedades</h3>
      <p>Somos un equipo de profesionales apasionados...</p>
      <div className={style.cardContainer}>
        <button onClick={handlePrev}>
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
        {visibleNovedades.map((novedad, index) => (
          <CardNovedades
            key={index}
            imagen={novedad.imagen}
            titulo={novedad.titulo}
            cuerpo={novedad.cuerpo}
          />
        ))}
        <button onClick={handleNext}>
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
    </div>
  );
};

export default Novedades;
