import { Navbar, Nav} from "react-bootstrap"; // importo los componentes especificos del bootstrap
import "./styleNav.css"
import logo from "./logo.png";
import logoCarrito from "./descarga.png";
const carrito = logoCarrito;
const logoComponent = logo;
const AppNavbar = () => { // creo la navbar
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
          <Nav.Link href="#tienda">
            Tienda
          </Nav.Link>
          <Nav.Link href="#categorias">
            Categorías
          </Nav.Link>
          <Nav.Link href="#comunidad">
            Comunidad
          </Nav.Link>
          <Nav.Link href="#soporte">
            Soporte
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto carrito">
          <Nav.Link href="#carrito" className="ml-auto">
            <img
              src={carrito}
              width="55"
              height="30"
              className="d-inline-block align-top"
              alt="Carrito"
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
