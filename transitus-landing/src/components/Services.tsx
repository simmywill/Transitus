"use client";

import { useState } from "react";
import { ShieldCheck, ServerCog, Cpu, Lock, Cloud, Code, Rocket, LineChart, Building2, UsersRound, FileCheck2 } from "lucide-react";
import { Section, Card } from "./ui";

export default function Services() {
  const [servicesTab, setServicesTab] = useState("cyber");

  const cyberServices = [
    { icon: <ShieldCheck />, title: "Managed Security (SOCaaS)", desc: "24/7 monitoring, SIEM, EDR, threat intel." },
    { icon: <Lock />, title: "Penetration Testing", desc: "Network, web/app, cloud, IoT, red team." },
    { icon: <ServerCog />, title: "Incident Response & Threat Hunting", desc: "On-call IR, forensics, containment." },
    { icon: <FileCheck2 />, title: "GRC & Compliance", desc: "ISO, NIST, SOC 2, HIPAA, GDPR." },
    { icon: <Cloud />, title: "Cloud Security Architecture", desc: "AWS, Azure, GCP, zero trust." },
    { icon: <UsersRound />, title: "Security Awareness Training", desc: "Social engineering & phishing drills." },
  ];

  const softwareServices = [
    { icon: <Code />, title: "Enterprise Engineering", desc: "Mission-critical systems & integrations." },
    { icon: <Rocket />, title: "SaaS Product Development", desc: "From MVP to multi-tenant scale." },
    { icon: <ServerCog />, title: "DevSecOps", desc: "Shift-left security, CI/CD hardening." },
    { icon: <Cpu />, title: "AI/ML & Analytics", desc: "RAG, predictive models, BI pipelines." },
    { icon: <Cloud />, title: "Cloud-Native & Migrations", desc: "Kubernetes, microservices, IaC." },
    { icon: <LineChart />, title: "Data Platforms", desc: "Real-time streams, lakes & warehouses." },
  ];

  const advisoryServices = [
    { icon: <ShieldCheck />, title: "CISO-as-a-Service", desc: "Strategic security leadership on demand." },
    { icon: <Building2 />, title: "IT & Cloud Audits", desc: "Architecture reviews & hardening plans." },
    { icon: <FileCheck2 />, title: "Compliance Roadmaps", desc: "ISO 27001, SOC 2, HIPAA, GDPR." },
  ];

  const getCurrentServices = () => {
    switch (servicesTab) {
      case "software":
        return softwareServices;
      case "advisory":
        return advisoryServices;
      default:
        return cyberServices;
    }
  };

  return (
    <Section id="services" eyebrow="What We Do" title="Cybersecurity & Software — end-to-end, security-first.">
      <div className="mb-8 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 w-full md:w-fit">
        {[
          { key: "cyber", label: "Cybersecurity" },
          { key: "software", label: "Software Development" },
          { key: "advisory", label: "Advisory" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setServicesTab(t.key)}
            className={`px-4 py-2 rounded-xl text-sm transition ${
              servicesTab === t.key
                ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                : "hover:bg-white/10"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {getCurrentServices().map((s, i) => (
          <Card key={i} className="p-6 hover:bg-white/10">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">{s.icon}</div>
              <div>
                <div className="font-medium">{s.title}</div>
                <p className="text-sm text-white/70 mt-1">{s.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}