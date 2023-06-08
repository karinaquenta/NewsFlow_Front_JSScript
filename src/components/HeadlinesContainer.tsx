import { Card, Col, Row } from "react-bootstrap"
import Container from "react-bootstrap/esm/Container"
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useContext, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {ArticleContext} from "../module/LikedProvider";


export interface Headline {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    isFavorite: boolean;
  }

interface Props {
    headlines: Headline[];
}

export default function HeadlinesContainer({ headlines }: Props) {
    const { likedArticles, setLikedArticles } = useContext(ArticleContext)
    // const [favorites, setFavorites] = useState<string[]>([])

    const toggleFavorite = (index: Headline) => {
        const updatedFavorites = [...likedArticles, index]
        // const headlineId = headlines[index].url

        // if (updatedFavorites.includes(headlineId)){
        //     updatedFavorites.splice(updatedFavorites.indexOf(headlineId),1)
        // }else{
        //     updatedFavorites.push(headlineId)
        // }
        setLikedArticles(updatedFavorites)
    }
    return (
    <Container>
        <Row>
            {headlines.map((headline, index) => (
                <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem', marginBottom: '1rem' }}>
                <Card.Img variant="top" src={headline.urlToImage} />
                <Card.Body>
                    <Card.Title>{headline.title}</Card.Title>
                    <Card.Text>{headline.description}</Card.Text>
                    <Card.Link href={headline.url} target="_blank" rel="noopener noreferrer">
                        Read More
                    </Card.Link>
                    <FavoriteIcon onClick = { () => toggleFavorite(headline)} 
                    style = { { cursor: 'pointer'}} 
                    color = {likedArticles.includes(headline) ? 'error':'inherit'} />
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
    </Container>
     );
 }

