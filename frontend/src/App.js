import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Categories from './components/Categories';
import MainLayout from './components/Layout/MainLayout';
import { BackgroundProvider } from './contexts/BackgroundContext';
import ReviewFlashCards from './pages/ReviewFlashCards';

function App() {
  return (
    <Router>
      <BackgroundProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/review-flashcards" element={<ReviewFlashCards />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </MainLayout>
      </BackgroundProvider>
    </Router>
  );
}

export default App;
