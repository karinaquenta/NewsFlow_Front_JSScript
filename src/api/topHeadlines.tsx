import NewsAPI, { NewsApiResponse } from 'newsapi';
//IDK what is going on here but i cant fix this error :( ill try again tomrw
 
async function topHeadlines (){
  try{
  const res = await fetch (`https://newsapi.org/v2/top-headlines?country=us&apiKey=ca0694f366934abdabf1069229e91858`,{
    method: "GET",
  })
  if (res.ok){
    const data = await res.json();
    const articles = data.articles;
    updateHeadlines(articles);
  } else {
    console.log('Error', res.status);
  } catch (error){
    console.error(error)
  }
  }



/*
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('ca0694f366934abdabf1069229e91858');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */


interface Headline {
  title: string;
}

function updateHeadlines(headlines: Headline[]): void {
  const headlinesContainer = document.getElementById('headlines-container');
  if (headlinesContainer) {
    headlinesContainer.innerHTML = '';

    headlines.forEach((headline: Headline) => {
      const headlineElement = document.createElement('div');
      headlineElement.innerText = headline.title;
      headlinesContainer.appendChild(headlineElement);
    });
  }
}