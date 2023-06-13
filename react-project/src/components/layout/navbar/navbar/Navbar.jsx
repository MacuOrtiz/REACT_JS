import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Narbarpage = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/inicio">
              Inicio
            </Link>
            <Link className="nav-link" to="/contacto">
              Contacto
            </Link>
            <Link className="nav-link" to="/products">
              Productos
            </Link>
            <Link className="nav-link" to="/detalle">
              Detalle
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/count">
              <BsCart4 size="35px" color="yellow" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Narbarpage;
