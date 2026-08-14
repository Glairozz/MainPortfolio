import { Mail } from "lucide-react";
import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="h-px bg-gradient-to-r from-transparent via-line-strong/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[11px] text-muted tracking-wide">
          <span className="text-accent">blair@zzoryx</span>
          <span className="text-faint">:</span>
          <span className="text-accent-strong/80">~/engine</span>
          <span className="text-muted">$</span>{" "}
          <span className="zz-blink text-accent">▊</span>
        </p>

        <p className="font-mono text-[11px] text-faint tracking-wide text-center">
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
              className="text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
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
            className="text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
