import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Me</h3>
          <p><FaPhone /> +91 8688665276</p>
          <p><FaEnvelope /> divya2000akula@gmail.com</p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/divyaakula28/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/divyaakula28" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Akula Divya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;