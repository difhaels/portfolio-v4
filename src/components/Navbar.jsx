"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ scrollToContact }) {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full">
      <nav className="absolute left-1/2 top-0 z-50 flex w-full max-w-7xl -translate-x-1/2 items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <img src="/logo.svg" alt="logo" className="h-16 rounded-full p-2" />

        {/* Navigation Links (Desktop) */}
        <ul className="hidden space-x-10 text-sm font-semibold uppercase sm:flex">
          {["Home", "About", "Resume", "Works", "Contact"].map((item, index) => (
            <li key={item} className="group relative">
              <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                <span className="text-[#72E2AE]">{`0${index + 1}. `}</span>
                {item}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#72E2AE] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me Button (Hanya di Desktop) */}
        <button
          onClick={scrollToContact}
          className="hidden sm:inline-block group relative h-10 w-24 overflow-hidden rounded-sm px-4 py-2 uppercase text-slate-900"
        >
          <span className="front absolute inset-0 flex items-center justify-center bg-[#72E2AE] text-slate-900 transition-all duration-500 group-hover:-translate-y-full">
            Hire Me
          </span>
          <span className="back absolute inset-0 flex translate-y-full items-center justify-center bg-white text-slate-900 transition-all duration-500 group-hover:translate-y-0">
            Hire Me
          </span>
        </button>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden z-50 p-2"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Sticky Navbar saat Scroll */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={isScroll ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 z-50 w-full border-b border-white border-opacity-20 bg-[#060A15] bg-opacity-50 px-6 py-4 text-white shadow-md backdrop-blur backdrop-filter"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <img src="/logo.svg" alt="logo" className="h-14 p-1" />

          <ul className="hidden space-x-10 text-sm font-semibold uppercase sm:flex">
            {["Home", "About", "Resume", "Works", "Contact"].map((item, index) => (
              <li key={item} className="group relative">
                <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                  <span className="text-[#72E2AE]">{`0${index + 1}. `}</span>
                  {item}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#72E2AE] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Hire Me Button (Hanya di Desktop) */}
          <button
            onClick={scrollToContact}
            className="hidden sm:inline-block group relative h-10 w-24 overflow-hidden rounded-sm px-4 py-2 uppercase text-slate-900"
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

      {/* Mobile Menu (Hamburger) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 bg-[#060A15] bg-opacity-90 text-white sm:hidden ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {["Home", "About", "Resume", "Works", "Contact"].map((item, index) => (
          <Link
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="block font-semibold text-2xl"
          >
            <span className="text-[#72E2AE]">{`0${index + 1}. `}</span>
            {item}
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
