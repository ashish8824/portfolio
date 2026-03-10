"use client";

import { projects } from "@/data";

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg)" }}>
      <div className="section-wrap">
        <div className="accent-bar" />
        <p className="mono-label mb-3">Portfolio</p>
        <h2 className="section-heading">Selected Projects</h2>
        <p
          className="mt-4 max-w-xl"
          style={{
            color: "var(--muted-hi)",
            lineHeight: 1.7,
            fontSize: "1rem",
          }}
        >
          Projects where I solved real problems with scalable architecture and
          clean APIs.
        </p>

        <div className="mt-14 space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="card p-6 sm:p-10 relative overflow-hidden"
            >
              {/* Glow on featured */}
              {i === 0 && (
                <div
                  className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 80% 20%, rgba(127,255,110,0.05), transparent 60%)",
                  }}
                />
              )}

              {/* Number */}
              <div
                className="mb-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--muted)",
                  letterSpacing: "0.1em",
                }}
              >
                PROJECT_{String(i + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="mt-4 max-w-2xl"
                style={{
                  color: "var(--muted-hi)",
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                }}
              >
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div
                className="my-6 w-full h-px"
                style={{ background: "var(--border)" }}
              />

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                {/* Frontend / main GitHub */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded text-sm transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-mono)",
                    border: "1px solid var(--border-hi)",
                    color: "var(--muted-hi)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--border-hi)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--muted-hi)";
                  }}
                >
                  <GitHubIcon />
                  {project.githubUrlBackend ? "Frontend" : "GitHub"}
                </a>

                {/* Backend GitHub — only shown when both repos exist */}
                {project.githubUrlBackend && (
                  <a
                    href={project.githubUrlBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded text-sm transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-mono)",
                      border: "1px solid var(--border-hi)",
                      color: "var(--muted-hi)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--accent2)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--accent2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--border-hi)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--muted-hi)";
                    }}
                  >
                    <GitHubIcon />
                    Backend
                  </a>
                )}

                {/* Live demo */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded text-sm transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-mono)",
                      background: "var(--accent)",
                      color: "var(--bg)",
                      fontWeight: 600,
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "0.85")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "1")
                    }
                  >
                    ↗ Live Demo
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

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
