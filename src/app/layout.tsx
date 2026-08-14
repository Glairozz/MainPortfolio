import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import EngineBackground from "@/components/EngineBackground";
import BootLoader from "@/components/BootLoader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZZORYX — Personal Processing Engine",
  description:
    "The personal processing engine of Glairozz Blair Punay — an aspiring software engineer and fullstack developer. Browse modules for identity, knowledge, technology, output, validation, and communication.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <MotionConfig reducedMotion="user">
          <EngineBackground />
          <BootLoader />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 pt-16">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
