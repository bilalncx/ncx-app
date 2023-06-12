// import React, { useEffect, useState } from 'react';
// import './scroll.css';
// import HeroImage from '../../../images/hero_scroll.png';

// function ImageScrollHome() {
//   const [rotationAngle, setRotationAngle] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
//       const newRotationAngle = Math.min(scrollPos * 0.1, 100);
//       setRotationAngle(newRotationAngle);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="scroll_mg">
//       <div className='container'>
//         <div
//             className="bgfv"
//             style={{
//             transform: `perspective(1920px) rotateX(${rotationAngle}deg)`,
//             transition: 'transform 0.5s',
//             }}
//         >
//             <img src={HeroImage} alt="ncx"/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ImageScrollHome;


// import React, { useEffect, useState, useRef } from 'react';
// import HeroImage from '../../../images/hero_scroll.png';
// import './scroll.css';

// function App() {
//   const [rotationAngle, setRotationAngle] = useState(0);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sectionTop = sectionRef.current.getBoundingClientRect().top;
//       const scrollPos = window.innerHeight - sectionTop;
//       const newRotationAngle = Math.min(scrollPos * 0.1, 100);
//       setRotationAngle(newRotationAngle);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="scroll_mg">
//       <section ref={sectionRef} className="container">
//         <div
//           className="image-container"
//           style={{
//             transform: `perspective(1920px) rotateX(${rotationAngle}deg)`,
//             transition: 'transform 0.5s',
//           }}
//         >
//           <img src={HeroImage} alt="ncx"/>
//         </div>
//       </section>
//       {/* More sections */}
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState, useRef } from 'react';
import HeroImage from '../../../images/hero_scroll.png';
import './scroll.css';

function App() {
  const [rotationAngle, setRotationAngle] = useState(0);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const containerBottom = containerRef.current.getBoundingClientRect().bottom;
      const scrollPos = window.innerHeight - sectionTop;
      const newRotationAngle = Math.min(scrollPos * 0.1, 40);
      setRotationAngle(newRotationAngle);

      if (containerBottom <= window.innerHeight) {
        setScrollEnd(true);
      } else {
        setScrollEnd(false);
      }
    };

    setSectionHeight(sectionRef.current.offsetHeight);
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
            ref={containerRef}
            className={`image-container ${scrollEnd ? 'end-scroll' : ''}`}
            style={{
              transform: `perspective(1920px) rotateX(${rotationAngle}deg)`,
              transition: 'transform 2s',
            }}
          >
            <img src={HeroImage} alt="ncx"/>
          </div>
        </section>
        {/* More sections */}
      </div>
    </div>
  );
}

export default App;


