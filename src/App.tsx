
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import Posts from './pages/Posts'
import {Header}  from './components/Header';
import LoginPage from './pages/LoginPage';
// import UserPage from './pages/UserPage';
import News from './pages/LatestNews';
// import { Navbar } from 'react-bootstrap';
import NavbarBootstrap from './components/Navbar';
import HeadlinesContainer from './pages/LatestNews';
 

function App() {
  

  return (
    
    
    <Container className='App'>
    <NavbarBootstrap />
    <Header />
    <HeadlinesContainer />
    
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={ <Posts /> }/>
          <Route path='/posts' element={ <Posts /> }/> */}
          <Route path='/news' element={ <News /> }/>
          <Route path='/login' element={ <LoginPage /> }/>
          {/* <Route path='/user/:username' element={ <UserPage /> } /> */}
          <Route path='*' element={ <Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </Container>

    
  )
}

export default App

