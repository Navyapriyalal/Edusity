import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Program from './components/Programs/Program.jsx'
import Title from './components/Title/Title.jsx'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title subTitle={'OUR PROGRAM'} title={'What We Offer'}/>
        <Program />
      </div>
    </div>
  )
}

export default App
