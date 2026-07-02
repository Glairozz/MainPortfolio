"use client";
import { Gamepad2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: "/assets/images/software/python.png" },
      { name: "JavaScript", icon: "/assets/images/software/js.png" },
      { name: "HTML", icon: "/assets/images/software/html.png" },
      { name: "CSS", icon: "/assets/images/software/css.png" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "/assets/images/software/react.png" },
      { name: "Node.js", icon: "/assets/images/software/nodejs.png" },
      { name: "Bootstrap", icon: "/assets/images/software/bootstrap.png" },
      { name: "Pygame", icon: "gamepad" },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git", icon: "/assets/images/software/git.png" },
      { name: "GitHub", icon: "/assets/images/tools/github.webp" },
      { name: "VS Code", icon: "/assets/images/tools/vscode.png" },
      { name: "PyCharm", icon: "/assets/images/tools/pycharm.png" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium tracking-wider text-sm mb-3">
              SKILLS
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Technologies I Use
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 0.1}>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 h-full">
                <h3 className="font-heading text-lg font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden p-2">
                        {skill.icon === "gamepad" ? (
                          <Gamepad2 className="text-cyan-400" size={20} />
                        ) : (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                      <span className="text-slate-300 text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
