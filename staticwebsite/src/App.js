import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';

function TypewriterWithStoppedCursor({ text, onComplete }) {
  const [isTypingDone, setIsTypingDone] = useState(false);

  return (
    <div className={`typewriter-wrapper ${isTypingDone ? 'typing-done' : ''}`}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(text)
            .callFunction(() => {
              setIsTypingDone(true);
              onComplete();
            })
            .start();
        }}
        options={{
          cursor: '|',
          delay: 100,
        }}
      />
    </div>
  );
}

function App() {
  const [headingDone, setHeadingDone] = useState(false);

  return (
    <div className="container">
      <h1>
        <TypewriterWithStoppedCursor 
          text="stay tuned..." 
          onComplete={() => setTimeout(() => setHeadingDone(true), 500)}
        />
      </h1>
      {headingDone && (
        <p>
          <Typewriter
            options={{
              strings: ['mottice.io is currently in stealth mode; but don\'t fret, all good things come to those who wait'],
              autoStart: true,
              loop: false,
              delay: 50,
              deleteSpeed: Infinity,
            }}
          />
        </p>
      )}
    </div>
  );
}

export default App;