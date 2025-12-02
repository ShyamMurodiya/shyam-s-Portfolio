// src/components/about/Skills.jsx
import React from "react";

export default function Skills({ skills = [] }) {
  return (
    <section className="text-center mb-12 sm:mb-16">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">
        Professional <span className="text-[var(--accent)]">Skillset</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-[var(--card)] shadow text-sm font-medium border border-[rgba(255,255,255,0.06)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}