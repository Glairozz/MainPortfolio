import type { Metadata } from "next";
import Skills from "@/views/Skills";

export const metadata: Metadata = {
  title: "Technology — ZZORYX",
  description:
    "Technology module of ZZORYX — the languages, frameworks, databases, and tools used by Glairozz Blair Punay.",
};

export default function SkillsPage() {
  return <Skills />;
}
