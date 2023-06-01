
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

export default function Sidebar(){


  return (
    <Navbar sticky='top' className='flex-row Sidebar'>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/posts'>Posts</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/workouts'>Workouts</Nav.Link>
      </Nav.Item>
    </Navbar>
  )
}
