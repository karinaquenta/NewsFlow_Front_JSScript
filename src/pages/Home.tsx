import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import world from '../static/img/world.png'
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="home-container">
      <Container>
        <Row>
          <Col>
            <div className="cta-container">
              <h1>Stay informed with the latest news from around the world!</h1>
              <br/>
              <br/>
              <br/>
              <img src={world} alt="world" />
              <br/>
              <br/>
              <br/>
              <br/>
              <Link to="/ln" className="cta-link">
                <button className="cta-button">View Live Top Headlines</button>
              </Link>
              <Link to="/news" className="cta-link">
                <button className="cta-button">Browse News</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <br/>
              <br/>
              <br/>
              <br/>
             
      <Footer />
    </div>
  );
}