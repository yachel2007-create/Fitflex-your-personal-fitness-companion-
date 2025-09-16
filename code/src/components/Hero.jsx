import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>FItFlex</h5>
        </span> 
        <h2>Forge Your <b>Fit</b> Legend: Transform Your Body, <b>Conquer</b> Your Life!!</h2>
        <a href="#search"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero