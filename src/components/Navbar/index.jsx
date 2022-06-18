import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export function NavMenu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/access">
            Login/Cadastro
          </Nav.Link>
          <Nav.Link as={Link} to="/firestore">
            Firestore
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
