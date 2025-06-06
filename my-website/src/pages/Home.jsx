import React, { useState, useEffect } from 'react';
import '../styles/pages/Home.css';

const HomePage = () => {
  const [leftText, setLeftText] = useState('');
  const [rightText, setRightText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isLeftDone, setIsLeftDone] = useState(false);

  useEffect(() => {
    const leftTextToType = "Howdy,";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < leftTextToType.length) {
        setLeftText(leftTextToType.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsLeftDone(true);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (isLeftDone) {
      const rightTextToType = "I'm David";
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex < rightTextToType.length) {
          setRightText(rightTextToType.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 150);

      return () => clearInterval(typingInterval);
    }
  }, [isLeftDone]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="content-container">
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-content">
            <div className="intro-container">
              <div className="intro-left">
                <h1>
                  {leftText}
                  {!isLeftDone && <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>}
                </h1>
              </div>
              <div className="intro-center">
                <div className="profile-image">
                  {/* Add your profile image here */}
                  <img src="/path-to-your-image.jpg" alt="David" />
                </div>
              </div>
              <div className="intro-right">
                <h1>
                  {rightText}
                  {isLeftDone && <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
