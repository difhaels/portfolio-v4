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

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <MyWorks />
      <MyServices />
      <MySkills />
      <MyResume />
      <ClientReviews />
      <ContactUs />
      <Footer />
    </div>
  );
}
