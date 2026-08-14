"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ModuleInfo } from "@/data/modules";
import EngineStatus from "@/components/EngineStatus";

export default function ModuleHeader({
  module,
  subtitle,
  description,
  meta,
}: {
  module: ModuleInfo;
  subtitle: string;
  description?: string;
  meta?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-14 md:mb-16 text-center"
    >
      <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-4 py-1.5 rounded-full border border-line bg-surface/70 backdrop-blur-sm font-mono text-[11px] tracking-widest mb-6">
        <span className="text-faint">{module.code}</span>
        <span className="text-accent/60">{"//"}</span>
        <span className="text-accent">{module.name.toUpperCase()}</span>
        <span className="h-3 w-px bg-line-strong" />
        <EngineStatus status={module.status} />
        {meta && (
          <>
            <span className="h-3 w-px bg-line-strong" />
            <span className="text-muted">{meta}</span>
          </>
        )}
      </div>
      <h1 className="font-heading text-3xl md:text-5xl font-bold text-content">
        {subtitle}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl mx-auto text-muted leading-relaxed">
          {description}
        </p>
      )}
    </motion.header>
  );
}
