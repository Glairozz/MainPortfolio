"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-24 sm:pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-cyan-400 font-medium tracking-wider text-sm mb-4">
            HI, I'M
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Glairozz Blair
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Punay
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-lg md:text-xl text-slate-300 mb-6 min-h-8">
            <span>I am a</span>
            <Typewriter
              texts={[
                "Aspiring Software Engineer",
                "Fullstack Developer",
                "Creative Problem Solver",
                "Lifelong Learner",
              ]}
            />
          </div>

          <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed mb-10">
            1st-year aspiring software engineer who loves diving into new ideas,
            building things from scratch, and figuring out how technology works
            behind the scenes.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 border border-slate-700 hover:border-cyan-400/50 text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl blur-xl" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-800">
              <img
                src="/assets/images/profile/me photo.png"
                alt="Glairozz Blair Punay"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-slate-500 animate-bounce" size={24} />
      </motion.div>
    </section>
  );
}
