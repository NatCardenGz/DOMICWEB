import Logo from '@/assets/dom1.svg';
import XSocial from '@/assets/social-x.svg';
import InstaSocial from '@/assets/social-instagram.svg';
import YTSocial from '@/assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-7">
          <div className="flex gap-2 items-center md:flex-1">
            <Logo className= "h-6 w-6"/>
            <div className="font-medium"> <span className=' font-extrabold'>DOMIC</span>HOME</div>
          </div>
     

          <nav className='flex flex-col gap-5 md:flex-row md:gap-7 md:justify-center'>
            <a 
              className=' text-white/70 hover:text-white text-xs md:text-sm transition'
              href="#">
              Inicio</a>
            <a 
              className=' text-white/70 hover:text-white text-xs md:text-sm transition'
              href="#">
              Servicios</a>
            <a 
              className=' text-white/70 hover:text-white text-xs md:text-sm transition'
              href="#">
              Experiencia</a>
            <a 
              className=' text-white/70 hover:text-white text-xs md:text-sm transition'
              href="#">
              Blog</a>
            <a 
              className=' text-white/70 hover:text-white text-xs md:text-sm transition'
              href="#">
              Contacto</a>
          </nav>
        
        <div className="flex gap-5 md:flex-1 md:justify-end">
          <XSocial className="text-white/40 hover:text-white transition" />
          <InstaSocial className="text-white/40 hover:text-white transition" />
          <YTSocial className="text-white/40 hover:text-white transition" />
        </div>
      </div>
      </div>
    </footer>);
};
