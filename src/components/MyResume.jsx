"use client";
import { Book, BriefcaseBusiness } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import TitleText from "./TitleText";

export default function MyResume({isStay}) {
  return (
    <Section what={"section-resume"}>
      <Container>
        <TitleText text={"my resume"} bgText={"resume"} isStay={isStay}/>

        <div className="grid gap-6 text-left md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Book className="text-[#72E2AE]"/>
              <h3 className="text-2xl font-semibold">
                Educational Qualification
              </h3>
            </div>
            <ol className="relative border-s border-gray-700">
              <li className="mb-10 ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-900 bg-gray-700"></div>
                <time className="mb-1 text-sm leading-none text-gray-500">
                  2019-2022
                </time>
                <h1 className="text-lg font-semibold text-[#72E2AE]">
                  Computer network Engineering
                </h1>
                <h1 className="mb-2 text-base">SMKN 1 Cileungsi, Indonesian</h1>
                <p className="mb-4 text-base text-gray-400">
                  Completed vocational high school majoring in Computer and
                  Network Engineering at SMKN 1 Cileungsi.
                </p>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-900 bg-gray-700"></div>
                <time className="mb-1 text-sm leading-none text-gray-500">
                  2022-Present
                </time>
                <h1 className="text-lg font-semibold text-[#72E2AE]">
                  Information Systems
                </h1>
                <h1 className="mb-2 text-base">
                  Universitas Nasional, Indonesian
                </h1>
                <p className="mb-4 text-base text-gray-400">
                  Currently pursuing a Bachelor's degree in Information Systems
                  at Universitas Nasional.
                </p>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-900 bg-gray-700"></div>
                <time className="mb-1 text-sm leading-none text-gray-500">
                  2021-Present
                </time>
                <h1 className="text-lg font-semibold text-[#72E2AE]">
                  Self-Taught Programming
                </h1>
                <p className="mb-4 text-base text-gray-400">
                  Continuously learning programming and software development
                  through self-study and projects.
                </p>
              </li>
            </ol>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <BriefcaseBusiness className="text-[#72E2AE]"/>
              <h3 className="text-2xl font-semibold">Working Experience</h3>
            </div>
            <ol className="relative border-s border-gray-700">
              <li className="mb-10 ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-900 bg-gray-700"></div>
                <time className="mb-1 text-sm leading-none text-gray-500">
                  2021-Present
                </time>
                <h1 className="text-lg font-semibold text-[#72E2AE]">IT Support</h1>
                <h1 className="mb-2 text-base">
                  WindowHome, window frame manufacturing
                </h1>
                <p className="mb-4 text-base text-gray-400">
                  Responsible for drafting agreements, listing items and prices,
                  designing logos, and other IT-related tasks.
                </p>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-900 bg-gray-700"></div>
                <time className="mb-1 text-sm leading-none text-gray-500">
                  2024-Present
                </time>
                <h1 className="text-lg font-semibold text-[#72E2AE]">
                  Full-Stack Freelance Developer
                </h1>
                <p className="mb-4 text-base text-gray-400">
                  Providing full-stack development services, assisting with
                  coding, and solving various programming-related issues.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
