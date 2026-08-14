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
    <div className="group relative flex flex-col items-center gap-3 rounded-xl border border-line bg-surface/40 p-5 transition-all duration-300 hover:border-accent/40 hover:bg-surface/80 hover:-translate-y-1">
      {index !== undefined && (
        <span className="absolute top-2.5 left-3 font-mono text-[9px] tracking-widest text-faint group-hover:text-accent/80 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <div className="w-14 h-14 rounded-lg bg-surface-2 flex items-center justify-center overflow-hidden p-2.5 transition-colors group-hover:bg-surface-2/70">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        ) : item.name === "Pandas" || item.name === "PyQt" ? (
          <SimpleIcon name={item.name} />
        ) : LucideIcon ? (
          <LucideIcon className="text-accent" size={26} />
        ) : (
          <span className="text-muted font-heading font-bold text-lg">
            {item.name.charAt(0)}
          </span>
        )}
      </div>
      <span className="text-sm font-medium text-body text-center">
        {item.name}
      </span>
    </div>
  );
}
