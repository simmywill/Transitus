import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ServerCog,
  Cpu,
  Lock,
  Cloud,
  Code,
  Rocket,
  LineChart,
  Building2,
  Phone,
  Mail,
  MapPin,
  UsersRound,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
  Quote,
  Globe2,
  BookOpen,
  Inbox,
  CalendarClock,
} from "lucide-react";

// ---- Helper UI ----
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section = ({ id, title, eyebrow, children, className = "" }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <Container>
      {(title || eyebrow) && (
        <div className="mb-10 md:mb-14">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wider uppercase text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="mt-4 text-2xl md:text-4xl font-semibold tracking-tight text-white">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </Container>
  </section>
);

const Stat = ({ value, label }) => (
  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 text-center">
    <div className="text-3xl md:text-4xl font-semibold text-white">{value}</div>
    <div className="mt-2 text-sm text-white/70">{label}</div>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl bg-white/5 border border-white/10 shadow-2xl shadow-black/40 ${className}`}>{children}</div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/80">{children}</span>
);

// ---- Forms (mock logic only) ----
const Input = ({ label, type = "text", placeholder, required, ...props }) => (
  <label className="block">
    <span className="text-sm text-white/80">{label}{required && <span className="text-cyan-400"> *</span>}</span>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
      {...props}
    />
  </label>
);

const Select = ({ label, children, required, ...props }) => (
  <label className="block">
    <span className="text-sm text-white/80">{label}{required && <span className="text-cyan-400"> *</span>}</span>
    <select
      className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
      {...props}
    >
      {children}
    </select>
  </label>
);

const TextArea = ({ label, rows = 4, ...props }) => (
  <label className="block">
    <span className="text-sm text-white/80">{label}</span>
    <textarea
      rows={rows}
      className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
      {...props}
    />
  </label>
);

const Checkbox = ({ label, ...props }) => (
  <label className="flex items-center gap-3 text-white/90">
    <input type="checkbox" className="size-4 rounded border-white/20 bg-white/5" {...props} />
    <span className="text-sm">{label}</span>
  </label>
);

// ---- Main Page ----
export default function LandingPage() {
  const [consultOpen, setConsultOpen] = useState(false);
  const [servicesTab, setServicesTab] = useState("cyber");

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B1020] via-[#0A0F1A] to-[#070B14] text-white">
      {/* Glow background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-[#0B1020]/70 border-b border-white/10">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center shadow-lg shadow-cyan-500/30">
              <ShieldCheck className="size-5" />
            </div>
            <span className="font-semibold tracking-wide">Transitus Security & Build</span>
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
              onClick={() => setConsultOpen(true)}
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

      {/* Hero */}
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
              Enterprise-grade cybersecurity and world-class software development for organizations that can’t afford to fail.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setConsultOpen(true)}
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

      {/* Services */}
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

        {/* Cybersecurity */}
        {servicesTab === "cyber" && (
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck />, title: "Managed Security (SOCaaS)", desc: "24/7 monitoring, SIEM, EDR, threat intel." },
              { icon: <Lock />, title: "Penetration Testing", desc: "Network, web/app, cloud, IoT, red team." },
              { icon: <ServerCog />, title: "Incident Response & Threat Hunting", desc: "On-call IR, forensics, containment." },
              { icon: <FileCheck2 />, title: "GRC & Compliance", desc: "ISO, NIST, SOC 2, HIPAA, GDPR." },
              { icon: <Cloud />, title: "Cloud Security Architecture", desc: "AWS, Azure, GCP, zero trust." },
              { icon: <UsersRound />, title: "Security Awareness Training", desc: "Social engineering & phishing drills." },
            ].map((s, i) => (
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
        )}

        {/* Software */}
        {servicesTab === "software" && (
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Code />, title: "Enterprise Engineering", desc: "Mission-critical systems & integrations." },
              { icon: <Rocket />, title: "SaaS Product Development", desc: "From MVP to multi-tenant scale." },
              { icon: <ServerCog />, title: "DevSecOps", desc: "Shift-left security, CI/CD hardening." },
              { icon: <Cpu />, title: "AI/ML & Analytics", desc: "RAG, predictive models, BI pipelines." },
              { icon: <Cloud />, title: "Cloud-Native & Migrations", desc: "Kubernetes, microservices, IaC." },
              { icon: <LineChart />, title: "Data Platforms", desc: "Real-time streams, lakes & warehouses." },
            ].map((s, i) => (
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
        )}

        {/* Advisory */}
        {servicesTab === "advisory" && (
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck />, title: "CISO-as-a-Service", desc: "Strategic security leadership on demand." },
              { icon: <Building2 />, title: "IT & Cloud Audits", desc: "Architecture reviews & hardening plans." },
              { icon: <FileCheck2 />, title: "Compliance Roadmaps", desc: "ISO 27001, SOC 2, HIPAA, GDPR." },
            ].map((s, i) => (
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
        )}
      </Section>

      {/* About */}
      <Section id="about" eyebrow="Who We Are" title="Security-first innovation, delivered by veterans.">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-medium">Mission & Vision</h3>
            <p className="mt-3 text-white/70">
              Our mission is to secure and accelerate organizations with uncompromising engineering. We architect, build, and defend systems that power the world’s most demanding teams.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <Stat value="15+" label="Years Operating" />
              <Stat value="25" label="Countries Served" />
              <Stat value="98%" label="Client Retention" />
            </div>
          </Card>
          <Card className="p-8">
            <h3 className="text-xl font-medium">Leadership</h3>
            <p className="mt-3 text-white/70">Industry veterans from Fortune 500, defense, and hypergrowth startups. Hands-on, accountable, and delivery-obsessed.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Pill>ISO 27001 Lead Implementers</Pill>
              <Pill>OSCP / OSCE</Pill>
              <Pill>AWSSAP / CKA</Pill>
              <Pill>PCI DSS Practitioners</Pill>
            </div>
          </Card>
        </div>
      </Section>

      {/* Case Studies */}
      <Section id="case-studies" eyebrow="Proof" title="Outcomes that speak for themselves.">
        <div className="grid md:grid-cols-3 gap-6">
          {["Global Fintech", "Healthcare Network", "Logistics Unicorn"].map((name, i) => (
            <Card key={i} className="p-6 hover:bg-white/10">
              <div className="text-sm text-white/60">{name}</div>
              <h4 className="mt-1 text-lg font-medium">End-to-end security revamp</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/80 list-disc pl-5">
                <li>85% reduction in ransomware risk</li>
                <li>MTTR cut from 6h to 34m</li>
                <li>SOC 2 achieved in 90 days</li>
              </ul>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">Read case study <ArrowRight className="size-4" /></a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Insights */}
      <Section id="insights" eyebrow="Insights" title="Thought leadership & research">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Zero Trust beyond the perimeter", k: "Strategy" },
            { t: "RAG for enterprise security analytics", k: "AI/ML" },
            { t: "DevSecOps in regulated industries", k: "DevSecOps" },
          ].map((b, i) => (
            <Card key={i} className="p-6 hover:bg-white/10">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <BookOpen className="size-4" /> {b.k}
              </div>
              <h4 className="mt-2 text-lg font-medium">{b.t}</h4>
              <p className="mt-2 text-sm text-white/70">Executive-grade breakdown with actionable steps, templates, and checklists.</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">Read article <ArrowRight className="size-4" /></a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Careers */}
      <Section id="careers" eyebrow="We’re Hiring" title="Build what matters. Secure what matters more.">
        <Card className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-medium">Open Roles</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/80 list-disc pl-5">
                <li>Senior Security Engineer (SOC)</li>
                <li>Penetration Tester (Red Team)</li>
                <li>DevSecOps Engineer</li>
                <li>Principal Software Architect</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium">Why Join</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/80 list-disc pl-5">
                <li>Impactful global clients</li>
                <li>Education & certification budget</li>
                <li>Remote-first, async culture</li>
                <li>Ownership & autonomy</li>
              </ul>
            </div>
            <form className="grid gap-3">
              <h4 className="text-lg font-medium">Quick Apply</h4>
              <Input label="Full Name" required />
              <Input type="email" label="Email" required />
              <Input label="Phone" />
              <Input type="url" label="Portfolio / GitHub" placeholder="https://" />
              <TextArea label="Short Cover Note" rows={3} placeholder="Tell us why you’re a fit…" />
              <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600">Submit</button>
            </form>
          </div>
        </Card>
      </Section>

      {/* Contact / Get Started */}
      <Section id="contact" eyebrow="Get Started" title="Tell us what you need. We’ll make it happen.">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <Card className="p-8 md:col-span-1">
            <h4 className="text-lg font-medium">Talk to a human</h4>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-3"><Phone className="size-4" /> +1 (800) 555‑0199</div>
              <div className="flex items-center gap-3"><Mail className="size-4" /> hello@transitus-sec.com</div>
              <div className="flex items-center gap-3"><MapPin className="size-4" /> NYC • London • Port of Spain</div>
            </div>
            <div className="mt-6 border-t border-white/10 pt-6">
              <h5 className="text-sm text-white/70">Trusted by</h5>
              <div className="mt-3 grid grid-cols-3 gap-3 opacity-80">
                {["ALPHA", "NOVA", "HELIOS"].map((c) => (
                  <div key={c} className="rounded-xl border border-white/10 bg-white/5 py-3 text-center text-xs">{c}</div>
                ))}
              </div>
            </div>
          </Card>

          {/* Form */}
          <Card className="p-8 md:col-span-2">
            <form className="grid md:grid-cols-2 gap-4">
              <Input label="Full Name" required />
              <Input type="email" label="Business Email" required />
              <Input label="Company" />
              <Input label="Job Title / Role" />
              <Input label="Phone" />
              <Select label="Urgency" defaultValue="1">
                <option value="1">Immediate</option>
                <option value="2">1–3 months</option>
                <option value="3">6+ months</option>
              </Select>
              <Select label="Project Budget Range" defaultValue="2">
                <option value="1">Under $50k</option>
                <option value="2">$50k–$250k</option>
                <option value="3">$250k+</option>
              </Select>
              <div className="md:col-span-2">
                <span className="text-sm text-white/80">Services Interested In</span>
                <div className="mt-2 grid md:grid-cols-3 gap-3 rounded-xl border border-white/10 p-4">
                  <Checkbox label="Managed Security (SOCaaS)" />
                  <Checkbox label="Penetration Testing" />
                  <Checkbox label="Incident Response" />
                  <Checkbox label="GRC / Compliance" />
                  <Checkbox label="Cloud Security Architecture" />
                  <Checkbox label="Security Training" />
                  <Checkbox label="Enterprise Software" />
                  <Checkbox label="SaaS Product" />
                  <Checkbox label="DevSecOps" />
                  <Checkbox label="AI/ML & Analytics" />
                  <Checkbox label="Cloud-Native & Migrations" />
                  <Checkbox label="Data Platforms" />
                  <Checkbox label="CISO-as-a-Service" />
                  <Checkbox label="IT & Cloud Audits" />
                  <Checkbox label="Compliance Roadmaps" />
                </div>
              </div>

              {/* Service-specific prompts */}
              <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
                <Select label="Industry" defaultValue="tech">
                  <option value="tech">Technology</option>
                  <option value="fin">Finance</option>
                  <option value="hc">Healthcare</option>
                  <option value="gov">Public Sector</option>
                  <option value="manu">Manufacturing</option>
                </Select>
                <Select label="Compliance Needs">
                  <option>ISO 27001</option>
                  <option>SOC 2</option>
                  <option>HIPAA</option>
                  <option>GDPR</option>
                  <option>PCI DSS</option>
                </Select>
                <Select label="Solution Type (Software)" defaultValue="web">
                  <option value="web">Web App</option>
                  <option value="mobile">Mobile App</option>
                  <option value="saas">SaaS</option>
                  <option value="migration">Cloud Migration</option>
                  <option value="ai">AI/ML</option>
                </Select>
                <Select label="Users / Scale">
                  <option>Team (≤100)</option>
                  <option>Enterprise (≤10k)</option>
                  <option>Global (10k+)</option>
                </Select>
              </div>

              <TextArea label="Project Details" rows={5} placeholder="What problem are we solving? Current stack? Key outcomes? Timelines?" />
              <TextArea label="Existing Infrastructure" rows={5} placeholder="Cloud provider(s), security tools, repos, environments…" />

              <div className="md:col-span-2 flex items-center justify-between">
                <div className="text-xs text-white/60">By submitting, you agree to our privacy policy.</div>
                <button className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500">Submit Request</button>
              </div>
            </form>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <Container className="py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center">
                <ShieldCheck className="size-4" />
              </div>
              <span className="font-semibold">Transitus</span>
            </div>
            <p className="mt-3 text-white/60 max-w-xs">We secure and build mission-critical systems for the world’s most demanding teams.</p>
          </div>
          <div>
            <div className="text-white/70 mb-2">Company</div>
            <ul className="space-y-2 text-white/60">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#careers" className="hover:text-white">Careers</a></li>
              <li><a href="#insights" className="hover:text-white">Insights</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white/70 mb-2">Services</div>
            <ul className="space-y-2 text-white/60">
              <li>Managed Security</li>
              <li>Penetration Testing</li>
              <li>DevSecOps</li>
              <li>Enterprise Engineering</li>
            </ul>
          </div>
          <div>
            <div className="text-white/70 mb-2">Contact</div>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center gap-2"><Phone className="size-4" /> +1 (800) 555‑0199</li>
              <li className="flex items-center gap-2"><Mail className="size-4" /> hello@transitus-sec.com</li>
              <li className="flex items-center gap-2"><MapPin className="size-4" /> NYC • London • Port of Spain</li>
            </ul>
          </div>
        </Container>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Transitus Security & Build. All rights reserved.</div>
      </footer>

      {/* Floating CTA */}
      <button
        onClick={() => setConsultOpen(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-600/30"
      >
        Schedule a Call
      </button>

      {/* Consultation Modal */}
      {consultOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/60 backdrop-blur">
          <Card className="w-full max-w-2xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium">Request a Consultation</h3>
              <button onClick={() => setConsultOpen(false)} className="text-white/60 hover:text-white">Close</button>
            </div>
            <form className="mt-4 grid md:grid-cols-2 gap-4">
              <Input label="Full Name" required />
              <Input type="email" label="Business Email" required />
              <Input label="Company" />
              <Input label="Role" />
              <Input label="Phone" />
              <Select label="Primary Interest" defaultValue="cyber">
                <option value="cyber">Cybersecurity</option>
                <option value="software">Software Development</option>
                <option value="advisory">Advisory</option>
              </Select>
              <Select label="Budget" defaultValue="2">
                <option value="1">Under $50k</option>
                <option value="2">$50k–$250k</option>
                <option value="3">$250k+</option>
              </Select>
              <div className="md:col-span-2">
                <span className="text-sm text-white/80">Services</span>
                <div className="mt-2 grid md:grid-cols-3 gap-3 rounded-xl border border-white/10 p-4">
                  <Checkbox label="SOCaaS" />
                  <Checkbox label="Pen Test" />
                  <Checkbox label="Incident Response" />
                  <Checkbox label="GRC" />
                  <Checkbox label="Cloud Security" />
                  <Checkbox label="Training" />
                  <Checkbox label="Enterprise Eng." />
                  <Checkbox label="SaaS Build" />
                  <Checkbox label="DevSecOps" />
                </div>
              </div>
              <TextArea label="Project Details / Objectives" rows={5} className="md:col-span-2" />
              <div className="md:col-span-2 flex items-center justify-between">
                <div className="text-xs text-white/60">We’ll reply within one business day.</div>
                <button className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500">
                  Send Request
                </button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </main>
  );
}
