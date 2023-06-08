'use client'

import React, { Fragment } from 'react'
import './style.css'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '../components/Header';
import expbg from '../../../assets/expbg.png'


export default function Menu() {
    return (
        <Fragment>
        <div className='layout'>
            <Header/>
            <div className='heroSection'>
                <h1 className='text-4xl text-white uppercase px-40 heroText '>
                A timeless symphony of bold colors,<br /> Chinese values, and striking prints<br /> reimagined forms the backbone of<br /> this high-quality Cantonese food<br /> restaurant, Royal China.
                </h1>
            </div>
         <div className='overlay' />
         <Image src ={expbg} alt="exp-bg" className='backgroundImage' priority />
        </div>
    </Fragment>
    )
}