import React from "react";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { PROJECTS } from "../data/projects";

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

      <ProjectsGrid projects={PROJECTS} />
    </main>
  );
}