"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 origin-left z-[70] bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
