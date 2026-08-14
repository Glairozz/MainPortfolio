"use client";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    date: "2025 - Present",
    school: "Manuel S. Enverga University Foundation",
    status: "Current 1st Year Student",
    description:
      "Pursuing Computer Science degree with focus on software engineering and web development. Actively learning programming fundamentals, data structures, and algorithms.",
  },
  {
    degree: "Science, Technology, Engineering, and Mathematics (STEM)",
    date: "2023 - 2025",
    school: "Elias A. Salvador National High School",
    status: "STEM Track Graduate",
    description:
      "Completed senior high school with STEM track, focusing on mathematics, sciences, and technology foundations that prepared me for computer science studies.",
  },
];

export default function Education() {
  return (
    <section className="px-6 py-16 md:py-28">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium tracking-wider text-sm mb-3">
              EDUCATION
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
              My Journey
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-800 hidden md:block" />

          <div className="space-y-12">
            {education.map((item, i) => (
              <ScrollReveal key={item.degree} delay={i * 0.1}>
                <div className="relative pl-0 md:pl-20">
                  <div className="absolute left-6 top-1 w-5 h-5 bg-cyan-400 rounded-full border-4 border-slate-950 hidden md:block" />
                  <div className="bg-slate-900/50 border border-slate-800 hover:border-cyan-400/20 rounded-xl p-6 transition-colors">
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                        <div>
                          <h3 className="font-heading text-xl font-semibold text-white mb-1">
                            {item.degree}
                          </h3>
                          <p className="text-cyan-400 text-sm">
                            {item.school}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-slate-400 text-sm whitespace-nowrap bg-slate-800/70 border border-slate-700/50 px-3 py-1.5 rounded-lg">
                          <Calendar size={14} className="text-cyan-400" />
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <p className="inline-flex items-center gap-1.5 text-slate-300 text-sm mb-3 bg-slate-800/70 border border-slate-700/50 px-3 py-1.5 rounded-lg">
                      <GraduationCap size={14} className="text-cyan-400" />
                      {item.status}
                    </p>
                    <p className="text-slate-400 leading-relaxed flex items-start gap-2">
                      <BookOpen
                        size={16}
                        className="text-slate-500 mt-1 shrink-0"
                      />
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
