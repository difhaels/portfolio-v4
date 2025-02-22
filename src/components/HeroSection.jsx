export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-[#121729] text-white px-6">
      <div className="max-w-3xl">
        {/* Foto */}
        <img 
          src="/profile.jpg" 
          alt="Profile Picture" 
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-600"
        />
        
        {/* Nama dan Deskripsi */}
        <h1 className="text-4xl font-bold">John Doe</h1>
        <p className="text-lg text-gray-400 mt-3">Full Stack Developer | JavaScript Enthusiast</p>
        
        {/* Sosial Media */}
        <div className="flex space-x-4 mt-6 justify-center">
          <a href="#" className="text-blue-500 hover:text-blue-400">Twitter</a>
          <a href="#" className="text-blue-500 hover:text-blue-400">LinkedIn</a>
          <a href="#" className="text-blue-500 hover:text-blue-400">GitHub</a>
        </div>
      </div>
    </section>
  );
}