import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

import NewspaperIcon from '@mui/icons-material/Newspaper';
import CampaignIcon from '@mui/icons-material/Campaign';
import FeedbackIcon from '@mui/icons-material/Feedback';

import LoginIcon from '@mui/icons-material/Login';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { AuthContext } from '../module/UserProvider';
import { useContext } from 'react';


export default function Navbar() {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        
        <Nav.Link as={NavLink} to="/home"><HomeIcon /> Home</Nav.Link>
        
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/ln"><CampaignIcon />Latest News</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/news"><NewspaperIcon />News</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/login"><LoginIcon />Log In</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link as={NavLink} to="/register"><AssignmentIndIcon /> Register</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link as={NavLink} to={`/user/${user.username}`}><AssignmentIndIcon /> My Page</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/contact"><FeedbackIcon />Contact Us!</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

