import type { Metadata } from "next";
import Certificates from "@/views/Certificates";

export const metadata: Metadata = {
  title: "Validation — ZZORYX",
  description:
    "Validation module of ZZORYX — the certifications and achievements earned by Glairozz Blair Punay.",
};

export default function CertificatesPage() {
  return <Certificates />;
}
