// src/pages/ProjectsPage.jsx
import React from "react";

/*
  Setup images:
  - Put your project screenshots in src/assets/ as project1.png, project2.png, ...
  - The code below uses Vite's `new URL(..., import.meta.url).href` so it works without manual imports.
*/

const PROJECTS = [
  {
    title: "Chatify",
    description:
      "Personal chat room / workspace built with React, Firebase and Material-UI. Includes realtime messaging, image sharing and reactions.",
    image: new URL("../assets/project-chatify.png", import.meta.url).href,
    github: "https://github.com/yourname/chatify",
    demo: "#",
  },
  {
    title: "Bits-Of-Code",
    description:
      "Personal blog built with Next.js + Tailwind. Renders markdown posts, supports dark mode and easy publishing workflow.",
    image: new URL("../assets/project-blog.png", import.meta.url).href,
    github: "https://github.com/yourname/bits-of-code",
    demo: "#",
  },
  {
    title: "Editor.io",
    description:
      "Online Markdown + code editor with instant preview and local autosave. Supports custom HTML blocks and GFM.",
    image: new URL("../assets/project-editor.png", import.meta.url).href,
    github: "https://github.com/yourname/editor-io",
    demo: "#",
  },
  // add more items here
];

function ProjectCard({ p }) {
  return (
    // make the whole card stretch to full width on mobile, and be keyboard-focusable
    <article
      tabIndex={0}
      className="
        w-full flex flex-col
        bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]
        rounded-2xl p-4 sm:p-6 shadow-lg backdrop-blur-sm
        transition-transform hover:-translate-y-1 focus:-translate-y-1
        outline-none focus:ring-2 focus:ring-[var(--accent)]"
      style={{
        boxShadow: "0 10px 30px rgba(99,33,182,0.08), inset 0 0 0 1px rgba(114,63,173,0.02)",
      }}
    >
      {/* Responsive image container using aspect ratio */}
      <div className="w-full mb-4 rounded-lg overflow-hidden bg-[rgba(0,0,0,0.25)]">
        <div className="w-full aspect-[16/10]">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-2 text-center sm:text-left">
          {p.title}
        </h3>

        <p className="text-[var(--muted)] text-sm sm:text-base mb-4 min-h-[64px]">
          {p.description}
        </p>

        <div className="mt-auto flex flex-col sm:flex-row items-center sm:items-stretch justify-center sm:justify-start gap-3">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center px-4 py-2 rounded-lg bg-[var(--card)] text-sm font-semibold no-underline shadow-sm hover:opacity-90"
          >
            GitHub
          </a>

          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center px-4 py-2 rounded-lg bg-[var(--card)] text-sm font-semibold no-underline shadow-sm hover:opacity-90"
          >
            Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="w-full px-4 sm:px-6 md:px-12 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight">
          My Recent <span className="text-[var(--accent)]">Works</span>
        </h1>
        <p className="text-[var(--muted)] text-sm sm:text-base">
          Here are a few projects I’ve worked on recently.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </main>
  );
}