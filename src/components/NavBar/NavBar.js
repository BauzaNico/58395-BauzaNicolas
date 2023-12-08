import { useContext } from "react";
import "../../App.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const NavBar = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" href="#">
            E-GG!!
          </Link>

          <section id="sectionCategorias">
            <div className="list-group list-group-horizontal">
              <NavLink to="/category/paleta" className="list-group-item">
                Paletas
              </NavLink>
              <NavLink to="/category/zapatilla" className="list-group-item">
                Zapatillas
              </NavLink>
              <NavLink to="/category/outfit" className="list-group-item">
                Outfit
              </NavLink>
              <NavLink to="/category/accesorios" className="list-group-item">
                Accesorios
              </NavLink>
            </div>
          </section>

          <div className="collapse navbar-collapse" id="navbarNav">
            <button
              className="btn btn-dark"
              type="button"
              onClick={() =>
                setTheme((value) => (value === "ligth" ? "dark" : "ligth"))
              }
            >
              Cambiar tema
            </button>
          </div>
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
