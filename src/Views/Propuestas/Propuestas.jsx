import propuestas from "../../assets/propuestas.json";
import Card from "../../Components/Card/Card";

function Propuestas() {
  return (
    <div>
      <h2>Propuestas</h2>
      <div>
        {propuestas?.propuestas.map((propuesta, index) => (
          <Card propuesta={propuesta} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Propuestas;
