import React from "react";
import "./Header.css";
import img from "./cincominions.jpg";
import NavBar from "../NavBar/Navbar";
import "./Header.css";
const Header = () => {
  return (
    <div clasname="Header">
        <NavBar />
      <div className="container imagenNavBar">
        <img
          src={img}
          alt="Logo de la pagina"
          className="d-inline-block align-top "
        />
      </div>
    </div>
  );
};

export default Header;
