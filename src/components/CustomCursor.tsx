"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const reduce = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 600, damping: 45 });
  const springY = useSpring(y, { stiffness: 600, damping: 45 });

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const enableTimer = setTimeout(() => setEnabled(true), 0);
    document.documentElement.classList.add("zz-cursor-on");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(
        !!target?.closest(
          "a, button, input, textarea, select, [role='button'], [data-cursor]"
        )
      );
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      clearTimeout(enableTimer);
      document.documentElement.classList.remove("zz-cursor-on");
      window.removeEventListener("mousemove", move);
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[200] w-8 h-8 rounded-full border border-cyan-400/70 pointer-events-none"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovering ? 1.7 : 1, opacity: hovering ? 0.9 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[201] w-1.5 h-1.5 rounded-full bg-cyan-400 pointer-events-none"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
