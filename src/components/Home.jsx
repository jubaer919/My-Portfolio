import React, { useState, useEffect } from 'react';
import LoadingAnimation from './Layout/LoadingAnimation';
import Navbar from './Layout/Navbar';
import Scocial from './UI/Scocial';
import Mail from './UI/Mail';
import Hero from './Layout/Hero';
import About from './Layout/About';
import Work from './Layout/Work';
import Project from './Layout/Project';
import Aditional from './Layout/Aditional';
import Contuct from './Layout/Contuct';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 6500);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.item');
      const bottomScreen = window.innerHeight + window.scrollY;

      sections.forEach(section => {
        const { top } = section.getBoundingClientRect();
        const sectionTop = top + window.scrollY;

        if (bottomScreen >= sectionTop + 20) {
          // Trigger animation for this section
          section.classList.add('appear'); // Apply your animation class here
        }
      });
    };

    // Attach scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Navbar />
          <div className="container">
            <Hero />
            <Mail />
            <About />          
            <Work />
            <Project />
            <Aditional />
            <Contuct />
            <Scocial />
          </div>
        </>
      )}
    </div>
  )
}

export default Home;
