import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import '../styles/SiteNavbar.css'

export default function SiteNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/">
          Will Lane
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <NavLink to="/about" activeClassName="active-link">About</NavLink>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}
