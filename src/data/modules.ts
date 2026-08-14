import {
  Home,
  User,
  GraduationCap,
  Wrench,
  FolderKanban,
  BadgeCheck,
  Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SystemStatus = "ONLINE" | "ACTIVE" | "IDLE" | "STANDBY" | "ERROR";

const STATUS_CYCLE: SystemStatus[] = ["ONLINE", "ACTIVE", "IDLE", "STANDBY"];

export function statusFromIndex(index: number): SystemStatus {
  return STATUS_CYCLE[index % STATUS_CYCLE.length];
}

export interface ModuleInfo {
  code: string;
  index: number;
  name: string;
  label: string;
  path: string;
  icon: LucideIcon;
  status: SystemStatus;
}

export const MODULES: ModuleInfo[] = [
  {
    code: "MOD-01",
    index: 0,
    name: "Engine Core",
    label: "Home",
    path: "/",
    icon: Home,
    status: statusFromIndex(0),
  },
  {
    code: "MOD-02",
    index: 1,
    name: "Identity",
    label: "About",
    path: "/about",
    icon: User,
    status: statusFromIndex(1),
  },
  {
    code: "MOD-03",
    index: 2,
    name: "Knowledge",
    label: "Education",
    path: "/education",
    icon: GraduationCap,
    status: statusFromIndex(2),
  },
  {
    code: "MOD-04",
    index: 3,
    name: "Technology",
    label: "Skills",
    path: "/skills",
    icon: Wrench,
    status: statusFromIndex(3),
  },
  {
    code: "MOD-05",
    index: 4,
    name: "Output",
    label: "Projects",
    path: "/projects",
    icon: FolderKanban,
    status: statusFromIndex(4),
  },
  {
    code: "MOD-06",
    index: 5,
    name: "Validation",
    label: "Certificates",
    path: "/certificates",
    icon: BadgeCheck,
    status: statusFromIndex(5),
  },
  {
    code: "MOD-07",
    index: 6,
    name: "Communication",
    label: "Contact",
    path: "/contact",
    icon: Mail,
    status: statusFromIndex(6),
  },
];

export function getModuleByPath(pathname: string): ModuleInfo {
  const exact = MODULES.find((m) => m.path === pathname);
  if (exact) return exact;
  return (
    MODULES.find((m) => m.path !== "/" && pathname.startsWith(m.path)) ??
    MODULES[0]
  );
}

export const STATUS_STYLES: Record<SystemStatus, string> = {
  ONLINE: "bg-accent shadow-[0_0_10px_var(--zz-glow-a)]",
  ACTIVE: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]",
  IDLE: "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]",
  STANDBY: "bg-slate-400 shadow-[0_0_10px_rgba(148,163,184,0.6)]",
  ERROR: "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]",
};

export function statusLabel(status: SystemStatus): string {
  return `${status[0]}${status.slice(1).toLowerCase()}`;
}
