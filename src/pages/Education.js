import React from 'react';
import './Education.css';

const Education = () => {
  const certifications = [
    'Front-End Web Development with React',
    'Programming Essentials in Python',
    'Web Design for Everybody',
    'Internet Of Things (IOT)',
    'Web Development Django',
    'Basics Of AC-DC Drives'
  ];
  
  const achievements = [
    '1st prize in GROUP DISCUSSION (15/09/2017) On the occasion of Engineer\'s Day',
    'Participated in MASTER ORATOR CHAMPIONSHIP',
    'Participated in POLYTECH FEST'
  ];
  
  return (
    <section className="education">
      <h1>Education & Certifications</h1>
      
      <div className="education-timeline">
        <div className="education-item">
          <div className="education-year">2022</div>
          <div className="education-content">
            <h2>B.Tech in Electronics And Communication</h2>
            <h3>Vasireddy Venkatadri Institute Of Technology, Guntur</h3>
            <p>CGPA: 7.8/10</p>
          </div>
        </div>
        
        <div className="education-item">
          <div className="education-year">2019</div>
          <div className="education-content">
            <h2>Polytechnic in Electronics And Communication</h2>
            <h3>Bapatla Engineering College, Bapatla</h3>
            <p>CGPA: 9.4/10</p>
          </div>
        </div>
        
        <div className="education-item">
          <div className="education-year">2016</div>
          <div className="education-content">
            <h2>X (SSC)</h2>
            <h3>Sundeep English Medium School, Chirala</h3>
            <p>CGPA: 9.5/10</p>
          </div>
        </div>
      </div>
      
      <div className="education-sections">
        <div className="internships">
          <h2>Internships</h2>
          <div className="internship-item">
            <h3>MICRO CONTROLLER Programming</h3>
            <h4>Microlink Peripheral Controls (p) Ltd</h4>
            <p className="internship-duration">May 2018 - November 2018</p>
            <p>Design of embedded systems using microcontroller.</p>
          </div>
        </div>
        
        <div className="certifications">
          <h2>Certifications</h2>
          <ul className="certification-list">
            {certifications.map((certification, index) => (
              <li key={index}>{certification}</li>
            ))}
          </ul>
        </div>
        
        <div className="achievements">
          <h2>Achievements</h2>
          <ul className="achievement-list">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;