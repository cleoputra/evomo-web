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
      alt="React Bootstrap logo"
    />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="index.js"><b>Beranda</b></Nav.Link>
      {/* <Nav.Link href="/">Fitur</Nav.Link>
      <Nav.Link href="/">Cara Kerja</Nav.Link> */}
      <Nav.Link href=" https://wa.me/6282211776239" target="_blank">Hubungi Kami</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Header
