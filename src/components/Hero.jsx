import React, { useState, useRef, useEffect } from 'react';
import './Hero.css';
import computerGif from '../assets/computer.gif';

const Hero = () => {
  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Refs for touch positions
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  
  // Stats data
  const stats = [
    { value: "Empower", label: "Startups & Innovators" },
    { value: "Build", label: "Impactful Digital Products" },
    { value: "Foster", label: "Meaningful Partnerships" },
    { value: "Drive", label: "Sustainable Growth" }
  ];
  

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const difference = touchStartX.current - touchEndX.current;
    if (difference > 5) {
      // Swipe left - next slide
      setCurrentSlide(prev => (prev === stats.length - 1 ? 0 : prev + 1));
    } else if (difference < -5) {
      // Swipe right - previous slide
      setCurrentSlide(prev => (prev === 0 ? stats.length - 1 : prev - 1));
    }
    
    // Reset touch positions
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-rotate slides (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === stats.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          
          {/* Left Content */}
          <div className="hero-left">
            <h1>
              Crafting Interfaces<br />
              That Move With <span className="highlight">Purpose</span>
            </h1>
            <p className='mb-wire'>
              From wireframes to stunning visuals, we transform your ideas into
              world-class digital experiences that drive results.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Explore Our Work</button>
              <button className="btn-outline">Get in Touch</button>
            </div>
          </div>

          {/* Center GIF */}
          <div className="hero-center">
            <div className="hero-image-container">
              <img src={computerGif} alt="Computer animation" className="hero-gif" />
              <div className="decorative-element top-left"></div>
              <div className="decorative-element bottom-right"></div>
            </div>
          </div>

          {/* Right Content (Stats) */}
          <div className="hero-right">
            <h2 className="sub-heading">Our Mission</h2>
            <div className="stats-container">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`stat-item ${index === currentSlide ? 'active' : ''}`}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            {/* Indicator dots */}
            <div className="stats-indicators">
              {stats.map((_, index) => (
                <div 
                  key={index}
                  className={`stats-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;