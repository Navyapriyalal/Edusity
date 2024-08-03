import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Program from './components/Programs/Program.jsx'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Program />
      </div>
    </div>
  )
}

export default App
