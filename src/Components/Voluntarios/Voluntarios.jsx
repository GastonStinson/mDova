import style from "./Voluntarios.module.css";
import { NavLink } from "react-router-dom";

const URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfMPPKdc-rPvKLDwqkJS3F4hRDkVS1MtliTzdLcRk1i1rmL4w/viewform";

const Voluntarios = () => {
  return (
    <div className={style.mainVoluntarios}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt vel
        eius asperiores placeat animi unde deleniti rem, saepe sed debitis
        laborum reprehenderit nisi minima, commodi distinctio aliquam assumenda
        recusandae iure.
      </p>
      <NavLink to={URL}>
        <button className="btn btn-primary">Suma tu propuesta!</button>
      </NavLink>
    </div>
  );
};

export default Voluntarios;
