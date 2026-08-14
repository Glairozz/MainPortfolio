import type { Metadata } from "next";
import Contact from "@/views/Contact";

export const metadata: Metadata = {
  title: "Communication — ZZORYX",
  description:
    "Communication module of ZZORYX — get in touch with Glairozz Blair Punay for projects, opportunities, or collaborations.",
};

export default function ContactPage() {
  return <Contact />;
}
