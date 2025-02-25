"use client";
import React from "react";
import { motion } from "framer-motion";
import MovingText from "./MovingText";

export default function AboutMe() {
  return (
    <section
      className="about-section container mx-auto lg:pt-24 xl:pt-32"
      style={{
        backgroundImage: "url('/lineo.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative mb-14 overflow-hidden">
        <h2 className="mb-6 text-5xl font-bold text-center">About Me</h2>
        <MovingText what="ABOUT" />
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-10 pb-20 pt-14">
        {/* Bagian Gambar */}
        <div className="col-span-2 flex justify-center lg:col-span-1 lg:justify-end">
          <div className="relative max-w-[400px] overflow-hidden rounded-md border border-[#72E2AE] shadow-[0_0_15px_#72E2AE] sm:max-w-[450px]">
            {/* Efek api di bawah */}
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-1">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-12 w-5 rounded-full bg-[#72E2AE] opacity-70 mix-blend-overlay blur-md"
                  initial={{ y: 0, scaleY: 1, opacity: 0.5 }}
                  animate={{
                    y: [-5, -15, -5],
                    scaleY: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.2 + Math.random(),
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            {/* Gambar */}
            <img
              src="/about.jpeg"
              alt="Your Name"
              className="w-full rounded-md border border-[#72E2AE] shadow-[0_0_15px_#72E2AE]"
            />
          </div>
        </div>

        {/* Bagian Konten */}
        <div className="col-span-2 mx-10 sm:mx-0 lg:col-span-1">
          <div className="about-content">
            <h3 className="text-2xl font-bold">
              Hi, I am <span className="text-[#72E2AE]">Agung Saputra</span>
            </h3>
            <ul className="mt-4 space-y-2 pb-3">
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  First Name
                </strong>
                : Agung
              </li>
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Last Name
                </strong>
                : Saputra
              </li>
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Age
                </strong>
                : 21 years
              </li>
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Nationality
                </strong>
                : Indonesian
              </li>
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Languages
                </strong>
                : Indonesian, English, Russian
              </li>
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Address
                </strong>
                : Mustikajaya, Bekasi, Indonesian
              </li>
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Freelance
                </strong>
                : Available
              </li>
            </ul>
            <a
              href="/contact"
              className="group relative inline-block h-10 w-48 overflow-hidden rounded-sm uppercase text-slate-900"
            >
              <span className="front absolute inset-0 flex items-center justify-center bg-[#72E2AE] text-slate-900 transition-all duration-500 group-hover:-translate-y-full">
                Download Resume
              </span>
              {/* Ikon Baru Muncul dari Bawah */}
              <span className="back absolute inset-0 flex translate-y-full items-center justify-center bg-white text-slate-900 transition-all duration-500 group-hover:translate-y-0">
                Download Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
