import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faPenFancy, 
  faRss,
  faLightbulb 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faXTwitter 
} from '@fortawesome/free-brands-svg-icons';
import '../styles/pages/Outputs.css';

const OutputsPage = () => {
  return (
    <div className="content-container">
      <div className="outputs-container">
        <h1>Outputs.</h1>
        <p>A showcase of my work and thoughts.</p>

        {/* Engineering Portfolio Section */}
        <div className="output-section">
          <div className="section-header">
            <FontAwesomeIcon icon={faCode} />
            <h2>Engineering Portfolio</h2>
          </div>
          <div className="portfolio-grid">
            {/* Portfolio items will go here */}
          </div>
        </div>

        {/* Formal Writings Section */}
        <div className="output-section">
          <div className="section-header">
            <FontAwesomeIcon icon={faPenFancy} />
            <h2>Writings</h2>
            <FontAwesomeIcon icon={faRss} className="rss-icon" />
          </div>
          <div className="writings-list">
            {/* RSS feed items will go here */}
          </div>
        </div>

        {/* Informal Thoughts Section */}
        <div className="output-section">
          <div className="section-header">
            <FontAwesomeIcon icon={faLightbulb} />
            <h2>Musings</h2>
          </div>
          <div className="social-thoughts">
            <div className="platform-section">
              <div className="platform-header">
                <FontAwesomeIcon icon={faLinkedin} />
                <h3>LinkedIn</h3>
              </div>
              <div className="thoughts-list">
                {/* LinkedIn posts will go here */}
              </div>
            </div>
            <div className="platform-section">
              <div className="platform-header">
                <FontAwesomeIcon icon={faXTwitter} />
                <h3>X / Twitter</h3>
              </div>
              <div className="thoughts-list">
                {/* Twitter/X posts will go here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputsPage;