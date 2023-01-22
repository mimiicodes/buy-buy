// import React, {Component} from 'react'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import LittleShop from '../../Components/LittleShop/LittleShop'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.scss'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <LittleShop/>
      <Footer/>
    </div>
  )
}
export default Home