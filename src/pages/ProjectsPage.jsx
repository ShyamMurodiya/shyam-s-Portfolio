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
    <article className="w-full max-w-sm bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] rounded-2xl p-6 shadow-lg backdrop-blur-sm"
      style={{
        boxShadow: "0 10px 30px rgba(99,33,182,0.12), inset 0 0 0 1px rgba(114,63,173,0.04)",
      }}
    >
      <div className="w-full h-40 mb-6 rounded-lg overflow-hidden flex items-center justify-center bg-[rgba(0,0,0,0.2)]">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
      </div>

      <h3 className="text-lg font-semibold text-[var(--text)] mb-2 text-center">{p.title}</h3>

      <p className="text-[var(--muted)] text-sm mb-4 min-h-[64px]">
        {p.description}
      </p>

      <div className="flex items-center justify-center gap-4 mt-2">
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-[var(--card)] text-sm font-semibold no-underline shadow-sm hover:opacity-90"
        >
          GitHub
        </a>

        <a
          href={p.demo}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-[var(--card)] text-sm font-semibold no-underline shadow-sm hover:opacity-90"
        >
          Demo
        </a>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="w-full px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
          My Recent <span className="text-[var(--accent)]">Works</span>
        </h1>
        <p className="text-[var(--muted)]">Here are a few projects I’ve worked on recently.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>

      {/* optional additional rows can go here */}
    </div>
  );
}