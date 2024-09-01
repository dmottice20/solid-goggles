import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import WhatIReadPage from './pages/WhatIReadPage';
import ConnectPage from './pages/ConnectPage';
import HomePage from './pages/HomePage';
import LoadingCompass from './components/LoadingCompass'; // Import the LoadingCompass component
import './index.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading time or adjust according to actual loading needs

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {isLoading ? (
          <LoadingCompass /> // Show loading animation while loading
        ) : (
          <>
            <Navbar />
            <div className="background"></div>
            <div className="content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/what-i-read" element={<WhatIReadPage />} />
                <Route path="/connect" element={<ConnectPage />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
