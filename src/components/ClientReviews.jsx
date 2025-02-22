export default function ClientReviews() {
  return (
    <section className="py-20 bg-[#1A1F2B] text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Client Reviews</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Hear what my clients have to say about my work.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#121729] p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 italic">"Amazing developer! Delivered exactly what I needed and more."</p>
            <h4 className="text-lg font-semibold mt-4">- John Doe</h4>
          </div>
          
          <div className="bg-[#121729] p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 italic">"Great attention to detail and very responsive. Highly recommend!"</p>
            <h4 className="text-lg font-semibold mt-4">- Jane Smith</h4>
          </div>
          
          <div className="bg-[#121729] p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 italic">"Exceeded my expectations. Will definitely work with again!"</p>
            <h4 className="text-lg font-semibold mt-4">- Alex Johnson</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
