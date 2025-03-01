import PageContainer from "@/components/PageContainer";
import React from "react";
import MySkills from "@/components/MySkills";
import MyResume from "@/components/MyResume";
import PageTransition from "@/components/PageTransition";
import { AnimatePresence } from "framer-motion";

export default function page() {
  return (
    <PageContainer>
      <AnimatePresence>
        <PageTransition />
      </AnimatePresence>
      <MySkills isStay={true}/>
      <MyResume isStay={true}/>
    </PageContainer>
  );
}
