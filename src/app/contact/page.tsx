import type { Metadata } from "next";
import Contact from "@/views/Contact";

export const metadata: Metadata = {
  title: "Contact - Glairozz Blair Punay",
  description:
    "Get in touch with Glairozz Blair Punay for projects, opportunities, or collaborations.",
};

export default function ContactPage() {
  return <Contact />;
}
