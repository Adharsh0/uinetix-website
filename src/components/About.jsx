import React from 'react';
import './About.css';
import { 
  Code2, Rocket, Lightbulb, Zap, Crosshair, Handshake, ArrowRight,
  // Frontend icons
  LayoutTemplate, MonitorSmartphone, Paintbrush, Type,
  // Backend icons
  Server, Cpu, Binary, Database,
  // Mobile icons
  Smartphone, TabletSmartphone, Code,
  // Tools icons
  Wrench, Palette, GitBranch, Flame, Container
} from 'lucide-react';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <div className="section-badge">
            <Code2 className="badge-icon" size={18} />
            About UiNetix
          </div>
          <h2 className="section-title">
            Crafting Digital <span className="highlight">Experiences</span>
          </h2>
          <p className="section-description">
            Passionate developer with a mission to transform ideas into impactful digital solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Side - Story */}
          <div className="about-story">
            <div className="story-card">
              <h3>Our Journey</h3>
              <p>
                Started as a curious developer exploring the endless possibilities of code. 
                What began as simple scripts evolved into crafting comprehensive digital experiences 
                that solve real-world problems.
              </p>
              <p>
                Today, I specialize in building scalable applications, intuitive user interfaces, 
                and robust backend systems that power modern businesses.
              </p>
              <div className="story-highlight">
                <Rocket className="highlight-icon" size={18} />
                Always learning, always building
              </div>
            </div>

            <div className="values-card">
              <h3>Core Values</h3>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">
                    <Lightbulb size={20} />
                  </div>
                  <div className="value-content">
                    <h4>Innovation</h4>
                    <p>Pushing boundaries with creative solutions</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <Zap size={20} />
                  </div>
                  <div className="value-content">
                    <h4>Performance</h4>
                    <p>Optimized code for lightning-fast experiences</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <Crosshair size={20} />
                  </div>
                  <div className="value-content">
                    <h4>Precision</h4>
                    <p>Attention to detail in every line of code</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <Handshake size={20} />
                  </div>
                  <div className="value-content">
                    <h4>Collaboration</h4>
                    <p>Building better solutions together</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Skills & Stats */}
          <div className="about-skills">
            <div className="skills-card">
              <h3>Technical Arsenal</h3>
              <p>Tools and technologies I work with to bring ideas to life</p>
              
              <div className="skills-categories">
                <div className="skill-category">
                  <div className="category-header">
                    <LayoutTemplate size={20} className="category-icon" />
                    <h4>Frontend</h4>
                  </div>
                  <div className="tech-tags">
                    <span className="tech-tag react">
                      <MonitorSmartphone size={16} className="tech-icon" />
                      React
                    </span>
                    <span className="tech-tag">
                      <LayoutTemplate size={16} className="tech-icon" />
                      Next.js
                    </span>
                    <span className="tech-tag tailwind">
                      <Paintbrush size={16} className="tech-icon" />
                      Tailwind
                    </span>
                    <span className="tech-tag">
                      <Type size={16} className="tech-icon" />
                      TypeScript
                    </span>
                  </div>
                </div>
                
                <div className="skill-category">
                  <div className="category-header">
                    <Server size={20} className="category-icon" />
                    <h4>Backend</h4>
                  </div>
                  <div className="tech-tags">
                    <span className="tech-tag node">
                      <Cpu size={16} className="tech-icon" />
                      Node.js
                    </span>
                    <span className="tech-tag">
                      <Binary size={16} className="tech-icon" />
                      Express
                    </span>
                    <span className="tech-tag">
                      <Database size={16} className="tech-icon" />
                      MongoDB
                    </span>
                    <span className="tech-tag">
                      <Database size={16} className="tech-icon" />
                      PostgreSQL
                    </span>
                  </div>
                </div>
                
                <div className="skill-category">
                  <div className="category-header">
                    <Smartphone size={20} className="category-icon" />
                    <h4>Mobile</h4>
                  </div>
                  <div className="tech-tags">
                    <span className="tech-tag flutter">
                      <TabletSmartphone size={16} className="tech-icon" />
                      Flutter
                    </span>
                    <span className="tech-tag">
                      <Smartphone size={16} className="tech-icon" />
                      React Native
                    </span>
                    <span className="tech-tag">
                      <Code size={16} className="tech-icon" />
                      Dart
                    </span>
                  </div>
                </div>
                
                <div className="skill-category">
                  <div className="category-header">
                    <Wrench size={20} className="category-icon" />
                    <h4>Tools</h4>
                  </div>
                  <div className="tech-tags">
                    <span className="tech-tag figma">
                      <Palette size={16} className="tech-icon" />
                      Figma
                    </span>
                    <span className="tech-tag github">
                      <GitBranch size={16} className="tech-icon" />
                      Git
                    </span>
                    <span className="tech-tag firebase">
                      <Flame size={16} className="tech-icon" />
                      Firebase
                    </span>
                    <span className="tech-tag">
                      <Container size={16} className="tech-icon" />
                      Docker
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="stats-showcase">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <div className="cta-card">
            <h3>Let's Create Something Amazing</h3>
            <p>Ready to turn your ideas into reality? Let's collaborate and build something extraordinary together.</p>
            <button className="cta-button">
              Start a Project
              <ArrowRight className="button-arrow" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;