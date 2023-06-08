// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { NewsComponents } from '../components/NewsContainer';
// import { fetchNews } from '../api/newsapi';

// interface Headline {
//   title: string;
// }

// export const News: React.FC = () => {
//   const [headlines, setHeadlines] = useState<Headline[]>([]);

//   const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const searchInput = document.getElementById('searchInput') as HTMLInputElement;
//     const search = searchInput.value;

//     const articles = await fetchNews(search);
//     setHeadlines(articles);
//   };

//   return (
//     <>
//     <br/>
    
//     <NewsComponents headlines={[]} />
//     </>
//   );
// }

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import HeadlinesContainer from '../components/HeadlinesContainer';
import { Headline } from '../components/HeadlinesContainer'
import { Col, Container, Row } from 'react-bootstrap';


async function fetchNews(search: string): Promise<Headline[]> {
  try {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=ca0694f366934abdabf1069229e91858`, {
      method: 'GET',
    });

    if (res.ok) {
      const data = await res.json();
      const articles = data.articles;
      return articles;
    } else {
      console.log('Error', res.status);
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function NewsContainer(): JSX.Element {
  const [headlines, setHeadlines] = useState<Headline[]>([]);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const search = searchInput.value;

    const articles = await fetchNews(search);
    setHeadlines(articles);
  };

  return (
    <div className="news-page">

          <h1>Search:</h1><br/><br/>
          <h2>Dive into the Latest News!</h2>
          <br/>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="searchForm">
          <Form.Control type="text" id="searchInput" />
        </Form.Group>
        <br/>
        <Button type="submit">Search</Button>
      </Form>
      <br/>
     { headlines ? <HeadlinesContainer headlines={headlines} /> : ''}

    </div>
  
  );
}