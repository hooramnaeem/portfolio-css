import React from 'react';

function ProjectsSection() {
  const projects = [
    {
      title: 'Digital Clock',
      url: 'https://digital-clock-six-ochre.vercel.app/',
      img: 'images/clockimage2.jpg',
    },
    {
      title: 'Simple Calculator',
      url: 'https://calculator-wheat-rho-14.vercel.app/',
      img: '/images/calculatorimage.jpg',
    },
    {
      title: 'Calendar App',
      url: 'https://calender-app-three.vercel.app/',
      img: '/images/calenderimage.jpg',
    },
    {
      title: 'Static Resume',
      url: 'https://milestone-1-2-bay-omega.vercel.app/',
      img: '/images/resumeimage.jpg',
    },
    {
      title: 'First Website',
      url: 'https://website-nextjs-twcss.vercel.app/',
      img: '/images/websiteimage2.png',
    },
    {
      title: 'Figma',
      url: 'https://my-first-figma-assignment.vercel.app/',
      img: '/images/figma001.png',
    },
  ];

  return (
    <div className="projects-section">
      <h2 className="projects-title">Check Out My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img
              src={project.img}
              alt={project.title}
              className="project-image"
            />
            <div className="project-overlay">
              <span className="project-title">{project.title}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
