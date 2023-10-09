import style from "./PortadaDetalle.module.css";

function PortadaDetalle({ propuesta }) {
  const containerStyle = {
    backgroundImage: `url(${propuesta.imagen})`,
    backgroundSize: "cover",
    position: "relative", // Esto puede ser útil para ajustar el tamaño de fondo
  };

  const overlayStyle = {
    background: "rgba(0, 0, 0, 0.25)", // Fondo negro con opacidad
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div className={style.mainContainer} style={containerStyle}>
      <div className={style.mascaraNegra} style={overlayStyle}>
        <h2>{propuesta.titulo}</h2>
      </div>
      <div class="overlay"></div>
    </div>
  );
}

export default PortadaDetalle;
