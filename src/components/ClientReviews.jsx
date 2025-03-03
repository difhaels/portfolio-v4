"use client";
import Container from "./Container";
import Section from "./Section";
import TitleText from "./TitleText";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientReviews({isStay}) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);
  return (
    <Section className="section-client">
      <Container>
        <TitleText text={"client reviews"} bgText={"reviews"} isStay={isStay}/>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div data-aos="zoom-in" className="bg-[#162033] rounded-xl px-7 pb-5 border mb-10">
            <div className="border-4 w-20 h-20 rounded-full border-[#72E2AE] flex items-center justify-center mb-5 -mt-10">
              <img
                src="/person.svg"
                alt="myIcon"
                className="h-16 w-16 rounded-full bg-white p-2"
              />
            </div>
            <h1 className="text-lg">Rizky Akbar</h1>
            <h1 className="text-sm py-1 text-gray-300">Client - Friend</h1>
            <p className="italic text-gray-300">
              "Awesome experience! He totally got my idea and turned it into something even better. Super easy to work with!"
            </p>
          </div>
          <div data-aos="zoom-in" className="bg-[#162033] rounded-xl px-7 pb-5 border mb-10">
            <div className="border-4 w-20 h-20 rounded-full border-[#72E2AE] flex items-center justify-center mb-5 -mt-10">
              <img
                src="/person.svg"
                alt="myIcon"
                className="h-16 w-16 rounded-full bg-white p-2"
              />
            </div>
            <h1 className="text-lg">Fahmi Ramadhan</h1>
            <h1 className="text-sm py-1 text-gray-300">Client - Friend</h1>
            <p className="italic text-gray-300">
              "Delivered exactly what I needed, and fast! Knows his stuff and always ready to help."
            </p>
          </div>
          <div data-aos="zoom-in" className="bg-[#162033] rounded-xl px-7 pb-5 border mb-10">
            <div className="border-4 w-20 h-20 rounded-full border-[#72E2AE] flex items-center justify-center mb-5 -mt-10">
              <img
                src="/person.svg"
                alt="myIcon"
                className="h-16 w-16 rounded-full bg-white p-2"
              />
            </div>
            <h1 className="text-lg">Fikri Fauzi</h1>
            <h1 className="text-sm py-1 text-gray-300">Client - Friend</h1>
            <p className="italic text-gray-300">
              "Great work, smooth process, and amazing results."
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
}
