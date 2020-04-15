import React from "react"
import {Navbar, Nav} from 'react-bootstrap'
import logo from "../images/logo.svg"
import '../styles/global.css'


const Header = () => (
  <Navbar className="pad-header" bg="white" expand="lg">
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
      <Nav.Link className="pad-header-li" href="/">Beranda</Nav.Link>
      <Nav.Link className="pad-header-li" href="/fitur/">Fitur</Nav.Link>
      <Nav.Link className="pad-header-li" href="/cara-kerja/">Cara Kerja</Nav.Link>
      <Nav.Link className="pad-header-li" href="https://wa.me/6282211776239" target="_blank">Hubungi Kami</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Header
