"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ModuleHeader from "@/components/ModuleHeader";
import { MODULES } from "@/data/modules";
import { socials } from "@/data/socials";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "ibotpunay@gmail.com",
    href: "mailto:ibotpunay@gmail.com",
  },
  {
    icon: Phone,
    label: "Viber",
    value: "+639950960349",
    href: "tel:+639950960349",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Philippines",
    href: null,
  },
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      String(data.get("subject") ?? "Message via zzoryx.engine")
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get(
        "message"
      )}`
    );
    window.location.href = `mailto:ibotpunay@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <ModuleHeader
          module={MODULES[6]}
          subtitle="Get In Touch"
          description="Open communication channel — reach out about projects, opportunities, or just to say hi."
        />

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <div>
              <p className="font-mono text-[11px] tracking-widest text-slate-600 mb-4">
                CMN-001 // CHANNELS
              </p>
              <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                I&apos;m always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>

              <div className="space-y-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="text-cyan-400" size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-500 text-sm font-mono text-xs tracking-widest">
                        {item.label.toUpperCase()}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-cyan-400 transition-colors break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-slate-500 text-sm mb-4">Find me online</p>
                <div className="flex items-center gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:-translate-y-0.5 hover:border-cyan-400/40 transition-all duration-200"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d={social.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-widest text-slate-600">
                  CMN-002 // MESSAGE RELAY
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-amber-400/90 border border-amber-400/20 bg-amber-400/5 rounded px-2 py-0.5">
                  RELAY OFFLINE
                </span>
              </div>

              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-3.5 rounded-lg transition-colors"
              >
                Open Email Client <Send size={16} />
              </button>
              <p className="text-slate-600 text-xs leading-relaxed text-center">
                No outbound relay is configured on this engine — submitting
                opens your email client with the message pre-filled to
                ibotpunay@gmail.com.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
