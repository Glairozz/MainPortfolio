"use client";
import { useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const certificates = [
  { title: "Programming for Everybody (Python)", issuer: "University of Michigan", date: "Issued: 2025", image: "/assets/images/certificates/python for everybody.png", url: "https://www.coursera.org/learn/python/home/module/1" },
  { title: "Introduction to Computers", issuer: "Coursera", date: "Issued: 2025", image: "/assets/images/certificates/intro to computers.png", url: "https://www.coursera.org/learn/introduction-to-computers/home/welcome" },
  { title: "Hello Python: Introduction to Programming", issuer: "Coursera", date: "Issued: 2025", image: "/assets/images/certificates/hello python.png", url: "#" },
  { title: "Functions and Conditional Statements", issuer: "Coursera", date: "Issued: 2025", image: "/assets/images/certificates/functions and conditional statements.png", url: "#" },
  { title: "Loops and Strings in Python", issuer: "Coursera", date: "Issued: 2025", image: "/assets/images/certificates/loops and strings.png", url: "#" },
  { title: "Python Basics: Selection and Iteration", issuer: "Coursera", date: "Issued: 2026", image: "/assets/images/certificates/python selection.png", url: "https://www.coursera.org/learn/codio-python-basics/home/module/1" },
  { title: "Python Basic Structures: Lists, Strings, and Files", issuer: "Coursera", date: "Issued: 2026", image: "/assets/images/certificates/python structure.png", url: "https://www.coursera.org/learn/python-basic-structures-lists-strings-and-files/home/module/1" },
  { title: "Python Game Development with Pygame", issuer: "Coursera", date: "Issued: 2026", image: "/assets/images/certificates/pygame.png", url: "https://www.coursera.org/learn/python-game-development-with-pygame/home/module/1" },
  { title: "Introduction to Frontend Development", issuer: "Meta", date: "Issued: 2026", image: "/assets/images/certificates/frontend dev.png", url: "https://www.coursera.org/learn/introduction-to-front-end-development/home/week/1" },
  { title: "Data Structures", issuer: "Coursera", date: "Issued: 2026", image: "/assets/images/certificates/data structures.png", url: "#" },
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certificates" className="px-6 py-16 md:py-32">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium tracking-wider text-sm mb-3">CERTIFICATES</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">Certifications & Achievements</h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.05}>
              <div className="group bg-slate-900/50 border border-slate-800 hover:border-cyan-400/30 rounded-xl overflow-hidden transition-colors">
                <div
                  className="relative bg-slate-800 cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-56 sm:h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-black/60 px-4 py-2 rounded-lg">
                      Click to enlarge
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-slate-500 text-sm">{cert.issuer}</p>
                  <p className="text-slate-600 text-xs mb-3">{cert.date}</p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                </div>
              </div>
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
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
