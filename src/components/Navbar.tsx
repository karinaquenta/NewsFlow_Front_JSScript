// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import nflogo from "../static/img/nflogo.png"
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../module/UserProvider';
import { useContext } from 'react';
// import Button from 'react-bootstrap/Button';


import '/src/index.css'

// const buttonText = {
//     color:"black",
//     fontSize: "18px"
// }

export default function NavbarBootstrap () {
  const { user } = useContext(AuthContext);
  console.log(user);
    return(
      <Navbar sticky='top' bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src={nflogo} height="100px" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/news">News</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


     /*
    <Nav.Link href="/register">Sign up!</Nav.Link>
    <Nav.Link href="/login">Log In</Nav.Link>
    <Nav.Link href="/search">Search</Nav.Link>
    <Nav.Link href="/news">News</Nav.Link>
    <Nav.Link href="/">Home</Nav.Link>
     */