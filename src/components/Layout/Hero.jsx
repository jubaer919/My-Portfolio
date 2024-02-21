import React from 'react'

function Hero() {
  return (
    <div className="section-container ">
      <div className="section-hero">
        <h4 className="heading-tarsiary">
          <span>Hi,</span>
          <span>my</span>
          <span>name</span>
          <span>is</span>
        </h4>
        <h1 className="heading-primary">
          <span>Jubayer Maruf.</span>
          <span>I craft solutions for the web.</span>
        </h1>
        <p>
        Full Stack Developer, Expertise in Ruby on Rails, Delivering High-Quality Solutions, Personalized Approach for Client Satisfaction.
        </p>
        <div>
          <a href="#work" className='btn-default'>Check out my work</a>
        </div>
      </div>
    </div>
  )
}

export default Hero;
