import React from 'react';
import rightArrow from '../../../assets/right-arrow.svg';

function MicroverseDetails() {
  return (
    <div>
      <h4 className="company">Mentor <span>@ <a href='https://www.microverse.org/' target='_blank' rel="noreferrer" className="company-link">Microverse</a></span></h4>
      <p className="time-line">July 2023 - Present</p>
      <p className="details-paragraph">
        <img src={rightArrow} alt='right-logo'/>
        <span>Made some great projects and Helped the junior developer approach their problem and solve some algorithm problems.</span>
      </p>
      <p className="details-paragraph">
        <img src={rightArrow} alt='right-logo'/>
        <span>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, and Netlify.</span>
      </p>
      <p className="details-paragraph">
        <img src={rightArrow} alt='right-logo'/>
        <span>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.</span>
      </p>
    </div>
  )
}

export default MicroverseDetails;
