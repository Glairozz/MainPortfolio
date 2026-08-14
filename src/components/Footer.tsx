import { Mail } from "lucide-react";
import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80">
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[11px] text-slate-500 tracking-wide">
          <span className="text-cyan-400">blair@zzoryx</span>
          <span className="text-slate-600">:</span>
          <span className="text-blue-400/70">~/engine</span>
          <span className="text-slate-400">$</span>{" "}
          <span className="zz-blink text-cyan-400">▊</span>
        </p>

        <p className="font-mono text-[11px] text-slate-600 tracking-wide text-center">
          &copy; 2026 GLAIROZZ BLAIR PUNAY — ALL MODULES OPERATIONAL
        </p>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-slate-500 hover:text-cyan-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[18px] h-[18px]"
                aria-hidden="true"
              >
                <path d={social.path} />
              </svg>
            </a>
          ))}
          <a
            href="mailto:ibotpunay@gmail.com"
            aria-label="Email"
            className="text-slate-500 hover:text-cyan-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
