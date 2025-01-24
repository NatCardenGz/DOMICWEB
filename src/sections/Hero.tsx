'use client';
import starsBg from '@/assets/cir9-01.png'
import camLent from '@/assets/cameralent.png'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";






export const Hero = () => {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])
  return (

    <motion.section
      ref={sectionRef}
      className=" z-0 h-[492px] md:h-[700px] flex  justify-between items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: starsBg.width,

      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 120,
      }}


    >
      <div className="md:absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(45,105,215,.5)_3%,rgb(5,28,50,.5)_58%,transparent)] z-1"></div>

      <div className="flex gap-5 z-40 w-full justify-between items-center md:px-2 lg:px-28 mx-24">



        <div className=" z-30  md:p-2  md:right-1 inline-flex items-center justify-center">
          <Image 
          
          className="absolute   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center"
          src={camLent.src} alt="camera domic home" width={510} height={510} />

          <motion.div
            style={{
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              rotate: "1turn",
            }}
            transition={{
              repeat: Infinity,
              duration: 60,
              ease: "linear"
            }}
            className="absolute w-[344px] h-[344px] md:h-[480px] md:w-[480px] border border-sky-400 opacity-30  rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute h-5 w-5 top-1/2 left-full border border-white rounded-full -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center">
              <div className="h-2 w-2 bg-white rounded-full"></div>
            </div>




            <div className="absolute h-2 w-2 top-full left-1/2 bg-white rounded-full -translate-y-1/2 -translate-x-1/2"></div>

          </motion.div>
        </div>


      </div>

    </motion.section>);
};
