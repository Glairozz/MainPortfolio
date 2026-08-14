import type { Metadata } from "next";
import About from "@/views/About";

export const metadata: Metadata = {
  title: "About Me - Glairozz Blair Punay",
  description:
    "Learn more about Glairozz Blair Punay, an aspiring software engineer passionate about building innovative solutions.",
};

export default function AboutPage() {
  return <About />;
}
