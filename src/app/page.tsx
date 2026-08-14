import type { Metadata } from "next";
import Home from "@/views/Home";

export const metadata: Metadata = {
  title: "Engine Core — ZZORYX",
  description:
    "The engine core of ZZORYX — the personal processing engine of Glairozz Blair Punay, an aspiring software engineer and fullstack developer.",
};

export default function HomePage() {
  return <Home />;
}
