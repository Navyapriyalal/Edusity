import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Program from './components/Programs/Program.jsx'
import Title from './components/Title/Title.jsx'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Video from './components/Video/Video.jsx'

const App = () => {
  const [playState,setPlayState] = useState(false);

  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title subTitle={'OUR PROGRAM'} title={'What We Offer'}/>
        <Program />
        <About setPlayState={setPlayState}/>
        <Title subTitle={'GALLERY'} title={'Campus Photos'}/>
        <Campus />
        <Title subTitle={'TESTIMONIALS'} title={'What students says'}/>
        <Testimonials />
        <Title subTitle={'CONTACT US'} title={'Get in Touch'}/>
        <Contact />
        <Footer />
      </div>
      <Video playState = {playState} setPlayState = {setPlayState}/>
    </div>
  )
}

export default App
