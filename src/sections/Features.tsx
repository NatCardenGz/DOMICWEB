'use client';
import {useMotionTemplate, useMotionValue, motion, animate, ValueAnimationTransition } from "framer-motion";
import aiImage from '@/assets/ai-image2.png'

import Image from 'next/image';
import cctv from '@/assets/cctv.gif';
import mobile from '@/assets/mobile.gif';
import pButton from '@/assets/power-button.gif';
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";

const tabs = [
  {
    icon: cctv,
    title: "Sistemas de Seguridad",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: mobile,
    title: "Automatización del hogar",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: pButton,
    title: "Instalación de CCTV",
    isNew: false,
    backgroundPositionX: 100,
    backgroundPositionY: 0,
    backgroundSizeX: 177,
  },
];



const FeatureTab = (props: typeof tabs[number] & ComponentPropsWithoutRef<'div'> & { selected: boolean} ) => {

  const tabRef = useRef<HTMLDivElement>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black , transparent)`;
  
  useEffect(() => {
    if (!tabRef.current || !props.selected ) return;

    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circunference = height * 2 + width * 2;

    const times = [0, width / circunference, ( width + height) / circunference, (width * 2 + height) / circunference, 1]
    const options:ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop'
    }
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected])
  
  
  return (
    <div
      ref={tabRef}
      onClick={props.onClick}
      className='border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative'>
      
      { 
        props.selected &&
        <motion.div 
        style={{
          maskImage: maskImage,
        }}
        className="absolute inset-0 -m-px border border-[#51c2e8] rounded-xl"></motion.div>
      }
     
      <div className="h-12 w-12 border border-white/15 bg-white rounded-lg inline-flex items-center justify-center overflow-hidden">
        <Image src={props.icon.src} alt={props.title} width={50} height={50} />

      </div>

      <div className="font-medium">{props.title}</div>
      {props.isNew &&
        <div className='text-xs rounded-full px-2 py-0.5 bg-[#48a7e2] text-black font-semibold'>
          new
        </div>}
    </div>
  )
}

export const Features = () => {

  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX)
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY)

  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX)
  
  const backgroundPosition= useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);

    const animateOptions:ValueAnimationTransition ={
      duration: 2,
      ease: "easeInOut",
    }
    animate(backgroundSizeX, [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      
      animateOptions,
     );

     animate(backgroundPositionX, [backgroundPositionX.get(), tabs[index].backgroundPositionX],
     animateOptions,
     );
     animate(backgroundPositionY, [backgroundPositionY.get(), tabs[index].backgroundPositionY],
     animateOptions
     );
  };

  return (
    <section className='py-16 md:py-20'>

      <div className="container">
        <h2 className='text-5xl md:text-6xl font-medium text-center tracking-tighter'>
          Todo a tu alcance</h2>
        <p className='text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5'>
          Transformamos hogares y negocios en espacios más seguros.
        </p>

        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {
            tabs.map((tab, tabIndex) => (
              <FeatureTab {...tab} 
                key={tab.title}
                selected = {selectedTab === tabIndex}
                onClick={ () => handleSelectTab(tabIndex) }
                />
            ))
          }
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${aiImage.src})`
            }}></motion.div>
        </div>

      </div>


    </section>
  )
};
