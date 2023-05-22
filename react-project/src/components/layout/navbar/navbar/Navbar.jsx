import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";

const Narbarpage = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end mr-auto">
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#acerca">Acerca</Nav.Link>
          <Nav.Link href="#servicios">Servicios</Nav.Link>
          <Nav.Link href="#contacto" className="justify-content-end mr-auto">
            Contacto
          </Nav.Link>
          <Nav.Link>
            <BsCart4 size="35px" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Narbarpage;
