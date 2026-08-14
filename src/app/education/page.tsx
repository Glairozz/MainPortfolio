import type { Metadata } from "next";
import Education from "@/views/Education";

export const metadata: Metadata = {
  title: "Education - Glairozz Blair Punay",
  description:
    "Education background and academic journey of Glairozz Blair Punay.",
};

export default function EducationPage() {
  return <Education />;
}
