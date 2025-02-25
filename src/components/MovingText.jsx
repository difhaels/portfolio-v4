"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MovingText({what}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Mulai saat container muncul, selesai saat container hilang
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]); // Bergerak dari kiri ke kanan

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden -mt-20 opacity-10">
      <motion.h1
        className="text-9xl font-bold uppercase"
        style={{ x }}
      >
        {what}
      </motion.h1>
    </div>
  );
}
