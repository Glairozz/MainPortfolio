import type { Metadata } from "next";
import Education from "@/views/Education";

export const metadata: Metadata = {
  title: "Knowledge — ZZORYX",
  description:
    "Knowledge module of ZZORYX — the education background and academic journey of Glairozz Blair Punay.",
};

export default function EducationPage() {
  return <Education />;
}
