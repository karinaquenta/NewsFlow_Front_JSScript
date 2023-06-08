

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import LoginPage from './pages/LoginPage';
import News from './pages/News';
import LatestNews from './pages/LatestNews';
import UserPage from './components/UserPage';
import AllPosts from './components/Allposts';
import Register from './pages/Register';
import Logo from './components/Logo';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Contact from './pages/ContactUsPage';
import Logout from './components/Logout';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Container className='App'>
      
      <BrowserRouter>
        <Navbar />
        <Logo />
        
        <Routes>
          <Route path='/' element={ <AllPosts /> }/>
          <Route path='/posts' element={ <AllPosts /> }/>
          <Route path='/home' element={ <Home /> }/>
          <Route path='/login' element={ <LoginPage /> }/>
          <Route path='/register' element={ <Register /> }/>
          <Route path='/logout' element={ <Logout />} />
          <Route path='/mypage' element={ <MyPage />} />
          <Route path='/news' element={ <News /> } />
          <Route path='/ln' element={ <LatestNews />} />
          <Route path='/user/:username' element={ <MyPage /> } />
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='*' element={ <Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </Container>

    
  )
}

export default App

