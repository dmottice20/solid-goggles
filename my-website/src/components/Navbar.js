import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYinYang } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme === 'true' || false;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-container container">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <Link to="/" className="navbar-name">david mottice</Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
          <Link to="/about" onClick={toggleMenu}>about me</Link>
          <Link to="/products" onClick={toggleMenu}>products</Link>
          <Link to="/what-i-read" onClick={toggleMenu}>what i read</Link>
          <Link to="/connect" onClick={toggleMenu}>connect</Link>
        </div>
        <button className="dark-mode-toggle" onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <FontAwesomeIcon
            icon={faYinYang}
            style={{ "--fa-secondary-color": "#1d9a43", fontSize: '1.5rem', color: isDarkMode ? '#EAE7DC' : '#0C234C' }}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
