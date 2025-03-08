"use client";
import { Brush, CodeXml, Wrench } from "lucide-react";
import Container from "./Container";
import { motion } from "framer-motion";
import TitleText from "./TitleText";
import Section from "./Section";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MyServices({isStay}) {
  useEffect(() => {
      AOS.init({ duration: 1000, once: true }); 
    }, []);
  return (
    <Section what={"section-service"}>
      <Container>
        <TitleText text={"my services"} bgText={"SERVICES"} isStay={isStay}/>
        <div className="grid gap-6 md:grid-cols-3" data-aos="zoom-in" >
          <motion.div 
            className="rounded-lg border-2 border-[#72E2AE] bg-[#162033] p-6 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_20px_#72E2AE]"
            animate={{
              boxShadow: ["0px 0px 1px #72E2AE", "0px 0px 10px #72E2AE"],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="flex items-start justify-between pb-7">
              <div className="rounded-full bg-[#72E2AE] bg-opacity-20 p-4">
                <CodeXml className="h-8 w-8 text-[#72E2AE]" />
              </div>
              <span className="text-5xl font-bold opacity-25">01</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Web Development</h3>
            <p className="text-md text-gray-400">
              I can code you the website you have always dreamed of. With my
              Front End and Back End development skills, I can deliver you a
              fully working and up-to-speed website that is fully functional and
              lightning fast.
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg border-2 border-[#72E2AE] bg-[#162033] p-6 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_20px_#72E2AE]"
            animate={{
              boxShadow: ["0px 0px 1px #72E2AE", "0px 0px 10px #72E2AE"],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="flex items-start justify-between pb-7">
              <div className="rounded-full bg-[#72E2AE] bg-opacity-20 p-4">
                <Brush className="h-8 w-8 text-[#72E2AE]" />
              </div>
              <span className="text-5xl font-bold opacity-25">02</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Ui/Ux Design</h3>
            <p className="text-md text-gray-400">
              I can deliver you stunning User Interfaces that will captivate
              your customer's attention and the best possible User experience
              with smooth animations and design & color combinations that are up
              to trend.
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg border-2 border-[#72E2AE] bg-[#162033] p-6 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_20px_#72E2AE]"
            animate={{
              boxShadow: ["0px 0px 1px #72E2AE", "0px 0px 10px #72E2AE"],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="flex items-start justify-between pb-7">
              <div className="rounded-full bg-[#72E2AE] bg-opacity-20 p-4">
                <Wrench className="h-8 w-8 text-[#72E2AE]" />
              </div>
              <span className="text-5xl font-bold opacity-25">03</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">IT Support</h3>
            <p className="text-md text-gray-400">
              I can assist you with troubleshooting and optimizing your computer
              systems. Whether it’s software installation, performance
              improvement, or resolving technical issues.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
