export default function MyResume() {
  return (
    <section className="py-20 bg-[#1A1F2B] text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Resume</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          A brief overview of my education and professional experience.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-[#121729] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="mb-4">
              <h4 className="text-lg font-medium">Bachelor's in Computer Science</h4>
              <p className="text-gray-400 text-sm">XYZ University - 2018-2022</p>
            </div>
            <div>
              <h4 className="text-lg font-medium">Web Development Bootcamp</h4>
              <p className="text-gray-400 text-sm">Online Course - 2023</p>
            </div>
          </div>
          
          <div className="bg-[#121729] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="mb-4">
              <h4 className="text-lg font-medium">Frontend Developer</h4>
              <p className="text-gray-400 text-sm">ABC Tech - 2022-Present</p>
            </div>
            <div>
              <h4 className="text-lg font-medium">Freelance Web Developer</h4>
              <p className="text-gray-400 text-sm">Self-employed - 2020-Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
