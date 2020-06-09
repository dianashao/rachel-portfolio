import React from "react"
import linked from '../images/linked-in.png'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Navbar.Brand href={'/'} id={'navbar-title'}>RACHEL WANG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={'mr-auto'} id={'nav-links'}>
            <Nav.Link href={'/'}>Home</Nav.Link>
            <Nav.Link href={'/about'}>About</Nav.Link>
            <Nav.Link href={'/videography'}>Videography</Nav.Link>
            <Nav.Link href={'/photography'}>Photography</Nav.Link>
            <Nav.Link href={'/red-rabbit'}>Red Rabbit Productions</Nav.Link>
          </Nav>
          <a href={'https://www.linkedin.com/in/rachelwang99/'}>
            <img src={linked} alt={'linkedin logo'}></img>
          </a>

        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
