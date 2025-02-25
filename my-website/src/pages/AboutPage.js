import React from 'react';
import Timeline from '../components/Timeline';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/AboutPage.css'; // Ensure this is the correct path to your CSS file

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      {/* ... other content */}
      <h2>Work Experience</h2>
      <Timeline />
      {/* ... other content */}
      <div className="look-at-products-link">
        <Link to="/products" className="look-products">
          Let's take a look at some of my products <FaArrowRight className="arrow-icon" />
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
