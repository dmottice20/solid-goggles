import React, { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import '../styles/pages/Home.css';

const HomePage = () => {
  const [leftText, setLeftText] = useState('');
  const [rightText, setRightText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isLeftDone, setIsLeftDone] = useState(false);

  useEffect(() => {
    const leftTextToType = "Howdy, 🤠";
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
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [isLeftDone]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const fullpageOptions = {
    scrollingSpeed: 1000,
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: true,
    slidesNavigation: true,
    controlArrows: true,
    anchors: ['home', 'about', 'projects', 'contact'],
    menu: '#menu',
    css3: true,
    fitToSection: true,
    scrollBar: false,
    autoScrolling: true,
    scrollHorizontally: false,
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 15,
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    lazyLoading: true,
    licenseKey: 'YOUR_KEY_HERE',
    fitToSection: true,
    fitToSectionDelay: 300,
    continuousVertical: false,
    scrollOverflow: false,
    scrollOverflowReset: true,
    scrollOverflowOptions: {
      scrollbars: false,
      mouseWheel: true,
      hideScrollbars: true,
      fadeScrollbars: true,
      preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/ }
    }
  };

  return (
    <ReactFullpage
      {...fullpageOptions}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage">
            <div className="section">
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
            </div>
            <div className="section">
              <div className="about-container">
                <div className="about-content">
                  <h2>A proven team leader integrating technology and AI into organizations.</h2>
                  <div className="about-graphic">
                    <div className="graphic-placeholder">
                      <div className="graphic-circle tech">Tech</div>
                      <div className="graphic-circle leadership">Leadership</div>
                      <div className="graphic-circle management">Management</div>
                      <div className="graphic-circle finance">Finance</div>
                      <div className="graphic-circle defense">Defense</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="stats-container">
                <div className="stats-content">
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-number">5</div>
                      <div className="stat-label">Years</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">12</div>
                      <div className="stat-label">programs</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">67</div>
                      <div className="stat-label">people directly led</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">$125</div>
                      <div className="stat-label">million managed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="cta-container">
                <div className="cta-grid">
                  <div className="cta-card">
                    <div className="cta-content">
                      <p className="cta-description">
                        Stats and platitudes are meaningless. Dive into what makes me think and act the way I do. And how it ties to my output.
                      </p>
                      <a href="/inputs" className="cta-button">
                        Learn more →
                      </a>
                    </div>
                  </div>
                  <div className="cta-card">
                    <div className="cta-content">
                      <p className="cta-description">
                        Seen enough? Reach out and let's start working together to build great products.
                      </p>
                      <a href="/connect" className="cta-button">
                        Connect →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default HomePage;
