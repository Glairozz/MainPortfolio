"use client";
import { ExternalLink } from "lucide-react";
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
  return (
    <section id="certificates" className="px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium tracking-wider text-sm mb-3">CERTIFICATES</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">Certifications & Achievements</h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.05}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group bg-slate-900/50 border border-slate-800 hover:border-cyan-400/30 rounded-xl overflow-hidden transition-colors"
              >
                <div className="h-48 overflow-hidden">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-slate-500 text-sm">{cert.issuer}</p>
                  <p className="text-slate-600 text-xs mb-3">{cert.date}</p>
                  <span className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                    View Certificate <ExternalLink size={14} />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
