export default function Notes() {
  const notes = [
    "Why I prefer backend-first development for scalable systems",
    "Mistakes I made while designing APIs and what I learned",
    "What building real-time systems taught me about state",
    "Lessons from designing multi-tenant applications",
  ];

  return (
    <section
      id="notes"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Developer Notes
        </h2>

        <p className="mt-5 text-lg text-gray-600 max-w-2xl">
          Practical lessons and reflections from building real-world software
          systems.
        </p>

        {/* Notes Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {notes.map((note) => (
            <div
              key={note}
              className="rounded-2xl bg-white p-8 border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <p className="text-gray-700 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
