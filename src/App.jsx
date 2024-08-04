import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Program from './components/Programs/Program.jsx'
import Title from './components/Title/Title.jsx'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'

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
      </div>
    </div>
  )
}

export default App
