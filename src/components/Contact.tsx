"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="px-6 py-32 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium tracking-wider text-sm mb-3">CONTACT</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="font-heading text-2xl font-semibold text-white mb-4">Let's Connect</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "ibotpunay@gmail.com", href: "mailto:ibotpunay@gmail.com" },
                  { icon: Phone, label: "Viber", value: "+639950960349", href: "tel:+639950960349" },
                  { icon: MapPin, label: "Location", value: "Philippines", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                      <item.icon className="text-cyan-400" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white hover:text-cyan-400 transition-colors">{item.value}</a>
                      ) : (
                        <span className="text-white">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-5">
              <input type="text" placeholder="Your Name" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors" />
              <input type="email" placeholder="Your Email" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors" />
              <input type="text" placeholder="Subject" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors" />
              <textarea rows={4} placeholder="Your Message" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none" />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-3.5 rounded-lg transition-colors"
              >
                {submitted ? "Message Sent!" : "Send Message"} <Send size={16} />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
