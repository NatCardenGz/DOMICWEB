'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";



const testimonials = [
  {
    text: "Implementación de un sistema de seguridad y automatizacion",
    name: "Finca La finquita",
    title: "TEbaida, Quindio",
    avatarImg: avatar1,
  },
  {
    text: "Instalación de un sistema completo de CCTV ue permite ......",
    name: "Empresa Nombre",
    title: "Cartago Valle",
    avatarImg: avatar2,
  },
  {
    text: "Automatización de casa inteligente con servicios de iluminación ....",
    name: "Pedro Palacios",
    title: "Cartago, Valle",
    avatarImg: avatar3,
  },
  {
    text: "Implementación de una sistema de alarmas y seguridad a través de tecnología ....",
    name: "Casa Tal",
    title: "Cartago, Valle",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className=" text-5xl md:text-6xl text-center tracking-tighter font-medium">
          Nuestra Experiencia
        </h2>
        <p className=" text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm md:max-w-2xl mx-auto">
          Trabajamos continuamente para darte nuestro mejor servicio.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div 
          initial={{
            translateX: '-50%',

          }}
          animate={{
            translateX:'0',
          }}

          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50,
          }}
          
          className="flex gap-5 pr-5 flex-none ">
            {
              [...testimonials, ...testimonials].map(testimonial => (
                <div
                  key={testimonial.name}
                  className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(40,117,217,.3),black)] 
                        max-w-xs md:max-w-md flex-none "
                >
                  <div className="text-lg tracking-tight md:text-2xl">
                    {testimonial.text}
                    </div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(41,136,224)] after:mix-blend-soft-light
                                before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                      <Image
                        className=" h-11 w-11 rounded-lg grayscale"
                        src={testimonial.avatarImg}
                        alt={`Avatar for ${testimonial.name}`}
                      />
                    </div>
                    <div className="">
                    <div className="">{testimonial.name}</div>
                    <div className=" text-white/50 text-sm">{testimonial.title}</div>
                    </div>
                  </div>

                </div>
              ))
            }
          </motion.div>
        </div>
      </div>

    </section>);
};
