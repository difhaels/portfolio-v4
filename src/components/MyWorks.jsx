"use client";
import { Image } from "lucide-react";
import Container from "./Container";
import TitleText from "./TitleText";
import Section from "./Section";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PopUpProject from "./PopUpProject";

const projects = [
  {
    title: "Business Landing Page",
    description:
      "A landing page for business promotion using Next.js and MongoDB.",
    banner: "/blp/banner.png",
    images: [
      "/blp/img1.png",
      "/blp/img2.png",
      "/blp/img3.png",
      "/blp/img4.png",
      "/blp/img5.png",
    ],
  },
  {
    title: "DeterminiX CMS",
    description:
      "A content management system for managing showcases and activities.",
    banner: "/dc/banner.png",
    images: ["/dc/img1.png", "/dc/img2.png", "/dc/img3.png", "/dc/img4.png"],
  },
  {
    title: "DeterminiX Organization",
    description: "An organizational website built with React and Tailwind.",
    banner: "/do/banner.png",
    images: [
      "/do/img1.png",
      "/do/img2.png",
      "/do/img3.png",
      "/do/img4.png",
      "/do/img5.png",
    ],
  },
  {
    title: "Anonymous Chat",
    description:
      "A real-time anonymous chat application using Vue and Tailwind.",
    banner: "/ac/banner.png",
    images: ["/ac/img1.png", "/ac/img2.png", "/ac/img3.png"],
  },
  {
    title: "Netflix Clone",
    description: "A streaming platform inspired by Netflix, built with MERN.",
    banner: "/nc/banner.png",
    images: ["/nc/img1.png", "/nc/img2.png", "/nc/img3.png"],
  },
  {
    title: "Web Top-Up",
    description: "A digital top-up platform powered by Laravel and Bootstrap.",
    banner: "/wtu/banner.png",
    images: [
      "/wtu/img1.png",
      "/wtu/img2.png",
      "/wtu/img3.png",
      "/wtu/img4.png",
    ],
  },
];

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
                    className="h-40 w-full rounded-md object-cover"
                  />
                </span>
                <span className="back absolute inset-0 flex h-40 w-full -translate-x-full items-center justify-center gap-3 bg-[#0b111a] bg-opacity-75 backdrop-blur backdrop-filter transition-all duration-500 group-hover:translate-x-0">
                  <button
                    className="rounded-full bg-[#72E2AE] p-3"
                    onClick={() => setSelectedImages(project.images)}
                  >
                    <Image className="h-6 w-6 text-gray-700" />
                  </button>
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
        {selectedImages && <PopUpProject images={selectedImages} onClose={() => setSelectedImages(null)} />}
      </Container>
    </Section>
  );
}

