"use client";
import { CodeXml, Layers, Database, Wrench } from "lucide-react";
import { techStack } from "@/data/techStack";
import TechCard from "@/components/TechCard";
import ScrollReveal from "@/components/ScrollReveal";
import ModuleHeader from "@/components/ModuleHeader";
import { MODULES } from "@/data/modules";

const categoryIcons: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
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
    <section className="px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <ModuleHeader
          module={MODULES[3]}
          subtitle="Skills & Tech Stack"
          description="The technologies, languages, and tools I use to build and ship projects."
        />

        <div className="space-y-10">
          {techStack.map((category, i) => {
            const Icon = categoryIcons[category.title];
            return (
              <ScrollReveal key={category.title} delay={i * 0.05}>
                <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                    <Icon className="text-cyan-400" size={20} />
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                    <span className="font-mono text-[10px] tracking-widest text-slate-600 border border-slate-800 rounded px-2 py-0.5">
                      {String(category.items.length).padStart(2, "0")} UNITS
                    </span>
                  </div>
                  <div className={`grid ${gridClass(category.title)} gap-4`}>
                    {category.items.map((item, idx) => (
                      <TechCard key={item.name} item={item} index={idx} />
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
