import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav, Form } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"

import { Image } from "react-bootstrap"

export default () => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  return (
    <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md">
      <Navbar.Brand className="pl-5 ml-5" as={Link} to="/">
      <Image
          width="32"
          height="32"
          fluid
          src="../../icons/Aira.png"
          alt="Aira"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-3 mr-4 nav-links">
          
          <Nav.Link className="ml-2" as={Link} to="/projects" title="Projects">
            Projects
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/gallery" title="Gallery">
            Gallery
          </Nav.Link>
          
          <Form className="ml-3 my-auto">
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              title="Toggle Theme"
              checked={dark}
              onChange={toggleDark}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
