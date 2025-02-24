import React from "react";

export default function AboutMe() {
  return (
    <section className="about-section">
      <div className="container mx-auto lg:pt-24 xl:pt-32">
        <div className="text-center text-3xl font-bold">
          <h1>ABOUT ME</h1>
        </div>
        <div className="grid grid-cols-2 items-center gap-7  pb-20 pt-14">
          {/* Bagian Gambar */}
          <div className="col-span-2 lg:col-span-1">
            <div className="border-10 border-primary relative overflow-hidden rounded-md border-opacity-20">
              <span className="animate-ledgerleftright to-primary absolute -top-2.5 left-0 z-10 h-2.5 w-10 rounded-full bg-gradient-to-r from-transparent"></span>
              <span className="animate-ledgerrightleft from-primary absolute -bottom-2.5 right-0 z-10 h-2.5 w-10 rounded-full bg-gradient-to-r to-transparent"></span>
              <span className="animate-ledgerbottomtop to-primary absolute -left-2.5 top-0 z-10 h-10 w-2.5 rounded-full bg-gradient-to-t from-transparent"></span>
              <span className="animate-ledgertopbottom to-primary absolute -right-2.5 bottom-0 z-10 h-10 w-2.5 rounded-full bg-gradient-to-b from-transparent"></span>
              <img
                src="/about.jpeg"
                alt="Your Name"
                className="w-full rounded-md"
              />
            </div>
          </div>

          {/* Bagian Konten */}
          <div className="col-span-2 lg:col-span-1">
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
                  : Indonesian, English
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
      </div>
    </section>
  );
}
