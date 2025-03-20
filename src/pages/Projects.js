import React, { useState } from 'react';
import './Projects.css';

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [expandedProject, setExpandedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "SEM Results Searcher",
      category: "Web Development",
      tech: "Django, Python, HTML,CSS,JavaScript",
      description: "A web application to search and display semester examination results."
    },
    {
      id: 2,
      title: "EAMCET College Search",
      category: "Web Development",
      tech: "Django, Python, HTML,CSS,JavaScript",
      description: "A web application to search colleges based on EAMCET scores and preferences."
    },
    {
      id: 3,
      title: "TV Channel Schedule",
      category: "Web Development",
      tech: "Django, Python, API, HTML,CSS,JavaScript",
      description: "A web application displaying TV channel schedules and program information."
    },
    {
      id: 4,
      title: "Magic Table",
      category: "Web Development",
      tech: "ReactJS, Html,Css,JavaScript",
      description: "An interactive application with filtering and visualization features."
    },
    
    {
      id: 8,
      title: "Secured Q & A expert ",
      category: "Desktop Application",
      tech: "Python, Tkinter",
      description: "A desktop application for data processing and serial devices."
    }
  ];

  const filters = ['All Projects', 'Web Development', 'Desktop Application'];

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="experience-section">
      <h1>My Projects</h1>
      
      <div className="filter-pills">
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-accordion">
        {filteredProjects.map(project => (
          <div 
            key={project.id} 
            className={`project-panel ${expandedProject === project.id ? 'expanded' : ''}`}
            onClick={() => toggleProject(project.id)}
          >
            <div className="panel-header">
              <h3>{project.title}</h3>
              <div className="panel-category">{project.category}</div>
              <div className="expand-icon">{expandedProject === project.id ? '−' : '+'}</div>
            </div>
            
            <div className="panel-content">
              <div className="tech-stack">
                <h4>Technologies</h4>
                <div className="tech-chips">
                  {project.tech.split(', ').map(tech => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-description">
                <h4>Description</h4>
                <p>{project.description}</p>
              </div>
              <div className="project-actions">
                <button className="action-button primary">View Demo</button>
                <button className="action-button secondary">Source Code</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;