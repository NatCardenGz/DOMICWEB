'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

import cameraSecu from '@/assets/services/camera-segurdad.jpg';
import domoHouse from '@/assets/services/domotic-house.jpg';
import ventaCam from '@/assets/services/venta-camaras.jpg';
import { WorkSlidersBtns } from "@/components/ui/WorkSlidersBtns";


const servicios = [
  {
    num: "01",
    category: "Instalación de CCTV",
    title: "project 1",
    description:
      "Somos distruibuidores exclusivos de  Marca",
    stack: [{ name: 'Marcas 1' }, { name: "Marcas 2" }, { name: "Marca 3" }],
    image: cameraSecu,
    live: "",
    github: "",

  },

  {
    num: "02",
    category: "Alarmas",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, accusantium iure tenetur qui et.",
    stack: [{ name: 'Marcas 1' }, { name: "Marcas 2" }, { name: "Marca 3" }],
    image: domoHouse,
    live: "",
    github: "",

  },


  {
    num: "03",
    category: "Hogar Inteligente",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, accusantium iure tenetur qui et.",
    stack:[{ name: 'Marcas 1' }, { name: "Marcas 2" }, { name: "Marca 3" }],
    image: ventaCam,
    live: "",
    github: "",

  },];


export const Services = () => {

  const [servicio, setServicio] = useState(servicios[0]);

  const handleSlideChange = (swiper:SwiperClass) => {
    const currentIndex = swiper.activeIndex;

    setServicio(servicios[currentIndex])
  }
  return (

    <motion.section
      initial={{ opacity: 0 }}
      
      animate={{ 
        opacity: 1,
      transition:{
        delay:2.4,
        duration:0.4,
        ease:'easeIn',
      } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 md:px-8"
    >
      <div className="container mx-auto">

      <h2 className='text-5xl md:text-6xl font-medium text-center tracking-tighter mb-11'>
         Servicios</h2>

        <div className="flex flex-col md:flex-row md:gap-[30px]  text-white/70">

          <div className="w-full md:w-[50%] md:h-[460px] flex flex-col
          md:justify-between order-2 md:order-none">
            <div className="flex flex-col gap-1 md:gap-3 h-[50%]">
              {/* [outline num] */}
              <div className="text-8xl leading-none font-extrabold  text-outline">
                {servicio.num}
              </div>

              {/* categoria */}
              <h2 className="font-bold text-[42px] leading-none text-white group-hover:text-slate-500 transition-all duration-500 capitalize">
                {servicio.category}
              </h2>
              <p className="text-white/60 text-xs">
                {servicio.description}
              </p>

              <ul className="flex gap-4">
                {
                  servicio.stack.map((item, index) => {
                    return (
                    <li 
                    className=" text-xs  italic text-blue-400"
                    key={index} >
                      
                      {item.name}
                      {index !== servicio.stack.length - 1 && ","}
                      
                      
                      </li>)
                  })
                }
              </ul>

              {/* ---border--- */}
              <div className="border border-white/20"> </div>

                {/* -----button----- */}
                <div className="flex items-center gap-4">
                  {/* {instagram} */}
                  <Link href={servicio.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger 
                        className="w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center group">
                        <BsInstagram  className=" text-white text-3xl group-hover:text-blue-500"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>
                  {/* whatsapp */}
                  <Link href={servicio.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger 
                        className="w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center group">
                        <BsWhatsapp  className=" text-white text-3xl group-hover:text-blue-500"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>
                </div>
              
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <Swiper 
                loop = {true}
                spaceBetween={30} 
                slidesPerView={1} 
                onSlideChange={handleSlideChange}
                className="md:h-[520px] mb-3 md:mb-12">
              {servicios.map((servicio,index) => {
                return(
                  <SwiperSlide 
                    key={index}
                    className="w-full"
                    >
                     <div className="relative h-[320px] md:h-[460px] group flex justify-center items-center bg-blue-200/20">
                        {/* overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                        <div className="relative w-full h-full">
                          <Image  
                            src={servicio.image} 
                            alt={servicio.category} 
                            fill
                            className=" object-cover" />
                        </div>


                     </div>
                  </SwiperSlide>
                )
              })}
              <WorkSlidersBtns 
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                  md:bottom-0 z-30 w-full justify-between md:w-max md:justify-none"
                  btnStyles="bg-[#0585b7]/70 md:bg-[#0585b7] hover:text-[#0585b7] hover:bg-white text-[22px] w-[44px] h-[44px] flex
                  items-center rounded-md justify-center transition-all"
                  />
                
            </Swiper>
          </div>
        </div>

      </div>
    </motion.section>
  )
}
