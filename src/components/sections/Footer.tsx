export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Ashish Anand. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-sm font-medium">
          <a
            href="https://github.com/ashish8824"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ashish-anand-146518217"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
