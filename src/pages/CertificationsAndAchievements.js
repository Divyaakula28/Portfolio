// CertificationsAndAchievements.jsx
import React from 'react';
import './CertificationsAndAchievements.css';

function CertificationsAndAchievements() {
  const certifications = [
    {
      id: 1,
      name: "GitHub Copilot (Python & Django)",
      issuer: "GitHub",
      link: "https://drive.google.com/file/d/18sJi8zOb5TwjVc2KSsX1LIvyLNfX1Fmg/view?usp=sharing"
    },
    {
      id: 2,
      name: "Generative AI Fundamentals",
      issuer: "AI Education Platform",
      link: "https://drive.google.com/drive/folders/10dcaBTETJT7fTMiyeyG_wrP1c4uju30k?usp=sharing"
    },
    {
      id: 3,
      name: "SQL",
      issuer: "Database Education",
      link: "https://drive.google.com/file/d/1GvntNFlO4bOHAPUloJ-arRLc6K3BYPbI/view?usp=sharing"
    },
    {
      id: 4,
      name: "Front-End Web Development with React",
      issuer: "Web Development Academy",
      link: "https://www.coursera.org/account/accomplishments/verify/PY9Y3B25FCHL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      id: 5,
      name: "Programming Essentials in Python",
      issuer: "Python Institute",
      link: "https://drive.google.com/file/d/19HDMaQvxdZlq-2E1cGtytl2aEjgPIucx/view"
    },
    {
      id: 6,
      name: "Web Design for Everybody",
      issuer: "Design Institute",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/9LYV2HYSHRQ4"
    },
    {
      id: 7,
      name: "Internet of Things (IoT)",
      issuer: "IoT Academy",
      link: "https://drive.google.com/file/d/1zBhUnzj5gWbsu5UqW2XoONQXgAwFylrX/view"
    },
    {
      id: 8,
      name: "Web Development with Django",
      issuer: "Django Foundation",
      link: "https://drive.google.com/file/d/1Nx8Z-EKJwGvyqG3oq8U1vw8X1vln3Pga/view"
    },
    {
      id: 9,
      name: "Basics of AC-DC Drives",
      issuer: "Engineering Institute",
      link: "https://drive.google.com/file/d/1O9bmYXhRsv9xjHinf1qSp_CV9hFcEhuq/view"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Participant in Cognizant Fusion Hackathon using GitHub Copilot (Season 2)",
      year: "2023",
      link: "https://drive.google.com/file/d/1MKFuZslooAMRxeqOoLvvL3LlynI_BVa-/view"
    },
    {
      id: 2,
      title: "1st Prize in Group Discussion (Engineer's Day – 2017)",
      year: "2017",
      link: "https://drive.google.com/file/d/1OZao56j5KNRsE9AblyV4FtaqHeEHCsXl/view"
    },
    {
      id: 3,
      title: "Finalist in Master Orator Championship",
      year: "2019",
      link: "https://drive.google.com/file/d/1OWWMsbhrT0XU4aL3Kncy1jSOoKVy4F_8/view"
    },
    {
      id: 4,
      title: "Participant in Polytechnic Fest",
      year: "2016",
      link: "https://drive.google.com/file/d/1Opp4oJm0j6naJCUVPbHkRKN7YCCY_bOg/view"
    }
  ];

  return (
    <div className="certifications-achievements-container">
      <h1 className="page-title">Certifications & Achievements</h1>
      
      <section className="certifications-section">
        <h2>Professional Certifications</h2>
        <div className="certifications-grid">
          {certifications.map(cert => (
            <div className="certification-card" key={cert.id}>
              <div className="certification-content">
                <h3>{cert.name}</h3>
                {cert.issuer && <p className="issuer">{cert.issuer}</p>}
              </div>
              <a 
                href={cert.link} 
                className="view-certificate-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="achievements-section">
        <h2 className="section-title">Key Achievements</h2>
        <div className="achievements-list">
          {achievements.map(achievement => (
            <div className="achievement-item" key={achievement.id}>
              <div className="achievement-year">{achievement.year}</div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <a 
                  href={achievement.link} 
                  className="achievement-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CertificationsAndAchievements;