import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience">
      <h1>Professional Experience</h1>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">June 2023 - Present</div>
          <div className="timeline-content">
            <h2>Support Platform Engineer</h2>
            <h3>Cognizant</h3>
            <div className="responsibilities">
              <div className="responsibility-area">
                <h4>Documentum Management</h4>
                <ul>
                  <li>Knowledge on Documentum Architecture, Content Server and other Documentum Products.</li>
                  <li>Enabled/disabled DEBUG mode on Web Server and Content Server.</li>
                  <li>Managed search & indexing related issues during migration.</li>
                  <li>Worked on deregister/register dm_type for indexing during migration.</li>
                  <li>Ensured seamless document conversion (e.g., D4N to PDF) using DocShifter.</li>
                </ul>
              </div>
              
              <div className="responsibility-area">
                <h4>Kubernetes Administration</h4>
                <ul>
                  <li>Diagnosed and resolved pod failures, resource limitations, and probe failures.</li>
                  <li>Monitored and optimized disk usage, memory consumption, and CPU usage of Kubernetes nodes.</li>
                  <li>Performed troubleshooting of cron job failures and process-level resource utilization.</li>
                </ul>
              </div>
              
              <div className="responsibility-area">
                <h4>Performance Optimization</h4>
                <ul>
                  <li>Developed report automation for periodic performance analysis and published results via email.</li>
                  <li>Configured alert automation in Grafana for proactive system monitoring, reducing downtime.</li>
                  <li>Monitored applications for performance issues and worked to solve them.</li>
                </ul>
              </div>
              
              <div className="responsibility-area">
                <h4>Support & Incident Management</h4>
                <ul>
                  <li>Coordinated with other teams to ensure the availability of the Application.</li>
                  <li>Performed and reviewed health checks, identified and resolved issues.</li>
                  <li>Acted on all application level alerts and assisted with service restoration.</li>
                  <li>Represented as POC for backup server from my team.</li>
                  <li>Provided Production Support in terms of incident management.</li>
                </ul>
              </div>
              
              <div className="responsibility-area">
                <h4>Additional Achievements</h4>
                <ul>
                  <li>Participated in the Cognizant fusion hackathon using GitHub Copilot (Season 2).</li>
                  <li>Completed courses on GitHub Copilot (Python & Django), Python Flask, Generative AI fundamentals, SQL.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;