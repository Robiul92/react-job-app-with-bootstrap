import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {

  


  return (
    <Navbar className="justify-content-center mb-1" bg="primary" variant="dark" expand="lg" sticky="top">
      <Container fluid className="p-2 mb-2">
        <Navbar.Brand to="/">React Job</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" >
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/jobs" >
              All Jobs
            </Nav.Link>
            <Nav.Link as={NavLink} to="/add-job" >
              Add Job
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
