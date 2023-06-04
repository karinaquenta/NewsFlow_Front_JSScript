import Navbar from 'react-bootstrap/Navbar';
import nflogo from "../static/img/nflogo.png"


export default function Logo() {
  
  return (
    
    <Navbar bg="light" className="Logo" >
   
      <Navbar.Brand href="#home" className="d-flex justify-content-center">
            <img
              src={nflogo}
              width="300"
              height="300"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
      
    </Navbar>
  
  );
}

