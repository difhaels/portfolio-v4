"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import Container from "./Container";
import MovingText from "./MovingText";

export default function MySkills() {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", icon: <FaReact className="text-sky-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        {
          name: "Database Design",
          icon: <FaDatabase className="text-yellow-400" />,
        },
      ],
    },
    {
      category: "UI/UX Design",
      items: [{ name: "Figma", icon: <FaFigma className="text-pink-400" /> }],
    },
  ];
  return (
    <section
      className="skills-section mx-auto bg-[#0F172A] py-10 text-white"
      style={{
        backgroundImage: "url('/lineo.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Supaya gambar tetap di posisi yang sama
      }}
    >
      <Container>
        <div className="mx-auto">
          <div className="relative mb-14 overflow-hidden">
            <h2 className="mb-6 text-center text-5xl font-bold">My Skills</h2>
            <MovingText what="SKILLS" />
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
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
                <div className="space-y-3">
                  {skill.items.map((item, index) => (
                    <div
                      key={index}
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
        </div>
      </Container>
    </section>
  );
}
