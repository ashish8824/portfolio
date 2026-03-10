"use client";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--muted)",
          }}
        >
          © {new Date().getFullYear()} Ashish Anand
          <span style={{ color: "var(--border-hi)", margin: "0 0.5rem" }}>
            ·
          </span>
          <span style={{ color: "var(--accent)", opacity: 0.7 }}>
            Built with Next.js & Tailwind
          </span>
        </p>

        {/* Right — links + scroll to top */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ashish8824"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
            }
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ashish-anand-146518217"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
            }
          >
            LinkedIn
          </a>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-hi)",
              color: "var(--muted-hi)",
              borderRadius: "6px",
              padding: "0.35rem 0.6rem",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border-hi)";
              (e.currentTarget as HTMLElement).style.color = "var(--muted-hi)";
            }}
          >
            ↑ top
          </button>
        </div>
      </div>
    </footer>
  );
}
