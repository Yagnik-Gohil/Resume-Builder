import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar bg="light" variant="light" className="border-bottom" sticky="top">
      <Container>
        <Navbar.Brand href="#">Resume Builder</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
