"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { getModuleByPath } from "@/data/modules";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [processing, setProcessing] = useState(false);
  const firstRender = useRef(true);
  const reduce = useReducedMotion();
  const targetModule = getModuleByPath(pathname);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setProcessing(true);
    const t = setTimeout(
      () => setProcessing(false),
      reduce ? 120 : 650
    );
    return () => clearTimeout(t);
  }, [pathname, reduce]);

  return (
    <>
      {children}
      <AnimatePresence>
        {processing && (
          <motion.div
            key={pathname}
            className="fixed inset-0 z-[250] flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.05 : 0.3 }}
            aria-hidden
          >
            <div className="font-mono text-xs tracking-[0.3em] text-accent text-center">
              PROCESSING {targetModule.code}
              <div className="mt-3 h-px w-40 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
