'use client'

import React from 'react'
import { Header } from '../components/Header'
import '../styles/index.css';
import Image from 'next/image';
import bg from '../../../assets/bg.png';
import heroLogo from '../../../assets/heroLogo.png';
import ReactDatePicker from 'react-datepicker';
export const Index = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime , setSelectedTime] = React.useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className='layout'>
               <Header />
               <div className='heroSection'>
                <div>
                <Image src={heroLogo} alt="logo image" className='logoMain' />
                </div>
             
               <div className='flex flex-row justify-around w-1/3 my-24'>
                <h1 className='hero-text white'>reservation</h1>
                <h1 className='hero-text'>delivery</h1>
               </div>
               <div className='flex flex-row items-center w-2/3 dateTime'>
              
            <div className='flex flex-row justify-between items-center h-10 px-4 left-box'>
              <h1 className = "date-text">select date </h1>
           <ReactDatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
            </div>
            <div className='flex flex-row items-center h-10 px-4 right-box'>
            <h1 className = "date-text">time</h1>
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
        <Image src = {bg} alt="background Image" className='backgroundImage' />

    </div>
  )
}
