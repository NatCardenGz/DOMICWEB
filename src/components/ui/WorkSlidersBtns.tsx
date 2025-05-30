'use client';
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface Props{
    containerStyles?:string;
    btnStyles?:string;
    iconStyles?:string;
}

export const WorkSlidersBtns = ({containerStyles, iconStyles, btnStyles}:Props) => {
   
    
    const swiper = useSwiper();

  return (
    <div className={containerStyles}>
        <button 
            onClick={() => swiper.slidePrev()}
            className={btnStyles}> 
                <PiCaretLeftBold className={iconStyles} />
        </button>

        <button 
            onClick={() => swiper.slideNext()}
            className={btnStyles}> 
                <PiCaretRightBold className={iconStyles} />
        </button>
    </div>
  )
}
