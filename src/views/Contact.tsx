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
              <p className="font-mono text-[11px] tracking-widest text-faint mb-4">
                CMN-001 // CHANNELS
              </p>
              <h3 className="font-heading text-2xl font-semibold text-content mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-muted mb-8 leading-relaxed">
                I&apos;m always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>

              <div className="space-y-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-surface-2 border border-line rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="text-accent" size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-muted text-sm font-mono text-xs tracking-widest">
                        {item.label.toUpperCase()}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-content hover:text-accent transition-colors break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-content">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-muted text-sm mb-4">Find me online</p>
                <div className="flex items-center gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 bg-surface-2 border border-line rounded-lg flex items-center justify-center text-body hover:text-accent hover:-translate-y-0.5 hover:border-accent/40 transition-all duration-200"
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
              className="bg-surface/60 border border-line rounded-xl p-6 space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-widest text-faint">
                  CMN-002 // MESSAGE RELAY
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-amber-500/90 border border-amber-500/20 bg-amber-500/5 rounded px-2 py-0.5">
                  RELAY OFFLINE
                </span>
              </div>

              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-surface-2/60 border border-line rounded-lg px-4 py-3 text-content placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-surface-2/60 border border-line rounded-lg px-4 py-3 text-content placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full bg-surface-2/60 border border-line rounded-lg px-4 py-3 text-content placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full bg-surface-2/60 border border-line rounded-lg px-4 py-3 text-content placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-accent-strong hover:bg-accent text-accent-contrast font-semibold px-8 py-3.5 rounded-lg transition-colors"
              >
                Open Email Client <Send size={16} />
              </button>
              <p className="text-faint text-xs leading-relaxed text-center">
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
