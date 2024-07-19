import React from 'react'

function Cards() {
  return (
    <div className="bg-zinc-100 w-full h-screen flex items-center gap-3 p-20">
      <div className="cardcontainer w-1/2  h-[55vh]">
        <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex  items-center justify-center ">
          <img
            className="w-[12vw] h-[11vh]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />

          <button className="absolute left-6 bottom-6 border border-solid border-[#CDEA68] px-2 py-1  rounded-full flex items-center justify-center ">
            <p className="text-[#CDEA68] font-neue-montreal text-[1vw] ">
              &copy;2019-2022
            </p>
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[55vh] flex gap-3">
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center ">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-6 bottom-6 border border-solid border-[#ffffff] px-2 py-1  rounded-full flex items-center justify-center ">
            <p className="text-[#ffffff] font-neue-montreal text-[1vw] uppercase ">
             Rating 5.0 on Clutch
            </p>
          </button>
        </div>
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center ">
          <img
            className="w-[8vw] h-[18vh] "
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-6 bottom-6 border border-solid border-[#ffffff] px-2 py-1  rounded-full flex items-center justify-center ">
            <p className="text-[#ffffff] font-neue-montreal text-[1vw] uppercase ">
             Business Bootcamp alumini
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards