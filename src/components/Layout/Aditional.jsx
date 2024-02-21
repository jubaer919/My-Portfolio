import React from 'react';
import { FaFolder, FaGithub } from 'react-icons/fa';


function Aditional() {
  return (
    <div className="section-container">
      <div className="section-aditional-project item">
        <div className="Aditional-project-header">
          <h2>Other Noteworthy Projects</h2>
          <p>More projects Comming soon</p>
        </div>

        <div className="card-container">
          <a href="https://helpful-druid-7bccdf.netlify.app/" target='_blank' rel="noreferrer" className="card item">
            <div className="card-link">
              <FaFolder className="card-icon" />
              <a href="https://github.com/jubaer919/weather-app" target='_blank' rel="noreferrer">
                <FaGithub className="card-icon" />
              </a>           
            </div>
            <div className="card-details">
              <h3 className="card-titile">Weather App</h3>
              <p className="card-details">
              The Weather App is a Mobail app designed for Users. Using React redux, enables users to see There local weather.
              </p>
              <div className="card-tech">
                <span>Html</span>
                <span>Css</span>
                <span>React</span>
                <span>Redux</span>
              </div>
            </div>
          </a>

          <a href="https://benawi.github.io/Microverse-Awesome-books/" target='_blank' rel="noreferrer" className="card item">
            <div className="card-link">
              <FaFolder className="card-icon" />
              <a href="https://github.com/jubaer919/awsome-book" target='_blank' rel="noreferrer">
                <FaGithub className="card-icon" />
              </a>
            </div>
            <div className="card-details">
              <h3 className="card-titile">Awesome Books</h3>
              <p className="card-details">
              The Awesome Books is a Web app designed for Users. Using React, enables users to see there books. It's like a library.
              </p>
              <div className="card-tech">
                <span>Html</span>
                <span>Css</span>
                <span>React</span>
              </div>
            </div>
          </a>

          <a href="https://jubaer919.github.io/the-capstone-project/" target='_blank' rel="noreferrer" className="card item">
            <div className="card-link">
              <FaFolder className="card-icon" />
              <a href="https://github.com/jubaer919/the-capstone-project" target='_blank' rel="noreferrer">
                <FaGithub className="card-icon" />
              </a>
            </div>
            <div className="card-details">
              <h3 className="card-titile">Global Summit</h3>
              <p className="card-details">
              The Global Summit App is a web app designed for Users. Using Html Css and JavaScript, enables users to see The Mok design for beatufull design.
              </p>
              <div className="card-tech">
                <span>Html</span>
                <span>Css</span>
                <span>Javascript</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Aditional;
