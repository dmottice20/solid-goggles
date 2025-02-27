import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { MoonIcon, SunIcon } from './Icons';
// Alternative: import ThemeToggle from './ThemeToggle'; 
import { ReactComponent as Logo } from '../assets/logo.svg';
import '../styles/components/Navbar.css';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <a href="#home" className="navbar-brand">
        <Logo className="navbar-logo" /> {/* Replacing <img> with inline SVG */}
      </a>
      <ul className="navbar-menu">
        {/* <li><a href="#home">Home</a></li> */}
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
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
  );
};

export default Navbar;