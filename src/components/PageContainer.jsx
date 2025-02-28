"use client";
import React, { useState } from "react";
import SideNavbar from "./SideNavbar";
import FullScreenMenu from "./FullScreenMenu";

export default function PageContainer({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <SideNavbar setIsOpen={setIsOpen} />
      {/* Fullscreen Menu */}
      <FullScreenMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* Konten utama */}
      <div className="flex-1 pl-20">{children}</div>
    </div>
  );
}
