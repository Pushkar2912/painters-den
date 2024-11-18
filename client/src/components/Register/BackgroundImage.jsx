import React, { useState, useEffect } from 'react';
import p1 from '../../assets/backgrounImg/p1.jpg';
import p2 from '../../assets/backgrounImg/p2.jpg';
import p3 from '../../assets/backgrounImg/p3.jpg';
import p4 from '../../assets/backgrounImg/p4.jpg';
import p5 from '../../assets/backgrounImg/p5.jpg';
import p6 from '../../assets/backgrounImg/p6.jpg';

const BackgroundImage = ({ children }) => {
  const images = [
    p1,p2,p3,p4,p5,p6
  ]; 

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center opacity-80 transition-all duration-[4000ms] ease-in z-[-1]"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          
        }}
      ></div>

      
      <div className="relative z-1">{children}</div>
    </div>
  );
};

export default BackgroundImage;
