// src/components/ThemeToggle.jsx
import React from "react";

export default function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        padding: ".45rem .6rem",
        borderRadius: 8,
        border: "1px solid rgba(255,255,255,0.06)",
        background: "transparent",
        color: "var(--text)",
        cursor: "pointer",
      }}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
