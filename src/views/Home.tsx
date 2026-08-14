"use client";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Typewriter from "@/components/Typewriter";
import { MODULES, STATUS_STYLES, statusLabel } from "@/data/modules";

const MotionLink = motion.create(Link);

const coreStats = [
  { label: "CORE STATUS", value: "ONLINE" },
  { label: "MODULES", value: "07/07" },
  { label: "UPTIME", value: "LIVE" },
  { label: "OUTPUT", value: "READY" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const activeModule = MODULES[0];

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const fade = useTransform(scrollYProgress, [0, 0.55], [1, reduce ? 1 : 0]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[calc(100vh-4rem)] items-center px-4 sm:px-6 overflow-hidden"
    >
      <motion.div
        style={{ opacity: fade }}
        className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-24"
      >
        <div>
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 px-4 py-1.5 rounded-full border border-line bg-surface/70 backdrop-blur-sm font-mono text-[11px] tracking-widest mb-8">
            <span className="text-faint">{activeModule.code}</span>
            <span className="text-accent/60">{"//"}</span>
            <span className="text-accent">
              {activeModule.name.toUpperCase()}
            </span>
            <span className="h-3 w-px bg-line-strong" />
            <span className="inline-flex items-center gap-2 text-muted">
              <span
                className={`h-2 w-2 rounded-full ${STATUS_STYLES[activeModule.status]}`}
              />
              {statusLabel(activeModule.status)}
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-content leading-[1.08] mb-6">
            Glairozz Blair
            <span className="block mt-2 bg-gradient-to-r from-accent to-accent-strong bg-clip-text text-transparent">
              Punay
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-lg md:text-xl text-body mb-6 min-h-8 font-mono">
            <span className="text-faint">&gt;</span>
            <Typewriter
              texts={[
                "Aspiring Software Engineer",
                "Fullstack Developer",
                "Creative Problem Solver",
                "Lifelong Learner",
              ]}
            />
          </div>

          <p className="text-muted text-base md:text-lg max-w-lg leading-relaxed mb-10">
            1st-year aspiring software engineer who loves diving into new ideas,
            building things from scratch, and figuring out how technology works
            behind the scenes.
          </p>

          <div className="flex flex-wrap gap-4">
            <MotionLink
              href="/projects"
              whileHover={reduce ? undefined : { scale: 1.05, y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="group inline-flex items-center gap-2 bg-accent-strong hover:bg-accent text-accent-contrast font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </MotionLink>
            <MotionLink
              href="/contact"
              whileHover={reduce ? undefined : { scale: 1.05, y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="inline-flex items-center gap-2 border border-line hover:border-accent/50 text-body hover:text-content font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Get In Touch
            </MotionLink>
          </div>
        </div>

        <motion.div style={{ y }} className="relative flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[24rem] lg:h-[24rem] mb-8">
            <div className="zz-spin-slow absolute -inset-4 rounded-[2rem] border border-dashed border-accent/20" />
            <div className="absolute -top-2 -left-2 h-9 w-9 border-t-2 border-l-2 border-accent" />
            <div className="absolute -top-2 -right-2 h-9 w-9 border-t-2 border-r-2 border-accent" />
            <div className="absolute -bottom-2 -left-2 h-9 w-9 border-b-2 border-l-2 border-accent" />
            <div className="absolute -bottom-2 -right-2 h-9 w-9 border-b-2 border-r-2 border-accent" />

            <div className="relative w-full h-full overflow-hidden rounded-[1.75rem] border border-line bg-surface">
              <img
                src="/assets/images/profile/me photo.png"
                alt="Glairozz Blair Punay"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-3 left-3 font-mono text-[10px] tracking-widest text-accent">
                OPERATOR :: BLAIR P.
              </div>
            </div>

            <div className="absolute -bottom-7 inset-x-4 grid grid-cols-2 gap-x-4 gap-y-2 rounded-xl border border-line bg-background/90 backdrop-blur-md px-4 py-3">
              {coreStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-[9px] tracking-widest text-faint">
                    {stat.label}
                  </p>
                  <p className="font-mono text-xs text-accent">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-faint"
        aria-hidden
      >
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <motion.div
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
