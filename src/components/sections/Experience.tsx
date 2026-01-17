type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Junior Associate Engineer",
    company: "Celebal Technologies",
    location: "Jaipur, Rajasthan",
    period: "Jul 2023 – Oct 2023",
    points: [
      "Developed and maintained backend REST APIs using Node.js and Express with strong validation and error handling.",
      "Debugged backend failures by analyzing logs and improving service reliability and response times.",
      "Assisted in deployment and monitoring of backend services on Microsoft Azure.",
      "Built chatbot-based automation tools using Microsoft Bot Framework.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Experience
        </h2>

        <p className="mt-5 text-lg text-gray-600 max-w-2xl">
          Professional and hands-on experience building backend systems and
          real-world applications.
        </p>

        <div className="mt-16 space-y-12">
          {experience.map((item) => (
            <div
              key={item.role}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.role}
                </h3>
                <span className="text-sm text-gray-500">{item.period}</span>
              </div>

              <p className="mt-1 text-gray-700 font-medium">
                {item.company} · {item.location}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {item.points.map((point) => (
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
