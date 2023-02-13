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
import criptomonedas from "../media/Fondo.png";
import pizzas from "../media/pizzas.png";
import Veterinaria from "../media/Fondo-veterinaria.png"
import Clima from "../media/fondoClima.png"
import Restaurant from "../media/fondoRestaurant.png"

export default function Carrusel() {

    const slideInfo =[{
        
        imagen:viajes,
        titulo:"Sky-Fly",
        tituloChiquito:"HTML5 | CSS3",
        info:"Sky-Fly es una onepage de viajes desarrollada en HTML5 Y CSS3, su objetivo es vender paquetes de viaje y proporcionar información al cliente sobre los distintos destinos. Abajo encontraras el link de prueba para visitar la pagina y el código.",
        link:"https://mas234.github.io/paginaViajes/",
        codde:"https://github.com/MAS234/paginaViajes",
    },

    {
        imagen:pizzas,
        titulo:"Pizzas Martínez",
        tituloChiquito:"HTML5 | CSS3 | JAVASCRIPT",
        info:"Pizzas Martínez es un proyecto desarrollado en HTML5, CSS3 Y JAVASCRIPT, tiene como objetivo informar al usuario sobre la ubicación del lugar, como instalar la aplicación para realizar pedidos y algunos productos con los que cuenta el lugar. Abajo encontraras el link de prueba para visitar la pagina y el código.",
        link:"https://mas234.github.io/pizzeriaPagina/",
        codde:"https://github.com/MAS234/pizzeriaPagina",
    },

    {
        imagen:criptomonedas,
        titulo:"Cotizador de Criptomonedas",
        tituloChiquito:"VITE | REACT | TAILWIND",
        info:"Esta aplicacion fue desarrollada en Vite, Tailwind y React. Es una aplicación que extrae información de una API la cual hace la conversión en tiempo real de la moneda elegida y la criptomoneda elegida. Abajo encontraras el link de prueba para visitar la pagina y el código.",
        link:"https://cotizador-criptomonedas-react-tau.vercel.app/",
        codde:"https://github.com/MAS234/CotizadorCriptomonedas-react",
    },

    {
      imagen:Veterinaria,
      titulo:"Administrador de Pacientes",
      tituloChiquito:"VITE | REACT | TAILWIND",
      info:"Esta aplicación se desarrolló en Vite, Tailwind y React. Es una aplicación dirigida a una veterinaria. Tiene opciones de agregar pacientes, editar la información de los pacientes y por ultimo eliminar algún paciente. Abajo encontraras el link de prueba para visitar la pagina y el código.",
      link:"https://registro-clientes-veterinaria.vercel.app/",
      codde:"https://github.com/MAS234/paginaGym",
  },

  {
    imagen:Clima,
    titulo:"Aplicacion Del Clima",
    tituloChiquito:"VITE | REACT | TAILWIND",
    info:"Esta aplicación se desarrolló en Vite, Tailwind y React. Es una aplicación que consulta a una API la información del clima de distintas partes del mundo, cuenta con validaciones donde el usuario tiene que ingresar información válida para que la aplicación pueda mostrarle el clima. Abajo encontraras el link de prueba para visitar la pagina y el código.",
    link:"https://clima-app-peach.vercel.app/",
    codde:"https://github.com/MAS234/ClimaApp",
},
{
  imagen:Restaurant,
  titulo:"Aplicacion Del Clima",
  tituloChiquito:"NEXT | REACT | TAILWIND | MYSQL",
  info:"Esta aplicación se desarrolló en NEXT, Tailwind , React y MySql en la parte del backend. Esta aplicación consiste en un sistema de pedidos de un restaurant, cuenta con las opciones de agregar, eliminar y editar los pedidos, los productos se dividen en categorías y el total del pedido se suma automáticamente en la pantalla final, luego toda la informacion del pedido pasa a otra pantalla de cocina donde llegan todos los pedidos. Abajo encontraras el link de prueba para visitar la pagina y el código.",
  link:"https://restaurantapp-production-e1dc.up.railway.app/",
  codde:"https://github.com/MAS234/RestaurantApp",
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
                        class="w-full md:h-full rounded-lg object-cover object-center"
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
