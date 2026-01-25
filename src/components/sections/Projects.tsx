type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "Second Brain – AI-Powered Personal Knowledge Management",
    description:
      "An AI-powered personal knowledge management platform that allows users to capture, organize, search, and intelligently query their saved information using semantic search and natural language AI.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Hugging Face Inference API",
      "Semantic Search (Embeddings)",
      "Swagger (OpenAPI)",
      "React.js",
      "Tailwind CSS",
      "AWS EC2",
    ],
    githubUrl: "https://github.com/yourusername/second-brain-backend",
    liveUrl: "http://16.171.12.184/",
  },
  {
    title: "Smart Appointment & Queue Management",
    description:
      "A real-time appointment booking and queue tracking system designed to reduce waiting times, improve staff efficiency, and provide live queue visibility for users.",
    techStack: ["MERN", "JWT", "Socket.IO", "Role-Based Access"],
    githubUrl: "https://github.com/ashish8824/appointment-system-backend",
    // liveUrl: "https://your-live-demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Selected Projects
        </h2>

        <p className="mt-5 text-lg text-gray-600 max-w-2xl">
          Projects where I focused on solving real problems with scalable
          backend architecture and clean APIs.
        </p>

        {/* Project List */}
        <div className="mt-16 space-y-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative rounded-2xl border border-gray-200 bg-white p-10 shadow-sm hover:shadow-xl transition"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-10 h-16 w-1 bg-gray-900 rounded-r" />

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 pl-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-gray-600 leading-relaxed max-w-3xl pl-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-8 flex flex-wrap gap-3 pl-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-4 py-1.5 rounded-full bg-gray-100 text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="mt-10 flex gap-4 pl-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-900 text-gray-900 rounded-md text-sm font-medium hover:bg-gray-900 hover:text-white transition"
                >
                  View GitHub →
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
