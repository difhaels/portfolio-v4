import React from "react";
import { ArrowRight } from "lucide-react";

export default function MiniSideNavbar({ setIsOpenMiniNavbar }) {
  return (
    <button
      onClick={() => setIsOpenMiniNavbar((prev) => !prev)}
      className="fixed left-0 top-1/2 z-40 flex h-fit w-fit -translate-y-1/2 cursor-pointer flex-col items-center justify-center rounded-r-md border-r border-white/10 bg-[#72e2ae] bg-opacity-35 p-1 text-[#72e2ae]"
    >
      <ArrowRight className="h-6 w-6" />
    </button>
  );
}
