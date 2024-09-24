
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,  faSearch } from '@fortawesome/free-solid-svg-icons'
// import React from 'react'
import {Container,Navbar,Nav,NavDropdown,}from 'react-bootstrap'
import './Navbar.css'
import logo from'../../assets/logo.png'
import { Link } from 'react-router-dom';

export default function Navbars() {
  return (
   <div className='custom-navbar'>
     <Navbar expand="lg" fixed='top' >
      <Container fluid className="d-flex justify-content-between p-3 " >
      {/* <Container fluid> */}
        <div className="brand-h">
          <Navbar.Brand href="#home">
          <img src={logo} alt="logo image" />
        </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="collaps-h">
          <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link to="/about">About Us</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/about">Our Team</Link></NavDropdown.Item>
              {/* <NavDropdown.Item ><Link to="/about">About Us</Link></NavDropdown.Item> */}
              <NavDropdown.Item ><Link to="#">Our Team</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="#">FAQ</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/booking">Booking</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/error404">Error404</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="#">Login / Register</Link></NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="#">Service</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="#">Service Details</Link></NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="#">Blogs</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="#">Blog Details</Link></NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link ><Link to="#"><FontAwesomeIcon icon={faSearch} /></Link></Nav.Link>
            
            <Nav.Link>
              {/* <button>Contact Us <span> > </span> </button> */}
              <Link to="/contact"><button>Contact Us <span> <FontAwesomeIcon icon={faArrowRight} /> </span>  </button></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar></div>
  )
}
