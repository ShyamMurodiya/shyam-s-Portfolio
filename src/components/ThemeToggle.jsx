// src/components/ThemeToggle.jsx
import React from "react";

export default function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label="Toggle Theme"
      className="
        relative w-16 h-8 
        flex items-center 
        bg-[var(--accent)]/40 
        border border-[var(--accent)] 
        rounded-full 
        p-1 
        transition-all duration-300
      "
    >
      {/* Slider circle */}
      <div
        className={`
          absolute top-1 left-1
          w-6 h-6 
          rounded-full 
          bg-black dark:bg-white
          flex items-center justify-center
          text-lg
          transition-all duration-300
          ${isDark ? "translate-x-8" : "translate-x-0"}
        `}
      >
        {isDark ? "🌙" : "☀️"}
      </div>
    </button>
  );
}