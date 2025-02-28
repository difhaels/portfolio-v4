"use client";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-20 flex-col justify-between border-r border-white/10 bg-gray-900 py-8 text-center">
      {/* Logo */}
      <div className="flex h-[40%] items-start justify-center">
        <a
          href="/"
          className="border-primary relative inline-block h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-[#72E2AE]"
        >
          <img
            src="/agung.png"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </a>
      </div>

      {/* Menu Button */}
      <div className="flex h-20 items-center justify-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-white">
          <Menu className="h-10 w-10" />
        </button>
      </div>

      {/* Copyright */}
      <div className="flex h-[40%] items-end justify-center pb-16">
        <p className="flex -rotate-90 items-center justify-between gap-3 text-lg text-gray-500">
          ©2025
          <a href="/" className="font-semibold text-white">
            Difhaels
          </a>
        </p>
      </div>
    </aside>
  );
}
