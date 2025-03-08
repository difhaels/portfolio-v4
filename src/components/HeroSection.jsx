"use client";
import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import Sosmed from "./Sosmed";
import "aos/dist/aos.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="hero-section relative flex h-screen flex-col items-center justify-center bg-[#0B1224] text-center"
      style={{
        backgroundImage: "url('/line.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center sm:mt-20">
        <div className="relative mb-10 flex items-center justify-center">
          {/* Border Berputar */}
          <span className="absolute h-[156px] w-[156px] animate-spin rounded-full bg-gradient-to-tr from-[#72E2AE] to-transparent sm:h-[166px] sm:w-[166px]"></span>

          {/* Gambar Profil */}
          <div className="relative z-10 h-[156px] w-[156px] overflow-hidden rounded-full border-[6px] border-[#72E2AE]/20 sm:h-[166px] sm:w-[166px]">
            <Image
              src="/anime.jpeg"
              alt="Agung Saputra"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="mb-5 gap-2 text-4xl font-bold sm:flex">
          <h1>Hi, I am</h1>
          <span className="text-[#72E2AE]">
            <Typewriter
              words={["Agung Saputra", "Full-stack Developer"]}
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
        <div>
          <Sosmed />
        </div>
      </div>

      <div className="mt-16 flex items-center gap-2 sm:mt-20">
        <ArrowDown className="h-4 animate-bounce text-gray-400" />
        <p className="text-xs font-semibold text-gray-400">SCROLL DOWN</p>
      </div>
    </section>
  );
}
