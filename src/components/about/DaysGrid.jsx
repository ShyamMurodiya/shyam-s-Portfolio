// src/components/about/DaysGrid.jsx
import React from "react";

export default function DaysGrid({ days = 300, columnsMin = 20 }) {
  // columnsMin is a minimum width value used for CSS minmax if you want to tune it
  return (
    <section className="text-center mb-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">
        Days <span className="text-[var(--accent)]">I Code</span>
      </h2>

      <div
        className="mx-auto max-w-4xl"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(8px, 1fr))",
          gap: "6px",
        }}
      >
        {Array.from({ length: days }, (_, i) => (
          <div
            key={i}
            className="w-full pb-full rounded-sm bg-[rgba(255,255,255,0.12)]"
            style={{ paddingBottom: "100%" }}
          />
        ))}
      </div>

      <p className="text-sm opacity-70 mt-4">Just a fun visualization 😉</p>
    </section>
  );
}