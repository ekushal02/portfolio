// ScrollingIcons.js
import React, { useState, useEffect } from 'react';
import './ScrollingIcons.scss';
import HTML from '../../assets/images/logo1.png';
import CSS from '../../assets/images/logo2.png';
import JS from '../../assets/images/logo3.png';
import REACT from '../../assets/images/logo4.png';
import C from '../../assets/images/logo5.png';
import PYTHON from '../../assets/images/logo6.png';
import SQL from '../../assets/images/logo7.png';
import LINUX from '../../assets/images/logo8.png';
import JAVA from '../../assets/images/logo9.png';
import GIT from '../../assets/images/logo10.png';

const ScrollingIcons = () => {
  const [images, setImages] = useState([
    HTML,
    CSS,
    JS,
    REACT,
    C,
    PYTHON,
    SQL,
    LINUX,
    JAVA,
    GIT,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prevImages) => {
        const newImages = [...prevImages];
        const shiftedImage = newImages.shift();
        newImages.push(shiftedImage);
        return newImages;
      });
    }, 1500); // Change the interval as needed (3 seconds in this case)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scrolling-icons">
      <div className="scroll-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="icon"
            // Add hover effect styles here
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingIcons;
