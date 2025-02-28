"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ scrollToContact }) {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 600); // Muncul saat scroll ke bawah 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full">
      <nav className="absolute left-1/2 top-0 z-50 flex w-full max-w-7xl -translate-x-1/2 items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <div className="text-2xl font-bold">
          A<span className="text-[#72E2AE]">S</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden space-x-10 text-sm font-semibold uppercase sm:flex">
          <li className="group relative">
            <Link href="/">
              <span className="text-[#72E2AE]">01. </span>Home
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#72E2AE] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link href="/about">
              <span className="text-[#72E2AE]">02. </span>About
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#72E2AE] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link href="/resume">
              <span className="text-[#72E2AE]">03. </span>resume
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#72E2AE] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link href="/works">
              <span className="text-[#72E2AE]">04. </span>Works
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#72E2AE] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link href="/contact">
              <span className="text-[#72E2AE]">05. </span>Contact
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#72E2AE] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Hire Me Button */}
        <button
          onClick={scrollToContact}
          className="group relative inline-block h-10 w-24 overflow-hidden rounded-sm px-4 py-2 uppercase text-slate-900"
        >
          <span className="front absolute inset-0 flex items-center justify-center bg-[#72E2AE] text-slate-900 transition-all duration-500 group-hover:-translate-y-full">
            Hire Me
          </span>
          {/* Ikon Baru Muncul dari Bawah */}
          <span className="back absolute inset-0 flex translate-y-full items-center justify-center bg-white text-slate-900 transition-all duration-500 group-hover:translate-y-0">
            Hire Me
          </span>
        </button>
      </nav>

      <motion.nav
        initial={{ opacity: 0, y: -50 }} // Awal: Tidak terlihat, geser ke atas
        animate={isScroll ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Scroll turun: Muncul | Scroll ke atas: Hilang
        transition={{ duration: 0.5 }} // Durasi animasi 0.5s
        className="fixed top-0 z-50 w-full border-b border-white border-opacity-20 bg-[#060A15] bg-opacity-50 px-6 py-4 text-white shadow-md backdrop-blur backdrop-filter"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="text-2xl font-bold">
            A<span className="text-[#72E2AE]">S</span>
          </div>

          {/* Navigation Links */}
          <ul className="hidden space-x-10 text-sm font-semibold uppercase sm:flex">
            {["Home", "About", "Resume", "Works", "Contact"].map(
              (item, index) => (
                <li key={item} className="group relative">
                  <Link href={`/${item.toLowerCase()}`}>
                    <span className="text-[#72E2AE]">{`0${index + 1}. `}</span>
                    {item}
                    <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#72E2AE] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ),
            )}
          </ul>

          {/* Hire Me Button */}
          <button
            onClick={scrollToContact}
            className="group relative inline-block h-10 w-24 overflow-hidden rounded-sm px-4 py-2 uppercase text-slate-900"
          >
            <span className="front absolute inset-0 flex items-center justify-center bg-[#72E2AE] text-slate-900 transition-all duration-500 group-hover:-translate-y-full">
              Hire Me
            </span>
            <span className="back absolute inset-0 flex translate-y-full items-center justify-center bg-white text-slate-900 transition-all duration-500 group-hover:translate-y-0">
              Hire Me
            </span>
          </button>
        </div>
      </motion.nav>
    </section>
  );
}
