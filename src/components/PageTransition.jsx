"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const PageTransition = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Menghilangkan garis setelah animasi selesai
    const timer = setTimeout(() => setIsVisible(false), 600); // 600ms = durasi animasi
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null; // Jangan render apapun setelah animasi selesai

  return (
    <motion.div
      className="fixed top-0 left-0 h-[2px] bg-[#72e2ae] w-full z-50 origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  );
};

export default PageTransition;
