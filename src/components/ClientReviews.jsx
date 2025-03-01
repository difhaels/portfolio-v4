"use client";
import Container from "./Container";
import Section from "./Section";
import TitleText from "./TitleText";

export default function ClientReviews({isStay}) {
  return (
    <Section className="section-client">
      <Container>
        <TitleText text={"client reviews"} bgText={"reviews"} isStay={isStay}/>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#162033] rounded-xl px-7 pb-5 border mb-10">
            <div className="border-4 w-20 h-20 rounded-full border-[#72E2AE] flex items-center justify-center mb-5 -mt-10">
              <img
                src="/person.svg"
                alt="myIcon"
                className="h-16 w-16 rounded-full bg-white p-2"
              />
            </div>
            <h1 className="text-lg">Tubagus Habibi</h1>
            <h1 className="text-sm py-1 text-gray-300">Client - Friend</h1>
            <p className="italic text-gray-300">
              "Amazing developer! Delivered exactly what I needed and more."
            </p>
          </div>
          <div className="bg-[#162033] rounded-xl px-7 pb-5 border mb-10">
            <div className="border-4 w-20 h-20 rounded-full border-[#72E2AE] flex items-center justify-center mb-5 -mt-10">
              <img
                src="/person.svg"
                alt="myIcon"
                className="h-16 w-16 rounded-full bg-white p-2"
              />
            </div>
            <h1 className="text-lg">Tubagus Habibi</h1>
            <h1 className="text-sm py-1 text-gray-300">Client - Friend</h1>
            <p className="italic text-gray-300">
              "Amazing developer! Delivered exactly what I needed and more."
            </p>
          </div>
          <div className="bg-[#162033] rounded-xl px-7 pb-5 border mb-10">
            <div className="border-4 w-20 h-20 rounded-full border-[#72E2AE] flex items-center justify-center mb-5 -mt-10">
              <img
                src="/person.svg"
                alt="myIcon"
                className="h-16 w-16 rounded-full bg-white p-2"
              />
            </div>
            <h1 className="text-lg">Tubagus Habibi</h1>
            <h1 className="text-sm py-1 text-gray-300">Client - Friend</h1>
            <p className="italic text-gray-300">
              "Amazing developer! Delivered exactly what I needed and more."
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
}
