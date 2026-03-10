"use client";

import { useEffect, useState } from "react";

const TYPED_WORDS = [
  "scalable backend systems.",
  "clean REST APIs.",
  "real-time applications.",
  "full-stack products.",
];

function useTypewriter(words: string[], speed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setCharIdx(0);
            setWordIdx((w) => (w + 1) % words.length);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter(TYPED_WORDS);

  return (
    <section
      className="relative min-h-screen flex items-center dot-grid overflow-hidden"
      style={{ background: "var(--bg)", paddingTop: "5rem" }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(127,255,110,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="section-wrap w-full">
        {/* Terminal prompt label */}
        <div
          className="mono-label flex items-center gap-2 mb-8 animate-fadeUp"
          style={{ animationDelay: "0s" }}
        >
          <span style={{ color: "var(--accent)" }}>●</span>
          <span>Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1
          className="animate-fadeUp animate-delay-1"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            color: "var(--text)",
          }}
        >
          Hi, I&apos;m <span className="gradient-text">Ashish Anand</span>
          <br />
          <span style={{ color: "var(--muted)" }}>I build </span>
          <span style={{ color: "var(--accent2)" }}>{typed}</span>
          <span className="cursor-blink" />
        </h1>

        {/* Subtext */}
        <p
          className="animate-fadeUp animate-delay-2 mt-6 max-w-xl"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "var(--muted-hi)",
            lineHeight: 1.7,
          }}
        >
          Focused on Node.js, MERN stack, and real-time systems. I care about
          system design, performance, and long-term maintainability.
        </p>

        {/* Terminal-style stack preview */}
        <div className="animate-fadeUp animate-delay-3 mt-8 inline-flex flex-wrap gap-2">
          {["Node.js", "Express", "MongoDB", "React", "Socket.IO", "AWS"].map(
            (tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ),
          )}
        </div>

        {/* CTA buttons */}
        <div className="animate-fadeUp animate-delay-4 mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-md font-medium text-sm transition-all duration-200"
            style={{
              background: "var(--accent)",
              color: "var(--bg)",
              fontFamily: "var(--font-mono)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            View My Work →
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md font-medium text-sm transition-all duration-200"
            style={{
              border: "1px solid var(--border-hi)",
              color: "var(--muted-hi)",
              fontFamily: "var(--font-mono)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--muted)";
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border-hi)";
              (e.currentTarget as HTMLElement).style.color = "var(--muted-hi)";
            }}
          >
            Download CV
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex items-center gap-3"
          style={{
            color: "var(--muted)",
            fontSize: "0.75rem",
            fontFamily: "var(--font-mono)",
          }}
        >
          <div
            className="w-px h-10"
            style={{
              background:
                "linear-gradient(to bottom, var(--muted), transparent)",
            }}
          />
          scroll to explore
        </div>
      </div>
    </section>
  );
}
