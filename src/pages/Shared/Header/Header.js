import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
   const { user ,logOut } = useAuth();
   return (
      <div>
         <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <Container>
            <Navbar.Brand href="#home">DOC-CARE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                  <Nav>
                  <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>                  
                  <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                  <Nav.Link as={HashLink} to="/home#teams">Our Team</Nav.Link>
                  <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                  {user?.email ?
                     <Button onClick={logOut} variant="light">Logout</Button> :
                     <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                  <Navbar.Text>
                     Signed in as: <a href="#login">{user?.displayName}</a>
                  </Navbar.Text>
               </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
         </>
         
      </div>
   );
};

export default Header;