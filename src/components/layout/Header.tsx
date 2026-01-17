"use client";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-semibold text-gray-900">Ashish Anand</span>

        <div className="space-x-8 text-sm text-gray-600">
          <a href="#projects" className="hover:text-gray-900 transition">
            Projects
          </a>
          <a href="#notes" className="hover:text-gray-900 transition">
            Notes
          </a>
          <a href="#contact" className="hover:text-gray-900 transition">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
