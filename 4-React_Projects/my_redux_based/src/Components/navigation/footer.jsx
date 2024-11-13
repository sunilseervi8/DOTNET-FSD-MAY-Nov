import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Footer() {
  return (
    <div>
         <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed='bottom'>
    
        <Navbar  style={{ width: '100%',  display: 'flex', justifyContent: 'center'}}>
        <Nav className="" >
            <Nav.Link href="#features">All right are reserved</Nav.Link>
            <Nav.Link href="#home">@ Copyright</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
        <Nav.Link href="#features"><i className="bi bi-github"></i>&nbsp; Git</Nav.Link>
        <Nav.Link href="#pricing"><i className="bi bi-facebook"></i>&nbsp;Facebook</Nav.Link>
        <Nav.Link href="#pricing"><i className="bi bi-twitter"></i>&nbsp;Twitter</Nav.Link>

        </Nav>
        </Navbar>
       
    
    </Navbar>
    </div>
  )
}
