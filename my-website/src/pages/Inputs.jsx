import React from 'react';
import '../styles/pages/Inputs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast, faMusic, faBook, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import UseSpotify from '../hooks/UseSpotify';
import { AutoScroll, PodcastItem } from '../components/AutoScroll';

const InputsPage = () => {
  const { topPodcasts, loading } = UseSpotify();

  return (
    <div className="content-container">
      <div className="inputs-container">
        <h1>Inputs.</h1>
        <p>A curated collection of content that shapes my thinking.</p>

        {/* Podcasts Section */}
        <div className="input-section">
          <div className="section-header">
            <FontAwesomeIcon icon={faPodcast} />
            <h2>Saved Podcasts</h2>
          </div>
          <div className="podcasts-scroll-container">
            {loading ? (
              <p>Loading Saved Podcasts...</p>
            ) : topPodcasts.length > 0 ? (
              <AutoScroll 
                duration={60} 
                direction="left"
                style={{ padding: '1rem 0' }}
              >
                {topPodcasts.map((podcast) => (
                  <PodcastItem key={podcast.id} podcast={podcast} />
                ))}
              </AutoScroll>
            ) : (
              <p>No saved podcasts found. Try saving some on Spotify!</p>
            )}
          </div>
        </div>

        {/* Music Section */}
        <div className="input-section">
          <div className="section-header">
            <FontAwesomeIcon icon={faMusic} />
            <h2>Music</h2>
          </div>
          <div className="input-grid">
            {/* Add music items here */}
          </div>
        </div>

        {/* Books Section */}
        <div className="input-section">
          <div className="section-header">
            <FontAwesomeIcon icon={faBook} />
            <h2>Books</h2>
          </div>
          <div className="input-grid">
            {/* Add book items here */}
          </div>
        </div>

        {/* News & Articles Section */}
        <div className="input-section">
          <div className="section-header">
            <FontAwesomeIcon icon={faNewspaper} />
            <h2>News & Articles</h2>
          </div>
          <div className="input-grid">
            {/* Add news items here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputsPage;
