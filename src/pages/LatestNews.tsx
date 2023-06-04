
import { useEffect, useState } from 'react';
import HeadlinesContainer from '../components/HeadlinesContainer';

// import { Card } from 'react-bootstrap';
// import callNewsAPI from '../api/NewsAPI';
// import NewsAPI from 'newsapi';


export default function LatestNews(): JSX.Element {
  const [headlines, setHeadlines] = useState<any[]>([]);

  useEffect(() => {
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
