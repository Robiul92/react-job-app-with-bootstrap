import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/logo.png';

const NavBar = () => {
//   const activeLink = ({ isActive }) =>
//     isActive ? 'nav-link text-light bg-dark rounded px-3 py-2' : 'nav-link text-light px-3 py-2';

  return (
    
    <Navbar className="justify-content-center mb-1" bg="primary" variant="dark" expand="lg" sticky="top">
      <Container fluid className='p-2 mb-2'>
        <Navbar.Brand to="/">React Job</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
         <Nav className="ms-auto text-success">
            <NavLink className='px-2 text-light bg-dark' to="/">Home</NavLink>
            <NavLink className='px-2 text-light' to="/jobs">All Jobs</NavLink>
            <NavLink className='px-2 text-light' to="/add-job">Add Job</NavLink>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
