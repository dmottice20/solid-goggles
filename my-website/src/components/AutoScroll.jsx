import React, { useRef, useEffect } from 'react';

function useContinuousScroll(ref, duration, direction = 'left') {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inner = el.querySelector('.inner');
    if (!inner) return;

    const contentWidth = inner.scrollWidth / 2;
    let scrollPos = direction === 'left' ? 0 : contentWidth;
    let lastTime = performance.now();
    let rafId;

    const step = (time) => {
      const delta = time - lastTime;
      lastTime = time;
      const movement = (contentWidth / (duration * 1000)) * delta;
      
      // Update scroll position based on direction
      if (direction === 'left') {
        scrollPos = (scrollPos + movement) % contentWidth;
      } else {
        scrollPos = (scrollPos - movement + contentWidth) % contentWidth;
      }
      
      el.scrollLeft = scrollPos;
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [ref, duration, direction]);
}

export const AutoScroll = ({ 
  children, 
  duration = 20, 
  direction = 'left',  // Add direction prop
  style 
}) => {
  const containerRef = useRef(null);
  useContinuousScroll(containerRef, duration, direction);

  return (
    <div
      ref={containerRef}
      style={{ overflow: 'hidden', whiteSpace: 'nowrap', ...style }}
    >
      <div className="inner" style={{ display: 'inline-flex' }}>
        {children}
        {children}
      </div>
    </div>
  );
};

export const PodcastItem = ({ podcast }) => (
  <div className="podcast-card">
    <a href={podcast.external_urls.spotify} target="_blank" rel="noopener noreferrer">
      <img 
        src={podcast.images[0]?.url} 
        alt={podcast.name} 
        className="podcast-image"
      />
      <p className="podcast-title">{podcast.name}</p>
    </a>
  </div>
); 