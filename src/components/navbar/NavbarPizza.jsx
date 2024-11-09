import { Nav, Navbar } from "react-bootstrap";
import formatNumber from "../../Utils/formateo/Format"
import pizzaLogo from "/src/assets/img/logo-white.png";

const NavbarPizza = () => {
  const token = 0;
  const total = 15000;

  return (
    <Navbar bg="dark" className="px-5" data-bs-theme="dark">
      <Navbar.Brand className="mx-3">
        <img
          src={pizzaLogo}
          alt="logo pizzera mamma mia"
          height="50"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav variant="tabs" defaultActiveKey="#" className="me-auto">
        <Nav.Link href="#">🍕 Home</Nav.Link>
        {token ? (
          <>
            <Nav.Item>
              <Nav.Link eventKey="link-1">👤 Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">🔒 Logout</Nav.Link>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link eventKey="link-3">🔑 Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">🔐 Register</Nav.Link>
            </Nav.Item>
          </>
        )}
      </Nav>
      <Navbar.Brand className=" border border-primary text-info px-3">
        🛒 Total: $ {formatNumber(total)}
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarPizza;
