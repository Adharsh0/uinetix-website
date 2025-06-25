// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { 
  Home, 
  UserCircle, 
  Zap, 
  Rocket, 
  MessageSquare, 
  X, 
  Menu,
  Circle
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'About Us', href: '#about', Icon: UserCircle },
    { name: 'Services', href: '#services', Icon: Zap },
    { name: 'Projects', href: '#projects', Icon: Rocket },
    { name: 'Contact', href: '#contact', Icon: MessageSquare }
  ];

  if (isMobile) {
    return (
      <>
        {/* Mobile Floating Action Button */}
        <div className="mobile-nav-container">
          <button 
            onClick={toggleMenu}
            className={`floating-menu-btn ${isMenuOpen ? 'active' : ''}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo Floating */}
          <div className="mobile-logo">
            <Circle size={18} className="logo-icon" />
            UiNetix
          </div>

          {/* Radial Menu */}
          <div className={`radial-menu ${isMenuOpen ? 'open' : ''}`}>
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="radial-menu-item"
                style={{
                  '--item-index': index,
                  '--angle': `${(index * 70) - 110}deg`,
                }}
              >
                <item.Icon size={20} className="item-icon" />
                <span className="item-text">
                  {item.name.split(' ')[0]}
                </span>
              </a>
            ))}
          </div>

          {/* Backdrop */}
          {isMenuOpen && (
            <div 
              className="menu-backdrop"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </>
    );
  }

  // Desktop version
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Side */}
        <ul className="nav-links left">
          <li>
            <a href="#about">
              
              About Us
            </a>
          </li>
          <li>
            <a href="#services">
              
              Services
            </a>
          </li>
        </ul>

        {/* Center Logo */}
        <div className="logo">
          
          UiNetix
        </div>

        {/* Right Side */}
        <ul className="nav-links right">
          <li>
            <a href="#projects">
              
              Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;