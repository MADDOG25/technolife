import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h2>Error 404</h2>
      <p>
        Pagina no encontrada. Regresa a la pagina de{" "}
        <Link to="/inicio">inicio</Link>
      </p>
    </div>
  );
}

export default Error;
