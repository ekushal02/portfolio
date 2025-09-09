import { useEffect, useState } from 'react'
import {
  faPython,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faLinux,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I’m Kushal Erramilli, a passionate Software Developer and Data Scientist 
            in training, currently pursuing my Master’s in Data Science. 
            I bring a strong foundation in Computer Science, 
            and was a part of Carrier’s prestigious Engineering Leadership Program, 
            where I’ve worked across domains like embedded systems, data science, and AI-driven analytics.
          </p>
          <p align="LEFT">
            I thrive on solving challenging engineering problems—whether it’s building modular 
            embedded software, designing ETL pipelines for large-scale sensor data, 
            or applying deep learning for real-world applications.
          </p>
          <p>
            Outside of work, I'm a naturally curious, tech geek that loves to learn, 
            whether that's getting more upskilling with AI/ML, fullstack development, 
            or system design.
          </p>

          <p>
            If I had to define myself in one line:
            A friendly problem-solver and lifelong learner, blending engineering rigor with creativity
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faLinux} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faHtml5} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
