export default function AboutMe() {
  return (
    <section className="py-20 bg-[#1A1F2B] text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          I am a passionate Full Stack Developer with experience in building web applications using
          modern technologies. I love solving problems, learning new things, and creating user-friendly experiences.
        </p>
        
        <div className="mt-8 flex justify-center space-x-6">
          <div className="p-4 bg-[#121729] rounded-lg w-40 text-center">
            <h3 className="text-xl font-semibold">5+</h3>
            <p className="text-gray-400 text-sm">Years of Experience</p>
          </div>
          <div className="p-4 bg-[#121729] rounded-lg w-40 text-center">
            <h3 className="text-xl font-semibold">50+</h3>
            <p className="text-gray-400 text-sm">Projects Completed</p>
          </div>
          <div className="p-4 bg-[#121729] rounded-lg w-40 text-center">
            <h3 className="text-xl font-semibold">10+</h3>
            <p className="text-gray-400 text-sm">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}