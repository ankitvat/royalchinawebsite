'use client'

import React, { Fragment, useEffect } from 'react'
import { Header } from '../components/Header'
import '../styles/index.css';
import Image from 'next/image';
import bg from '../../../assets/bg.png';
import heroLogo from '../../../assets/herologo.png';
import aboutUs from '../../../assets/aboutus.svg';
import images from '../../../assets/images2.png';
import ReactDatePicker from 'react-datepicker';
import jhaalar from '../../../assets/jhaalar.png';
import awards from '../../../assets/awards.png';
import lota from '../../../assets/lota.png';
import food from '../../../assets/food.png';
import Footer from '../components/Footer';
export const Index = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime , setSelectedTime] = React.useState('');
  const [os , setOs] = React.useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const goToTop = () => {

    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
};


  function osfunction ()
{
    let os = navigator.userAgent;
    let finalOs="";
    if (os.search('Windows')!==-1){
        finalOs="Windows";
    }
    else if (os.search('Mac')!==-1){
        finalOs="MacOS";
    }
    else if (os.search('X11')!==-1 && !(os.search('Linux')!==-1)){
        finalOs="UNIX";
    }
    else if (os.search('Linux')!==-1 && os.search('X11')!==-1){
        finalOs="Linux"
    }
    
    return finalOs;

}

useEffect (() => {
  const res = osfunction();
  setOs(res);

},[]);
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (

    <Fragment>
    <div className='layout'>
               <Header />
               <div className=' w-full heroSection'>
          
                <Image src={heroLogo} alt="logo image" className='logoMain' priority={true} />
              
               <div className='flex flex-row justify-around w-1/3 my-24'>
                <h1 className='hero-text text-xl white'>reservation</h1>
                <h1 className='hero-text text-xl'>delivery</h1>
               </div>
               <div className='flex flex-row items-center w-2/3 dateTime'>
              
            <div className='flex flex-row justify-between items-center h-10 px-4 left-box'>
              <h1 className = "date-text text-xs">select date </h1>
           {/* <ReactDatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} /> */}
            </div>
            <div className='flex flex-row items-center h-10 px-4 right-box'>
            <h1 className = "date-text text-xs">time</h1>
            {/* <input
          type="time"
          id="timeInput"
          placeholder='Time'
          value={selectedTime}
          onChange={handleTimeChange}
        /> */}
            </div>
               </div>
               
               </div>
              
        <div className='overlay' />
      
        <Image src = {bg} alt="background Image" className='backgroundImage' priority />
       
        <div className='flex flex-row w-full skipContainer'>
        <h1 className='hero-text mx-auto text-base skipText'>Skip to see menu</h1>
        </div>

    </div>
    <section className='about-us'>
        <Image src={aboutUs} alt='about-us' className='aboutUsImg' />
          <div className='flex flex-col w-1/2 aboutUsInner'>
            <h1 className='aboutUsHeader text-6xl mx-10'>about us</h1>
            <h2 className='aboutUsText text-xl'>Royal China
             is all about Chinese regal dining serving 
             a range of Chinese cuisines and beverages.
              Combining the essence and perfect taste of Chinese Cuisine, 
              we aim to educate and promote. The Gastronomy of Chinese food and culture.
               The Restaurant is located in Nehru place (Eros Towers) South Delhi. 
               State-of-the-art interior, chic dining and ambience with amazing view of Delhi
                from the 16th floor will transport our guests into a state of comfort and bliss.
</h2>
       
          <div className='explore-btn w-40 h-10'>
            <h1 className='explore-text text-base'>explore</h1>
         
          </div>
          </div>
    </section>
    <Image src = {images} alt ='images' className='imagesGallery' />
    <section className='jhaalarContainer'>
    <Image src = {jhaalar} alt="jhaalar" className='jhaalar' />
    <h1 className='white-text text-4xl'>
    A timeless symphony of bold colors, Chinese values, and striking prints reimagined forms the backbone of this high-quality Cantonese food restaurant, Royal China.
    </h1>
    </section>
    <Image src = {awards} alt= "awards" className='imagesGallery' />
    <div style = {{height: '14vh' , backgroundColor:'black'}}/>
    <section className='fine-dine-section'>
        <div style = {{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          width:'100%',
          height:'15%',
          position: 'relative',
        }}>
          <Image src = {lota} alt ="lota" className= 'lota' />
          <h1 className = "white-text1 text-3xl">A fine dining chinese restaurant & bar.</h1>
        </div>
        <div className='flex flex-row items-center food'>
          <Image src ={food} alt ="food" className="foodImg" />
          <h1 className ="hero-text foodText">
          From our famous chili oil to being the first to start authentic dimsums in Delhi that now range to more than 50 fillings and cater to all food pallets.

          </h1>
        </div>
        <div className='location-box'>
          <div className='location'>
          <div className='location-left flex flex-col items-start justify-start px-10 py-20'>
          <h1 className='location-header text-7xl'>Locate Us</h1>
          <h1 className="locationText text-xl py-16">
            LG03, The Chanakya Mall, <br />
            Chanakyapuri, New Delhi, Delhi <br />
            110021, India <br />
            New Delhi <br />
            0119020000

          </h1>
         
          <div className = "flex flex-row items-center justify-center w-44 h-28 py-4 px-2 directionsBox">
        
            <span className='directionsText text-sm uppercase'>
              Get directions
            </span>
         
          </div>
          
          </div>
          <div className = "location-right">
          <iframe  style = {{   width :"100%" ,height: "100%"  , border: 0}}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5160618231757!2d77.18816327621589!3d28.584291286268364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cf69b24ac3%3A0xe2bcd9f8a25819c8!2sRoyal%20China!5e0!3m2!1sen!2sin!4v1686037107876!5m2!1sen!2sin" 
  loading="lazy" ></iframe> </div>
          </div>
        </div>
    </section>
    <section className='w-full h-1/3 bg-black'/>
    <Footer  />
     
    </Fragment>
   

  )
}
