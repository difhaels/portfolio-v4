"use client";
import React, { useState } from "react";
import SideNavbar from "./SideNavbar";
import MiniSideNavbar from "./MiniSideNavbar";
import Navbar3 from "./Navbar3";
import Navbar4 from "./Navbar4";

export default function PageContainer({ children }) {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [isOpenMiniNavbar, setIsOpenMiniNavbar] = useState(false);

  return (
    <div className="relative">
      {/* Sidebar */}
      <div className="hidden sm:block">
        <SideNavbar setIsOpenNavbar={setIsOpenNavbar} />
      </div>
      <div className="block sm:hidden">
        <MiniSideNavbar setIsOpenMiniNavbar={setIsOpenMiniNavbar}/>
      </div>
      {/* Navbar 3 */}
      <Navbar3 isOpenNavbar={isOpenNavbar} setIsOpenNavbar={setIsOpenNavbar} />
      {/* Navbar 4 */}
      <Navbar4 isOpenMiniNavbar={isOpenMiniNavbar} setIsOpenMiniNavbar={setIsOpenMiniNavbar} />
      {/* Konten utama */}
      <div className="flex-1 pl-0 sm:pl-20">{children}</div>
    </div>
  );
}
