import React from "react";
// import "./NavBar.css";
import CardWidget from "./CardWitget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li>
            <CardWidget />
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              to="/category"
            >
              Categorias
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/category/diversion">
                Diversion
              </Link>
              <Link className="dropdown-item" to="/category/accion">
                Accion
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
