"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ModuleInfo } from "@/data/modules";
import EngineStatus from "@/components/EngineStatus";

export default function ModuleHeader({
  module,
  subtitle,
  description,
}: {
  module: ModuleInfo;
  subtitle: string;
  description?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-14 md:mb-16 text-center"
    >
      <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/70 backdrop-blur-sm font-mono text-[11px] tracking-widest mb-6">
        <span className="text-slate-500">{module.code}</span>
        <span className="text-cyan-400/60">{"//"}</span>
        <span className="text-cyan-300">{module.name.toUpperCase()}</span>
        <span className="h-3 w-px bg-slate-700" />
        <EngineStatus status={module.status} />
      </div>
      <h1 className="font-heading text-3xl md:text-5xl font-bold text-white">
        {subtitle}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.header>
  );
}
