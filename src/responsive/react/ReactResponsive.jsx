import React, { useState } from 'react'
import "../../responsive/react/reactResponsive.css"
import { bg1, bg10, bgDeliver, Logo } from '../images'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { TiThMenu } from 'react-icons/ti'
import { MdRestaurantMenu } from 'react-icons/md'

export default function ReactResponsive() {
  const [toggle, setToggle] = useState(false)


  return (
    <>
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#"><img src={Logo} alt="logo" width={"90px"} height={"60px"}/></a>
          </div>
          <TiThMenu className='open-menu' onClick={()=>setToggle(toggle)}/>
          <div className="nav-links-container">
          <MdRestaurantMenu className='close-menu' onClick={()=>setToggle(toggle)} />
            <ul className='nav-links'>
              <li className='nav-lik-items'><a href="#">Blogs<IoIosArrowDown /></a>
              <ul className='dropdown-menu'>
                <li className='dropdown-menu-item'><a href="#">Blog sub 1</a></li>
                <li className='dropdown-menu-item'><a href="#">Blog sub 2</a></li>
                <li className='dropdown-menu-item'><a href="#">Blog sub 3</a></li>
                <li className='dropdown-menu-item'><a href="#">Blog sub 4</a></li>
              </ul>
              </li>
              <li className='nav-lik-items'><a href="#">Project</a></li>
              <li className='nav-lik-items'><a href="#">About Us<IoIosArrowDown /></a>
              <ul className='dropdown-menu'>
                <li className='dropdown-menu-item'><a href="#">About sub 1</a></li>
                <li className='dropdown-menu-item'><a href="#">About sub 2</a></li>
                <li className='dropdown-menu-item'><a href="#">About sub 3</a></li>
                <li className='dropdown-menu-item'><a href="#">About sub 4</a></li>
              </ul>
              </li>
              <li className='nav-lik-items'><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-image">
            <img src={Logo} alt="back ground" />
          </div>

          <div className="hero-content">
            <h1>Hope this satisfy you my client</h1>
            <button>Read More<FaArrowRight /></button>
          </div>
        </div>
    </>
  )
}
