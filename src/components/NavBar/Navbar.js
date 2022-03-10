import React from "react";
// import "./NavBar.css";
import CartWidget from "./CartWitget";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      
      <Container>
        <Navbar.Brand>
          Minion Card Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contacto</Link>
            </Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/category/accion">Accion</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/diversion">Diversion</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
        <CartWidget />
    </Navbar>
  );
};
export default NavBar;
