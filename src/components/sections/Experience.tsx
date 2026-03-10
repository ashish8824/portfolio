"use client";

import { experience } from "@/data";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="section-wrap">
        <div className="accent-bar" />
        <p className="mono-label mb-3">Career</p>
        <h2 className="section-heading">Experience</h2>
        <p
          className="mt-4 max-w-xl"
          style={{
            color: "var(--muted-hi)",
            lineHeight: 1.7,
            fontSize: "1rem",
          }}
        >
          Professional experience building backend systems and real-world
          applications.
        </p>

        <div className="mt-14 space-y-8">
          {experience.map((item) => (
            <div
              key={item.role}
              className="card p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Left accent line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--accent), transparent)",
                }}
              />

              <div className="pl-4 sm:pl-6">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3
                    style={{
                      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                      fontWeight: 600,
                      color: "var(--text)",
                    }}
                  >
                    {item.role}
                  </h3>
                  <span
                    className="tag"
                    style={{ whiteSpace: "nowrap", fontSize: "0.7rem" }}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Company */}
                <p
                  className="mb-5"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    color: "var(--accent2)",
                  }}
                >
                  {item.company} · {item.location}
                </p>

                {/* Points */}
                <ul className="space-y-2.5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3"
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--muted-hi)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          marginTop: "0.2rem",
                          flexShrink: 0,
                        }}
                      >
                        ›
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
