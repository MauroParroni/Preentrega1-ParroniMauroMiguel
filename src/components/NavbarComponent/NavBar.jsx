import { Navbar, Nav } from "react-bootstrap"; // importo los componentes especificos del bootstrap
import NavDropdown from "react-bootstrap/NavDropdown";
import Carro from "../cartwidgetComponent/Cartwidged";
import "./styleNav.css";
import logo from "./logo.png";
const logoComponent = logo;
const AppNavbar = () => {
  // creo la navbar
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logoComponent}
          width="55"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <small>Bienvenidos a vapor</small>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#tienda">Tienda</Nav.Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">RPG</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Terror</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Accion</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Deportes</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#comunidad">Comunidad</Nav.Link>
          <Nav.Link href="#soporte">Soporte</Nav.Link>
        </Nav>
        <Nav className="ml-auto carrito">
          <Nav.Link href="#carrito" className="ml-auto">
            <Carro />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
