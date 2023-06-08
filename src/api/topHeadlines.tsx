
 
async function topHeadlines () {
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
  }
  } catch (error){
    console.error(error)
  }
  }

interface Headline {
  title: string;
}

export default function updateHeadlines(headlines: Headline[]): void {
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