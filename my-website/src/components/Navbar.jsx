import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { MoonIcon, SunIcon } from './Icons';
// Alternative: import ThemeToggle from './ThemeToggle'; 
import logo from '../assets/logo.svg';
import '../styles/components/Navbar.css';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  console.log("Logo Path: ", logo);
  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
          {/* <span className="brand-text">mottice.io</span> */}
        </div>
        <ul className="navbar-menu">
          {/* <li><a href="#home">Home</a></li> */}
          <li><Link to="/inputs">Inputs</Link></li>
          <li><Link to="/fusion">Fusion</Link></li>
          <li><Link to="/outputs">Outputs</Link></li>
          <li><Link to="/connect">Connect</Link></li>
        </ul>
        
        {/* Option 1: Inline theme toggle */}
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
        
        {/* Option 2: Using the extracted ThemeToggle component 
        <ThemeToggle />
        */}
      </nav>
    </div>
  );
};

export default Navbar;