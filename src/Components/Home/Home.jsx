import React from 'react'
import fruitsImage from '../../images/rezel-apacionado-MZfS19xrrz0-unsplash-removebg-preview.png'
import './Home.css'

function Home() {
  return (
    <div className='home-section'>
    <img src={fruitsImage} alt="fruits" />
    <h1><span>THE BEST FOODIE</span> <span>EXPERIENCE</span></h1>
    <h2>NOW IN LONDON</h2>
    </div>
  )
}

export default Home