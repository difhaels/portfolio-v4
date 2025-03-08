"use client";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Up() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }} // Mulai dari bawah & transparan
      animate={isScroll ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // Animasi smooth saat muncul/hilang
      transition={{ duration: 0.5 }} // Durasi animasi 0.5 detik
      className="fixed bottom-3 right-4 z-40 md:bottom-7 md:right-10"
    >
      <a
        onClick={scrollToTop}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#72E2AE] text-gray-700 hover:scale-105 cursor-pointer"
      >
        <ChevronUp />
      </a>
    </motion.div>
  );
}
