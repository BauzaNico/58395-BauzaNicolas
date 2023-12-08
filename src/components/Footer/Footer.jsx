import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="mb-4">Endless-gg</h2>
            <p>Tu destino para artículos de pádel sin límites</p>
          </div>
          <div className="col-md-4">
            <h3>Explora</h3>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-light">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/" className="text-light">
                  Productos
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Conéctate con Nosotros</h3>
            <ul className="list-unstyled">
              <li>
                <Link href="mailto:info@endless-gg.com" className="text-light">
                  Correo Electrónico
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com/endless-gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/endless-gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-muted mt-3">
        <p>
          &copy; {new Date().getFullYear()} Endless-gg. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
