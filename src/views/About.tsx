"use client";
import { motion } from "framer-motion";
import { Code2, Lightbulb, GitBranch, Users, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ModuleHeader from "@/components/ModuleHeader";
import { MODULES } from "@/data/modules";

const badges = [
  {
    icon: Lightbulb,
    title: "Rapid Adaptation",
    description: "Quick to learn and apply new technologies and frameworks",
  },
  {
    icon: Code2,
    title: "Clean Architecture Focus",
    description: "Writing maintainable, scalable, and well-structured code",
  },
  {
    icon: GitBranch,
    title: "Open-Source Enthusiast",
    description: "Contributing to and learning from the developer community",
  },
  {
    icon: Users,
    title: "Collaborative Mindset",
    description: "Thriving in team environments and knowledge sharing",
  },
];

const goals = [
  "Building robust, production-ready software that people actually use.",
  "Deepening my understanding of data structures, algorithms, and system design.",
  "Growing into a well-rounded fullstack engineer through hands-on projects.",
  "Contributing meaningfully to open-source communities.",
];

export default function About() {
  return (
    <section className="px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <ModuleHeader
          module={MODULES[1]}
          subtitle="Who I Am"
          description="Identity profile scan of the operator — traits, focus areas, and the roadmap currently being processed."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
              <p className="font-mono text-[11px] tracking-widest text-slate-600 mb-4">
                IDN-001 // PROFILE
              </p>
              <h3 className="font-heading text-2xl font-semibold text-white mb-6">
                Aspiring Software Engineer & Creative Problem Solver
              </h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I&apos;m a 1st-year aspiring software engineer who loves
                  diving into new ideas, building things from scratch, and
                  figuring out how technology actually works behind the scenes.
                </p>
                <p>
                  I&apos;m the type of person who can hype up a room and spark
                  conversations—but also the one who quietly zones in when
                  it&apos;s time to code, learn, or create something meaningful.
                  Software engineering isn&apos;t just a career path—it&apos;s a
                  space where I get to solve problems, express creativity, and
                  keep leveling up one project at a time.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <p className="font-mono text-[11px] tracking-widest text-slate-600 mb-4 text-center md:text-left">
                IDN-002 // TRAIT MODULES
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {badges.map((badge, i) => (
                  <motion.div
                    key={badge.title}
                    whileHover={{ y: -4 }}
                    className="group relative bg-slate-900/40 border border-slate-800 hover:border-cyan-400/30 rounded-xl p-5 transition-colors"
                  >
                    <span className="absolute top-3 right-3 font-mono text-[9px] tracking-widest text-slate-700 group-hover:text-cyan-500/80 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <badge.icon className="text-cyan-400 mb-3" size={22} />
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {badge.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {badge.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Rocket className="text-cyan-400" size={22} />
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-white">
                  What I&apos;m Working Toward
                </h3>
              </div>
              <span className="hidden sm:inline-flex font-mono text-[10px] tracking-widest text-slate-600 border border-slate-800 rounded px-2 py-1">
                ROADMAP
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {goals.map((goal, i) => (
                <div
                  key={goal}
                  className="flex items-start gap-3 rounded-lg border border-slate-800/70 bg-slate-950/40 px-4 py-3"
                >
                  <span className="mt-0.5 font-mono text-[10px] text-cyan-500 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-slate-400 leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
