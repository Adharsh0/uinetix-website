import React from 'react';
import './Services.css';
import webDevGif from '../assets/web-dev.gif';
import appDevGif from '../assets/app-dev.gif';
import designGif from '../assets/graphic.gif';
import uiuxGif from '../assets/uiux-gif.gif';
import { 
  Code, 
  Cpu, 
  Palette,
  Layout,
  ArrowRight,
  Zap,
  CircleDashed,
  Figma,
  Smartphone
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites with cutting-edge performance and modern technologies",
      gif: webDevGif,
      side: "right",
      Icon: () => (
        <div className="icon-container web-icon">
          <Code size={20} className="main-icon" />
          <CircleDashed size={36} className="orbit-icon" />
        </div>
      )
    },
    {
      title: "App Development",
      description: "Mobile experiences that users love with native performance",
      gif: appDevGif,
      side: "left",
      Icon: () => (
        <div className="icon-container app-icon">
          <Smartphone size={20} className="main-icon" />
          <Zap size={24} className="spark-icon" />
        </div>
      )
    },
    {
      title: "Graphic Design",
      description: "Visuals that communicate your brand story effectively",
      gif: designGif,
      side: "right",
      Icon: () => (
        <div className="icon-container design-icon">
          <Palette size={20} className="main-icon" />
          <div className="paint-splatter"></div>
        </div>
      )
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive interfaces for seamless user journeys",
      gif: uiuxGif,
      side: "left",
      Icon: () => (
        <div className="icon-container uiux-icon">
          <Layout size={20} className="main-icon" />
          <Figma size={24} className="corner-icon" />
        </div>
      )
    }
  ];

  return (
    <section className="services-section" id='services'>
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <div className="section-badge">
            <span className="badge-icon"></span>
            Services
          </div>
          <h2 className="section-title">
            What We <span className="highlight">Deliver</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive digital solutions tailored to transform your vision into reality
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
                <div className="service-header">
                  <service.Icon />
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
              </div>
              
              <div className="service-animation">
                <div className="animation-container">
                  <div className="gif-wrapper">
                    <img 
                      src={service.gif} 
                      alt={service.title} 
                      className="service-gif"
                    />
                  </div>
                  <div className="decorative-ring"></div>
                  <div className="glow-effect"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
};

export default Services;