
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import Posts from './pages/Posts'
// import {Header,}  from './components/Header';
import LoginPage from './pages/LoginPage';
// import UserPage from './pages/UserPage';
import News from './pages/LatestNews';
// import { Navbar } from 'react-bootstrap';
// import NavbarBootstrap from './components/Navbar';
// import HeadlinesContainer from './pages/LatestNews';
import LatestNews from './pages/LatestNews';
import UserPage from './components/UserPage';
import AllPosts from './components/Allposts';
import Register from './pages/Register';
import Logo from './components/Logo';
import Home from './pages/Home';
// import Header from './components/Header';
// import { Navbar } from 'react-bootstrap';
import Navbar from './components/Navbar'
import Contact from './pages/Contact';
import Logout from './components/Logout';
// import UserPage from '../components/UserPage';
 

function App() {
  return (
    <Container className='App'>
      
    <BrowserRouter>
    <Logo />
    <Navbar />
    
    
        <Routes>
          <Route path='/' element={ <AllPosts /> }/>
          <Route path='/posts' element={ <AllPosts /> }/>
          <Route path='/home' element={ <Home /> }/>
          <Route path='/news' element={ <News /> }/>
          <Route path='/login' element={ <LoginPage /> }/>
          <Route path='/register' element={ <Register /> }/>
          <Route path="/logout" element={<Logout />} />
          <Route path='/ln' element={ <LatestNews /> }/>
          <Route path='/user/:username' element={ <UserPage /> } />
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='*' element={ <Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </Container>

    
  )
}

export default App

