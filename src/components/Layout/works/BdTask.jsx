import React from 'react';
import rightArrow from '../../../assets/right-arrow.svg';

function BdTask() {
  return (
    <div>
      <h4 className="company">Internship  <span>@ <a href='https://www.bdtask.com/' target='_blank' rel="noreferrer" className="company-link">Bd Task</a></span></h4>
      <p className="time-line">January 2023 - june 2023</p>
      <p className="details-paragraph">
        <img src={rightArrow} alt='right-logo'/>
        <span>Worked with a team of three designers to build a marketing website and e-commerce platform.</span>
      </p>
      <p className="details-paragraph">
        <img src={rightArrow} alt='right-logo'/>
        <span>Helped solidify a brand direction for blistabloc that spans both packaging and web.</span>
      </p>
      <p className="details-paragraph">
        <img src={rightArrow} alt='right-logo'/>
        <span>Interfaced with clients on a weekly basis, providing technological expertise.</span>
      </p>
    </div>
  )
}

export default BdTask;
