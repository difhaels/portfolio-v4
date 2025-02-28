import React from "react";

export default function Navbar3({ isOpenNavbar, setIsOpenNavbar }) {
  return (
    <div
      className={`fixed left-20 top-0 z-40 w-[calc(100%-5rem)] bg-gray-900 transition-transform duration-500 ${
        isOpenNavbar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="flex items-center justify-between text-white">
        <li className="group flex basis-1/5 items-center justify-center border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
          <a
            href="/"
            className="group-hover:text-primary flex h-screen w-full items-center justify-center p-5 text-5xl font-bold uppercase hover:text-[#72E2AE]"
            onClick={() => setIsOpenNavbar(false)}
            style={{ writingMode: "sideways-lr" }}
          >
            <span className="mt-3 text-[#72e2ae]">
              0.1
            </span>
            Home
          </a>
        </li>

        <li className="group flex basis-1/5 items-center justify-center border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
          <a
            href="/about"
            className="group-hover:text-primary flex h-screen w-full items-center justify-center p-5 text-5xl font-bold uppercase hover:text-[#72E2AE]"
            onClick={() => setIsOpenNavbar(false)}
            style={{ writingMode: "sideways-lr" }}
          >
            <span className="mt-3 text-[#72e2ae]">
              0.2
            </span>
            About
          </a>
        </li>

        <li className="group flex basis-1/5 items-center justify-center border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
          <a
            href="/resume"
            className="group-hover:text-primary flex h-screen w-full items-center justify-center p-5 text-5xl font-bold uppercase hover:text-[#72E2AE]"
            onClick={() => setIsOpenNavbar(false)}
            style={{ writingMode: "sideways-lr" }}
          >
            <span className="mt-3 text-[#72e2ae]">
              0.3
            </span>
            Resume
          </a>
        </li>

        <li className="group flex basis-1/5 items-center justify-center border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
          <a
            href="/works"
            className="group-hover:text-primary flex h-screen w-full items-center justify-center p-5 text-5xl font-bold uppercase hover:text-[#72E2AE]"
            onClick={() => setIsOpenNavbar(false)}
            style={{ writingMode: "sideways-lr" }}
          >
            <span className="mt-3 text-[#72e2ae]">
              0.4
            </span>
            Works
          </a>
        </li>

        <li className="group flex basis-1/5 items-center justify-center border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
          <a
            href="/contact"
            className="group-hover:text-primary flex h-screen w-full items-center justify-center p-5 text-5xl font-bold uppercase hover:text-[#72E2AE]"
            onClick={() => setIsOpenNavbar(false)}
            style={{ writingMode: "sideways-lr" }}
          >
            <span className="mt-3 text-[#72e2ae]">
              0.5
            </span>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
