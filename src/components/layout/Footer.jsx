import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-pink p-10 leading-10 text-white text-center gap-y-6 grid grid-cols-1 md:grid-cols-2 justify-around ">
      <p>&copy; 2024 TechnoLife. Todos los derechos reservados.</p>
      <p>
        Creado por{" "}
        <Link className="hover:underline" to="https://www.instagram.com/devjeffrey25/">@devjeffrey25</Link>
      </p>
    </footer>
  );
}

export default Footer;
