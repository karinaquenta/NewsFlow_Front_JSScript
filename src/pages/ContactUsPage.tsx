import { Col, Container, Row } from 'react-bootstrap';
import ContactUsForm from '../components/ContactUsForm';

export default function ContactUsPage() {
  return (
    <div className="contact-page">
      <Container>
        <Row>
          <Col>
            <h2>Contact Us!</h2>
            <br/>
            <h2>Feel free to send us your suggestions or comments.</h2>
            <br/>
            <ContactUsForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}