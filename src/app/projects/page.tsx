import type { Metadata } from "next";
import Projects from "@/views/Projects";

export const metadata: Metadata = {
  title: "Output — ZZORYX",
  description:
    "Output module of ZZORYX — projects shipped by Glairozz Blair Punay across web development, game development, and UI design.",
};

export default function ProjectsPage() {
  return <Projects />;
}
