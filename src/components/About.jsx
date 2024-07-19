import React from 'react'

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className="w-full bg-[#CDEA68] p-20 rounded-tl-3xl rounded-tr-3xl font-neue-montreal"
    >
      <h1 className=" text-black  text-[4vw] leading-[4vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full  flex  pt-[5vh] mt-[7vh] lg:mt-[12vh] border-t-[1px] border-[#6a7445]">
        <div className="w-1/2">
          <h1 className="text-[4vw] -mt-[2vh] text-black ">Our approach:</h1>
          <button className="px-6 py-5 mt-[1.5vh] rounded-full text-white bg-zinc-950 uppercase text-sm flex gap-8 items-center">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 h-[70vh] rounded-2xl bg-[#a5b46e] "></div>
      </div>
    </div>
  );
}

export default About