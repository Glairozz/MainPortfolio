import type { Metadata } from "next";
import Skills from "@/views/Skills";

export const metadata: Metadata = {
  title: "Skills & Tech Stack - Glairozz Blair Punay",
  description:
    "Programming languages, frameworks, databases, and development tools used by Glairozz Blair Punay.",
};

export default function SkillsPage() {
  return <Skills />;
}
