import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUp, Heart, Code, Coffee, Zap, Target, Users, Globe, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      id: 'connect',
      icon: <Globe className="w-5 h-5" />,
      title: 'Connect',
      items: [
        { icon: <Mail className="w-4 h-4" />, text: 'uinetixofficial@gmail.com', href: 'mailto:uinetixofficial@gmail.com' },
        { icon: <Phone className="w-4 h-4" />, text: '+91 9747883713', href: 'tel:+91 9747883713' },
        { icon: <Phone className="w-4 h-4" />, text: '+91 7907605167', href: 'tel:+91 7907605167' },
        // { icon: <MapPin className="w-4 h-4" />, text: 'Trivandrum', href: '#' }
      ]
    },
    {
      id: 'social',
      icon: <Users className="w-5 h-5" />,
      title: 'Follow',
      items: [
        { icon: <Instagram className="w-4 h-4" />, text: 'Instagram', href: 'https://www.instagram.com/uinetix?igsh=MWJraHR0cjQyMGY0cA==' },
        { icon: <Linkedin className="w-4 h-4" />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/uinetix-solutions-65b436371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
        
      ]
    },
    {
      id: 'work',
      icon: <Target className="w-5 h-5" />,
      title: 'Work',
      items: [
        { icon: <Code className="w-4 h-4" />, text: 'Projects', href: '#projects' },
        { icon: <Zap className="w-4 h-4" />, text: 'Services', href: '#services' },
        { icon: <Heart className="w-4 h-4" />, text: 'About', href: '#about' }
      ]
    }
  ];

  

  return (
    <footer className="footer" id='contact'>
      {/* Animated Background Grid */}
      <div className="footer-grid-bg">
        <div className="grid-pattern" />
      </div>

      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Central Hub */}
          <div className="central-hub">
            
            
            {/* Time Rings */}
            <div className="time-ring time-ring-inner" />
            <div className="time-ring time-ring-outer" />
          </div>

          {/* Orbital Sections */}
          <div className="orbital-sections">
            <div className="sections-grid">
              {footerSections.map((section, index) => (
                <div
                  key={section.id}
                  className={`section-card ${hoveredSection === section.id ? 'section-hovered' : ''}`}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className="section-inner">
                    <div className="section-header">
                      <div className="section-icon-wrapper">
                        {section.icon}
                      </div>
                      <h3 className="section-title1">{section.title}</h3>
                    </div>
                    
                    <div className="section-items">
                      {section.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          className="section-item"
                        >
                          <div className="item-icon">
                            {item.icon}
                          </div>
                          <span className="item-text">{item.text}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Constellation */}
          
          {/* Status Bar */}
          <div className="status-bar">
            <div className="status-grid">
              <div className="status-availability">
                <div className="availability-indicator">
                  <div className="status-dot" />
                  <span className="status-text">Currently Available</span>
                </div>
                <p className="status-subtext">Open for new opportunities</p>
              </div>
              
              <div className="status-time">
                <div className="current-time">
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                <p className="current-date">
                  {currentTime.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' })}
                </p>
              </div>
              
              <div className="status-actions">
                <button onClick={scrollToTop} className="back-to-top-btn">
                  <ArrowUp className="w-4 h-4" />
                  Back to Top
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="bottom-bar">
            <div className="bottom-content">
              <div className="made-with">
                <span>Made with</span>
                <Heart className="heart-icon" />
                <span>and lots of</span>
                <Coffee className="coffee-icon" />
              </div>
              
              <div className="copyright">
                © {new Date().getFullYear()} UiNetix. All rights reserved.
              </div>
              
              <div className="footer-links">
                <a href="#privacy" className="footer-link">Privacy</a>
                <a href="#terms" className="footer-link">Terms</a>
                <a href="#cookies" className="footer-link">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;