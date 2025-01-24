'use client';

import { useState } from "react";
import LogoIcon from '@/assets/dom1.svg';
import MenuIcon from '@/assets/icon-menu.svg';
import { MainButton } from '@/components';


export const Header = () => {
  const [isMenuopen, setIsMenuopen] = useState(false)
  
  return( 
  <header className="py-4 border-b border-white/15  md:border-none bg-[url('/assets/lentback.jpeg')] m-2 sticky top-0 z-20 ">
        <div className="absolute inset-0 backdrop-blur md:hidden -z-10"></div>

    <div className="container ">
      <div className="flex  justify-between items-center md:border border-white/15 md:p-2.5 rounded-full
                       max-w-2xl mx-auto  relative">
        <div className="absolute inset-0 backdrop-blur -z-10  md:bg-slate-950/30 hidden md:block"></div>
        <div className="">
          <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/30">
            <LogoIcon className="h-8 w-8"/>
          </div>
        </div>
        <div className="hidden md:block">
          <nav className="flex gap-8 font-medium text-sm">
            <a className='text-white/70 hover:text-white transition' href="#">Inicio</a>
            <a className='text-white/70 hover:text-white transition' href="#">Servicios</a>
            <a className='text-white/70 hover:text-white transition' href="#">Experiencia</a>
            <a className='text-white/70 hover:text-white transition' href="#">Contacto</a>
          </nav>
        </div>
      
      <div className="flex gap-4 items-center">
        {/* Button component */}
        
      <MainButton title='Portafolio' sizeFont='text-sm' widthButtonPY='px-4'/>

      <MenuIcon 
        onClick={() => setIsMenuopen(!isMenuopen)}
        className="md:hidden cursor-pointer" />
        
      </div>
      </div>

      {/* <div 
        className={`absolute md:hidden top-[4.5rem] left-0 w-full backdrop-blur bg-slate-950/60 flex flex-col
        items-center gap-6 font-semibold text-lg transform transition-transform py-4 pb-10
        ${!isMenuopen ? "translate-x-full" : "translate-x-0"}`}
        style={{
          transition: "transform 0.7s ease, opacity 0.7s ease"
        }}
        
        >
            <a
            onClick={() => setIsMenuopen(!isMenuopen)} 
            className='text-white/70 hover:text-white transition' href="#">Inicio</a>
            <a
            onClick={() => setIsMenuopen(!isMenuopen)} 
            className='text-white/70 hover:text-white transition' href="#">Servicios</a>
            <a
            onClick={() => setIsMenuopen(!isMenuopen)} 
            className='text-white/70 hover:text-white transition' href="#">Experiencia</a>
            <a
            onClick={() => setIsMenuopen(!isMenuopen)} 
            className='text-white/70 hover:text-white transition' href="#">Contacto</a>

        </div> */}
    </div>

  </header>
  );
};
