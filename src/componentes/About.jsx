import React from 'react'
import Css from "../media/css.png"
import Html from "../media/html.png"
import Js from "../media/js.jpg"
import Reac from "../media/react.png"
import fotoPerfil from "../media/fotoPerfil.jpg"

export default function About() {
  return (
    <div className='w-full h-screen md:flex flex-wrap items-center justify-center md:justify-evenly bg-black ' >

      <div className=' text-white m-auto w-[60vh] h-[400px] md:text-left text-center mb-10'>

        <h1 className='text-2xl md:text-3xl m-auto p-[10px] ' id='sobremi'>Sobre Mi</h1>
        <div className='m-auto mt-[5px] md:mt-[15px] text-sm md:text-lg p-[5px]'>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, exercitationem? Voluptates iure culpa odio debitis iste sequi non? Eaque fugit odit, soluta quod laboriosam sint hic rem ad accusamus voluptates.</p>
        </div>

        <h2 className='m-auto mt-[5px] md:mt-[20px] text-2xl md:text-3xl'>Lenguajes</h2>

        <div className='flex justify-evenly items-center '>
          <img className='mt-[20px] md:mt-[40px] h-[40px] md:h-[50px] hover:scale-110 duration-300' src={Css} alt="css" />
          <img className='mt-[20px] md:mt-[40px] h-[40px] md:h-[50px] hover:scale-110 duration-300' src={Html} alt="Html" />
          <img className='mt-[20px] md:mt-[40px] h-[40px] md:h-[50px] hover:scale-110 duration-300' src={Js} alt="Js" />
          <img className='mt-[20px] md:mt-[40px] h-[40px] md:h-[50px] hover:scale-110 duration-300' src={Reac} alt="reac" />
        </div>

        
      </div>

      <div className='mt-[-100px] mt:[0px] md:w-auto md:m-auto '>
         <img src={fotoPerfil} alt="fotoPerfil" className='md:w-[50vh] md:h-[400px]  w-[30vh] h-[210px]  hover:scale-110 duration-300 m-auto'/>
      </div>
    </div>
  )
}
