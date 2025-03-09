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

export const metadata = {
  title: "Tentang Agung Saputra",
  description: "Pelajari lebih lanjut tentang Agung Saputra dan perjalanannya di dunia teknologi.",
  openGraph: {
    title: "Tentang Agung Saputra",
    description: "Pelajari lebih lanjut tentang Agung Saputra dan perjalanannya di dunia teknologi.",
    url: "https://difhdev.site/about",
    images: [
      {
        url: "https://difhdev.site/about-og.jpg",
        width: 1280,
        height: 1014,
      },
    ],
  },
};
