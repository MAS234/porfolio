import React from 'react'
import Css from "../media/css.png"
import Html from "../media/html.png"
import Js from "../media/js.jpg"
import Reac from "../media/react.png"
import Sass from "../media/sass.png"
import Figma from "../media/figma.png"
import Vite from "../media/logo-with-shadow.png"
import FotoPerfil from "../media/fotoPerfil.jpg"

export default function About() {
  return (
    <div className='w-full h-screen md:flex justify-center  bg-black mt-10' id='sobremi'>

      <div className='mt-10 text-white '>

        <h1 className=' text-center mt-10 md:text-3xl text-2xl '>SOBRE MI</h1>

        <p className=' text-center mt-5 md:text-xl text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cupiditate est temporibus error asperiores aperiam ullam placeat saepe, id consequatur sunt voluptatum magnam eveniet cumque nihil. Eligendi cum placeat ab!</p>

        <h2 className='mt-10 text-center text-2xl '>SKILLS</h2>

        <div className='flex md:gap-10 gap-4 justify-center mt-10 flex-wrap'>

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13 ' src={Html} alt="HTML" />
            <p className='text-sm md:text-lg'>HTML</p>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Css} alt="HTML" />
            <p>CSS</p>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Js} alt="HTML" />
            <p>JS</p>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Reac} alt="HTML" />
            <p>React</p>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Vite} alt="HTML" />
            <p>Vite</p>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Sass} alt="HTML" />
            <p>SAAS</p>
          </div>
          

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Figma} alt="HTML" />
            <p>FIGMA</p>
          </div>
        </div>

      </div>

      <div>
        <img className='w-[60%] mt-20  m-auto hover:scale-110 duration-300 rounded-md' src={FotoPerfil} alt="fotoDePerfil" />
      </div>

    </div>
  )
}
