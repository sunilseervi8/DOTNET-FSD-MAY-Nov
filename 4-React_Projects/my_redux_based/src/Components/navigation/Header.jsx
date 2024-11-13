import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
         <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><i className="bi bi-bootstrap"></i> &nbsp;React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home"><i className="bi bi-house-add-fill"></i>&nbsp; Home</Nav.Link>
            <Nav.Link as={Link} to='/user'>User</Nav.Link>
            <Nav.Link href="#pricing">Admin</Nav.Link>
          </Nav>
          <Nav>
        <Nav.Link href="#features"><i className="bi bi-person-circle"></i>&nbsp;Login</Nav.Link>
        <Nav.Link href="#pricing"><i className="bi bi-file-earmark-person-fill"></i>&nbsp;Register</Nav.Link>
        </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    </div>
  )
}
