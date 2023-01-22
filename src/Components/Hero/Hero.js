import React from 'react'
import './Hero.scss'
import hero from '../../Images/undraw_shopping_app_flsj2.svg'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-image-div">
        <img src={hero} alt="" className='hero-image'/>
      </div>
      <div className="hero-texts">
        <h1 className="hero-h1">Good quality stuff at buy-buy</h1>
        <p className="hero-desc">Trust us to give you the best experience while attending to your needs and making work easier for you.</p>
        <NavLink to="/shop"><button className='hero-btn'>Buy Now</button></NavLink>
      </div>
    </div>
  )
}

export default Hero