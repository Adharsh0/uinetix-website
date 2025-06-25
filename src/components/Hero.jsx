// components/Hero.jsx
import React from 'react';
import './Hero.css';
import computerGif from '../assets/computer.gif';

const Hero = () => {
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
            <h2 className="sub-heading">Our Impact</h2>
            <div className="stats-container">
              <div className="stat-item">
                <strong>2000+</strong>
                <span>Companies</span>
              </div>
              <div className="stat-item">
                <strong>10+</strong>
                <span>Years Exp.</span>
              </div>
              <div className="stat-item">
                <strong>800+</strong>
                <span>Hours of Digital</span>
              </div>
              <div className="stat-item">
                <strong>150M+</strong>
                <span>in Tracked Revenue</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
