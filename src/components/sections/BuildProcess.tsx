const steps = [
  {
    title: "Architecture",
    points: [
      "Modular and layered backend design",
      "Role-based access control",
      "Backend-first planning",
    ],
  },
  {
    title: "APIs",
    points: [
      "RESTful & predictable responses",
      "Validation and pagination",
      "Scalable API contracts",
    ],
  },
  {
    title: "Data",
    points: [
      "Schema design based on access patterns",
      "Indexes and soft deletes",
      "Growth-aware modeling",
    ],
  },
];

export default function BuildProcess() {
  return (
    <section
      id="build"
      className="py-24 bg-gradient-to-b from-gray-50 to-white bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          How I Build Software
        </h2>

        <p className="mt-5 text-lg text-gray-600 max-w-2xl">
          I focus on building systems that are scalable, predictable, and easy
          to maintain over time.
        </p>

        {/* Cards */}
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative rounded-2xl bg-white p-8 border border-gray-200 shadow-sm hover:shadow-xl transition"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-8 h-12 w-1 bg-gray-900 rounded-r" />

              <h3 className="text-xl font-semibold text-gray-900 mb-6 pl-4">
                {step.title}
              </h3>

              <ul className="space-y-4 text-gray-600 text-sm leading-relaxed pl-4">
                {step.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
