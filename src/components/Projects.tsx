"use client";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const projects = [
  { title: "3D Visual Recognition", category: "Web Development", image: "/assets/images/projects/3dRecognition.png", url: "https://github.com/Glairozz/3d-Hand-Recognition", description: "A 3D visual recognition project leveraging computer vision and deep learning for hand gesture tracking." },
  { title: "Y-SAFE", category: "Web Development", image: "/assets/images/projects/y-safe.png", url: "https://y-safe-v668.onrender.com/dashboard.html", description: "A comprehensive safety management system with dashboard functionality." },
  { title: "Lord of the Rings Library", category: "Web Development", image: "/assets/images/projects/lotr.png", url: "https://glairozz.github.io/lord-of-the-rings/", description: "A comprehensive website showcasing information about the Lord of the Rings series." },
  { title: "A Song of Ice and Fire & The Dance of the Dragons", category: "Web Development", image: "/assets/images/projects/got&hotd.png", url: "https://glairozz.github.io/A-Song-of-Ice-and-Fire---The-Dance-of-The-Dragons/", description: "A detailed website about the A Song of Ice and Fire series." },
  { title: "Python Algorithm Visualizer", category: "Web Development", image: "/assets/images/projects/algo visualizer.png", url: "https://glairozz.github.io/python-algorithm-visualizer/", description: "An interactive visual tool for understanding algorithms step-by-step." },
  { title: "ASCII Portrait Generator", category: "Web Development", image: "/assets/images/projects/portrait generator.png", url: "https://glairozz.github.io/ASCII_PortraitGenerator/", description: "Convert images into ASCII art portraits with customizable settings." },
  { title: "Valentines Invitation Letter", category: "Web Development", image: "/assets/images/projects/valentines inv letter.png", url: "https://glairozz.github.io/ValentinesInvitationLetter/", description: "An interactive Valentine's Day invitation letter website." },
  { title: "Online Bank Teller", category: "Web Development", image: "/assets/images/projects/bank teller.png", url: "https://glairozz.github.io/BankTellerWebPractice/", description: "A comprehensive online banking interface for teller operations." },
  { title: "Ethan's Great Dungeon", category: "Game Development", image: "/assets/images/projects/egd.png", url: "https://github.com/glairozzblair-gif/Pygame-Ethans-Great-Dungeon.git", description: "A 2D dungeon crawler game made using Pygame with multiple levels and enemies." },
  { title: "Spy Adventure Game", category: "Game Development", image: "/assets/images/projects/spygame.jpg", url: "https://glairozz.github.io/Spy-game/", description: "An interactive spy-themed adventure game with stealth mechanics." },
  { title: "Drunk Cards Game", category: "Game Development", image: "/assets/images/projects/drunkcards.png", url: "https://glairozz.github.io/drunk-cards/", description: "A fun card game with unique mechanics and animated movements." },
  { title: "Rubik's Cube", category: "Game Development", image: "/assets/images/projects/rubics cube.jpg", url: "https://glairozz.github.io/Rubic-Cube/", description: "A virtual Rubik's Cube simulator with intuitive controls." },
  { title: "Space Shooter", category: "Game Development", image: "/assets/images/projects/pyshooter.png", url: "https://github.com/Glairozz/PygameSpaceShooter", description: "An arcade space shooter with multiple enemy types and power-ups." },
  { title: "PyChess", category: "Game Development", image: "/assets/images/projects/pychess.png", url: "https://github.com/Glairozz/python-chess", description: "A fully functional chess game with AI opponent and graphical interface." },
  { title: "First Portfolio Website", category: "UI Design", image: "/assets/images/projects/firstportfolio.png", url: "https://glairozz.github.io/Glairozz-Portfolio/", description: "My first personal portfolio website showcasing web development skills." },
  { title: "Graphic Design Portfolio", category: "UI Design", image: "/assets/images/projects/meet me.png", url: "https://glairozz.github.io/graphic-design-portfolio-practice/", description: "A collection of graphic design works including posters and logos." },
];

const categories = ["All", "Web Development", "Game Development", "UI Design"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="px-6 py-32 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-cyan-400 font-medium tracking-wider text-sm mb-3">PROJECTS</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">What I've Built</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-cyan-500 text-slate-950"
                    : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-slate-900/50 border border-slate-800 hover:border-cyan-400/30 rounded-xl overflow-hidden group transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                >
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
