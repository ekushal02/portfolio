// Portfolio.js
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import proj1 from '../../assets/images/proj1.png';
import proj2 from '../../assets/images/proj2.png';
import proj3 from '../../assets/images/proj3.png';
import './index.scss'; // Create a new SCSS file for styling

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      image: proj1, // Replace with the actual image path
      demoLink: 'https://e-commerce-smj1.onrender.com/', // Add demo link
      githubLink: 'https://github.com/ekushal02/E-Commerce/tree/master', // Add GitHub link
    },
    {
      id: 2,
      title: 'Project 2',
      image: proj2, // Replace with the actual image path
      demoLink: 'https://movix-blush-nu.vercel.app/', // Add demo link
      githubLink: 'https://github.com/ekushal02/Movix', // Add GitHub link
    },
    {
      id: 3,
      title: 'Project 3',
      image: proj3, // Replace with the actual image path
      demoLink: 'https://6566317137cdae006f14b070--admirable-kringle-ae45b1.netlify.app/', // Add demo link
      githubLink: 'https://github.com/ekushal02/Fitness', // Add GitHub link
    },
  ];

  return (
    <>
      <div className="container portfolio-page">
        <div className="animated-heading">
          <h1>
            <span className={letterClass}>Projects</span>
          </h1>
        </div>
        <div className="tiles-container">
          {projects.map((project) => (
            <div key={project.id} className="project-tile">
              <div className="tile-content">
                <img src={project.image} alt={project.title} />
                <div className="button-container">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <button>Demo</button>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <button>GitHub</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
