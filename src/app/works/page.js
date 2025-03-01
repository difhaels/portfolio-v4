import MyWorks from "@/components/MyWorks";
import PageContainer from "@/components/PageContainer";
import PageTransition from "@/components/PageTransition";
import { AnimatePresence } from "framer-motion";
import React from "react";

export default function page() {
  return (
    <PageContainer >
      <AnimatePresence>
        <PageTransition />
      </AnimatePresence>
      <MyWorks isStay={true} />
    </PageContainer>
  );
}
