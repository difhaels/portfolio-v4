import React from "react";

export default function Section({ children, what }) {
  return (
    <section
      className={`${what} mx-auto bg-[#0F172A] py-10 text-white`}
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
