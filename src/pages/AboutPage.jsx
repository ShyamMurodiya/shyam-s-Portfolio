// src/pages/AboutPage.jsx
import React from "react";
import avatarImg from "../assets/avatar.svg"; // use same avatar image

export default function AboutPage() {
  const skills = [
    "JavaScript","React.js","Node.js","CSS","HTML","MongoDB","Redux",
    "Git","Tailwind CSS","Firebase","Docker","Postman"
  ];

  const tools = ["VS Code","Git","Chrome","Figma","Mac OS"];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-12 sm:py-20">
      {/* TITLE */}
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16">
        Know Who <span className="text-[var(--accent)]">I’m</span>
      </h1>

      {/* TOP SECTION - TEXT + IMAGE */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 max-w-5xl mx-auto mb-12 md:mb-20">
        {/* LEFT TEXT */}
        <div className="w-full md:w-2/3 text-base sm:text-lg leading-relaxed">
          <p className="mb-4">
            Hi everyone! I’m{" "}
            <span className="text-[var(--accent)] font-semibold">Shyam</span> from India.
            I’m passionate about creating reliable, scalable, and clean UI experiences.
          </p>

          <p className="mb-4">Outside of coding, I enjoy:</p>

          <ul className="mb-4 list-disc list-inside space-y-2">
            <li>🎮 Playing Games</li>
            <li>✍️ Writing Tech Blogs</li>
            <li>🌍 Traveling & Exploring New Places</li>
          </ul>

          <p className="italic opacity-80 mt-2">“Strive to build things that make a difference!”</p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <img
            src={avatarImg}
            alt="avatar"
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover"
          />
        </div>
      </div>

      {/* SKILLS SECTION */}
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

      {/* TOOLS */}
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

      {/* DAYS I CODE - SIMPLE GRID */}
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
          {Array.from({ length: 300 }, (_, i) => (
            <div
              key={i}
              className="w-full pb-full rounded-sm bg-[rgba(255,255,255,0.12)]"
              style={{ paddingBottom: "100%" }} // make perfect square
            />
          ))}
        </div>

        <p className="text-sm opacity-70 mt-4">Just a fun visualization 😉</p>
      </section>
    </section>
  );
}