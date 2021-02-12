import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { FaRedhat } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <Navbar variant="dark" bg="dark" sticky="top" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Travel Buddy <FaRedhat />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Place" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/">
              Places
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
