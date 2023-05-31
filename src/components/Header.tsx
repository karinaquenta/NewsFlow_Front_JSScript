import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import '/src/index.css'

export default function Header(){

    return(
        <>
        <Navbar bg='dark' sticky='top' className='Header'>
          <Container>
            <Navbar.Brand className='newsflow'><strong>NewsFlow</strong></Navbar.Brand>
          </Container>
        </Navbar>
        <h1 className='newsflow-text'>
          <strong>Discover, Explore, and Stay Informed</strong>
        </h1>
      </>
    );
  }

  
  
  
  
  
  