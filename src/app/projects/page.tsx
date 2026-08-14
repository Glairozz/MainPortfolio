import type { Metadata } from "next";
import Projects from "@/views/Projects";

export const metadata: Metadata = {
  title: "Projects - Glairozz Blair Punay",
  description:
    "A collection of projects built by Glairozz Blair Punay across web development, game development, and UI design.",
};

export default function ProjectsPage() {
  return <Projects />;
}
