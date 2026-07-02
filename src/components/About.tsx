"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Lightbulb,
  GitBranch,
  Users,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium tracking-wider text-sm mb-3">
              ABOUT ME
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
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
            <div className="grid grid-cols-2 gap-4">
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
      </div>
    </section>
  );
}
