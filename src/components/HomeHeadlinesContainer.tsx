
import { Card, Col, Row } from 'react-bootstrap';

interface Headline {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

interface Props {
  headlines: Headline[];
}

export default function HomeHeadlinesContainer({ headlines }: Props) {
  const limitedHeadlines = headlines.slice(0, 6); 

  return (
    <Row>
      {limitedHeadlines.map((headline, index) => (
        <Col key={index} sm={12} md={6} lg={4} xl={3}>
          <Card style={{ width: '18rem', marginBottom: '1rem' }}>
            <Card.Img variant="top" src={headline.urlToImage} />
            <Card.Body>
              <Card.Title>{headline.title}</Card.Title>
              <Card.Text>{headline.description}</Card.Text>
              <Card.Link href={headline.url} target="_blank" rel="noopener noreferrer">
                Read More
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}