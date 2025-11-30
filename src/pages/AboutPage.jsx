// src/pages/AboutPage.jsx
import React from "react";
import avatarImg from "../assets/avatar.svg"; // use same avatar image

export default function AboutPage() {
  return (
    <section className="w-full px-8 py-20">

      {/* TITLE */}
      <h1 className="text-center text-4xl font-bold mb-16">
        Know Who <span className="text-[var(--accent)]]">I’m</span>
      </h1>

      {/* TOP SECTION - TEXT + IMAGE */}
      <div className="flex items-start justify-between gap-16 max-w-5xl mx-auto mb-20">
        
        {/* LEFT TEXT */}
        <div className="text-lg leading-relaxed max-w-xl">
          <p className="mb-4">
            Hi everyone! I’m <span className="text-[var(--accent)] font-semibold">Shyam</span> from India.  
            I’m passionate about creating reliable, scalable, and clean UI experiences.
          </p>

          <p className="mb-4">
            Outside of coding, I enjoy:
          </p>

          <ul className="mb-4 list-disc list-inside space-y-2">
            <li>🎮 Playing Games</li>
            <li>✍️ Writing Tech Blogs</li>
            <li>🌍 Traveling & Exploring New Places</li>
          </ul>

          <p className="italic opacity-80 mt-2">
            “Strive to build things that make a difference!”
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src={avatarImg}
          alt="avatar"
          className="w-[250px] h-[250px] rounded-full object-cover"
        />
      </div>

      {/* SKILLS SECTION */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-10">
          Professional <span className="text-[var(--accent)]">Skillset</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            "JavaScript","React.js","Node.js","CSS","HTML","MongoDB","Redux",
            "Git","Tailwind CSS","Firebase","Docker","Postman"
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-[var(--card)] shadow text-sm font-medium border border-[rgba(255,255,255,0.07)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* TOOLS */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-10">
          Tools <span className="text-[var(--accent)]">I Use</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {["VS Code","Git","Chrome","Figma","Mac OS"].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-full bg-[var(--card)] shadow text-sm font-medium border border-[rgba(255,255,255,0.07)]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* DAYS I CODE - SIMPLE GRID */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-8">
          Days <span className="text-[var(--accent)]">I Code</span>
        </h2>

        <div className="grid grid-cols-30 gap-1 max-w-4xl mx-auto">
          {Array.from({ length: 300 }, (_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-sm bg-[rgba(255,255,255,0.12)]"
            ></div>
          ))}
        </div>

        <p className="text-sm opacity-70 mt-4">
          Just a fun visualization 😉
        </p>
      </div>
    </section>
  );
}