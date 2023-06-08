import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { AuthContext } from '../module/UserProvider';

// import { Card } from "react-bootstrap"
// import colornews from "../static/img/colornews.png"
// import paperboy from "../static/img/paperboy.png"


export default function Header  ()  {
  const { user, setUser } = useContext(AuthContext);
  console.log(user);


  useEffect(()=> {
    const storedToken = localStorage.getItem('token');
    if (storedToken && !user.token){
      setUser({
        username: localStorage.getItem('username') || '',
        token: storedToken,
        loggedIn: true,
      });
    }
  });

  // const cardText = {
  //   color: 'red',
  //   fontSize: '40px',
  // };

  return (
    
      <Navbar sticky="top" className="Header">
        <Container fluid>
        <Nav className="w-100 justify-content-around">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/posts">
            Posts
          </Nav.Link>
        </Nav.Item>
        {user.token || localStorage.getItem('token') ? (
          <>
            <Nav.Item>
              <Nav.Link as={NavLink} to={`/user/${user.username}`}>
                My Page
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/logout">
                Logout
              </Nav.Link>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link as={NavLink} to="/news">
                NEWS
              </Nav.Link>
            </Nav.Item> */}
          </>
        )}
        {/* <Nav.Item>
          <Nav.Link as={NavLink} to="/news">
            News
          </Nav.Link>
        </Nav.Item> */}
        </Nav>
        </Container>
      </Navbar>
);
}

      /* <Card className="title.card bg-dark text-white">
        <Card.Img src={colornews} alt="newsbg" />
        <Card.ImgOverlay>
          <Card.Title className="hero-title text-center ">
            <img src={paperboy} height="300px" />
          </Card.Title>
          <Card.Text style={cardText} className="hero-text text-center">
            DISCOVER - EXPLORE - STAY INFORMED
            <br />
            <br />
             <Button variant="outline-danger" style={buttonText}>Sign In</Button>{' '}
              <Button variant="outline-danger" style={buttonText}>Register</Button>{' '} 
          {/* </Card.Text>
        </Card.ImgOverlay>
      </Card> 
     </>
  );
} */

