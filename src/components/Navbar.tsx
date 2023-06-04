import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/ln">Latest News</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

