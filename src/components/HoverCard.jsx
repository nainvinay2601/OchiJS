import React, { useState } from "react";
import { motion } from "framer-motion";

function HoverCard({ title, imgSrc, textAlignClass, translateClass }) {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    //   style={{ transform: hovering ? "scale(0.95)" : "scale(1)" }}
      className="cardContainer cursor-pointer relative w-1/2 h-[80vh]"
    >
      <h1
        className={`absolute   ${textAlignClass} flex overflow-hidden ${translateClass} top-1/2 -translate-y-1/2 text-[9vw] font-founders-grotesk z-[9] leading-none  text-[#CDEA68]`}
      >
        {title.split("").map((item, index) => (
          <motion.span
            initial={{ y: "100%" }}
            animate={hovering ? { y: "0" } : { y: "100%" }}
            transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
            className="inline-block"
            key={index}
          >
            {item}
          </motion.span>
        ))}
      </h1>
      <div className="card w-full h-full rounded-xl overflow-hidden">
        <motion.img
          className="w-full h-full bg-cover"
          src={imgSrc}
          alt=""
          animate={hovering ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}

export default HoverCard;
