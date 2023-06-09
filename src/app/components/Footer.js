
import React from 'react'
import '../styles/footer.css'
import Link from 'next/link'
import footerBg from '../../../assets/footerBg.png'
import up from '../../../assets/up.png'
import Image from 'next/image'
import fb from '../../../assets/fb.png'
import ig from '../../../assets/ig.png'
import tw from '../../../assets/tw.png'
import yt from '../../../assets/yt.png'

const Footer = () => {

  const goToTop = () => {

    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
};

   
  return (
    <div className=' flex items-center justify-center w-full h-auto pb-10 container1'>
        <div className='flex flex-col justify-start items-start inner-container'>
        <div className='flex flex-row justify-between items-center px-10 pt-20 py-10 w-full'>
            <h1 className='contact-us-header text-6xl uppercase'>contact us</h1>
            <button className='flex items-center justify-end' onClick={goToTop}>
            <Image src ={up} alt="up-arrow" className='upArrow'  />
            </button>
           
        </div>
        <div className='w-full h-64 flex flex-row justify-start items-start mid-section'>
            <section className ="flex h-full w-2/5 flex-col items-start pl-4 ">
                <h1 className='text-xl location-title uppercase headers mt-8 '>location</h1>
                <h1 className=' text-base location-title mt-24'>LG03, The Chanakya Mall, Chanakyapuri, New <br />Delhi, Delhi, 110021, India.<br />
New Delhi
01169020000</h1>
            </section>
            <section className ="flex h-full w-2/5 flex-col pl-4 ">
                <h1 className='text-xl location-title uppercase headers ml-7 mt-8'>Contact us</h1>
                <h1 className='text-base location-title mt-24 infoText'>
                info@royalchinadelhi.com<br />
Home Delivery - 011 49818000<br />

Table Reservation - 011 69020000
                </h1>
            </section>
            <section className ="flex h-full w-1/5  flex-col px-12 items-end justify-evenly">
            <Image src ={fb} className=' w-4 h-8 mr-1' alt="fb" />
            <Image src ={ig} className='w-6 h-6' alt="ig" />
            <Image src ={tw} className='w-6 h-5' alt="tw" />
            <Image src ={yt} className='w-7 h-5' alt="yt" />
            </section>

</div>
        </div>
        <Image src={footerBg} alt="background Image" className="backgroundImage1" />
    </div>
  )
}

export default Footer;