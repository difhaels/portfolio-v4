"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPhp, FaFigma, FaDatabase, FaVuejs } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiFirebase, 
  SiLaravel, 
  SiCloudinary, 
  SiRedux, 
  SiTypescript, 
  SiSass, 
  SiJsonwebtokens , SiBootstrap
} from "react-icons/si";
import Container from "./Container";
import Section from "./Section";
import TitleText from "./TitleText";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MySkills({isStay}) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", icon: <FaReact className="text-sky-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
        { name: "Vue.js", icon: <FaVuejs className="text-green-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
        { name: "Sass", icon: <SiSass className="text-pink-500" /> },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="text-white" /> },
        { name: "PHP", icon: <FaPhp className="text-blue-500" /> },
        { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
      ],
    },
    {
      category: "Database & Storage",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
        { name: "Cloudinary", icon: <SiCloudinary className="text-gray-400" /> },
      ],
    },
  ];

  return (
    <Section what={"section-skills"}>
      <Container>
        <TitleText text={"my skills"} bgText={"skills"} isStay={isStay} />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              className="relative rounded-xl border border-gray-800 bg-[#111827] p-8 shadow-lg transition-all duration-300"
              whileHover={{
                y: -4,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3 className="mb-6 text-xl font-medium text-gray-100">
                {skill.category}
              </h3>
              <div className="space-y-3" >
                {skill.items.map((item, index) => (
                  <div
                    key={index} data-aos="zoom-in"
                    className="flex items-center gap-4 rounded-lg bg-[#1F2937] p-3"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <p className="text-lg text-gray-300">{item.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
