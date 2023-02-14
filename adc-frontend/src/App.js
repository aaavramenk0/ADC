import './App.css';
import NavBar from './NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Footer from './Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
