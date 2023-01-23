import React from 'react'
import {IoLogoWhatsapp} from "react-icons/io";

export default function NavBar() {
  return (
    <div className='w-full h-[80px] fixed z-20 '>
     
     <div className='w-[90%] mx-auto flex justify-between items-center h-full'>

        <div className='w-14 h-14 bg-black rounded-full text-white flex items-center justify-center font-light text-xl hover:scale-110 duration-300
        hover:bg-white hover:text-black'><a href="boton">M | M</a></div>
        
        <div>
            <ul className=' w-full h-full hidden md:flex gap-6 text-white text-xl'>
                <li className='hover:underline hover:scale-125 duration-300'>
                    <a href="#inicio">Inicio</a>
                </li>

                <li className='hover:underline hover:scale-125 duration-300'>
                   <a href="#sobremi">Sobre Mi</a>
                </li>

                <li className='hover:underline hover:scale-125 duration-300'>
                  <a href="#proyectos">Proyectos</a>  
                </li>

                <li className='hover:underline hover:scale-125 duration-300'>
                   <a href="#contacto">Contacto</a> 
                </li>
            </ul>
        </div>

        <div className='hidden md:flex w-14 h-14 rounded-full bg-white/50  items-center justify-center hover:scale-125 hover:duration-300 hover:bg-white/50'>

            <a href="https://wa.link/8vh8pe" target="_blank">
            <IoLogoWhatsapp className='text-green-500 text-3xl '/>
            </a>
            
        </div>

     </div>

    </div>
  )
}
