"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { certificates } from "@/data/certificates";
import CertificateCard from "@/components/CertificateCard";
import ScrollReveal from "@/components/ScrollReveal";
import ModuleHeader from "@/components/ModuleHeader";
import { MODULES } from "@/data/modules";

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <section className="px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <ModuleHeader
          module={MODULES[5]}
          subtitle="Certifications & Achievements"
          description="Validation registry — credentials issued by verified learning providers."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.05}>
              <CertificateCard cert={cert} onView={setSelectedImage} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={reduce ? false : { scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduce ? undefined : { scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors z-10"
                aria-label="Close"
              >
                <X size={28} />
              </button>
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
