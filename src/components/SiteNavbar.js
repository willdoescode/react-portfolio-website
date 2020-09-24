import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import '../styles/SiteNavbar.css'

export default function SiteNavbar() {
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={require('../assets/siteicon.png')}
            alt="Site Icon"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Brand>
          <NavLink to="/" className='will'>Will Lane</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Nav.Link>
                <NavLink to="/about" className="nav-link" activeClassName="active-link">About</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/contacts" className="nav-link" activeClassName="active-link">Contacts</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/contacts" className="nav-link" activeClassName="active-link">Contacts</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/contacts" className="nav-link" activeClassName="active-link">Contacts</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/contacts" className="nav-link" activeClassName="active-link">Contacts</NavLink>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
