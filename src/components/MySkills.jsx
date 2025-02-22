export default function MySkills() {
  return (
    <section className="py-20 bg-[#1A1F2B] text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Here are some of the technical skills I have acquired over the years.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#121729] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Front-End Development</h3>
            <p className="text-gray-400 text-sm">React, Next.js, Tailwind CSS, JavaScript, TypeScript</p>
          </div>
          
          <div className="bg-[#121729] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Back-End Development</h3>
            <p className="text-gray-400 text-sm">Node.js, Express.js, MongoDB, Firebase</p>
          </div>
          
          <div className="bg-[#121729] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Other Skills</h3>
            <p className="text-gray-400 text-sm">Git, Docker, SEO Optimization, UI/UX Design</p>
          </div>
        </div>
      </div>
    </section>
  );
}