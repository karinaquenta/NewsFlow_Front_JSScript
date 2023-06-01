import { Card } from "react-bootstrap"
import Container from "react-bootstrap/esm/Container"


interface Headline {
    title: string;
    description: string;
    url: string;
  }

interface Props {
    headlines: Headline[];
}

export default function HeadlinesContainer({ headlines }: Props) {
    return (
    <Container>
        <div id="headlines-container">
            {headlines.map((headline, index) => (
                <Card key={index} style={{ width: '18rem', marginBottom: '1rem' }}>
                <Card.Body>
                    <Card.Title>{headline.title}</Card.Title>
                    <Card.Text>{headline.description}</Card.Text>
                    <Card.Link href={headline.url} target="_blank" rel="noopener noreferrer">
                        Read More
                    </Card.Link>
                </Card.Body>
            </Card>
        ))}
        </div>
    </Container>
     );
 }        