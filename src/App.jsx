import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Program from './components/Programs/Program.jsx'
import Title from './components/Title/Title.jsx'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title subTitle={'OUR PROGRAM'} title={'What We Offer'}/>
        <Program />
        <About />
        <Title subTitle={'GALLERY'} title={'Campus Photos'}/>
        <Campus />
        <Title subTitle={'TESTIMONIALS'} title={'What students says'}/>
        <Testimonials />
        <Title subTitle={'CONTACT US'} title={'Get in Touch'}/>
        <Contact />
      </div>
    </div>
  )
}

export default App
