"use client";

import { buildSteps } from "@/data";

export default function BuildProcess() {
  return (
    <section
      id="build"
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="section-wrap">
        <div className="accent-bar" />
        <p className="mono-label mb-3">Methodology</p>
        <h2 className="section-heading">How I Build Software</h2>
        <p
          className="mt-4 max-w-xl"
          style={{
            color: "var(--muted-hi)",
            lineHeight: 1.7,
            fontSize: "1rem",
          }}
        >
          I focus on building systems that are scalable, predictable, and easy
          to maintain over time.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {buildSteps.map((step, i) => (
            <div
              key={step.title}
              className="card p-7 relative overflow-hidden group"
            >
              {/* Step number background */}
              <div
                className="absolute -right-2 -top-3 select-none pointer-events-none"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "5rem",
                  fontWeight: 800,
                  color: "rgba(127,255,110,0.04)",
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon dot */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mb-5"
                style={{
                  background: "rgba(127,255,110,0.08)",
                  border: "1px solid rgba(127,255,110,0.2)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--accent)",
                    fontWeight: 700,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--text)",
                }}
              >
                {step.title}
              </h3>

              <ul className="space-y-2.5">
                {step.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2"
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted-hi)",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        flexShrink: 0,
                        marginTop: "0.15rem",
                      }}
                    >
                      ›
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
