
import Posts from './pages/Posts'
import Header from './components/Header'
import List from './components/List'

 

function App() {
  

  return (
    <>
    
  <Header/>
 <List items ={["Search", "Browse","Latest News"]} render = {(item:string)=> <span className="bold">{item}</span>}/>
 <Posts/>
    </>
  )
}

export default App
