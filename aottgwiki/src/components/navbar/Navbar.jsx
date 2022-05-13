import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Navbar.scss"

const LINKS = [
    "About",
    "Download",
    "Tutorials",
    "Community"
]

export default function CustomNavbar({ tabOpen }) {
  return (
    <Navbar fixed="top" className="navbar navbar-default navbar-static-top overrides" collapseOnSelect expand="lg" variant="dark">
        <Container>
        <Navbar.Brand className='custom-brand-name' href="/AottgWiki/">AOTTG Wiki</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            {
                LINKS.map((e) => (
                    // Set the route that created this navbar such that its link is highlighted.
                    <Nav.Link className={"custom-nav-link " + ((e === tabOpen) && "active")} key={e} as={Link} to={"/" + e}>{e}</Nav.Link>
                ))
            }            
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
