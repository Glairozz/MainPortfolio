import type { Metadata } from "next";
import Home from "@/views/Home";

export const metadata: Metadata = {
  title: "Glairozz Blair Punay - Software Engineer Portfolio",
  description:
    "Aspiring Software Engineer and Fullstack Developer showcasing projects, skills, and experience in web development and programming",
};

export default function HomePage() {
  return <Home />;
}
