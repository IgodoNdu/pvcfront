import React from 'react'
import aboutImage from '../images/about.png';

function About() {
  return (
    <div id='about'>
      <div className='about-text'>
        <h1>About This Project</h1>
        <p>Another nnukwu nkowa, Another nnukwu nkowa, Another nnukwu nkowa, Another nnukwu nkowa</p>
        <button>Read More!!</button>
      </div>
      <div className='about-image'>
        <img src={aboutImage} alt='' />
      </div>
    </div>
  )
}

export default About
