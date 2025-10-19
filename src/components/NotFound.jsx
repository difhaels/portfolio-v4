"use client";
import { Image, Link } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import projects from "@/data/projects.json";

export default function NotFound() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Section what="section-notfound pb-20">
      <Container>
        <div className="flex-col text-center sm:mt-24">
          <h1 className="mb-1 text-xl font-semibold">
            Sorry, this page isn’t available yet.
          </h1>
          <p className="mx-4 sm:mx-20 text-lg text-gray-400">
            The project might still be under maintenance or not hosted at the
            moment. In the meantime, feel free to check out the preview images (<Image className="inline h-6 w-6 text-gray-500" />) at <a href="/works" className="underline text-gray-300">MyWorks </a>
             or explore other available live preview projects below.
          </p>
          <div className="mx-auto my-6 h-1 w-20 rounded-xl bg-[#72E2AE] opacity-30"></div>
          <h1 className="mb-8 text-xl font-semibold">
            Available Projects
          </h1>
          <div
            className={`grid gap-6 pb-5 ${
              projects.filter((p) => p.link && p.link.trim() !== "").length ===
              1
                ? "grid-cols-1 place-items-center"
                : "md:grid-cols-3"
            }`}
          >
            {projects
              .filter((project) => project.link && project.link.trim() !== "")
              .map((project, index) => (
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
                        <a
                          href={project.link ? project.link : ""}
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
        </div>
      </Container>
    </Section>
  );
}
