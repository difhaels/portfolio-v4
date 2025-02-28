"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import MyWorks from "@/components/MyWorks";
import MyServices from "@/components/MyServices";
import MySkills from "@/components/MySkills";
import MyResume from "@/components/MyResume";
import ClientReviews from "@/components/ClientReviews";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Up from "@/components/Up";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar scrollToContact={scrollToContact} />
      <HeroSection />
      <AboutMe />
      <MyWorks />
      <MyServices />
      <MySkills />
      <MyResume />
      <ClientReviews />
      <div ref={contactRef}>
        <ContactUs />
      </div>
      <Footer />
      <Up />
    </div>
  );
}
