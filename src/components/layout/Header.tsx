"use client";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Name */}
        <span className="font-semibold text-gray-900 tracking-tight">
          Ashish Anand
        </span>

        {/* Nav Links */}
        <div className="flex items-center gap-8 text-sm">
          <div className="flex items-center gap-8 text-gray-600">
            <a href="#skills" className="hover:text-gray-900 transition">
              Skills
            </a>
            <a href="#experience" className="hover:text-gray-900 transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-gray-900 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-900 transition">
              Contact
            </a>
          </div>

          {/* Resume */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:border-gray-500 hover:text-gray-900 transition"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
