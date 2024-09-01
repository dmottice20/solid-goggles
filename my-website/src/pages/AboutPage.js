import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/AboutPage.css'; // Ensure this is the correct path to your CSS file

const About = () => {
  return (
    <div className="content-container">
      <div className="about-container">
        <h1>About Me</h1>
        {/* Other content of your About Page */}
        
        <div className="look-at-products-link">
          <Link to="/products" className="look-products">
            Let's take a look at some of my products <FaArrowRight className="arrow-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
