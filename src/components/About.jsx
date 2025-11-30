// src/components/About.jsx
import React from "react";
import avatarImg from "../assets/avatar.svg"; // <-- your image

export default function About() {
  return (
    <section className="w-full flex items-start justify-between px-8 py-24 gap-10">

      {/* LEFT SIDE TEXT */}
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-10 tracking-wide">
          LET ME <span className="text-[var(--accent)]">INTRODUCE</span> MYSELF
        </h2>

        <p className="text-lg leading-relaxed text-[var(--text)] mb-6">
          I’m a Software Engineer who loves transforming ideas into reliable,
          scalable products. Over time, I’ve explored several technologies and found
          my passion in building high-performance systems and intuitive user
          experiences.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          I’m proficient in{" "}
          <span className="text-[var(--accent)] font-semibold">
            JavaScript, Node.js, React, and more
          </span>{" "}
          — and I enjoy working across both backend and frontend stacks.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          My key areas of interest include developing{" "}
          <span className="text-[var(--accent)] font-semibold">
            Web Applications, UI Systems, and APIs,
          </span>{" "}
          and exploring new ways to build modern digital products.
        </p>

        <p className="text-lg leading-relaxed">
          Whenever possible, I love building projects with{" "}
          <span className="text-[var(--accent)] font-semibold">React.js</span>.
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="min-w-[260px] flex justify-center">
        <img
          src={avatarImg}
          alt="About Avatar"
          className="w-[240px] h-[240px] rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}