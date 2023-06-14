import React, { useEffect, useState, useRef } from 'react';
import './scroll.css';
import HeroImage from '../../../images/hero_scroll.png';
import mobilepic from '../../../images/mbl_features.png';

function App() {
  const [rotationAngle, setRotationAngle] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

      if (sectionTop <= 300) {
        const newRotationAngle = Math.min((scrollPos - sectionTop + 200) * 0.1, 40);
        setRotationAngle(newRotationAngle);
      } else {
        setRotationAngle(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll_mg">
      <div className='container'>
        <section ref={sectionRef} className="scroll-section">
          <div
            className="image-container"
            style={{
              transform: `perspective(1920px) rotateX(${rotationAngle}deg)`,
              transition: 'transform 2s',
            }}
          >
             <img src={HeroImage} alt="ncx"/>
          </div>
        </section>
        {/* More sections */}
        <div className='mbl__xx'>
          <img src={mobilepic} alt="ncx"/>
        </div>
      </div>
    </div>
  );
}

export default App;


