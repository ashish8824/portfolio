export default function Skills() {
  const skills = {
    Backend: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "REST API Design",
      "Socket.IO",
    ],
    Frontend: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS"],
    Infrastructure: ["Docker", "Basic AWS", "Nginx", "CI/CD Concepts"],
  };

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-gray-900">Tools I Trust</h2>

        <p className="mt-4 text-gray-600 max-w-2xl">
          Technologies I’ve used to build, ship, and maintain real-world
          applications.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl bg-white p-8 border border-gray-200 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-6">{category}</h3>

              <ul className="space-y-3 text-gray-600 text-sm">
                {items.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
