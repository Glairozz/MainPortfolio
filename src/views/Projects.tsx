"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { projects, projectCategories } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import ModuleHeader from "@/components/ModuleHeader";
import { MODULES } from "@/data/modules";

export default function Projects() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const reduce = useReducedMotion();

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <ModuleHeader
          module={MODULES[4]}
          subtitle="What I&apos;ve Built"
          description="Output registry — shipped projects across web, games, and interface design."
        />

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-widest transition-colors border ${
                  active === cat
                    ? "bg-cyan-400/15 text-cyan-300 border-cyan-400/40"
                    : "bg-slate-900/40 text-slate-400 hover:text-white hover:bg-slate-800/60 border-slate-800"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: reduce ? 0 : i * 0.05 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
