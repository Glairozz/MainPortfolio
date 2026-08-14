"use client";
import { Gamepad2, AppWindow } from "lucide-react";
import { siPandas, siQt } from "simple-icons";
import type { TechItem } from "@/data/techStack";

const lucideFallbacks: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Pygame: Gamepad2,
  Tkinter: AppWindow,
};

function SimpleIcon({ name }: { name: string }) {
  const data = name === "Pandas" ? siPandas : siQt;
  return (
    <svg
      viewBox="0 0 24 24"
      fill={name === "Pandas" ? "#ffffff" : data.hex}
      className="w-7 h-7"
      role="img"
      aria-label={name}
    >
      <path d={data.path} />
    </svg>
  );
}

export default function TechCard({
  item,
  index,
}: {
  item: TechItem;
  index?: number;
}) {
  const LucideIcon = lucideFallbacks[item.name];

  return (
    <div className="group relative flex flex-col items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/80 hover:-translate-y-1">
      {index !== undefined && (
        <span className="absolute top-2.5 left-3 font-mono text-[9px] tracking-widest text-slate-700 group-hover:text-cyan-500/80 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <div className="w-14 h-14 rounded-lg bg-slate-800 flex items-center justify-center overflow-hidden p-2.5 transition-colors group-hover:bg-slate-700/60">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        ) : item.name === "Pandas" || item.name === "PyQt" ? (
          <SimpleIcon name={item.name} />
        ) : LucideIcon ? (
          <LucideIcon className="text-cyan-400" size={26} />
        ) : (
          <span className="text-slate-400 font-heading font-bold text-lg">
            {item.name.charAt(0)}
          </span>
        )}
      </div>
      <span className="text-sm font-medium text-slate-300 text-center">
        {item.name}
      </span>
    </div>
  );
}
