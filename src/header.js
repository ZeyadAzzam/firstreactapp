import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LoginButton from "./login";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout";

function Header() {
  let { isAuthenticated } = useAuth0();

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ backgroundColor: "#333", color: "white" }}
    >
      <Container fluid>
        <Navbar.Brand
          href="#"
          style={{ fontWeight: "bold", color: "darkcyan" }}
        >
          ZiadCook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">products</Nav.Link>
            <Nav.Link href="/browse">Browse</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>

            <NavDropdown title="drop down" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Bye
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* check if it Authenticated True:logout,False:"login button"  */}
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Container>
    </Navbar>
  );
}

export default Header;
