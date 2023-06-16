import './App.css';
import NavBar from './NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UAPage from './pages/uaPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Footer from './Footer/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/ua' element={<UAPage/>} />
            <Route path="*" element={<ErrorPage />} />
            
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
