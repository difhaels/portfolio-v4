"use client";
import { Image, Link } from "lucide-react";

import Container from "./Container";
import TitleText from "./TitleText";
import Section from "./Section";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PopUpProject from "./PopUpProject";

import projects from "@/data/projects.json";

export default function MyWorks({ isStay }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [selectedImages, setSelectedImages] = useState(null);

  return (
    <Section what={"section-works"}>
      <Container>
        <TitleText text={"My Works"} bgText={"Works"} isStay={isStay} />
        <div className="grid gap-6 pb-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="group rounded-lg bg-[#162033] p-5 shadow-lg"
            >
              <div className="relative inline-block h-40 w-full overflow-hidden">
                <span className="front absolute inset-0 flex items-center justify-center">
                  <img
                    src={project.banner}
                    alt={project.title}
                    className="h-40 w-full object-cover"
                  />
                </span>
                <span className="back absolute inset-0 flex h-40 w-full -translate-x-full items-center justify-center gap-3 bg-[#0b111a] bg-opacity-75 backdrop-blur backdrop-filter transition-all duration-500 group-hover:translate-x-0">
                  <div className="flex gap-4">
                    <a href={project.link? project.link:""}
                      className="rounded-full bg-[#72E2AE] p-3 hover:scale-105"
                    >
                      <Link className="h-6 w-6 text-gray-700" />
                    </a>
                    <button
                      className="rounded-full bg-[#72E2AE] p-3 hover:scale-105"
                      onClick={() => setSelectedImages(project.images)}
                    >
                      <Image className="h-6 w-6 text-gray-700" />
                    </button>
                  </div>
                </span>
              </div>
              <h3 className="pt-2 text-left text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-left text-sm text-gray-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
        {selectedImages && (
          <PopUpProject
            images={selectedImages}
            onClose={() => setSelectedImages(null)}
          />
        )}
      </Container>
    </Section>
  );
}
