export default function MyServices() {
  return (
    <section className="py-20 bg-[#1A1F2B] text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Services</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Here are the services I offer to help bring your ideas to life.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#121729] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-400 text-sm">Building modern and responsive web applications using the latest technologies.</p>
          </div>
          
          <div className="bg-[#121729] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-400 text-sm">Designing intuitive and engaging user interfaces for a seamless experience.</p>
          </div>
          
          <div className="bg-[#121729] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
            <p className="text-gray-400 text-sm">Improving website visibility and ranking on search engines.</p>
          </div>
        </div>
      </div>
    </section>
  );
}