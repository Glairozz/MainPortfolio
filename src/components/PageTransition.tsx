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
  const [forceRemoved, setForceRemoved] = useState(true);
  const firstRender = useRef(true);
  const reduce = useReducedMotion();
  const targetModule = getModuleByPath(pathname);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setProcessing(true);
    setForceRemoved(false);
    const t1 = setTimeout(
      () => setProcessing(false),
      reduce ? 120 : 650
    );
    const t2 = setTimeout(() => setForceRemoved(true), reduce ? 400 : 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname, reduce]);

  return (
    <>
      {children}
      {!forceRemoved && (
        <AnimatePresence>
          {processing && (
            <motion.div
              key={pathname}
              className="fixed inset-0 z-[250] pointer-events-none flex items-center justify-center bg-background"
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
      )}
    </>
  );
}
