"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import TitleText from "./TitleText";
import Section from "./Section";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe({isStay}) {
  useEffect(() => {
      AOS.init({ duration: 1000, once: true }); 
    }, []);
  return (
    <Section what={"about-section"}>
      <Container>
        <TitleText text={"about me"} bgText={"about"} isStay={isStay}/>
        <div className="grid grid-cols-2 items-center justify-center gap-10">
          {/* Bagian Gambar */}
          <div data-aos="zoom-in" className="col-span-2 flex justify-center lg:col-span-1 lg:justify-end">
            <div   className="relative w-full overflow-hidden rounded-md border border-[#72E2AE] shadow-[0_0_15px_#72E2AE] sm:max-w-[450px]">
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
          <div className="col-span-2 lg:col-span-1 flex justify-start">
            <div className="about-content">
              <h3 className="text-2xl font-bold" data-aos="zoom-in">
                Hi, I am <span className="text-[#72E2AE]">Agung Saputra</span>
              </h3>
              <ul className="mt-4 space-y-2 mb-4 list-disc marker:text-[#72E2AE] ml-4 marker:text-[20px]">
                <li data-aos="zoom-in" className="text-lg pl-2">
                  <strong className="inline-block min-w-[120px] font-medium">
                    First Name
                  </strong>
                  : Agung
                </li>
                <li data-aos="zoom-in" className="text-lg pl-2">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Last Name
                  </strong>
                  : Saputra
                </li>
                <li data-aos="zoom-in" className="text-lg pl-2">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Age
                  </strong>
                  : 21 years
                </li>
                <li data-aos="zoom-in" className="text-lg pl-2">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Nationality
                  </strong>
                  : Indonesian
                </li>
                <li data-aos="zoom-in" className="text-lg pl-2">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Languages
                  </strong>
                  : Indonesian, English
                </li>
                <li data-aos="zoom-in" className="text-lg pl-2">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Address
                  </strong>
                  : Mustika Jaya, Kota bekasi, ID
                </li>
                <li data-aos="zoom-in" className="text-lg pl-2">
                  <strong className="inline-block min-w-[120px] font-medium">
                    Freelance
                  </strong>
                  : Available
                </li>
              </ul>
              <a
                href="/contact" data-aos="zoom-in"
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
      </Container>
    </Section>
  );
}
