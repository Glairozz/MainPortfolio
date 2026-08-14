"use client";
import { CodeXml, Layers, Database, Wrench } from "lucide-react";
import { techStack } from "@/data/techStack";
import TechCard from "@/components/TechCard";
import ScrollReveal from "@/components/ScrollReveal";

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "Programming Languages": CodeXml,
  "Frameworks & Libraries": Layers,
  Databases: Database,
  "Development Tools": Wrench,
};

function gridClass(title: string) {
  switch (title) {
    case "Programming Languages":
      return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6";
    case "Databases":
      return "grid-cols-2 sm:grid-cols-4 max-w-md mx-auto";
    default:
      return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";
  }
}

export default function Skills() {
  return (
    <section className="px-6 py-16 md:py-28">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium tracking-wider text-sm mb-3">
              SKILLS
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
              Skills & Tech Stack
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
              The technologies, languages, and tools I use to build and ship
              projects.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-14">
          {techStack.map((category, i) => {
            const Icon = categoryIcons[category.title];
            return (
              <ScrollReveal key={category.title} delay={i * 0.05}>
                <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <Icon className="text-cyan-400" size={22} />
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className={`grid ${gridClass(category.title)} gap-4`}>
                    {category.items.map((item) => (
                      <TechCard key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
