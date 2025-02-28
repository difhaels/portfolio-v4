"use client";
import React from "react";
import { X } from "lucide-react";

export default function Navbar4({ isOpenMiniNavbar, setIsOpenMiniNavbar }) {
  return (
    <div
      className={`fixed top-0 left-0 z-50 h-screen w-full bg-gray-900 bg-opacity-95 transition-transform duration-300 ${
        isOpenMiniNavbar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="absolute top-5 right-5 text-white"
        onClick={() => setIsOpenMiniNavbar(false)}
      >
        <X className="w-8 h-8" />
      </button>

      <nav className="flex flex-col items-center justify-center h-full text-white space-y-6 text-2xl font-semibold">
        <a href="#home" className="hover:text-[#72e2ae]" onClick={() => setIsOpenMiniNavbar(false)}><span className="text-[#72e2ae]">01. </span>Home</a>
        <a href="#about" className="hover:text-[#72e2ae]" onClick={() => setIsOpenMiniNavbar(false)}><span className="text-[#72e2ae]">02. </span>About</a>
        <a href="#services" className="hover:text-[#72e2ae]" onClick={() => setIsOpenMiniNavbar(false)}><span className="text-[#72e2ae]">03. </span>Services</a>
        <a href="#portfolio" className="hover:text-[#72e2ae]" onClick={() => setIsOpenMiniNavbar(false)}><span className="text-[#72e2ae]">04. </span>Portfolio</a>
        <a href="#contact" className="hover:text-[#72e2ae]" onClick={() => setIsOpenMiniNavbar(false)}><span className="text-[#72e2ae]">05. </span>Contact</a>
      </nav>
    </div>
  );
}
