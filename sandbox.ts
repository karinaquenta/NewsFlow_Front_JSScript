
const apiKey = 'ca0694f366934abdabf1069229e91858';
(async ()=> {
const response = await fetch (`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
const data = response.json()
console.log(data)
})()
