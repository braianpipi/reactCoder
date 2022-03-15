import React from "react";
// import "./NavBar.css";
import CartWidget from "./CartWitget";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Minion Card Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="subrayado" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="subrayado" to="/contact">Contacto</Link>
            </Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link  className="subrayado" to="/category/accion">Accion</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="subrayado" to="/category/diversion">Diversion</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
