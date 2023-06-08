import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <p>&copy; {new Date().getFullYear()} NewsFlow. All rights reserved.</p>
              
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }