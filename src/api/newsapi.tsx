

export async function fetchNews(search: string) {
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
