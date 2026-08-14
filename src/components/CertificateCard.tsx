"use client";
import { useRef } from "react";
import { ExternalLink, BadgeCheck } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { Certificate } from "@/data/certificates";

const container: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function CertificateCard({
  cert,
  onView,
  index,
}: {
  cert: Certificate;
  onView: (cert: Certificate) => void;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const code =
    index !== undefined
      ? String(index + 1).padStart(3, "0")
      : "???";

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial={reduce ? false : "hidden"}
      animate={inView ? "show" : "hidden"}
      className={`group overflow-hidden rounded-xl border bg-surface/60 transition-colors duration-500 ${
        inView ? "border-accent/35" : "border-line"
      }`}
    >
      <motion.div
        variants={item}
        className="flex items-center justify-between gap-2 border-b border-line px-4 py-2.5"
      >
        <span className="font-mono text-[10px] tracking-widest text-accent">
          VALIDATION // {code}
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest text-emerald-500">
          <BadgeCheck size={12} />
          VERIFIED
        </span>
      </motion.div>

      <motion.button
        variants={item}
        type="button"
        onClick={() => onView(cert)}
        aria-label={`Enlarge certificate: ${cert.title}`}
        className="relative block w-full cursor-pointer overflow-hidden bg-surface-2 text-left"
      >
        <div className={`relative ${inView ? "zz-scanned" : ""}`}>
          <img
            src={cert.image}
            alt={cert.title}
            loading="lazy"
            className="aspect-[4/3] w-full object-contain p-3 transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="zz-scan-sweep" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0 transition-colors duration-300 group-hover:bg-background/30">
            <span className="font-mono text-[10px] tracking-widest text-content opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-background/70 border border-line px-3 py-1.5 rounded-md">
              CLICK TO ENLARGE
            </span>
          </div>
        </div>
      </motion.button>

      <div className="p-4">
        <motion.h3
          variants={item}
          className="font-heading text-base font-semibold text-content leading-snug"
        >
          {cert.title}
        </motion.h3>
        <motion.p variants={item} className="mt-1 text-sm text-accent-strong">
          {cert.issuer}
        </motion.p>
        <motion.p
          variants={item}
          className="mt-1 font-mono text-[11px] tracking-widest text-faint"
        >
          DATE // {cert.date.replace("Issued: ", "")}
        </motion.p>
      </div>

      <motion.div
        variants={item}
        className="flex items-center justify-between gap-3 border-t border-line px-4 py-3"
      >
        <span className="font-mono text-[10px] tracking-widest text-faint">
          STATUS // VERIFIED
        </span>
        {cert.url !== "#" ? (
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-accent hover:text-accent-strong text-sm font-medium transition-colors"
          >
            View Certificate <ExternalLink size={14} />
          </a>
        ) : (
          <button
            type="button"
            onClick={() => onView(cert)}
            className="inline-flex items-center gap-1.5 text-accent hover:text-accent-strong text-sm font-medium transition-colors"
          >
            View Certificate
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}
