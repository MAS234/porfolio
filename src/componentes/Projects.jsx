import React from 'react'
import Carrusel from './Carrusel'
import Diseño from './Diseño'

export default function Projects() {
  return (

    <>
      <div className='w-full h-screen bg-black flex justify-center items-center flex-col' id='proyectos'>
      
      <h2 className='mt-[50%] md:mt-0 text-2xl text-white md:text-4xl text-semibold md:p-5 ' id='proyectos'>Mis Proyectos</h2>

      <Carrusel/>

    </div>

    <div className='w-full h-screen bg-black flex justify-center items-center flex-col '>
      
      <h2 className='mt-[50%] md:mt-0 text-2xl text-white md:text-4xl text-semibold md:p-5 ' id='proyectos'>Diseño UX/UI</h2>

      <Diseño/>

    </div>
    </>

  )
}
