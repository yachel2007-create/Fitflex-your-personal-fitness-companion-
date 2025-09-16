import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/pexels-pixabay-416809.jpg'

const About = () => {
  return (
    <div className='about-container' id='about'>

      <div className="about-image">
          <img src={aboutImg} alt="" />
      </div>

      <div className="about-text">
          <span>
            <div className="about-line" />
            <h5>About Us</h5>
          </span>
          <h3>Welcome to FitFlex – Your Fitness, Your Way </h3>
          <p>At FitFlex, fitness isn’t just a routine — it’s a lifestyle revolution. We blend high-energy workouts with a supportive, all-in community to keep you motivated and moving. Whether you're just starting out or leveling up, every session is a step toward a stronger, more confident you.</p>
      </div>

    </div>
  )
}

export default About