import React from 'react';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main className="content">
          <h1>Welcome to My App</h1>
          <p>This is a simple Vite + React project with a navbar toggle.</p>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;