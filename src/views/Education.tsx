"use client";
import { Calendar, BookOpen, CircleCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ModuleHeader from "@/components/ModuleHeader";
import { MODULES } from "@/data/modules";

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
    <section className="px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <ModuleHeader
          module={MODULES[2]}
          subtitle="My Journey"
          description="Knowledge acquisition log — chronological record of formal learning modules."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-slate-800" />

          <div className="space-y-10">
            {education.map((item, i) => (
              <ScrollReveal key={item.degree} delay={i * 0.1}>
                <div className="relative pl-12 md:pl-20">
                  <div className="absolute left-4 md:left-6 top-7 -translate-x-1/2 flex items-center justify-center">
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/50 bg-slate-950">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    </span>
                  </div>

                  <div className="group bg-slate-900/40 border border-slate-800 hover:border-cyan-400/20 rounded-xl p-6 transition-colors">
                    <div className="mb-4 flex items-start justify-between gap-2 flex-wrap">
                      <span className="font-mono text-[10px] tracking-widest text-slate-600">
                        EDU-{String(i + 1).padStart(3, "0")}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-slate-400 text-xs font-mono whitespace-nowrap bg-slate-800/70 border border-slate-700/50 px-3 py-1.5 rounded-lg">
                        <Calendar size={13} className="text-cyan-400" />
                        {item.date}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-heading text-xl font-semibold text-white mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-cyan-400 text-sm">{item.school}</p>
                    </div>

                    <p className="inline-flex items-center gap-1.5 text-slate-300 text-sm mb-3 bg-slate-800/70 border border-slate-700/50 px-3 py-1.5 rounded-lg">
                      <CircleCheck size={14} className="text-emerald-400" />
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
