import styled from '@emotion/styled'
import React from 'react'


export default function Contact() {

  
  
  return (
    <>
    

        <div className='w-full h-screen bg-black flex  text-white  flex-col' id='contacto'>
          
            <div className='p-5 mt-20 text-5xl '>Trabajemos <span className='text-white font-bold'>Juntos</span></div>

            <div className='flex justify-center items-center mt-20 md:text-7xl  md:gap-24 p-2 gap-10 text-5xl'>

               <div className=' p-3 rounded-xl  shadow-md  hover:bg-red-700 hover:shadow-red-600 duration-300 cursor-pointer'>
               <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGLBwhzdXtsXgLLLbJnbdgjdHkVbvDjBdMlcgxjRcppKTzJhzhbFnDckGqtbnwdwcGWrwhV" target="_blank"><ion-icon name="mail-open-outline" ></ion-icon></a> 
               </div>

               <div className=' p-3 rounded-xl  shadow-md  hover:bg-blue-600 hover:shadow-blue-600 duration-300 cursor-pointer'>
               <a href="https://www.linkedin.com/in/miguel-martinez-800638209/" target="_blank"><ion-icon name="logo-linkedin" ></ion-icon></a>
               </div>

               <div className=' p-3 rounded-xl  shadow-md  hover:bg-violet-700 hover:shadow-violet-600 duration-300 cursor-pointer'>
               <a href="https://github.com/MAS234" target="_blank"><ion-icon name="logo-github"></ion-icon></a> 
               </div>

            </div>

            <p className='text-lg p-5 text-center mt-20'>Diseñado y desarrollado por <span className='font-semibold'>Miguel Martinez.</span></p>





        </div>



    </>

  )
}
