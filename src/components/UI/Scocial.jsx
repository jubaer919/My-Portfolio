import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../../App.css';

function Scocial() {
  return (
    <div className="social-media-container">
      <a href="https://github.com/jubaer919" target="_blank" rel="noreferrer">
        <FaGithub className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/jubaer-maruf/" target="_blank" rel="noreferrer">
        <FaLinkedin className="social-icon" />
      </a>
      <a href="https://twitter.com/jubaer_maruf" target="_blank" rel="noreferrer">
        <FaTwitter className="social-icon" />
      </a>
      <a href="https://github.com/jubaer919" target="_blank" rel="noreferrer">
        <FaInstagram className="social-icon" />
      </a>
      <div className='line'></div>
    </div>
  )
}

export default Scocial;
