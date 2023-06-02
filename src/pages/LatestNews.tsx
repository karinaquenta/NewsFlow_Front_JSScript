// import Body from '../components/Body';
/*
export default function LatestNews() {
  return (
    <Body sidebar={ false }>
      <h2>Latest News</h2>
      <form action=""></form>
    </Body>
  );
}
*/
import { useEffect, useState } from 'react';
// import { Card } from 'react-bootstrap';
// import callNewsAPI from '../api/NewsAPI';
import HeadlinesContainer from '../components/HeadlinesContainer';
// import NewsAPI from 'newsapi';


export default function LatestNews(): JSX.Element {
  const [headlines, setHeadlines] = useState<any[]>([]);

  useEffect(() => {
/*    const newsapi = new NewsAPI('ca0694f366934abdabf1069229e91858');
    
    newsapi.v2.topHeadlines({
      sources: 'bbc-news,the-verge',
      q: 'bitcoin',
      category: 'business',
      language: 'en',
      country: 'us'
    }).then(response => {
      const fetchedHeadlines = response.articles;
      setHeadlines(fetchedHeadlines);
    }).catch(error => {
      console.error(error);
    });
  */
  
const apiKey = 'ca0694f366934abdabf1069229e91858';
(async ()=> {
const response = await fetch (`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
const data = await response.json()
console.log(data)
setHeadlines(data.articles)
})()   
  }, []);

  return (
    <HeadlinesContainer headlines={headlines} />
  );
}
