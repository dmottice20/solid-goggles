import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/HomePage.css'; // Ensure this is the correct path to your CSS file

const Home = () => {
  return (
    <div className='content-container'>
      <div className="home-container">
        <h1>Home Page</h1>
        {/* Other content of your Home Page */}
        
        <div className="learn-more-link">
          <Link to="/about" className="learn-more">
            Learn More About Me <FaArrowRight className="arrow-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;