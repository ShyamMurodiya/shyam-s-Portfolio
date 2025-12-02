// src/pages/AboutPage.jsx
import React from "react";
import avatarImg from "../assets/avatar.svg";

// components
import AboutHero from "../components/about/AboutHero";
import Skills from "../components/about/Skills";
import Tools from "../components/about/Tools";
import DaysGrid from "../components/about/DaysGrid";

export default function AboutPage() {
  const skills = [
    "HTML","CSS","Javascript","React.js","Tailwind CSS",
    "Git","more +"
  ];

  const tools = ["Mac OS","VS Code","Github","Chrome","Emailjs","chatGPT"];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-12 sm:py-20">
      {/* TITLE */}
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16">
        Know Who <span className="text-[var(--accent)]">I’m</span>
      </h1>

      {/* Hero (text + avatar) */}
      <AboutHero avatarSrc={avatarImg} name="Shyam" />

      {/* Skills */}
      <Skills skills={skills} />

      {/* Tools */}
      <Tools tools={tools} />

      {/* Days I Code */}
      <DaysGrid days={300} />
    </section>
  );
}