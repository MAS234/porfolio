import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

import viajes from "../media/vijaes.png";
import peaky from "../media/peaky.png";
import pizzas from "../media/pizzas.png";
import gym from "../media/gym.png"

export default function Carrusel() {

    const slideInfo =[{
        
        imagen:viajes,
        titulo:"Titulo1",
        tituloChiquito:"sky-fly",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo accusantium velit aperiam id enim dolores sapiente, impedit totam sequi aliquam doloremque natus soluta quibusdam alias saepe molestiae delectus voluptatum.",
        link:"https://mas234.github.io/paginaViajes/",
        codde:"https://github.com/MAS234/paginaViajes",
    },

    {
        imagen:pizzas,
        titulo:"Titulo2",
        tituloChiquito:"Pizzeria",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo accusantium velit aperiam id enim dolores sapiente, impedit totam sequi aliquam doloremque natus soluta quibusdam alias saepe molestiae delectus voluptatum.",
        link:"https://mas234.github.io/pizzeriaPagina/",
        codde:"https://github.com/MAS234/pizzeriaPagina",
    },

    {
        imagen:peaky,
        titulo:"Titulo3",
        tituloChiquito:"Peaky",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo accusantium velit aperiam id enim dolores sapiente, impedit totam sequi aliquam doloremque natus soluta quibusdam alias saepe molestiae delectus voluptatum.",
        link:"https://mas234.github.io/peaky-blinders/",
        codde:"https://github.com/MAS234/peaky-blinders",
    },

    {
      imagen:gym,
      titulo:"Titulo4",
      tituloChiquito:"GYM",
      info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo accusantium velit aperiam id enim dolores sapiente, impedit totam sequi aliquam doloremque natus soluta quibusdam alias saepe molestiae delectus voluptatum.",
      link:"https://mas234.github.io/paginaGym/",
      codde:"https://github.com/MAS234/paginaGym",
  },
  
  ];

    return (
        <>
          <Swiper
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}

            autoplay={{
                delay:6000,
                disableOnInteraction:true,
            }}

            pagination={{
              clickable: true,
            }}

            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1300: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
            }}

            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="w-[90%] h-[65vh] mx-auto bg-black flex items-center justify-center"
          >

           {
            slideInfo.map((elemento) => {

                return (<SwiperSlide className=' bg-black w-full h-full m-auto py-10  '>

                  <div className='w-full  h-full bg-transparent cursor-pointer group perspective p-4'>
                   <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full  h-full duration-1000 rounded-lg'>
                    <div class="absolute backface-hidden  w-full h-full select-none ">
                      <img
                        src={elemento.imagen}
                        class="w-full h-full rounded-lg object-cover object-center"
                        alt="none"
                      />
                    <div className="absolute bottom-0 right-0  rounded-tl-lg flex text-center justify-center items-center px-8 py-4 bg-slate-900/80">
                    <h3 className="font-semibold text-white drow-shadow-lg ">
                      {elemento.tituloChiquito}
                    </h3>
                     </div>
                    </div>
                    <div class="absolute my-rotate-y-180 backface-hidden w-full h-full rounded-lg bg-transparent text-white shadow-lg shadow-white  overflow-hidden">
                     <div class="text-center  flex flex-col items-center justify-start mt-4  h-full text-gray-800 p-4 ">
                      <h3 class="text-xl font-semibold mb-4 px-2 text-white">
                       {elemento.titulo}
                      </h3>
                      <p className="px-4 text-center text-sm text-white">{elemento.info}</p>
                      {/* BOTON ANIMACION  */}
                      <div className="flex z-20 flex-col md:flex-row gap-2 absolute -bottom-0 delay-500 duration-1000 group-hover:bottom-2 scale-0 group-hover:scale-100 ">
                         <button className='bg-black text-white border-white border-solid border p-3 rounded-xl hover:bg-gray-500'><a href={elemento.codde} target="_blank">code</a></button>
                         <button className='bg-black text-white border-white border-solid border p-3 rounded-xl hover:bg-gray-500' ><a href={elemento.link} target="_blank">link</a></button>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>

                  </SwiperSlide>);
            })
           }

          </Swiper>
        </>
      );
}
