import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Price from './pages/Price';
import Discounts from './pages/Discounts';
import Strategy from './pages/Strategy';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/price" element={<Price />} />
          <Route path="/discounts" element={<Discounts />} />
          <Route path="/strategy" element={<Strategy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
