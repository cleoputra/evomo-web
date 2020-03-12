import React from "react"
import {Navbar, Nav} from 'react-bootstrap'
import logo from "../images/logo.svg"

const Header = () => (
  <Navbar bg="white" expand="lg">
  <Navbar.Brand href="#home">
    <img
      src={logo}
      width="auto"
      height="auto"
      className="d-inline-block align-top"
      alt="React Bootstrap logo"
    />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="index.js"><b>Beranda</b></Nav.Link>
      <Nav.Link href="/">Fitur</Nav.Link>
      <Nav.Link href="/">Cara Kerja</Nav.Link>
      <Nav.Link href="/">Hubungi Kami</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Header
