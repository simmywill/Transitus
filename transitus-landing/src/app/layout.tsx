
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Transitus Security & Build | Elite Cybersecurity & Software Development",
  description: "Enterprise-grade cybersecurity and world-class software development for organizations that can't afford to fail."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-[#0B1020] via-[#0A0F1A] to-[#070B14] text-white">
        {/* Glow background accents */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}
