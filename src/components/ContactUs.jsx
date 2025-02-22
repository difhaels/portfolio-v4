export default function ContactUs() {
  return (
    <section className="py-20 bg-[#1A1F2B] text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Feel free to reach out for any inquiries or collaborations.
        </p>
        
        <form className="max-w-2xl mx-auto bg-[#121729] p-6 rounded-lg shadow-lg text-left">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
            <input id="name" type="text" className="w-full p-3 rounded bg-[#1A1F2B] border border-gray-600 text-white" placeholder="Your Name" />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
            <input id="email" type="email" className="w-full p-3 rounded bg-[#1A1F2B] border border-gray-600 text-white" placeholder="Your Email" />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
            <textarea id="message" className="w-full p-3 rounded bg-[#1A1F2B] border border-gray-600 text-white h-32" placeholder="Your Message"></textarea>
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}