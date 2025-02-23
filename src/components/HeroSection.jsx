"use client";
import { Github, Instagram, Linkedin, ArrowDown, Facebook } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col items-center justify-center bg-[#060A15] text-center"
      style={{
        backgroundImage: "url('/line.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center pt-40 pb-28">
        <div className="relative mb-10 flex items-center justify-center">
          {/* Border Berputar */}
          <span className="absolute h-[156px] w-[156px] animate-spin rounded-full bg-gradient-to-tr from-[#72E2AE] to-transparent sm:h-[166px] sm:w-[166px]"></span>

          {/* Gambar Profil */}
          <div className="relative z-10 h-[156px] w-[156px] overflow-hidden rounded-full border-[6px] border-[#72E2AE]/20 sm:h-[166px] sm:w-[166px]">
            <img
              src="/agung.png"
              alt="Agung Saputra"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mb-5 gap-2 text-4xl font-bold sm:flex">
          <h1>Hi, I am</h1>
          <span className="text-[#72E2AE]">
            <Typewriter
              words={["Agung Saputra", "Full-stack Developer", "Web Designer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </div>
        <p className="mx-5 mb-4 max-w-xl text-lg text-gray-400">
          I am a Full-Stack web developer. I can provide clean code and pixel
          perfect design. I also make website more & more interactive with web
          animations.
        </p>
        <div className="mt-3 flex space-x-4">
          <a
            href="#"
            className="group relative inline-block h-10 w-10 overflow-hidden rounded border border-white/10 text-lg"
          >
            {/* Ikon Awal */}
            <span className="front absolute inset-0 flex items-center justify-center bg-gray-700 text-white transition-all duration-500 group-hover:-translate-y-full">
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
            <span className="front absolute inset-0 flex items-center justify-center bg-gray-700 text-white transition-all duration-500 group-hover:-translate-y-full">
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
            <span className="front absolute inset-0 flex items-center justify-center bg-gray-700 text-white transition-all duration-500 group-hover:-translate-y-full">
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
            <span className="front absolute inset-0 flex items-center justify-center bg-gray-700 text-white transition-all duration-500 group-hover:-translate-y-full">
              <Linkedin className="h-5 w-5" />
            </span>

            {/* Ikon Baru Muncul dari Bawah */}
            <span className="back absolute inset-0 flex translate-y-full items-center justify-center bg-[#72E2AE] text-black transition-all duration-500 group-hover:translate-y-0">
              <Linkedin className="h-5 w-5" />
            </span>
          </a>
        </div>
      </div>

      <div className="bottom-10 flex items-center gap-2">
        <ArrowDown className="h-4 animate-bounce text-gray-400" />
        <p className="text-xs font-semibold text-gray-400">SCROLL DOWN</p>
      </div>
    </section>
  );
}
