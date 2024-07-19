import React from 'react'
import { PiArrowUpRightLight } from "react-icons/pi";
import {motion} from "framer-motion"
 

function Landingpage() {
  return (
    
    <div  data-scroll data-scroll-section data-scroll-speed="-0.5" className="w-full h-screen bg-[#08090a] pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw]  relative -top-[0.1vw]"
                  >
                    <img
                      className="w-full h-full bg-cover rounded-md"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="uppercase text-[9vw] leading-[.75]  font-founders-grotesk">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-16 flex justify-between items-center px-20 py-3 ">
        {[
          "For Public And Private Companies",
          "From The First Pitch To IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-white text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex gap-2">
          <div className="px-5 py-2  border-[1px] border-zinc-700 rounded-full  font-light text-md uppercase">
            Start The Project
          </div>
          <div className="w-10 h-10  border-[1px] border-zinc-500 rounded-full flex justify-center items-center">
            <PiArrowUpRightLight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage