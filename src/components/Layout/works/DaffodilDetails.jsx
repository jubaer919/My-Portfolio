import React from 'react';
import rightArrow from '../../../assets/right-arrow.svg';

function DaffodilDetails() {
  return (
    <div>
      <h4 className="company">Project Manager <span>@ <a href='https://daffodilvarsity.edu.bd/' target='_blank' rel="noreferrer" className="company-link">Daffodil University</a></span></h4>
      <p className="time-line">January 2017 - December 2022</p>
      <p className="details-paragraph">
        <img src={rightArrow} alt='right-logo'/>
        <span>Made some great projects and Helped the developer approach their problem and solve some algorithm problems.</span>
      </p>
      <p className="details-paragraph">
        <img src={rightArrow} alt='right-logo'/>
        <span>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, and Netlify.</span>
      </p>
    </div>
  )
}

export default DaffodilDetails;
