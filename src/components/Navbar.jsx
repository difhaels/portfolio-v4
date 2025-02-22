import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#121729] shadow-md py-4 px-8 flex justify-between items-center z-50 text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">MyPortfolio</div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
        <li><Link href="/resume" className="hover:text-gray-400">Resume</Link></li>
        <li><Link href="/works" className="hover:text-gray-400">Works</Link></li>
        <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
      </ul>

      {/* Hire Me Button */}
      <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Hire Me
      </Link>
    </nav>
  );
}