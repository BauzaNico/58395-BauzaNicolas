import "../../App.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            E-GG!!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>

          <CartWidget />
        </div>
        <section id="sectionCategorias">
          <div className="list-group list-group-horizontal">
            <Link to="/category/electronics" className="list-group-item">
              Paletas
            </Link>
            <Link to="/category/jewelery" className="list-group-item">
              Zapatillas
            </Link>
            <Link to="/category/men's_clothing" className="list-group-item">
              Outfit
            </Link>
            <Link to="/category/women's_clothing" className="list-group-item">
              Accesorios
            </Link>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default NavBar;
