import React from "react";

export default function Section({ children, what }) {
  return (
    <section
      className={`${what} mx-auto bg-[#0F172A] text-white pt-20 sm:pt-28`}
      style={{
        backgroundImage: "url('/lineo.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {children}
    </section>
  );
}
