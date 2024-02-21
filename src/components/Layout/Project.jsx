import React from 'react';
import '../../App.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import CarRental from '../../assets/CarRental.PNG';
import Ba from '../../assets/BA.PNG';
import STH from '../../assets/STH.PNG';

function Project() {
  return (
    <div className="section-container">
      <div className="section-project item" id="work">
        <div className="title">
          <h2 className="heading-secondary">
            <span>01. </span>
            Some Things I’ve Built
          </h2>
          <div className="title-line" />
        </div>

        <div className="terget-project">
          <div className="project item">
            <div className="project__img-container">
              <img src={CarRental} alt='car img' className="project-img" />
            </div>
            <div className="project-description">
              <div className="project-discription-container">
                <h3 className="project-theam">Featured Project</h3>
                <h2 className="project-title">Car Rental</h2>
                <p className="project-details">The Car Rental Management System is a web app designed for both customers and admins. Using Ruby on Rails for the backend and React for the frontend, it enables users to browse cars, make reservations, and manage accounts efficiently.</p>
                <p className="project-tecnology">
                  <span>Css</span>
                  <span>React</span>
                  <span>Redux</span>
                  <span>Ruby on Rails</span>
                  <span>Postgresql</span>
                </p>
                <div className="project-link">
                  <a href="https://github.com/sagieramos/Book-an-appointment" target="_blank" rel="noreferrer">
                    <FaGithub className="social-icon" />
                  </a>
                  <a href="https://carental-6rr5.onrender.com/#/login" target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="terget-project">
          <div className="project reverse item">
            <div className="project__img-container">
              <img src={STH} alt='car img' className="project-img" />
            </div>
            <div className="project-description description-reverse">
              <div className="project-discription-container discription-container-reverse">
                <h3 className="project-theam">Featured Project</h3>
                <h2 className="project-title">Space Travelers Hub</h2>
                <p className="project-details">The Space Travelers Hub is a Web app designed for both customers and admins. Using React Redux enables users to Reserve a Rocket or a Mishion, show details of the User Interactions, and manage accounts efficiently.</p>
                <p className="project-tecnology">
                  <span>Html</span>
                  <span>Css</span>
                  <span>React</span>
                  <span>Redux</span>
                  <span>Api</span>
                </p>
                <div className="project-link">
                  <a href="https://github.com/jubaer919/react-group-project" target="_blank" rel="noreferrer">
                    <FaGithub className="social-icon" />
                  </a>
                  <a href="https://jovial-speculoos-333cc4.netlify.app/" target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="terget-project">
          <div className="project item">
            <div className="project__img-container">
              <img src={Ba} alt='car img' className="project-img" />
            </div>
            <div className="project-description">
              <div className="project-discription-container">
                <h3 className="project-theam">Featured Project</h3>
                <h2 className="project-title">Budget App</h2>
                <p className="project-details">The Budget App is a mobile app designed for both customers and admins. Using Ruby on Rails enables users to Keep track of money, which products users spend money on, and manage accounts efficiently.</p>
                <p className="project-tecnology">
                  <span>Html</span>
                  <span>Css</span>
                  <span>Ruby on Rails</span>
                  <span>Postgresql</span>
                </p>
                <div className="project-link">
                  <a href="https://github.com/jubaer919/budget-app?tab=readme-ov-file" target="_blank" rel="noreferrer">
                    <FaGithub className="social-icon" />
                  </a>
                  <a href="https://budget-app-x0v6.onrender.com/" target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;
