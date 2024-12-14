import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-pink h-20 leading-10 text-white p-4 text-center flex flex-row justify-around">
      <p>&copy; 2024 TechnoLife. Todos los derechos reservados.</p>
      <p>
        Creado por{" "}
        <Link className="hover:underline" to="https://www.instagram.com/devjeffrey25/">@devjeffrey25</Link>
      </p>
    </footer>
  );
}

export default Footer;
