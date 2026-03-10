"use client";

import { notes } from "@/data";

export default function Notes() {
  return (
    <section id="notes" style={{ background: "var(--bg)" }}>
      <div className="section-wrap">
        <div className="accent-bar" />
        <p className="mono-label mb-3">Writing</p>
        <h2 className="section-heading">Developer Notes</h2>
        <p
          className="mt-4 max-w-xl"
          style={{
            color: "var(--muted-hi)",
            lineHeight: 1.7,
            fontSize: "1rem",
          }}
        >
          Practical lessons and reflections from building real-world software.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {notes.map((note, i) => (
            <a
              key={note.title}
              href={note.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 group flex items-start gap-4"
              style={{ textDecoration: "none" }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--accent)",
                  opacity: 0.6,
                  marginTop: "0.25rem",
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex-1 min-w-0">
                <p
                  style={{
                    color: "var(--text)",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                >
                  {note.title}
                </p>
                <span
                  className="inline-flex items-center gap-1 mt-3"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--accent)",
                    opacity: 0.7,
                  }}
                >
                  Read more ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
