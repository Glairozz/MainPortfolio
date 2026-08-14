"use client";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
        <span className="text-slate-500 text-4xl font-heading font-bold">
          {alt.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setError(true)}
    />
  );
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  const code =
    index !== undefined
      ? `OUT-${String(index + 1).padStart(3, "0")}`
      : null;

  return (
    <article className="group bg-slate-900/40 border border-slate-800 hover:border-cyan-400/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5">
      <div className="relative h-48 overflow-hidden">
        <ProjectImage src={project.image} alt={project.title} />
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-slate-950/80 to-transparent" />
        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] tracking-widest text-cyan-300 bg-slate-950/80 backdrop-blur-sm border border-slate-700/60 px-2 py-1 rounded-md">
            {code ?? "OUTPUT"}
          </span>
          <span className="text-[10px] font-mono tracking-widest text-slate-300 bg-slate-950/80 backdrop-blur-sm border border-slate-700/60 px-2 py-1 rounded-md">
            {project.category.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-heading text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-slate-400 bg-slate-800/70 border border-slate-700/50 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-2 mt-auto border-t border-slate-800/70">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors pt-2"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors pt-2"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
