"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(255, 255, 255, 0.25)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 2px 16px rgba(233, 30, 99, 0.12)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo / Site Name */}
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#c2185b",
            textDecoration: "none",
            letterSpacing: "-0.5px",
          }}
        >
          Bb0gape 💕
        </Link>

        {/* Nav Links */}
        <div style={{ display: "flex", gap: "2rem" }}>
          {[
            { label: "Home", href: "/" },
            { label: "Questions", href: "#questions" },
            { label: "About", href: "#about" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "#880e4f",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) =>
                ((e.target as HTMLElement).style.color = "#e91e63")
              }
              onMouseOut={(e) =>
                ((e.target as HTMLElement).style.color = "#880e4f")
              }
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
