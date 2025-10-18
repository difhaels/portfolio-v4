import NotFound from "@/components/NotFound";
import PageContainer from "@/components/PageContainer";
import PageTransition from "@/components/PageTransition";
import { AnimatePresence } from "framer-motion";
import React from "react";

export default function page() {
  return (
    <PageContainer>
      <AnimatePresence>
        <PageTransition />
      </AnimatePresence>
        <NotFound />
    </PageContainer>
  );
}
