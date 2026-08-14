"use client";
import { ExternalLink, BadgeCheck } from "lucide-react";
import type { Certificate } from "@/data/certificates";

export default function CertificateCard({
  cert,
  onView,
  index,
}: {
  cert: Certificate;
  onView: (image: string) => void;
  index?: number;
}) {
  const code =
    index !== undefined
      ? `VER-${String(index + 1).padStart(3, "0")}`
      : "VERIFY";

  return (
    <div className="group bg-slate-900/40 border border-slate-800 hover:border-cyan-400/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div
        className="relative bg-slate-800 cursor-pointer overflow-hidden"
        onClick={() => onView(cert.image)}
      >
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-56 sm:h-64 object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono tracking-widest bg-black/60 px-4 py-2 rounded-lg">
            CLICK TO ENLARGE
          </span>
        </div>
        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] tracking-widest text-cyan-300 bg-slate-950/80 backdrop-blur-sm border border-slate-700/60 px-2 py-1 rounded-md">
            {code}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest text-emerald-300 bg-slate-950/80 backdrop-blur-sm border border-slate-700/60 px-2 py-1 rounded-md">
            <BadgeCheck size={11} />
            VERIFIED
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-base font-semibold text-white mb-1">
          {cert.title}
        </h3>
        <p className="text-slate-500 text-sm">{cert.issuer}</p>
        <p className="text-slate-600 text-xs font-mono mb-3">{cert.date}</p>
        {cert.url !== "#" ? (
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
          >
            View Certificate <ExternalLink size={14} />
          </a>
        ) : (
          <button
            onClick={() => onView(cert.image)}
            className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
          >
            View Certificate
          </button>
        )}
      </div>
    </div>
  );
}
