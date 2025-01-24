'use client';

import { Zoom, Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

import cameraSecu from '@/assets/services/camera-segurdad.jpg';
import domoHouse from '@/assets/services/domotic-house.jpg';
import ventaCam from '@/assets/services/venta-camaras.jpg';



const productos = [
    {
        image: cameraSecu,
        title: 'Camara de Seguridad'
    },

    {
        image: domoHouse,
        title: 'Amazon Parlante'
    },

    {
        image: ventaCam,
        title: 'Speaker Parlante'
    },
    {
        image: cameraSecu,
        title: 'Camara de Seguridad'
    },

    {
        image: domoHouse,
        title: 'Amazon Parlante'
    },

    {
        image: ventaCam,
        title: 'Speaker Parlante'
    },
    {
        image: cameraSecu,
        title: 'Camara de Seguridad'
    },

    {
        image: domoHouse,
        title: 'Amazon Parlante'
    },

    {
        image: ventaCam,
        title: 'Speaker Parlante'
    },
]

export const Products = () => {
    return (
        <div className='container mx-auto  relative mb-[4rem] my-4 md:mt-7'>

<h2 className='text-4xl md:text-6xl my-10 font-bold text-center tracking-wide '>
          Novedades</h2>

            <Swiper

                slidesPerView={1}
                zoom={true}
                loop={true}
                spaceBetween={30}


                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                modules={[Zoom, Pagination]}
                className="mySwiper md:h-auto h-[900px]"
            >
                {
                    productos.map((producto, index) => {
                        return (
                            <SwiperSlide key={index}
                                className=' '>
                                    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Imagen */}
      <div className="relative w-full h-48">
        <Image
          src={producto.image.src}
          alt={"title"}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Contenido */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{producto.title}</h3>
        <p className="text-gray-600 text-sm my-2">{producto.title}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition">
      buton
        </button>
      </div>
    </div>

                            </SwiperSlide>
                        )
                    })
                }

                {/* <WorkSlidersBtns
                    containerStyles="flex gap-2 absolute right-0 bottom-0
                  md:bottom-0 z-30 w-full justify-between md:w-max md:justify-none"
                    btnStyles="bg-[#0585b7]/70 md:bg-[#0585b7] hover:text-[#0585b7] hover:bg-white text-[22px] w-[44px] h-[44px] flex
                  items-center rounded-md justify-center transition-all"
                /> */}
            </Swiper>
        </div>
    )
}
