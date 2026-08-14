"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";
import {
  MODULES,
  getModuleByPath,
  STATUS_STYLES,
  statusLabel,
} from "@/data/modules";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();
  const activeModule = getModuleByPath(pathname);

  useEffect(() => {
    const t = setTimeout(() => setMobileOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Home"
        >
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-md bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-colors" />
            <Cpu size={15} className="text-cyan-400 relative" />
          </span>
          <span className="font-heading font-bold tracking-[0.28em] text-white text-sm">
            ZZORYX
          </span>
          <span className="hidden sm:inline-flex font-mono text-[10px] tracking-widest text-slate-600 border border-slate-800 rounded px-1.5 py-0.5">
            v2.6
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {MODULES.map((m) => {
            const active = isActive(m.path);
            return (
              <li key={m.path}>
                <Link
                  href={m.path}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[11px] tracking-widest transition-colors ${
                    active
                      ? "text-cyan-300 bg-cyan-400/10"
                      : "text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60"
                  }`}
                >
                  <span
                    className={`text-[9px] ${
                      active ? "text-cyan-500" : "text-slate-600"
                    }`}
                  >
                    {String(m.index + 1).padStart(2, "0")}
                  </span>
                  {m.label.toUpperCase()}
                  {active && (
                    <span className="h-1 w-1 rounded-full bg-cyan-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-slate-500 border border-slate-800 rounded-md px-2 py-1">
            <span
              className={`h-1.5 w-1.5 rounded-full ${STATUS_STYLES[activeModule.status]}`}
            />
            SYS:{statusLabel(activeModule.status)}
          </span>
        </div>

        <button
          className="lg:hidden text-slate-300 hover:text-cyan-300 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="lg:hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-md overflow-hidden"
          >
            <ul className="px-4 py-3 space-y-1">
              {MODULES.map((m) => {
                const active = isActive(m.path);
                return (
                  <li key={m.path}>
                    <Link
                      href={m.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-mono text-xs tracking-widest transition-colors ${
                        active
                          ? "bg-cyan-400/10 text-cyan-300"
                          : "text-slate-400 hover:bg-slate-800/60 hover:text-cyan-300"
                      }`}
                    >
                      <span className="text-[10px] text-slate-600">
                        {m.code}
                      </span>
                      <span className="flex-1">{m.label.toUpperCase()}</span>
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${STATUS_STYLES[m.status]}`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
