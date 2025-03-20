// src/pages/Home.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Akula Divya</h1>
          <h2>Support Platform Engineer</h2>
          <p>Experienced in Documentum and Kubernetes with a focus on system reliability and performance optimization.</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/divyaakula28/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/divyaakula28" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="mailto:divya2000akula@gmail.com">
              <FaEnvelope /> Email
            </a>
            <a href="tel:+918688665276">
              <FaPhone /> Call
            </a>
          </div>
          <Link to="/experience" className="cta-button">
            View My Experience <FaArrowRight />
          </Link>
        </div>
      </div>
      
      <div className="skills-section">
        <h2>Skills Highlights</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Documentum</h3>
            <p>Content Server, Architecture, Administration</p>
          </div>
          <div className="skill-card">
            <h3>Kubernetes</h3>
            <p>Pod Management, Troubleshooting, Resource Optimization</p>
          </div>
          <div className="skill-card">
            <h3>Development</h3>
            <p>Python, Django, React, Flask</p>
          </div>
          <div className="skill-card">
            <h3>Monitoring</h3>
            <p>Grafana, Alert Automation, Performance Analysis</p>
          </div>
          <div className="skill-card">
            <h3>IoT</h3>
            <p>Microcontroller Programming, Embedded Systems</p>
          </div>
          <div className="skill-card">
            <h3>AI/ML</h3>
            <p>Generative AI, GitHub Copilot</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;