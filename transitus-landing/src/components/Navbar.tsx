"use client";

import { ShieldCheck, CalendarClock, Inbox } from "lucide-react";
import { Container } from "./ui";

interface NavbarProps {
  onConsultClick: () => void;
}

export default function Navbar({ onConsultClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#0B1020]/70 border-b border-white/10">
      <Container className="flex h-16 items-center justify-between">
      <div className="flex items-center">
        <img className="w-70 h-18 -ml-8" src="/media/Untitled.png" /> {/* Negative margin directly on image */}
      </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#case-studies" className="hover:text-white">Case Studies</a>
          <a href="#insights" className="hover:text-white">Insights</a>
          <a href="#careers" className="hover:text-white">Careers</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <button
            onClick={onConsultClick}
            className="hidden md:inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/30"
          >
            <CalendarClock className="size-4" />
            Request Consultation
          </button>
          <a
            href="#contact"
            className="md:hidden inline-flex items-center gap-2 rounded-2xl px-3 py-2 border border-white/15"
          >
            <Inbox className="size-4" />
            Contact
          </a>
        </div>
      </Container>
    </header>
  );
}