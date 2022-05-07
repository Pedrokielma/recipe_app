import React from 'react'
import fruitsImage from '../../images/vegetebles.png'
import './Home.css'
import logo from '../../images/stamp.svg'

function Home() {
  return (
    <div className='home-section'>
    <div className='home-div'>
    <img className='fuits-image' src={fruitsImage} alt="fruits" />
    <img className='logo-image' src={logo} alt="logo" />
    <div  className='title'>
    <h1><span className='first-title'>THE BEST FOODIE</span> <span className='second-title'>EXPERIENCE</span></h1>
    <h2>NOW IN LONDON</h2>
    </div>
    </div>
    <div className='request-info'><a href="/">REQUEST INFO</a></div>
    </div>
  )
}

export default Home