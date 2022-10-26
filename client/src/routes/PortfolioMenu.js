import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
export default function PortfolioMenu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Profolio.</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/portfolio/add">Create Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/portfolio/view">Portfolio List</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
      {/* <nav className='navbar navbar-light bg-light'>
       
          <h1 className="navbar-brand">Profolio.</h1>
          <div className="collapse navbar-collapse" id='navbarSupportedContent'></div>
          <ul className="navbar-nav mr-auto">
          <li className='nav-item active'><Link className='nav-link' to="/portfolio/add">Create Portfolio</Link></li>
          
          <li className='nav-item active'><Link className='nav-link' to="/portfolio/view">Portfolio List</Link></li>
        
          </ul>
      </nav> */}
      <Outlet/>
    </div>
  )
}
