"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const BOOT_LINES = [
  "> INITIALIZING CORE MODULES ...",
  "> MOUNTING INTERFACE LAYER ... OK",
  "> LOADING PERSONAL DATA STREAMS ... OK",
  "> CALIBRATING OUTPUT PIPELINE ... OK",
  "> SYSTEM ONLINE. WELCOME BACK, BLAIR.",
];

export default function BootLoader() {
  const [phase, setPhase] = useState<"boot" | "leaving" | "done">("boot");
  const reduce = useReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem("zzoryx_booted")) {
      const t = setTimeout(() => setPhase("done"), 0);
      return () => clearTimeout(t);
    }
    const bootMs = reduce ? 250 : 1300;
    const t = setTimeout(() => {
      sessionStorage.setItem("zzoryx_booted", "1");
      setPhase("leaving");
    }, bootMs);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.05 : 0.35 }}
          aria-hidden
        >
          <div className="w-full max-w-md px-8">
            <div className="mb-8 text-center">
              <p className="font-heading text-4xl font-bold tracking-[0.35em] text-content">
                ZZORYX
              </p>
              <p className="mt-2 text-[11px] tracking-[0.4em] text-accent/80 font-mono">
                PERSONAL PROCESSING ENGINE
              </p>
            </div>

            <div className="h-1 w-full bg-surface-2 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-strong to-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: reduce ? 0.1 : 1.05, ease: "easeInOut" }}
              />
            </div>

            <div className="mt-6 min-h-[7rem] font-mono text-xs leading-6 text-muted">
              {BOOT_LINES.map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: reduce ? 0 : 0.15 + i * 0.18,
                    duration: 0.1,
                  }}
                  className={i === BOOT_LINES.length - 1 ? "text-accent" : ""}
                >
                  {line}
                </motion.p>
              ))}
              <span className="zz-blink text-accent">▊</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
