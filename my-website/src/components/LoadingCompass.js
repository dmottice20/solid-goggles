import React from 'react';
import compassRose from '../assets/compass-rose.png'; // Adjust path as needed
import '../styles/LoadingCompass.css'; // Adjust path as needed

const LoadingCompass = () => {
  return (
    <div className="loading-compass-container">
      <img src={compassRose} alt="Loading..." className="compass-rose" />
    </div>
  );
};

export default LoadingCompass;
