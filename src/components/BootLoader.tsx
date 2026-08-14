"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const BOOT_LINES = [
  "> BOOTING SYSTEM ...",
  "> CORE ............ OK",
  "> MODULES ......... OK",
  "> INTERFACE ....... OK",
  "> SYSTEM ONLINE",
];

const STORAGE_KEY = "zzoryx_booted";
const BOOT_DURATION = 1000;
const MAX_DURATION = 1600;
const EXIT_DURATION = 300;

export default function BootLoader() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const finishedRef = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reduce = useReducedMotion();

  useEffect(() => {
    const unlock = () => {
      document.documentElement.classList.remove("zz-boot-lock");
      document.body.classList.remove("zz-boot-lock");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };

    if (sessionStorage.getItem(STORAGE_KEY)) {
      timers.current.push(setTimeout(() => setGone(true), 0));
      return () => {
        timers.current.forEach((t) => clearTimeout(t));
        timers.current = [];
      };
    }

    document.documentElement.classList.add("zz-boot-lock");
    document.body.classList.add("zz-boot-lock");

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      unlock();
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setLeaving(true);
      timers.current.push(setTimeout(() => setGone(true), EXIT_DURATION));
    };

    timers.current.push(setTimeout(finish, reduce ? 200 : BOOT_DURATION));
    timers.current.push(setTimeout(finish, MAX_DURATION));

    return () => {
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
      unlock();
    };
  }, [reduce]);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[300] flex items-center justify-center bg-background transition-opacity duration-300 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
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
            transition={{ duration: reduce ? 0.1 : 1.0, ease: "easeInOut" }}
          />
        </div>

        <div className="mt-6 min-h-[7rem] font-mono text-xs leading-6 text-muted">
          {BOOT_LINES.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: reduce ? 0 : 0.1 + i * 0.15,
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
    </div>
  );
}
