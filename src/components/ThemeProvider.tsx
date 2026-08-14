"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

const STORAGE_KEY = "zzoryx_theme";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [reconfiguring, setReconfiguring] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const t = setTimeout(() => {
      const current = document.documentElement.getAttribute("data-theme");
      setTheme(current === "light" ? "light" : "dark");
    }, 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(
    () => () => {
      timers.current.forEach((t) => clearTimeout(t));
    },
    []
  );

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];

    setReconfiguring(true);
    document.documentElement.classList.add("zz-theme-anim");

    timers.current.push(
      setTimeout(() => {
        document.documentElement.setAttribute("data-theme", next);
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch {
          /* ignore */
        }
        setTheme(next);
      }, 140)
    );

    timers.current.push(
      setTimeout(() => {
        setReconfiguring(false);
        document.documentElement.classList.remove("zz-theme-anim");
      }, 520)
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      <AnimatePresence>
        {reconfiguring && (
          <motion.div
            aria-hidden
            className="fixed inset-0 z-[280] flex items-center justify-center bg-background/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <span className="font-mono text-[11px] tracking-[0.3em] text-accent">
              RECONFIGURING INTERFACE
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}
