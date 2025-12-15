import React from "react";

/**
 * Render one project. Pure component — accepts a single "project" prop.
 * Accessible: card is focusable, buttons are real links, images have alt text.
 */
export default function ProjectCard({ project }) {
  const { title, description, image, github, demo } = project;

  return (
    <article
      tabIndex={0}
      className="
        w-full flex flex-col
        bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]
        rounded-2xl p-4 sm:p-6 shadow-lg backdrop-blur-sm
        transition-transform hover:-translate-y-1 focus:-translate-y-1
        outline-none focus:ring-2 focus:ring-[var(--accent)]"
      style={{
        boxShadow:
          "0 10px 30px rgba(99,33,182,0.08), inset 0 0 0 1px rgba(114,63,173,0.02)",
      }}
      aria-labelledby={`proj-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="w-full mb-4 rounded-lg overflow-hidden bg-[rgba(0,0,0,0.25)]">
        <div className="w-full aspect-[16/10]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h3
          id={`proj-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-2 text-center sm:text-left"
        >
          {title}
        </h3>

        <p className="text-[var(--muted)] text-sm sm:text-base mb-4 min-h-[64px]">
          {description}
        </p>

        <div className="mt-auto flex flex-col sm:flex-row items-center sm:items-stretch justify-center sm:justify-start gap-3">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center px-4 py-2 rounded-lg bg-[var(--card)] text-sm font-semibold no-underline shadow-sm hover:opacity-90"
          >
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center px-4 py-2 rounded-lg bg-[var(--card)] text-sm font-semibold no-underline shadow-sm hover:opacity-90"
          >
            Visit
          </a>
        </div>
      </div>
    </article>
  );
}