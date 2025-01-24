import WhatsappButton from "@/components/WpButton";
import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Products } from "@/sections/Products";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return(
    
    <>
    <Header />

 
    <Hero />
    <h1
    className=" text-blue-600 p-3 font-semibold text-center text-xl md:text-3xl italic mb-5 md:mb-[6rem]"
    >
      <span
      className="text-white/70"
      >
        Somos una empresa de 
      </span>
      &nbsp; Seguridad Electrónica y Automatización</h1>
    <Services />
    <LogoTicker />
    <Products />

    <Features />

    
    <Testimonials />
    <CallToAction />
    
    <Footer />
    <WhatsappButton/>
    </>
    );
}
