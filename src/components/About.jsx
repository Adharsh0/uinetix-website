import React, { useState, useEffect } from 'react';
import { Code2, Lightbulb, Zap, Crosshair, Handshake } from 'lucide-react';
import './About.css';

const About = () => {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    { icon: Lightbulb, title: "Innovation", desc: "Pushing boundaries with creative solutions" },
    { icon: Zap, title: "Performance", desc: "Optimized code for lightning-fast experiences" },
    { icon: Crosshair, title: "Precision", desc: "Attention to detail in every line of code" },
    { icon: Handshake, title: "Collaboration", desc: "Building better solutions together" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="breaking-wrapper1">
      <section className="hero-section1" id='about'>
        <div className="hero-diagonal1"></div>
        <div className="hero-content1">
          <div className="hero-left1">
            <div className="floating-badge1">
              <Code2 size={18} />
              UiNetix Digital Craftsman
            </div>
            <h1 className="hero-title1">
              Breaking<br /><span className="highlight">Boundries</span>
            </h1>
            <p className="hero-subtitle1">
              Where conventional design meets rebellious innovation. I don't just build applications—I craft digital experiences that challenge the status quo.
            </p>
          </div>

          <div className="hero-right1">
            <div className="values-orbit1">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className={`value-node1 ${activeValue === index ? 'active' : ''}`}>
                    <Icon size={24} />
                  </div>
                );
              })}
              <div className={`value-info1 ${activeValue !== -1 ? 'active' : ''}`}>
                <div className="value-title1">{values[activeValue]?.title}</div>
                <div className="value-desc1">{values[activeValue]?.desc}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
