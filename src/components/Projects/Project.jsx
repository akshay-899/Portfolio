import React from 'react';
import './project.css';
import petbondo from '/assets/petbondo.jpg'
import uhi from '/assets/uhi.jpg'
import deskguard from '/assets/deskguard.jpg'
import jfood from '/assets/jfood.jpg'
import sudoku from '/assets/sudoku.jpg'
import examduty from '/assets/examduty.png'

function Project() {
  const projects = [
    {
      id: 1,
      title: 'Petbondo',
      description: 'Petbondo is an animal adoption platform.',
      imageUrl: petbondo,
      link: 'https://github.com/akshay-899/Petbondo'
    },
    {
      id: 2,
      title: 'UHI',
      description: 'An web application for healthcare management.',
      imageUrl: uhi,
      link: 'https://github.com/akshay-899/UHI'
    },
    {
      id: 3,
      title: 'Desk Guard',
      description: 'A security camera system designed for workspace protection.',
      imageUrl: deskguard,
      link: 'https://github.com/akshay-899/Desk_Guard'
    },
    {
      id: 4,
      title: 'Exam Duty Scheduler',
      description: 'An web application to schedule duty for the faculty.',
      imageUrl: examduty,
      link: 'https://github.com/Mini-Project2024/Exam-Duty-scheduler'
    },
    {
      id: 5,
      title: 'Jfood',
      description: 'A food delivery web application',
      imageUrl: jfood,
      link: 'https://github.com/akshay-899/Jfood'
    },
    {
      id: 6,
      title: 'Sudoku',
      description: 'Sudoku game implementation ',
      imageUrl: sudoku,
      link: 'https://github.com/akshay-899/sudoku'
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-heading">Projects</h1>
        <div className="projects-grid">
          {projects.map(project => (
            <a href={project.link} key={project.id} className="project-card" target="_blank" rel="noopener noreferrer">
              <img 
                src={project.imageUrl}
                alt={`${project.title} Thumbnail`} 
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
  );
}

export default Project;
