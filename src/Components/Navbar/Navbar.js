import React from 'react'
import './Navbar.scss'
import {BsCart4} from 'react-icons/bs'
import {SiInfiniti} from 'react-icons/si'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
            <NavLink to='/' className="navlink brand-name"><SiInfiniti/>&nbsp;buy-buy</NavLink>
            <NavLink to='/' className="navlink cartlink"><BsCart4/></NavLink>
    </nav>
  )
}

export default Navbar