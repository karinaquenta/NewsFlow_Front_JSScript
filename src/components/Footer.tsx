import { Container, Row, Col } from 'react-bootstrap';
import PublicIcon from '@mui/icons-material/Public';
export default function Footer() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <p>&copy; {new Date().getFullYear()} NewsFlow. All rights reserved.</p>
              <PublicIcon/>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }