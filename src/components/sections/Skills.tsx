export default function Skills() {
  const skills = {
    "Backend Engineering": [
      "Node.js",
      "Express.js",
      "REST API Design",
      "JWT Authentication",
      "Role-Based Access Control",
      "Socket.IO (Real-time Systems)",
    ],
    "Frontend & Web": ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    Databases: ["MongoDB", "PostgreSQL", "Supabase"],
    "Languages & Core": [
      "JavaScript",
      "TypeScript",
      "SQL",
      "Python",
      "C / C++",
    ],
    "Tools & Platform": [
      "Git & GitHub",
      "Swagger (OpenAPI)",
      "Azure",
      "AWS (basic)",
      "Linux & Bash (basic)",
    ],
  };

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Skills
        </h2>

        <p className="mt-5 text-lg text-gray-600 max-w-2xl">
          Technologies and tools I’ve used to build scalable, production-grade
          backend systems.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category}
              </h3>

              <ul className="space-y-2 text-sm text-gray-600">
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
