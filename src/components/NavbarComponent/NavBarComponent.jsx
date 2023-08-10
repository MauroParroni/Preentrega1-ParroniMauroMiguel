import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carro from "../cartwidgetComponent/Cartwidged";
import "./styleNav.css";
import logo from "./logo.png";

const logoComponent = logo;

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            src={logoComponent}
            width="55"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <small>Bienvenidos a vapor</small>
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>Tienda</Nav.Link>
          </LinkContainer>

          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <LinkContainer to="/category/RPG">
              <NavDropdown.Item>RPG</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/Aventura">
              <NavDropdown.Item>Aventura</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/Terror">
              <NavDropdown.Item>Terror</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/Acción">
              <NavDropdown.Item>Accion</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/Deportes">
              <NavDropdown.Item>Deportes</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>

          <LinkContainer to="/comunidad">
            <Nav.Link>Comunidad</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/soporte">
            <Nav.Link>Soporte</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav className="ml-auto carrito">
          <LinkContainer to="/cart">
            <Nav.Link className="ml-auto">
              <Carro />
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
