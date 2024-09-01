import React from 'react';
import Slider from "react-slick";
import '../styles/WhatIReadPage.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import books from '../data/book-metadata.json'; // Importing the books metadata

// Import news and podcast icons
import wsjIcon from '../assets/wsj-icon.png';
import allInPodcastIcon from '../assets/all-in-podcast-icon.jpeg';
import twisIcon from '../assets/twis-icon.jpeg';
import bg2Icon from '../assets/bg2-icon.jpeg';
import lateKickIcon from '../assets/late-kick-icon.jpeg';
import buildingTheBaseIcon from '../assets/building-the-base-icon.jpeg';
import beyondMarketsIcon from '../assets/beyond-markets-icon.jpeg';
import acquiredIcon from '../assets/acquired-icon.jpeg';
import dwarkeshIcon from '../assets/dwarkesh-icon.jpeg';

// import book covers
import chipWar from '../data/books/chip-war.jpg';
import howToSolveIt from '../data/books/how-to-solve-it.jpg';
import hundredYearMarathon from '../data/books/hundred-year-marathon.jpg';
import onward from '../data/books/onward.jpg';
import outlive from '../data/books/outlive.jpg';
import principles from '../data/books/principles.jpg';
import steveJobs from '../data/books/steve-jobs.jpg';
import changingWorldOrder from '../data/books/the-changing-world-order.jpg';
import theEverythingStore from '../data/books/the-everything-store.jpg';
import phoenixProject from '../data/books/the-phoenix-project.jpg';
import rideOfALifetime from '../data/books/the-ride-of-a-lifetime.jpg';
import sitAwareness from '../data/books/situational-awareness.jpg';

const WhatIRead = () => {
  const newsSources = [
    { name: 'The Wall Street Journal', icon: wsjIcon },
    { name: 'All-in Podcast', icon: allInPodcastIcon },
    { name: 'This Week in Startups', icon: twisIcon },
    { name: 'BG2', icon: bg2Icon },
    { name: 'The Late Kick with Josh Pate', icon: lateKickIcon },
    { name: 'Building the Base', icon: buildingTheBaseIcon },
    { name: 'Beyond Markets', icon: beyondMarketsIcon },
    { name: 'Acquired', icon: acquiredIcon },
    { name: 'Dwarkesh Podcast', icon: dwarkeshIcon }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px'
        }
      }
    ]
  };

  const bookCovers = {
    "Chip War": chipWar,
    "How to Solve It": howToSolveIt,
    "The Hundred-Year Marathon": hundredYearMarathon,
    "Onward": onward,
    "Outlive: The Art and Science of Longevity": outlive,
    "Principles": principles,
    "Steve Jobs": steveJobs,
    "The Changing World Order": changingWorldOrder,
    "The Everything Store": theEverythingStore,
    "The Phoenix Project": phoenixProject,
    "The Ride of a Lifetime": rideOfALifetime,
    "Situational Awareness": sitAwareness
  };

  return (
    <div className='what-i-read-container'>
      <div className='narration'>
        <p className='intro'>
          I am a firm believer we are the product of the information we consume and the people we surround ourselves with. That is why I am showing you the information I consume.
          <span className='emphasis emphasis-1'> To give you a glimpse at who I am.</span>
          <span className='emphasis emphasis-2'> How I process the world.</span>
          <span className='emphasis emphasis-3'> How I think.</span>
          <span className='emphasis emphasis-4'> How I act.</span>
        </p>
      </div>
      <div className='news-podcasts-section'>
        <h2 className='section-title'>News & Podcasts</h2>
        <Slider {...settings}>
          {newsSources.map((source, index) => (
            <div key={index} className='news-source-item'>
              <img src={source.icon} alt={source.name} />
              <p>{source.name}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className='books-section'>
        <h2 className='section-title'>Books</h2>
        <div className='books-grid'>
          {books.map((book, index) => (
            <div key={index} className='book-item'>
              <img src={bookCovers[book.name]} alt={book.name} className='book-cover' />
              <div className='book-details'>
                <a href={book.link} target='_blank' rel='noopener noreferrer'>
                  <div className='book-name'>{book.name}</div>
                </a>
                <div className='book-author'>{book.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIRead;
