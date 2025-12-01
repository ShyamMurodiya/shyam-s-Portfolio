// src/components/ThemeToggle.jsx
import React from "react";

export default function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        relative
        w-16 h-8 
        flex items-center
        rounded-full
        transition-all
        duration-300
        border border-white/10
        bg-[var(--card)]
        dark:bg-white/10
        focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
      "
    >
      {/* Sliding circle */}
      <span
        className={`
          absolute w-6 h-6 rounded-full 
          bg-white dark:bg-black
          shadow-lg
          transition-all duration-300
          transform
          ${isDark ? "translate-x-8" : "translate-x-1"}
        `}
      />

      {/* Icons */}
      <span
        className="
          absolute left-1 text-xs  
          text-yellow-400
        "
      >
        ☀️
      </span>

      <span
        className="
          absolute right-1 text-xs
          text-blue-400
        "
      >
        🌙
      </span>
    </button>
  );
}