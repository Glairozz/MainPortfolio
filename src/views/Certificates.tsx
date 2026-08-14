"use client";
import { useState } from "react";
import { X, ExternalLink, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { certificates } from "@/data/certificates";
import type { Certificate } from "@/data/certificates";
import CertificateCard from "@/components/CertificateCard";
import ScrollReveal from "@/components/ScrollReveal";
import ModuleHeader from "@/components/ModuleHeader";
import { MODULES } from "@/data/modules";

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const reduce = useReducedMotion();

  const selectedIndex = selected
    ? certificates.findIndex((c) => c.title === selected.title)
    : -1;

  const close = () => setSelected(null);

  return (
    <section className="px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <ModuleHeader
          module={MODULES[5]}
          subtitle="Certifications & Achievements"
          description="Validation registry — every credential issued by verified learning providers."
          meta={`RECORDS // ${certificates.length}`}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={0}>
              <CertificateCard cert={cert} onView={setSelected} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
          >
            <motion.div
              initial={reduce ? false : { scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduce ? undefined : { scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-xl border border-line bg-surface flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 border-b border-line px-4 sm:px-6 py-3">
                <span className="font-mono text-[11px] tracking-widest text-accent">
                  VALIDATION RECORD //{" "}
                  {selectedIndex >= 0
                    ? String(selectedIndex + 1).padStart(3, "0")
                    : "???"}
                </span>
                <button
                  onClick={close}
                  aria-label="Close preview"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted hover:text-accent hover:border-accent/40 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="rounded-lg bg-surface-2 flex items-center justify-center min-h-[40vh]">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="max-h-[52vh] w-auto max-w-full object-contain"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="font-heading text-xl font-semibold text-content">
                    {selected.title}
                  </h3>
                  <p className="mt-1 text-sm text-accent-strong">
                    {selected.issuer}
                  </p>
                  <p className="mt-1 font-mono text-xs tracking-widest text-faint">
                    DATE // {selected.date.replace("Issued: ", "")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-line px-4 sm:px-6 py-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-emerald-500">
                  <BadgeCheck size={13} />
                  STATUS // VERIFIED
                </span>
                {selected.url !== "#" ? (
                  <a
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent-strong hover:bg-accent text-accent-contrast font-semibold px-5 py-2.5 transition-colors"
                  >
                    Verify <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="font-mono text-[10px] tracking-widest text-faint">
                    PROOF // IMAGE ONLY
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
