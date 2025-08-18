"use client";

import { motion } from "framer-motion";
import { Rocket, ArrowRight, CheckCircle2, Lock, Globe2, ShieldCheck, ServerCog, Cpu } from "lucide-react";
import { Container, Card, Stat, Pill } from "./ui";

interface HeroProps {
  onConsultClick: () => void;
}

export default function Hero({ onConsultClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <Container className="pt-14 pb-16 md:pt-24 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold leading-tight"
          >
            Securing Tomorrow. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Building the Future.</span>
          </motion.h1>
          <p className="mt-5 text-white/70 max-w-xl">
            Enterprise-grade cybersecurity and world-class software development for organizations that can't afford to fail.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onConsultClick}
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-600/30"
            >
              <Rocket className="size-4" />
              Start a Project
            </button>
            <a href="#services" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-white/15 hover:bg-white/5">
              Explore Services <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Pill><CheckCircle2 className="size-4" /> ISO 27001</Pill>
            <Pill><Lock className="size-4" /> SOC 2</Pill>
            <Pill><Globe2 className="size-4" /> GDPR</Pill>
          </div>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-2 backdrop-blur-xl">
            <div className="rounded-2xl bg-[#0B1020] p-6 grid gap-4">
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-cyan-400" />
                    <div className="font-medium">24/7 SOC</div>
                  </div>
                  <p className="mt-2 text-sm text-white/70">Real-time monitoring & response.</p>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <ServerCog className="text-cyan-400" />
                    <div className="font-medium">DevSecOps</div>
                  </div>
                  <p className="mt-2 text-sm text-white/70">Security baked into CI/CD.</p>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <Cpu className="text-cyan-400" />
                    <div className="font-medium">AI Solutions</div>
                  </div>
                  <p className="mt-2 text-sm text-white/70">ML-driven defense & insights.</p>
                </Card>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Stat value="99.99%" label="Cloud Uptime" />
                <Stat value="< 15 min" label="Avg. IR Response" />
                <Stat value="85%↓" label="Risk Reduction" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}