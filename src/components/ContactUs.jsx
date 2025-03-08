"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import TitleText from "./TitleText";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

export default function ContactUs({ isStay }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zw1eh0s", "template_zvu5or6", form.current, {
        publicKey: "o1twaftzXdYckdrKK",
      })
      .then(
        () => {
          alert("Sent Successfully!");
        },
        (error) => {
          alert("OOOPS Something Wrong!");
        },
      );
  };
  return (
    <Section what="section-contact pb-20">
      <Container>
        <TitleText text={"contact us"} bgText={"contact"} isStay={isStay} />
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h1 className="mb-1 text-xl font-semibold">Contact Information</h1>
            <p className="text-lg text-gray-400">
              If you have a vision I can convert that into code and a finished
              website and web app, so don't let it just be a vision realise it
              now and send me an E-Mail.
            </p>
            <div className="my-6 h-1 w-20 rounded-xl bg-[#72E2AE] opacity-30"></div>
            <div className="flex flex-col gap-5">
              <div
                data-aos="zoom-in"
                className="flex gap-3 rounded-lg border border-gray-800 bg-[#162033] p-5"
              >
                <div className="h-fit rounded-full bg-[#72E2AE] bg-opacity-25 p-4 text-[#72E2AE]">
                  <Phone />
                </div>
                <div>
                  <h1 className="mb-1 text-lg font-semibold">
                    Contact on phone
                  </h1>
                  <h1 className="text-gray-400">+62 895 3373 05533</h1>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                className="flex gap-3 rounded-lg border border-gray-800 bg-[#162033] p-5"
              >
                <div className="h-fit rounded-full bg-[#72E2AE] bg-opacity-25 p-4 text-[#72E2AE]">
                  <Mail />
                </div>
                <div>
                  <h1 className="mb-1 text-lg font-semibold">
                    Contact on mail
                  </h1>
                  <h1 className="text-gray-400">agungsaputradifh@gmail.com</h1>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                className="flex gap-3 rounded-lg border border-gray-800 bg-[#162033] p-5"
              >
                <div className="h-fit rounded-full bg-[#72E2AE] bg-opacity-25 p-4 text-[#72E2AE]">
                  <MapPin />
                </div>
                <div>
                  <h1 className="mb-1 text-lg font-semibold">
                    Contact address
                  </h1>
                  <h1 className="text-gray-400">
                    Mustika Jaya, Kota Bekasi 17156
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="zoom-in"
            className="mx-auto h-fit w-full rounded-lg border border-gray-800 bg-[#162033] p-6 text-left shadow-lg"
          >
            <div className="mb-4">
              <label className="mb-2 block text-gray-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="user_name"
                className="w-full rounded border border-gray-600 bg-[#1A1F2B] p-3 text-white focus:border-[#72E2AE] focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="user_email"
                className="w-full rounded border border-gray-600 bg-[#1A1F2B] p-3 text-white focus:border-[#72E2AE] focus:outline-none"
                placeholder="Your Email"
                autoComplete="off"
                required
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-gray-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full rounded border border-gray-600 bg-[#1A1F2B] p-3 text-white focus:border-[#72E2AE] focus:outline-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button className="group relative inline-block h-10 w-28 overflow-hidden rounded-sm uppercase text-slate-900">
              <span className="front absolute inset-0 flex items-center justify-center bg-[#72E2AE] text-slate-900 transition-all duration-500 group-hover:-translate-y-full">
                send mail
              </span>
              {/* Ikon Baru Muncul dari Bawah */}
              <span className="back absolute inset-0 flex translate-y-full items-center justify-center bg-white text-slate-900 transition-all duration-500 group-hover:translate-y-0">
                send mail
              </span>
            </button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
