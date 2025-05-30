import { MainButton } from "@/components";
import { motion } from "framer-motion";

<div className="flex flex-row gap-5 w-full ">

<div className="planeta y rings ">


  {/* ----Start planet---- */}
  <div className="absolute h-64 w-64 md:h-96  md:w-96 bg-aguamarina rounded-full border border-white/20 top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(24,132,232)]
        bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(14,135,215)_37.7%,rgb(25,34,84))]">

  </div>
  {/* ----End planet---- */}

  {/* ----Start Ring 1---- */}
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
    className="absolute w-[344px] h-[344px] md:h-[588px] md:w-[588px] border border-white opacity-20  rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-y-1/2 -translate-x-1/2"></div>
    <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-y-1/2 -translate-x-1/2"></div>
    <div className="absolute h-5 w-5 top-1/2 left-full border border-white rounded-full -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center">
      <div className="h-2 w-2 bg-white rounded-full"></div>
    </div>




    <div className="absolute h-2 w-2 top-full left-1/2 bg-white rounded-full -translate-y-1/2 -translate-x-1/2"></div>

  </motion.div>

  {/* ----End Ring 1---- */}

  {/* ----Start Ring 2---- */}
  <motion.div
    style={{
      translateX: "-50%",
      translateY: "-50%",
    }}
    animate={{
      rotate: "-1turn",
    }}
    transition={{
      repeat: Infinity,
      duration: 60,
      ease: "linear"
    }}

    className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2
        border-dashed">

  </motion.div>

  {/* ----End Ring 2---- */}

  {/* ----Start Ring 3---- */}
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
      duration: 90,
      ease: "linear"
    }}
    className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-y-1/2 -translate-x-1/2"></div>
    <div className="absolute h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-y-1/2 -translate-x-1/2"></div>
  </motion.div>

  {/* ----End Ring 3---- */}
</div>


<div className="container relative mt-16 ">
  <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter text-center text-transparent bg-clip-text
          bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(0,140,233,.5))] ">
    AI SEO
  </h1>
  <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
    Elevate your website visibility with ai, where smart technology meets user-friendly
    SEO tools</p>

  <div className="flex justify-center mt-5">
    <MainButton title="Join wairlist" sizeFont='text-md' widthButtonPY="px-8" />
  </div>


</div>
</div>