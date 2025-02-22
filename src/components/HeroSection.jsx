import {  Github, Instagram, Linkedin, MoveDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative py-20 text-white text-center flex flex-col items-center justify-center bg-[#0E1222]"
      style={{
        backgroundImage: "url('/bgHeroSection.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center py-28">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
        />
        <h1 className="text-5xl font-bold mb-2">I am [Your Name]</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
          Passionate Web Developer | Building Modern & Scalable Solutions
        </p>
        <div className="flex space-x-4 mb-6">
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <Linkedin />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
          <Instagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
          <Github />
          </a>
        </div>
      </div>
      <div className=" bottom-10 flex items-center gap-2">
        <MoveDown className="animate-bounce h-5 text-gray-400"/>
        <p className="text-gray-400">Scroll Down</p>
      </div>
    </section>
  );
}
