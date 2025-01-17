import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import './NavBar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

const NavBar = () => {
  const [sticky,setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobilemenu , setMobilemenu] = useState(false)

  const togglemenu = () => {
    mobilemenu ? setMobilemenu(false) : setMobilemenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt='' className='logo'/>
      <ul className={mobilemenu ? '' : 'hide-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-250} duration={500} >Program</Link></li>
        <li><Link to='about' smooth={true} offset={-130} duration={500} >About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-250} duration={500} >Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-240} duration={500} >Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-230} duration={500} ><button className='btn'>Contact us</button></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={togglemenu}/>
    </nav>
  )
}

export default NavBar
