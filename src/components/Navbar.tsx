"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Cpu, Sun, Moon } from "lucide-react";
import {
  MODULES,
  getModuleByPath,
  STATUS_STYLES,
  statusLabel,
} from "@/data/modules";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();
  const { theme, toggleTheme } = useTheme();
  const activeModule = getModuleByPath(pathname);
  const isDark = theme === "dark";

  useEffect(() => {
    const t = setTimeout(() => setMobileOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Home"
        >
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-md bg-accent/10 group-hover:bg-accent/20 transition-colors" />
            <Cpu size={15} className="text-accent relative" />
          </span>
          <span className="font-heading font-bold tracking-[0.28em] text-content text-sm">
            ZZORYX
          </span>
          <span className="hidden sm:inline-flex font-mono text-[10px] tracking-widest text-faint border border-line rounded px-1.5 py-0.5">
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
                      ? "text-accent bg-accent/10"
                      : "text-muted hover:text-accent hover:bg-surface-2/60"
                  }`}
                >
                  <span
                    className={`text-[9px] ${
                      active ? "text-accent-strong" : "text-faint"
                    }`}
                  >
                    {String(m.index + 1).padStart(2, "0")}
                  </span>
                  {m.label.toUpperCase()}
                  {active && <span className="h-1 w-1 rounded-full bg-accent" />}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <span className="hidden xl:inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-faint border border-line rounded-md px-2 py-1">
            <span
              className={`h-1.5 w-1.5 rounded-full ${STATUS_STYLES[activeModule.status]}`}
            />
            SYS:{statusLabel(activeModule.status)}
          </span>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "THEME // DARK" : "THEME // LIGHT"}
            className="group relative flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-muted hover:text-accent hover:border-accent/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            {isDark ? <Moon size={16} /> : <Sun size={16} />}
            <span className="pointer-events-none absolute -bottom-9 right-0 whitespace-nowrap rounded-md border border-line bg-surface px-2 py-1 font-mono text-[9px] tracking-widest text-accent opacity-0 transition-opacity duration-150 group-hover:opacity-100">
              THEME // {isDark ? "DARK" : "LIGHT"}
            </span>
          </button>

          <button
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-md text-muted hover:text-accent hover:bg-surface-2/60 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="lg:hidden border-t border-line bg-background/95 backdrop-blur-md overflow-hidden"
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
                          ? "bg-accent/10 text-accent"
                          : "text-muted hover:bg-surface-2/60 hover:text-accent"
                      }`}
                    >
                      <span className="text-[10px] text-faint">{m.code}</span>
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
