"use client";
import { Image, SquareArrowOutUpRight } from "lucide-react";
import Container from "./Container";
import TitleText from "./TitleText";
import Section from "./Section";
export default function MyWorks({isStay}) {
  return (
    <Section what={"section-works"}>
      <Container>
        <TitleText text={"my works"} bgText={"works"} isStay={isStay}/>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="group rounded-lg bg-[#162033] p-5 shadow-lg">
            <div className="relative inline-block h-40 w-full overflow-hidden">
              <span className="front absolute inset-0 flex items-center justify-center">
                <img
                  src="/senti.jpg"
                  alt="Project 1"
                  className="h-40 w-full rounded-md object-cover"
                />
              </span>
              <span className="back absolute inset-0 flex h-40 w-full -translate-x-full items-center justify-center gap-3 bg-[#0b111a] bg-opacity-75 backdrop-blur backdrop-filter transition-all duration-500 group-hover:translate-x-0">
                <button className="rounded-full bg-[#72E2AE] p-3">
                  <Image className="h-6 w-6 text-gray-700" />
                </button>
                <button className="rounded-full bg-[#72E2AE] p-3">
                  <SquareArrowOutUpRight className="h-6 w-6 text-gray-700" />
                </button>
              </span>
            </div>
            <h3 className="pt-2 text-left text-xl font-semibold">
              Project One
            </h3>
            <p className="text-left text-sm text-gray-400">
              An e-commerce platform using Next.js and MongoDB.
            </p>
          </div>
          <div className="group rounded-lg bg-[#162033] p-5 shadow-lg">
            <div className="relative inline-block h-40 w-full overflow-hidden">
              <span className="front absolute inset-0 flex items-center justify-center">
                <img
                  src="/senti.jpg"
                  alt="Project 1"
                  className="h-40 w-full rounded-md object-cover"
                />
              </span>
              <span className="back absolute inset-0 flex h-40 w-full -translate-x-full items-center justify-center gap-3 bg-[#0b111a] bg-opacity-75 backdrop-blur backdrop-filter transition-all duration-500 group-hover:translate-x-0">
                <button className="rounded-full bg-[#72E2AE] p-3">
                  <Image className="h-6 w-6 text-gray-700" />
                </button>
                <button className="rounded-full bg-[#72E2AE] p-3">
                  <SquareArrowOutUpRight className="h-6 w-6 text-gray-700" />
                </button>
              </span>
            </div>
            <h3 className="pt-2 text-left text-xl font-semibold">
              Project One
            </h3>
            <p className="text-left text-sm text-gray-400">
              An e-commerce platform using Next.js and MongoDB.
            </p>
          </div>
          <div className="group rounded-lg bg-[#162033] p-5 shadow-lg">
            <div className="relative inline-block h-40 w-full overflow-hidden">
              <span className="front absolute inset-0 flex items-center justify-center">
                <img
                  src="/senti.jpg"
                  alt="Project 1"
                  className="h-40 w-full rounded-md object-cover"
                />
              </span>
              <span className="back absolute inset-0 flex h-40 w-full -translate-x-full items-center justify-center gap-3 bg-[#0b111a] bg-opacity-75 backdrop-blur backdrop-filter transition-all duration-500 group-hover:translate-x-0">
                <button className="rounded-full bg-[#72E2AE] p-3">
                  <Image className="h-6 w-6 text-gray-700" />
                </button>
                <button className="rounded-full bg-[#72E2AE] p-3">
                  <SquareArrowOutUpRight className="h-6 w-6 text-gray-700" />
                </button>
              </span>
            </div>
            <h3 className="pt-2 text-left text-xl font-semibold">
              Project One
            </h3>
            <p className="text-left text-sm text-gray-400">
              An e-commerce platform using Next.js and MongoDB.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
