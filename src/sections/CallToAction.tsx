import { MainButton } from "@/components";
import starsBg from "@/assets/stars.png";
import gridlines from '@/assets/grid-lines.png'
import domphone from '@/assets/phonedom.png'
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className=" py-24  overflow-hidden relative"
          style={{
            backgroundImage: `url(${starsBg.src})`,
          }}>
          <div
            className="absolute inset-0 bg-[rgb(32,85,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridlines.src})`
            }}
          >
          </div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
 <Image src={domphone.src} width={900} height={900} alt="domotica" />            </h2>
            <p className=" text-center  text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
             Conoce más sobre nuestro catálogo de productos
            </p>
            <div className="flex justify-center mt-8">
              <MainButton title="Catálogo" sizeFont="text-xl" widthButtonPY="px-4" />
            </div>
          </div>
        </div>
      </div>
    </section>);
};
