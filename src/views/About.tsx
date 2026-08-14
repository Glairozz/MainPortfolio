"use client";
import { motion } from "framer-motion";
import { Code2, Lightbulb, GitBranch, Users, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
    <section className="px-6 py-16 md:py-28">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium tracking-wider text-sm mb-3">
              ABOUT ME
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
              Who I Am
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <ScrollReveal delay={0.1}>
            <div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {badges.map((badge) => (
                <motion.div
                  key={badge.title}
                  whileHover={{ y: -4 }}
                  className="group bg-slate-900/50 border border-slate-800 hover:border-cyan-400/30 rounded-xl p-5 transition-colors"
                >
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
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="text-cyan-400" size={24} />
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white">
                What I&apos;m Working Toward
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {goals.map((goal) => (
                <div key={goal} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
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
