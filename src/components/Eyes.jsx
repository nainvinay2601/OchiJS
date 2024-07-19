import React, { useState, useEffect } from 'react'

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    // Define the event handler for mouse move
    const handleMouseMove = (e) => {
      // Get the mouse X and Y coordinates
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Calculate the difference between the mouse position and the center of the screen
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // Calculate the angle using arctangent and convert it from radians to degrees
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      // Update the rotate state with the calculated angle adjusted by 180 degrees
      setRotate(angle - 180);
    };

    // Add the mouse move event listener to the window
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Dependency array ensures this effect runs only once after the initial render

  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-0.7" className='w-full h-full relative bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-10   top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%] ">
          <div className=" flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative ">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%]"
              >
                <div className="w-[2vw] h-[2vw] bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative ">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%]"
              >
                <div className="w-[2vw] h-[2vw] bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes