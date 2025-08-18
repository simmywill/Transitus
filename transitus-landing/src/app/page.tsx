"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Insights from "@/components/Insights";
import Careers from "@/components/Careers";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import FloatingCTA from "@/components/FloatingCTA";


export default function HomePage() {
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <main>
      <Navbar onConsultClick={() => setConsultOpen(true)} />
      <Hero onConsultClick={() => setConsultOpen(true)} />
      <Services />
      <About />
      <CaseStudies />
      <Insights />
      <Careers />
      <ContactForm />
      <Footer />
      <FloatingCTA onClick={() => setConsultOpen(true)} />
      <ConsultationModal 
        isOpen={consultOpen} 
        onClose={() => setConsultOpen(false)} 
      />
    </main>
  );
}