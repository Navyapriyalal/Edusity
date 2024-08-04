import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Our mission is to foster a dynamic and inclusive learning environment that empowers students to achieve academic excellence and personal growth. We envision a world where education transforms lives and communities.</p>
        <p>Founded in 1920, our college has a rich history of academic innovation and community engagement. Over the decades, we have earned recognition for our pioneering research, outstanding faculty, and dedicated alumni.</p>
        <p>Located in the heart of the city, our campus features state-of-the-art facilities, including modern classrooms, research labs, and recreational centers. Our beautiful green spaces and cutting-edge technology create an ideal environment for learning and collaboration.</p>

      </div>
    </div>
  )
}

export default About
