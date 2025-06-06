import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import '../styles/pages/Home.css';

const HomePage = () => {
  return (
    <div className="content-container">
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Engineering Data Solutions</h1>
            <p>Transforming complex data into actionable insights</p>
          </div>
          <div className="visual-container">
          <div className="rotating-gear">
            <svg width="0" height="0">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
            <FontAwesomeIcon icon={faCog} className="gear-icon" />
          </div>
            <div className="chart-container">
              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
              <div className="bar bar3"></div>
              <div className="bar bar4"></div>
              <div className="bar bar5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
