export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Ashish Anand. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-500">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:ashish.anand@email.com"
            className="hover:text-gray-900 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
