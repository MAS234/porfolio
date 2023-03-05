import React from 'react'

export default function NavBar() {
  return (
    <div className='w-full h-[80px] fixed z-20 '>
     
     <div className='w-[90%] mx-auto flex justify-around items-center h-full'>

        
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

     </div>

    </div>
  )
}
