// src/components/About.jsx
import React from "react";
import avatarImg from "../assets/avatar.svg"; // <-- your image

export default function About() {
  return (
    <section
      className="
        w-full 
        flex flex-col-reverse md:flex-row
        items-center md:items-start 
        justify-between 
        gap-10 md:gap-16
        px-4 sm:px-6 lg:px-12
        py-12 sm:py-20 lg:py-24
      "
    >
      {/* LEFT SIDE TEXT */}
      <div className="w-full md:w-2/3 text-center md:text-left max-w-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 tracking-wide">
          LET ME{" "}
          <span className="text-[var(--accent)]">INTRODUCE</span> MYSELF
        </h2>

        <p className="text-base sm:text-lg leading-relaxed text-[var(--text)] mb-6">
          I’m a Software Engineer who loves transforming ideas into reliable,
          scalable products. Over time, I’ve explored several technologies and
          found my passion in building high-performance systems and intuitive
          user experiences.
        </p>

        <p className="text-base sm:text-lg leading-relaxed mb-6">
          I’m proficient in{" "}
          <span className="text-[var(--accent)] font-semibold">
            JavaScript, Node.js, React, and more
          </span>{" "}
          — and I enjoy working across both backend and frontend stacks.
        </p>

        <p className="text-base sm:text-lg leading-relaxed mb-6">
          My key areas of interest include developing{" "}
          <span className="text-[var(--accent)] font-semibold">
            Web Applications, UI Systems, and APIs,
          </span>{" "}
          and exploring new ways to build modern digital products.
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          Whenever possible, I love building projects with{" "}
          <span className="text-[var(--accent)] font-semibold">React.js</span>.
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={avatarImg}
          alt="About Avatar"
          className="
            w-32 h-32
            sm:w-40 sm:h-40 
            md:w-56 md:h-56 
            rounded-full object-cover shadow-lg
          "
        />
      </div>
    </section>
  );
}