import Link from "next/link";

export default function ContactSuccess() {
  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--bg)" }}
    >
      <div className="card text-center p-12 max-w-md mx-6">
        <div
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            color: "var(--accent)",
          }}
        >
          ✓
        </div>
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "0.75rem",
          }}
        >
          Message Sent!
        </h1>
        <p
          style={{
            color: "var(--muted-hi)",
            fontSize: "0.95rem",
            lineHeight: 1.6,
          }}
        >
          Thanks for reaching out. I&apos;ll get back to you shortly.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-md text-sm font-medium transition-opacity hover:opacity-80"
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            fontFamily: "var(--font-mono)",
            textDecoration: "none",
          }}
        >
          ← Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
