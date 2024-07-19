import React from 'react' 

import HoverCard from './HoverCard';

function Featured() {

// const [hovering, setHovering] = useState(false);
 
  return (
    <div className="w-full py-20 bg-zinc-100 text-zinc-900">
      <div className="w-full px-20 border-b-[0.5px] pb-10  border-zinc-500">
        <h1 className="text-[4vw] font-neue-montreal  leading-[4vw]">
          Featured projects
        </h1>
      </div>
      <div className=" flex gap-5 items-center p-20">
        <HoverCard
          title="FYDE"
          imgSrc="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
          textAlignClass="left-full"
          translateClass="-translate-x-1/2"
        />
        <HoverCard
          title="VISE"
          imgSrc="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
          textAlignClass="right-full"
          translateClass="translate-x-1/2"
        />
      </div>
    </div>
  );
}

export default Featured