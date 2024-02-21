import React, { useEffect, useRef, useState } from 'react';

import '../../App.css';
import logo from '../../assets/logo.svg';

function Navbar() {
  const ulRef = useRef([]);
  const headerRef = useRef(null);
  const [prevScrollPos, setPrevScrollPoss] = useState(window.pageYOffset);
  const [visiable, setVisiable] = useState(true);

  function handleClick () {
    const header = document.querySelector('.header');
    const body = document.body;

    header.classList.toggle('active');
    if (header.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
  }

  const handleOverlayClick = () => {
    const header = document.querySelector('.header');
    header.classList.remove('active');
    const body = document.body;
    body.style.overflow = 'auto';
  };

  const handleListItemClick = () => {
    const header = document.querySelector('.header');
    header.classList.remove('active');
    const body = document.body;
    body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScrool = () => {
      const currentScrollPos = window.pageYOffset;
      setVisiable(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPoss(currentScrollPos)
    }

    window.addEventListener('scroll', handleScrool);
    return () => window.removeEventListener('scroll', handleScrool);
  }, [prevScrollPos]);

  const animateLi = (li, index) => {
    li.style.opacity = '0';
    li.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      li.style.opacity = '1';
      li.style.transform = 'translateY(0)';
    }, 100 * index);
  };


  useEffect(() => {
    ulRef.current.forEach((ul, index) => {
      const listItems = ul.querySelectorAll('li');
      listItems.forEach((li, liIndex) => {
        animateLi(li, liIndex);
      });
    });
  }, [])

  return (
    <header className={`header ${visiable ? 'visible' : 'hidden'}`} ref={headerRef}>
        <nav className="nav">
          <div className="overlay" onClick={handleOverlayClick} />
          <div className="brand"> 
            <img src={logo} alt="brand logo" className="logo" />
          </div>

          <ul className="nav-ul" ref={el => (ulRef.current[0] = el)}>
            <li><a href="#about" onClick={handleListItemClick}><span>01. </span>About</a></li>
            <li><a href="#experiences" onClick={handleListItemClick}><span>02. </span>Experience</a></li>
            <li><a href="#work" onClick={handleListItemClick}><span>03. </span>Work</a></li>
            <li><a href="#get-in-tuch" onClick={handleListItemClick}><span>04. </span>Contuct</a></li>
            <li><a href="https://docs.google.com/document/d/1ArHsdT0tzjN_nS0rhq3TWzjxkTk8n3F8ybM2rRFIl28/edit?usp=sharing" target='_blank' rel="noreferrer" className="nav-btn">Resume</a></li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            <div className="span-burger burger-1"></div>
            <div className="span-burger burger-2"></div>
            <div className="span-burger burger-3"></div>
          </div>
        </nav>
    </header>
  )
}

export default Navbar;
