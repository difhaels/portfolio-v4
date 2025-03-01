"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MovingText({what, isStay}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], 
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "80%"]); 

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden -mt-20 opacity-10">
      <h1 className={`text-8xl sm:text-9xl font-bold uppercase text-center ${isStay? "block" : "hidden"}`}>
        {what}
      </h1>
      <motion.h1
        className={`text-9xl font-bold uppercase  ${isStay? "hidden" : "block"}`}
        style={{ x }}
      >
        {what}
      </motion.h1>
    </div>
  );
}
