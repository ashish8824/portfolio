export default function Hero() {
  return (
    <section className="pt-40 pb-32 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          I build scalable backend systems <br />
          and clean, usable web interfaces.
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Focused on Node.js, MERN stack, and real-time applications. I care
          deeply about system design, performance, and maintainability.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-md bg-white text-gray-900 font-medium hover:bg-gray-200 transition"
          >
            View My Work →
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md border border-gray-500 text-gray-200 hover:border-gray-300 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
