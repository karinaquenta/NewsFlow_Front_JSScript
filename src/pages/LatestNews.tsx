import { useEffect, useState } from 'react';
import HeadlinesContainer from '../components/HeadlinesContainer';

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
    <div className="ln-page">
    <br/>
    <h1>Latest News</h1>
    <HeadlinesContainer headlines={headlines} />
    </div>
  );
}
