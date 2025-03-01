import AboutMe from "@/components/AboutMe";
import ClientReviews from "@/components/ClientReviews";
import MyServices from "@/components/MyServices";
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
      <AboutMe isStay={true}/>
      <MyServices isStay={true} />
      <ClientReviews isStay={true} />
    </PageContainer>
  );
}
