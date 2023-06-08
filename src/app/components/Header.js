import React from 'react'
import '../styles/header.css'
import logo from '../../../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
export const Header = () => {

const route = usePathname().split('/').join('');


  return (
   <div className = 'w-full px-14 py-6 top-0 left-0 absolute flex flex-row align-center justify-between' id='container'>
   <Image src={logo} alt ="logo image" className='logoImage' />
   <nav className=' flex flex-row justify-evenly items-center  w-2/4 nav-section'>
    <button className='py-2 '  style= {{ borderBottom : route === 'menu' ?  '2px solid #E5BC79' : 'none' }}>
    <Link href="/menu" className='mx-4 navText text-sm' key='menu'>Menu</Link>
    </button>
   
    <button className='py-2 '  style= {{ borderBottom : route === 'experience' ?  '2px solid #E5BC79' : 'none' }}>
    <Link href="experience" className='mx-4 navText text-sm'>the experience</Link>
    </button>
    <button className='py-2 ' style= {{ borderBottom : route === 'catering' ?  '2px solid #E5BC79' : 'none' }}>
    <h1 className='mx -4 navText text-sm'>catering</h1>
    </button>
   
    <h1 className='nav-btn text-sm px-2 py-2'>order online</h1>
 
   </nav>
   </div>
  )
}
