export default function MyWorks() {
  return (
    <section className="py-20 bg-[#1A1F2B] text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Works</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Here are some of the projects I have worked on, showcasing my skills in web development and design.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#121729] p-6 rounded-lg shadow-lg">
            <img src="/project1.jpg" alt="Project 1" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Project One</h3>
            <p className="text-gray-400 text-sm">A web application built with React and Tailwind CSS.</p>
          </div>
          
          <div className="bg-[#121729] p-6 rounded-lg shadow-lg">
            <img src="/project2.jpg" alt="Project 2" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Project Two</h3>
            <p className="text-gray-400 text-sm">An e-commerce platform using Next.js and MongoDB.</p>
          </div>
          
          <div className="bg-[#121729] p-6 rounded-lg shadow-lg">
            <img src="/project3.jpg" alt="Project 3" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Project Three</h3>
            <p className="text-gray-400 text-sm">A portfolio website showcasing animations with Framer Motion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
