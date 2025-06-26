import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-badge">
            <span className="badge-icon">✉️</span>
            Get in touch
          </div>
          <h2 className="contact-title">
            Contact <span className="contact-highlight">Information</span>
          </h2>
          <p className="contact-subtitle">
            Reach out through these channels
          </p>
        </div>

        <div className="contact-grid">
          {/* Email Card */}
          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope size={24} />
            </div>
            <h3>Email</h3>
            <p className="contact-info">uinetixofficial@gmail.com</p>
            <a href="mailto:uinetixofficial@gmail.com" className="contact-link">
              Send Email
            </a>
          </div>

          {/* Phone Card */}
          <div className="contact-card">
            <div className="contact-icon">
              <FaPhone size={24} />
            </div>
            <h3>Phone</h3>
            <p className="contact-info">+91 9747883713</p>
            <a href="tel:9747883713" className="contact-link">
              Call Now
            </a>
          </div>

          {/* Social Card */}
          <div className="contact-card">
            <div className="contact-icon">
              <FaGithub size={24} />
            </div>
            <h3>Social Media</h3>
            <div className="social-links">
              <a href="#" className="social-icon">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="social-icon">
                <FaGithub size={18} />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;