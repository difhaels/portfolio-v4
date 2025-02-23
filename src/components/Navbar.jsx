"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="absolute flex top-0 z-50  w-full items-center justify-between  px-8 py-4 text-white shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold">MyPortfolio</div>

        {/* Navigation Links */}
        <ul className="flex space-x-10 text-sm font-semibold uppercase">
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
        <Link
          href="/contact"
          className="group relative inline-block h-10 w-24 overflow-hidden rounded-sm px-4 py-2 uppercase text-slate-900"
        >
          <span className="front absolute inset-0 flex items-center justify-center bg-[#72E2AE] text-slate-900 transition-all duration-500 group-hover:-translate-y-full">
            Hire Me
          </span>
          {/* Ikon Baru Muncul dari Bawah */}
          <span className="back absolute inset-0 flex translate-y-full items-center justify-center bg-white text-slate-900 transition-all duration-500 group-hover:translate-y-0">
            Hire Me
          </span>
        </Link>
      </nav>

      <nav data-aos="fade-down" className={` top-0 z-50 flex w-full items-center justify-between border-b border-white border-opacity-20 bg-[#060A15] bg-opacity-50 px-8 py-4 text-white shadow-md backdrop-blur backdrop-filter ${
        isScroll
          ? "fixed"
          : "hidden"
      }`}>
        {/* Logo */}
        <div className="text-2xl font-bold">MyPortfolio</div>

        {/* Navigation Links */}
        <ul className="flex space-x-10 text-sm font-semibold uppercase">
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
        <Link
          href="/contact"
          className="group relative inline-block h-10 w-24 overflow-hidden rounded-sm px-4 py-2 uppercase text-slate-900"
        >
          <span className="front absolute inset-0 flex items-center justify-center bg-[#72E2AE] text-slate-900 transition-all duration-500 group-hover:-translate-y-full">
            Hire Me
          </span>
          {/* Ikon Baru Muncul dari Bawah */}
          <span className="back absolute inset-0 flex translate-y-full items-center justify-center bg-white text-slate-900 transition-all duration-500 group-hover:translate-y-0">
            Hire Me
          </span>
        </Link>
      </nav>
    </>
  );
}
