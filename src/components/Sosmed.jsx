import React from "react";
import { Github, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Sosmed() {
  return (
    <div className="mt-3 flex space-x-4">
      <a
        href="#"
        className="group relative inline-block h-10 w-10 overflow-hidden rounded border border-white/10 text-lg"
      >
        {/* Ikon Awal */}
        <span className="front absolute inset-0 flex items-center justify-center bg-[#060A15] text-gray-500 transition-all duration-500 group-hover:-translate-y-full">
          <Facebook className="h-5 w-5" />
        </span>

        {/* Ikon Baru Muncul dari Bawah */}
        <span className="back absolute inset-0 flex translate-y-full items-center justify-center bg-[#72E2AE] text-black transition-all duration-500 group-hover:translate-y-0">
          <Facebook className="h-5 w-5" />
        </span>
      </a>
      <a
        href="#"
        className="group relative inline-block h-10 w-10 overflow-hidden rounded border border-white/10 text-lg"
      >
        {/* Ikon Awal */}
        <span className="front absolute inset-0 flex items-center justify-center bg-[#060A15] text-gray-500 transition-all duration-500 group-hover:-translate-y-full">
          <Instagram className="h-5 w-5" />
        </span>

        {/* Ikon Baru Muncul dari Bawah */}
        <span className="back absolute inset-0 flex translate-y-full items-center justify-center bg-[#72E2AE] text-black transition-all duration-500 group-hover:translate-y-0">
          <Instagram className="h-5 w-5" />
        </span>
      </a>
      <a
        href="#"
        className="group relative inline-block h-10 w-10 overflow-hidden rounded border border-white/10 text-lg"
      >
        {/* Ikon Awal */}
        <span className="front absolute inset-0 flex items-center justify-center bg-[#060A15] text-gray-500 transition-all duration-500 group-hover:-translate-y-full">
          <Github className="h-5 w-5" />
        </span>

        {/* Ikon Baru Muncul dari Bawah */}
        <span className="back absolute inset-0 flex translate-y-full items-center justify-center bg-[#72E2AE] text-black transition-all duration-500 group-hover:translate-y-0">
          <Github className="h-5 w-5" />
        </span>
      </a>
      <a
        href="#"
        className="group relative inline-block h-10 w-10 overflow-hidden rounded border border-white/10 text-lg"
      >
        {/* Ikon Awal */}
        <span className="front absolute inset-0 flex items-center justify-center bg-[#060A15] text-gray-500 transition-all duration-500 group-hover:-translate-y-full">
          <Linkedin className="h-5 w-5" />
        </span>

        {/* Ikon Baru Muncul dari Bawah */}
        <span className="back absolute inset-0 flex translate-y-full items-center justify-center bg-[#72E2AE] text-black transition-all duration-500 group-hover:translate-y-0">
          <Linkedin className="h-5 w-5" />
        </span>
      </a>
    </div>
  );
}
