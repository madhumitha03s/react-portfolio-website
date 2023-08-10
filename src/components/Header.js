import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    color: "#fff",
  };

  return (
    <div className="header">
      <Navbar expandlg fixed="top">
        <Container>
          <Navbar.Brand>Madhumitha Sivagnanam</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
              <NavLink to="/services" className="nav-link">
                Services
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
