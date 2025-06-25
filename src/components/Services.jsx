// components/Services.jsx
import React from 'react';
import './Services.css';
import webDevGif from '../assets/webdev.gif';
import appDevGif from '../assets/appdev.gif';
import designGif from '../assets/graphic.gif';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites with cutting-edge performance",
      gif: webDevGif,
      side: "right"
    },
    {
      title: "App Development",
      description: "Mobile experiences that users love",
      gif: appDevGif,
      side: "left"
    },
    {
      title: "Graphic Design",
      description: "Visuals that communicate your brand story",
      gif: designGif,
      side: "right"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Solutions crafted to elevate your digital presence
          </p>
        </div>

        {/* Services List */}
        <div className="services-list">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-item ${service.side}`}
            >
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              
              <div className="service-animation">
                <div className="animation-container">
                  <img 
                    src={service.gif} 
                    alt={service.title} 
                    className="service-gif"
                  />
                  <div className="decorative-element top-left"></div>
                  <div className="decorative-element bottom-right"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;