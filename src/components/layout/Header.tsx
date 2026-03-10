"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  /* ── Active section detection ── */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close menu on resize ── */
  useEffect(() => {
    const close = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,15,0.92)" : "rgba(10,10,15,0.6)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}
        >
          <span style={{ color: "var(--accent)" }}>~/</span>
          <span style={{ color: "var(--text)", fontWeight: 600 }}>
            ashish-anand
          </span>
          <span className="cursor-blink opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className="relative text-sm transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: isActive ? "var(--accent)" : "var(--muted-hi)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.25rem 0",
                }}
              >
                {isActive && (
                  <span
                    className="absolute -bottom-0.5 left-0 w-full"
                    style={{ height: "1px", background: "var(--accent)" }}
                  />
                )}
                {label}
              </button>
            );
          })}

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 rounded transition-all duration-200"
            style={{
              fontFamily: "var(--font-mono)",
              border: "1px solid var(--accent)",
              color: "var(--accent)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--bg)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
          >
            cv.pdf
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              background: "var(--text)",
              transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              background: "var(--text)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              background: "var(--text)",
              transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "300px" : "0",
          borderTop: menuOpen ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className="text-left text-sm transition-colors"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: isActive ? "var(--accent)" : "var(--muted-hi)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {isActive ? `> ${label}` : `  ${label}`}
              </button>
            );
          })}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-sm"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--accent)",
            }}
          >
            → Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
