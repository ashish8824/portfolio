"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  return (
    <div
      className="card w-full max-w-2xl mx-auto p-8 sm:p-12"
      style={{ textAlign: "center" }}
    >
      <p className="mono-label mb-4">Get In Touch</p>
      <h2
        style={{
          fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
          fontWeight: 700,
          color: "var(--text)",
          letterSpacing: "-0.03em",
        }}
      >
        Let&apos;s Build Something <span className="gradient-text">Solid</span>
      </h2>

      <p
        style={{
          color: "var(--muted-hi)",
          lineHeight: 1.7,
          fontSize: "0.95rem",
          maxWidth: "26rem",
          margin: "1rem auto 0",
        }}
      >
        If you&apos;re looking for a developer who values clean architecture and
        thoughtful engineering, I&apos;d love to connect.
      </p>

      {success ? (
        <div
          className="mt-10 rounded-xl p-8"
          style={{
            border: "1px solid rgba(127,255,110,0.3)",
            background: "rgba(127,255,110,0.05)",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>✓</div>
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--accent)",
              marginBottom: "0.5rem",
            }}
          >
            Message received!
          </h3>
          <p style={{ color: "var(--muted-hi)", fontSize: "0.9rem" }}>
            I&apos;ll get back to you shortly.
          </p>
        </div>
      ) : (
        <form
          className="mt-8 grid gap-4 text-left"
          action="https://formsubmit.co/ashishanand8824@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New message from portfolio"
          />
          <input
            type="hidden"
            name="_next"
            value="https://ashish-anand.vercel.app/contact-success"
          />

          <input
            suppressHydrationWarning
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-3 rounded-md text-sm outline-none transition-all"
            style={{
              background: "var(--bg-hover)",
              border: "1px solid var(--border-hi)",
              color: "var(--text)",
              fontFamily: "var(--font-mono)",
            }}
            onFocus={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent)")
            }
            onBlur={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor =
                "var(--border-hi)")
            }
          />

          <input
            suppressHydrationWarning
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full px-4 py-3 rounded-md text-sm outline-none transition-all"
            style={{
              background: "var(--bg-hover)",
              border: "1px solid var(--border-hi)",
              color: "var(--text)",
              fontFamily: "var(--font-mono)",
            }}
            onFocus={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent)")
            }
            onBlur={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor =
                "var(--border-hi)")
            }
          />

          <textarea
            suppressHydrationWarning
            name="message"
            placeholder="Your message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-md text-sm outline-none transition-all resize-none"
            style={{
              background: "var(--bg-hover)",
              border: "1px solid var(--border-hi)",
              color: "var(--text)",
              fontFamily: "var(--font-mono)",
            }}
            onFocus={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent)")
            }
            onBlur={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor =
                "var(--border-hi)")
            }
          />

          <button
            type="submit"
            className="w-full py-3 rounded-md font-semibold text-sm transition-all duration-200"
            style={{
              background: "var(--accent)",
              color: "var(--bg)",
              fontFamily: "var(--font-mono)",
              cursor: "pointer",
              border: "none",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            Send Message →
          </button>
        </form>
      )}

      {/* Direct links */}
      <div
        className="mt-8 flex justify-center gap-6"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}
      >
        <a
          href="https://github.com/ashish8824"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--muted)",
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
          }
        >
          GitHub ↗
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
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--accent2)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
          }
        >
          LinkedIn ↗
        </a>
        <a
          href="mailto:ashishanand8824@gmail.com"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--muted)",
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--text)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
          }
        >
          Email ↗
        </a>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-wrap flex flex-col items-center">
        <Suspense
          fallback={<div style={{ color: "var(--muted)" }}>Loading...</div>}
        >
          <ContactForm />
        </Suspense>
      </div>
    </section>
  );
}
