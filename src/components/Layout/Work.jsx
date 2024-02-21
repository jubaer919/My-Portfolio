import React, { useState } from 'react';
import '../../App.css';
import DaffodilDetails from './works/DaffodilDetails';
import MicroverseDetails from './works/MicroverseDetails';
import BdTask from './works/BdTask';

function Work() {
  const [selectedLink, setSelectedLink] = useState('link1');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  }

  return (
      <div className="section-container">
        <div className="section-work item" id="experiences">

          <div className="title">
            <h2 className="heading-secondary">
              <span>01. </span>
              Where I’ve Worked
            </h2>
            <div className="title-line" />
          </div>

          <div className="experience">
            <div className="side-bar">
              <ul>
                <li onClick={() => handleLinkClick('link1')} className={selectedLink === 'link1' ? 'active' : ''}>Microverse</li>
                <li onClick={() => handleLinkClick('link2')} className={selectedLink === 'link2' ? 'active' : ''}>Bd Task</li>
                <li onClick={() => handleLinkClick('link3')} className={selectedLink === 'link3' ? 'active' : ''}>Daffodil</li>
              </ul>
            </div>

            <div className="details">
              {selectedLink === 'link1' && <MicroverseDetails />}
              {selectedLink === 'link2' && <BdTask />}
              {selectedLink === 'link3' && <DaffodilDetails />}
            </div>
          </div>
        </div>
      </div>

  )
}

export default Work;
