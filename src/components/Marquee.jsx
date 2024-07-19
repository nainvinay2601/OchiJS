import React from 'react'
import {  motion } from "framer-motion";

function Marquee() {
  
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.09"
      className="w-full py-20 pt-[10vw] rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text  border-t-[1px] border-b-[1px] border-zinc-300 flex   whitespace-nowrap overflow-hidden   items-center">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[24vw] leading-none font-founders-grotesk -mt-[3vh]    uppercase pr-5"
        >
          We Are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[24vw] leading-none font-founders-grotesk  -mt-[3vh]    uppercase"
        >
          We Are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee