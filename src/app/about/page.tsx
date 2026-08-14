import type { Metadata } from "next";
import About from "@/views/About";

export const metadata: Metadata = {
  title: "Identity — ZZORYX",
  description:
    "Identity module of ZZORYX — who Glairozz Blair Punay is, his traits, and the roadmap he is processing.",
};

export default function AboutPage() {
  return <About />;
}
