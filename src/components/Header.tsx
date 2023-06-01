
import { Card } from "react-bootstrap"
import colornews from "../static/img/colornews.png"
import paperboy from "../static/img/paperboy.png"
import Button from 'react-bootstrap/Button';

const cardText = {
    color:"red",
    fontSize: "40px"
}

const buttonText = {
    color:"black",
    fontSize: "18px"
}

export const Header = () => {
    return (
        <Card className="title.card bg-dark text-white">
            <Card.Img src={colornews} alt="Comic Chaos"/>
            <Card.ImgOverlay>
                <Card.Title className="hero-title text-center "><img src={paperboy} height="300px"/></Card.Title>
                <Card.Text style={cardText} className="hero-text text-center">
                    DISCOVER - EXPLORE - STAY INFORMED<br/><br/>
                    <Button variant="outline-danger" style={buttonText}>Sign In</Button>{' '}  
                    <Button variant="outline-danger" style={buttonText}>Register</Button>{' '}
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}








  
  
  
  
  
  