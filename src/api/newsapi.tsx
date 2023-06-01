
/* NEED TO UPDATE UNABLE TO MAKE IT WORK YET :(
async function callNewsAPI(){
    const NewsAPI = import('newsapi');
    const newsapi = new NewsAPI('ca0694f366934abdabf1069229e91858');

newsapi.v2.everything({
    q: 'bitcoin',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
    from: '2017-12-01',
    to: '2017-12-12',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
  }).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
 
  });
     */
  