function Card(propuesta) {
  const { imagen, titulo, cuerpo } = propuesta;

  return (
    <div class="card" style="width: 18rem;">
      <img src="./../../assets/1.JPG" class="card-img-top" alt="card image" />
      <div class="card-body">
        <h5 class="card-title">{titulo}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
