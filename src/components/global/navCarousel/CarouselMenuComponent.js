import React, { useState, useCallback, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import './CarouselMenu.css';

const CarouselMenuComponent = ({ setIsMenuOpen }) => {
  const [index, setIndex] = useState(0);
  const numCards = 4; // Numero totale di card

  const cards = [
    { title: 'Home', description: 'Welcome to the homepage', path: '/' },
    { title: 'About Me', description: 'Learn more about me', path: '/aboutme' },
    { title: 'Projects', description: 'Explore my work', path: '/projects' },
    { title: 'Contacts', description: 'Get in touch with me', path: '/contact' }
  ];

  const handleScroll = useCallback((e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      setIndex((prevIndex) => (prevIndex + 1) % numCards);
    } else {
      setIndex((prevIndex) => (prevIndex - 1 + numCards) % numCards);
    }
  }, [numCards]);

  const { transform } = useSpring({
    transform: `rotateY(${index * -45}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className="carousel-container"
      onClick={() => setIsMenuOpen(false)} // Chiude il menu cliccando sul contenitore
    >
      <div className="carousel" onClick={(e) => e.stopPropagation()}>
        <animated.div
          className="carousel-inner"
          style={{
            transform,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.8s ease-out',
            willChange: 'transform',
          }}
          
        >
          {cards.map((card, i) => (
            <animated.div
              key={i}
              className={`carousel-card ${i === index ? 'active' : ''}`}
              style={{
                transform: `rotateY(${i * 45}deg) translateZ(400px)`,
              }}
              onClick={(e) => e.stopPropagation()} // Previene la chiusura quando si clicca su una card
            >
              <Link to={card.path} className="card-link" onClick={()=> setIsMenuOpen(false)}>
                <div className="card-content">
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </Link>
            </animated.div>
          ))}
        </animated.div>
      </div>

      <div className="carousel-controls z-10" onClick={(e) => e.stopPropagation()}>
        <button
          className="carousel-button"
          onClick={() => setIndex((prevIndex) => (prevIndex - 1 + numCards) % numCards)}
        >
          &lt;
        </button>
        <button
          className="carousel-button"
          onClick={() => setIndex((prevIndex) => (prevIndex + 1) % numCards)}
        >
          &gt;
        </button>
      </div>

      <div className="carousel-indicator" onClick={(e) => e.stopPropagation()}>
        {cards.map((_, i) => (
          <div
            key={i}
            className={`indicator-dot ${i === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselMenuComponent;
