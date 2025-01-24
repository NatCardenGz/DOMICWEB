'use client';

import acmeLogo from '@/assets/logo-a.png'; 
import apexLogo from '@/assets/logo-b.png'; 
import celestialLogo from '@/assets/logo-c.png';
import quantumLogo from '@/assets/logo-d.png'; 
import pulseLogo from '@/assets/logo-e.png'; 
import {motion} from "framer-motion";
import Image from 'next/image';



export const LogoTicker = () => {
  return( 
  <section className='py-20 md:py-24'>
    <div className="container">
      <div className="flex items-center gap-5">
        <div className="flex-1 md:flex-none">
        <h2 className="">Manejamos una variedad de marcas</h2>
        </div>
       <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      
       <motion.div 
          initial={{ translateX: "-50%"}}
          animate={{translateX:"0"}}
          transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
          }}
          className="flex flex-none gap-14 pr-14 -translate-x-1/2">
          {
            [
              acmeLogo, 
              pulseLogo,  
              celestialLogo, 
              apexLogo, 
              quantumLogo,
              acmeLogo, 
              pulseLogo, 
              celestialLogo, 
              apexLogo, 
              quantumLogo,
            ].map((logo) => (
              <Image src={logo.src} key={logo.src} alt={logo.src} width={72} height={72} className='h-6 w-auto' />
            ) )
          }
        </motion.div>
       </div>
      </div>
    </div>
    </section>);
};
