import React from 'react'
import Css from "../media/css.png"
import Html from "../media/html.png"
import Js from "../media/js.jpg"
import Reac from "../media/react.png"
import Sass from "../media/sass.png"
import Figma from "../media/figma.png"
import Vite from "../media/logo-with-shadow.png"
import Tailwind from "../media/Tailwind_CSS_Logo.svg.png"
import FotoPerfil from "../media/fotoPerfil.jpg"
import Next from "../media/nextjs.png"
import Msql from "../media/mysql.png"

export default function About() {
  return (
    <div className='w-full h-screen md:flex justify-center  bg-black mt-10' id='sobremi'>

      <div className='mt-10 text-white'>

        <h1 className=' text-center mt-10 md:text-3xl text-2xl '>SOBRE MI</h1>

        <p className=' text-center mt-5 md:text-xl text-sm p-5'>Soy desarrollador web enfocado en el FrontEnd, apasionado por la tecnología. Me considero una persona responsable y disciplinada que busca aportar sus habilidades y trabajar en equipo. <br/> Mi objetivo es seguir creciendo profesionalmente y continuar aprendiendo.</p>

        <h2 className='mt-10 text-center text-2xl '>SKILLS</h2>

        <div className='flex md:gap-10 gap-4 justify-center mt-10 flex-wrap'>

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13 ' src={Html} alt="HTML" />
            <p className='text-sm md:text-lg'>HTML</p>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Css} alt="css" />
            <p>CSS</p>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Js} alt="js" />
            <p>JS</p>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Reac} alt="react" />
            <p>React</p>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Tailwind} alt="tailwind" />
            <p>Tailwind</p>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Vite} alt="vite" />
            <p>Vite</p>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Sass} alt="sass" />
            <p>SAAS</p>
          </div>
          

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Figma} alt="HTML" />
            <p>FIGMA</p>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Next} alt="HTML" />
            <p>NEXT</p>
          </div>

          
          <div className='text-center hover:scale-110 duration-300'>
            <img className='h-12 w-13' src={Msql} alt="HTML" />
            <p>MYQSL</p>
          </div>
        </div>

      </div>

      <div className='text-center p-5 md:p-0'>
        <img className='w-[60%] mt-20  m-auto rounded-md' src={FotoPerfil} alt="fotoDePerfil" />

        <div className='bg-red-800 hover:bg-red-600  duration-300 cursor-pointer md:mt-5 md:mr-48 md:ml-48  md:hover:mr-44 md:hover:ml-44 mr-40 ml-40 font-medium text-white   shadow-red-600 rounded-md md:p-1 mt-2'>
          <a href="https://drive.google.com/file/d/1uQ8wn92gsr5DBkwC4N7Fgd_bZffEba4X/view?usp=sharing" target="_blank" className='text-center'>CV</a>
        </div>
      </div>

    </div>
  )
}
