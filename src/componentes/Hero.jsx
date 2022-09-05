import React from 'react';
import VideoHero from "../media/pexels-mikhail-nilov-7534239.mp4";

export default function Hero() {
  return (

    <div className='w-full h-screen bg-black text-white flex items-center justify-center relative' id='inicio'>

    <video 
    id='video'
    className='w-full h-screen object-cover'
    src={VideoHero} autoPlay loop muted
    />

    <div className='w-full h-screen bg-black/40 absolute top-0 left-0  text-white flex items-center justify-center '>
        
        <div>      
        <h1 className='text-center text-xl md:text-5xl' >BIENVENIDO A MI SITIO WEB</h1>
        <p className='flex justify-center text-base md:text-xl '>Miguel Martinez | Desarrollador Junior</p>
        </div>

    </div>
    
    </div>
  )
}



