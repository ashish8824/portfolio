"use client";

import { skills } from "@/data";

const categoryColors: Record<string, string> = {
  "Backend Engineering": "tag",
  "Frontend & Web": "tag tag-cyan",
  Databases: "tag",
  "Languages & Core": "tag tag-cyan",
  "Tools & Platform": "tag",
};

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg)" }}>
      <div className="section-wrap">
        <div className="accent-bar" />
        <p className="mono-label mb-3">Technical Stack</p>
        <h2 className="section-heading">Skills</h2>
        <p
          className="mt-4 max-w-xl"
          style={{
            color: "var(--muted-hi)",
            lineHeight: 1.7,
            fontSize: "1rem",
          }}
        >
          Technologies and tools I&apos;ve used to build scalable,
          production-grade systems.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card p-6">
              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background:
                      category.includes("Frontend") ||
                      category.includes("Languages")
                        ? "var(--accent2)"
                        : "var(--accent)",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted-hi)",
                    fontWeight: 600,
                  }}
                >
                  {category}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={categoryColors[category] ?? "tag"}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
