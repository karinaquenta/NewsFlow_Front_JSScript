import { Card } from 'react-bootstrap';
import splash from '../static/img/splash.png'

export default function Logo() {
  
  return (
    
    <>
      <Card className="text-center custom-bg">
        <Card.Img variant="top" src={splash} />
        <Card.Body>
        <p className="moving-text">Stay in the know, wherever you go!</p>
          {/* <Card.Text className="logo-text">Stay in the know, wherever you go!</Card.Text> */}
        </Card.Body>
      </Card>
      
    </>
  );
}
{/* <p className="moving-text">Stay in the know, wherever you go!</p> */}