import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
      <>
    <nav className='navbar'>
    <section className='section-nav'>
        <p className='nav-items nav-logo'>LOGO</p>
        <p className='nav-items'>ABOUT</p>
        <p className='nav-items'>COMMUNITY</p>
        <p className='nav-items'>LOCATION</p>
        <p className='nav-items'>OUR MANU</p>
        <p className='nav-items'>RECIPES</p>
    </section>
    <section className='section-nav'>
        <p className='nav-items'>CONTACT</p>
        <p className='nav-items'>LOGIN</p>
    </section>
    </nav>
    <nav className='side-navbar'>
    <div>
    <p>epa</p>
       
    </div>

    </nav>
    </>
  )
}

export default Navbar
