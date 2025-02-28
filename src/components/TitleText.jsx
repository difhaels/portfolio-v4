import React from "react";
import MovingText from "./MovingText";
import { motion } from "framer-motion";

export default function TitleText({text, bgText}) {
  return (
    <div className="relative overflow-hidden pb-10">
      <h2 className="mb-5 text-center text-5xl font-bold uppercase">{text}</h2>
      <div className="relative mx-auto h-[6px] w-32 overflow-hidden rounded-full bg-[#72E2AE]/30">
        <motion.div
          className="absolute left-0 top-0 h-[6px] w-[6px] rounded-full bg-[#72E2AE]"
          animate={{ x: ["1px", "130px"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <MovingText what={bgText} />
    </div>
  );
}
