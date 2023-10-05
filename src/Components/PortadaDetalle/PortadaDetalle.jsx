import style from "./PortadaDetalle.module.css";

function PortadaDetalle({ propuesta }) {
  const containerStyle = {
    backgroundImage: `url(${propuesta.imagen})`,
    backgroundSize: "cover",
    position: "relative", // Esto puede ser útil para ajustar el tamaño de fondo
  };

  return (
    <div className={style.mainContainer} style={containerStyle}>
      <div class="overlay"></div>
      <h2>{propuesta.titulo}</h2>
    </div>
  );
}

export default PortadaDetalle;
