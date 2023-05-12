import React from 'react'
import '../styles/header.css'
import logo from '../../../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
export const Header = () => {
  return (
   <div className = 'w-full px-14 py-6 top-0 left-0 absolute flex flex-row align-center justify-between' id='container'>
   <Image src={logo} alt ="logo image" className='logoImage' />
   <nav className=' flex flex-row justify-evenly items-center  w-2/4 nav-section'>
    <h1 className='navText'>Menu</h1>
    <h1 className='navText'>the experience</h1>
    <h1 className='navText'>catering</h1>
    <h1 className='navText'>contact us</h1>
    <h1 className='nav-btn'>order online</h1>
   </nav>
   </div>
  )
}
