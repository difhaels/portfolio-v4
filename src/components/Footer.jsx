export default function Footer() {
  return (
    <footer className="py-6 bg-[#121729] text-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
        </div>
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
}
