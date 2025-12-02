import React from "react";
import ProjectCard from "./ProjectCard";

/**
 * ProjectsGrid receives an array of project objects and renders them
 * inside a responsive grid.
 */
export default function ProjectsGrid({ projects }) {
  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <div className="text-[var(--muted)] text-center py-12">
        No projects to show — add some to <code>src/data/projects.js</code>.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}