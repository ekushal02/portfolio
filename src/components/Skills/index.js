// Skills.js
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import ScrollingIcons from './ScrollingIcons'; // Import the ScrollingIcons component
import './index.scss';
import { Link } from 'react-router-dom';

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 500);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            Experience in full-stack development including technologies like
            React, HTML, CSS, Javascript, Express, Node.
          </p>
          <p align="LEFT">
            Along with web-development I have developed some projects on
            Image Classification and Object Detection using 
            DeepLearning and Machine Learning concepts.
          </p>
          <p>
            I code in C++ and Python prominently and have knowledge in concepts like
            Data Structures & Algorithms, Relational Database Management System.
          </p>
          <p>
            For more information refer my resume: 
          </p>
          <Link to="https://drive.google.com/file/d/1utgVqj9G9E5UzoQRJAHdA3HkhoT45oQE/view?usp=sharing"
            className="flat-button"
            target="_blank" rel="noopener noreferrer"  // Add these attributes for security
          >
             RESUME
          </Link>
        </div>
        <div className="scroll-container">
          <ScrollingIcons />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
