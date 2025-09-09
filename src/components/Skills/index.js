// Skills.js
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import ScrollingIcons from './ScrollingIcons';
import './index.scss';

import resume from '../../assets/resume/Kushal_Erramilli.pdf';

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
            I am a software developer with experience in full-stack development, 
            data science, and machine learning. I work with Python, C++, Java, 
            JavaScript, SQL, and Bash, and have expertise in ML/DL, anomaly detection, 
            and model explainability (SHAP).
          </p>

          <p>
            I build scalable web and backend applications using Node.js, Express.js, 
            Next.js, and Flask, work with databases like PostgreSQL and MySQL, and 
            create visualizations with Matplotlib, Seaborn, and Tableau. 
            I also have experience in embedded systems, including C, Embedded Linux, 
            and Wi-Fi driver integration.
          </p>


          <p>
            For more information refer my resume:
          </p>
          {/* ✅ Use imported PDF as href */}
          <a
            href={resume}
            className="flat-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
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
