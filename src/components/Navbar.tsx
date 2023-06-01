import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import '/src/index.css'

const buttonText = {
    color:"black",
    fontSize: "18px"
}

export default function NavbarBootstrap () {
    return(
     
           <Navbar sticky='top' bg="dark" variant="dark">
             <Container>
               <Navbar.Brand href="#home">NewsFlow: Discover,Explore ,and Stay Informed </Navbar.Brand>
               <Nav className="me-auto">
                 
                 <Button href="/" variant="outline-danger" style={buttonText}>Home</Button>{' '}
                 <Button href="/news" variant="outline-warning" style={buttonText}>News</Button>{' '}
                 <Button href="/search" variant="outline-danger" style={buttonText}>Search</Button>{' '}
                 <Button href="/login" variant="outline-warning" style={buttonText}>Login</Button>{' '}
                 <Button href="/register" variant="outline-danger" style={buttonText}>Register</Button>{' '}
                 
               </Nav>
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