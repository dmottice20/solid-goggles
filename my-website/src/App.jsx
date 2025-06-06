import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import HomePage from './pages/Home';
import ConnectPage from './pages/Connect';
import InputsPage from './pages/Inputs';
import OutputsPage from './pages/Outputs';
import FusionPage from './pages/Fusion';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <Navbar />
          <main className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/connect" element={<ConnectPage />} />
              <Route path="/inputs" element={<InputsPage />} />
              <Route path="/fusion" element={<FusionPage />} />
              <Route path="/outputs" element={<OutputsPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;