import React from 'react';
import '../../App.css';
import rightArrow from '../../assets/right-arrow.svg'
import picture from '../../assets/LvbCfeNI_2x.jpg'

function About() {
  return (
    <div className="section-container">
      <section className="section-about item" id="about">
        <div className="title">
          <h2 className="heading-secondary">
            <span>01. </span>
            About Me
          </h2>
          <div className="title-line" />
        </div>

        <div className="about-des">
          <div className="content">
            <p>
              Hello! My name is Jubayer and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try to make a expense tracker — turns out Completing this project taught me a lot about HTML & CSS!
            </p>
            <p>
              Reflecting on my journey to date, I've had the opportunity to explore various professional environments. My current passion lies in championing accessibility and inclusivity in the products and catering a diverse range of clients. Alongside my career, I've also achieved personal milestones, including earning a BSc in Computer Science from <a href='https://daffodilvarsity.edu.bd/' target='_blank' rel="noreferrer" className="text-link">Daffodil International University</a> and completing the <a href='https://www.microverse.org/' target='_blank' rel="noreferrer" className="text-link">Microverse</a> online full-stack bootcamp.
            </p>
            <p>
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="technology-list">
              <div>
                <img src={rightArrow} alt="arrow" className="right-arrow-img" />
                <span>JavaScript (Es6+)</span>
              </div>
              <div>
                <img src={rightArrow} alt="arrow" className="right-arrow-img" />
                <span>Api</span>
              </div>
              <div>
                <img src={rightArrow} alt="arrow" className="right-arrow-img" />
                <span>React</span>
              </div>
              <div>
                <img src={rightArrow} alt="arrow" className="right-arrow-img" />
                <span>Testing</span>
              </div>
              <div>
                <img src={rightArrow} alt="arrow" className="right-arrow-img" />
                <span>Ruby on Rails</span>
              </div>
              <div>
                <img src={rightArrow} alt="arrow" className="right-arrow-img" />
                <span>Postgresql</span>
              </div>
            </div>
          </div>
          <div className="img-container">
            <img src={picture} alt='profile img' className="profile-picture" />
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default About;
