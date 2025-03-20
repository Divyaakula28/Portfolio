// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Divya's Portfolio</Link>
      </div>
      <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`nav ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/education" onClick={() => setIsOpen(false)}>Education</Link></li>
          <li><Link to="/CertificationsAndAchievements" onClick={() => setIsOpen(false)}>Certifications & Achievements</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;