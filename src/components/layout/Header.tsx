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
        </div>
      </nav>
    </header>
  );
}
