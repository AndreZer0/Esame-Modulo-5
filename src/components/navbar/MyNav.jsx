import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import React, {Component} from "react";
import { navLinks } from '../../data/navLinks';
import {nanoid }from "nanoid";
class MyNav  extends Component {
    render() {
      return (
        <Navbar expand="lg" className="bg-success">
          <Container className="logo"  >
            <a href="#"><img src="https://img.freepik.com/premium-vector/human-tree-life-logo-coming-out-book-design-inspiration-education-vector-logo-design_722324-83.jpg?w=2000" alt="logo" /> </a>
            <Navbar.Brand href="#home" className='titolo'>Imaginary Ebook Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {navLinks.map((link) => {
                  return (
                    <Nav.Link
                      key={nanoid()}
                      href={link.url}
                    >
                      {link.label}
                    </Nav.Link>
                    
                  )

            })}
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
      <img src='https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png' alt='carrello'
             className='carrello'></img>
    </Navbar>
  );
}
}
        
  
export default MyNav;