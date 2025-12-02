// src/components/about/Tools.jsx
import React from "react";

export default function Tools({ tools = [] }) {
  return (
    <section className="text-center mb-12 sm:mb-16">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">
        Tools <span className="text-[var(--accent)]">I Use</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {tools.map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 rounded-full bg-[var(--card)] shadow text-sm font-medium border border-[rgba(255,255,255,0.06)]"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}