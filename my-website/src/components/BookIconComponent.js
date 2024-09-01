// components/BookIconComponent.js
import React from 'react';

const BookIconComponent = ({ name, author, link, cover }) => {
  return (
    <div className="book-icon">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={cover} alt={`${name} cover`} className="book-cover" />
        <div className="book-info">
          <h3>{name}</h3>
          <p>{author}</p>
        </div>
      </a>
    </div>
  );
};

export default BookIconComponent;
